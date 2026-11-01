const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');

test('root entry has the app and the legacy URL redirects to it', () => {
  assert.match(html, /id="mcq-single-card"/);
  assert.match(fs.readFileSync('main index.html', 'utf8'), /url=\.\/index\.html/);
});

function render(question, options) {
  const container = { innerHTML: '' };
  const context = {
    document: { getElementById: () => container },
    MCQS_DATA: [{ id: 'web_1', track: 'HTML', question, options, correct: 0 }],
    activeMcqCategory: 'HTML', currentMcqStepIdx: 0, answeredMcqs: {},
  };
  vm.createContext(context);
  const source = html.slice(html.indexOf('        function escapeHtml('), html.indexOf('        function checkSequentialAnswer('));
  vm.runInContext(source + '\nrenderSequentialMcqs();', context);
  return container.innerHTML;
}

test('HTML tags and C headers remain readable question and option text', () => {
  const result = render('What does <img> & <script> mean?', ['<stdio.h>', '<script>', 'a > b', '"quoted"']);
  for (const text of ['&lt;img&gt; &amp; &lt;script&gt;', '&lt;stdio.h&gt;', '&lt;script&gt;', 'a &gt; b', '&quot;quoted&quot;']) {
    assert.ok(result.includes(text), text);
  }
  assert.ok(!result.includes('<script>'));
  assert.ok(!result.includes('<stdio.h>'));
  assert.match(result, /checkSequentialAnswer\('web_1',0\)/);
});

test('markup in question content cannot create active elements', () => {
  const payload = '<img src=x onerror="alert(1)">';
  const result = render(payload, [payload]);
  assert.ok(!result.includes('<img'));
  assert.equal(result.split('&lt;img').length - 1, 2);
});
