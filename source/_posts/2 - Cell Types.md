---
layout: post
title: 2 - Cell Types
date: 2017-6-22 00:07
updated: 2017-6-22 00:07
comments: true
tags:
	- 未分类
---

Currently five cell types are supported:<br><div><ol><li>A \"Text Cell\" lets you edit rich-text in-place. It supports images and links too.</li><li>A \"Code Cell\" packs the awesome ACE code editor, with syntax highlighting support for 120+ languages, 20+ themes, automatic indent and outdent, code completion, and much more.</li><li>A \"Markdown Cell\" lets you write in Markdown with inline formatting and custom CSS options.</li><li>A \"LaTeX Cell” uses MathJax to typeset mathematical equations in your notes.</li><li>A “Diagram Cell” lets you create sequence diagrams and flowcharts from text.</li><li>666.</li></ol></div>
<h3>Text Cell</h3>
This is a <b>text cell</b> with <i>some</i>&nbsp;<span style=\"background-color: rgb(254, 250, 0);\">simple</span><i>&nbsp;<u>formatting</u></i>.<div><div></div></div>
<div style=\"text-align: center;\">This is <span style=\"font-size: 21px;\"><i>an example</i></span> of a <u><font face=\"Georgia\" style=\"font-size: 19px;\">text cell</font></u> with <font color=\"#c14dff\" style=\"\">complex styles</font> applied.</div>"
"<div><div>You can change text formatting using the toolbar at the top, or with keyboard shortcuts. Look under the “Format” menu for all the formatting options and keyboard shortcuts.</div><div></div></div>
<h3>Code Cell</h3>
```javascript
"// This is a code cell set to the JavaScript mode\n\nfunction hello() {\n    console.log(\"Hello World!\");\n}"
```
```coffee
"# And this is a code cell set to the CoffeeScript mode\n\nhello = -> console.log 'Hello World!'"
```
"<div>Code cells support syntax highlighting for 120+ languages, 20+ themes, automatic indent and outdent, code folding, multiple cursors and selections, code completion, tab triggers, Vim/Emacs keybinding, etc. You can read more about the awesome Ace editor on its website (<a href=\"http://ace.c9.io/\" style=\"line-height: 1.4;\">http://ace.c9.io/</a>)<span style=\"line-height: 1.4;\">.</span></div>"
<h3>Markdown Cell</h3>
Markdown cells support standard Markdown syntax as well as GitHub Flavored Markdown (GFM). Open the preview to see these rendered.\n\n### Basics\n\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\n---\n\n*italic*, **bold**, ~~Scratch this.~~\n\n`inline code`\n\n### Lists\n\n1. First ordered list item\n2. Another item\n  * Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n  1. Ordered sub-list\n4. And another item.\n\n### Quote\n\n> Peace cannot be kept by force; it can only be achieved by understanding.\n\n### Links\n\n[I'm an inline-style link](https://www.google.com)\nhttp://example.com\n\nYou can also create a link to another note: (Note menu -> Copy Note Link -> Paste)\n[01 - Getting Started](quiver-note-url/D2A1CC36-CC97-4701-A895-EFC98EF47026)\n\n### Tables\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\n### GFM Task Lists\n\n- [ ] a task list item\n- [ ] list syntax required\n- [ ] normal **formatting**, @mentions, #1234 refs\n- [ ] incomplete\n- [x] completed\n\n### Inline LaTeX\n\nYou can use inline LaTeX inside Markdown cells as well, for example, $x^2$.
"<h3>LaTeX Cell</h3>"
```latex
"LaTeX cells make it easy to typeset math equations. For example,\n\n\\begin{align}\n  \\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\\\\n  \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\\n  \\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\\n  \\nabla \\cdot \\vec{\\mathbf{B}} & = 0\n\\end{align}"
```
```latex
"Open the preview to see how it's rendered."
```
```latex
"Inline LaTeX is also supported, for example, $x^2$."
```
```latex
"You can also add custom macros in Preferences, and they will be available in all LaTeX cells."
```
"<h3>Diagram Cell</h3><div>Diagram cells let you create sequence diagrams and flowcharts from text.</div><div><br></div><div>Please check the syntax here:</div><div><ul><li>Sequence diagram:&nbsp;<a href=\"http://bramp.github.io/js-sequence-diagrams/\">http://bramp.github.io/js-sequence-diagrams/</a></li><li>Flowchart:&nbsp;<a href=\"http://flowchart.js.org/\">http://flowchart.js.org/</a></li></ul></div>"
"Open the preview to see how the following examples are rendered."
"Sequence diagram example:"
```sequence
"Title: Here is a title\nA->B: Normal line\nB-->C: Dashed line\nC->>D: Open arrow\nD-->>A: Dashed open arrow"
```
"Flowchart example:"
```flow
"Title: Here is a title\nst=>start: Start:>http://www.google.com[blank]\ne=>end:>http://www.google.com\nop1=>operation: My Operation\nsub1=>subroutine: My Subroutine\ncond=>condition: Yes\nor No?:>http://www.google.com\nio=>inputoutput: catch something...\n\nst->op1->cond\ncond(yes)->io->e\ncond(no)->sub1(right)->op1"
```


