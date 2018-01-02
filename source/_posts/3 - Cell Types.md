---
layout: post
title: 3 - Cell Types
date: 2014-09-25 04:05
updated: 2017-07-31 15:39
comments: true
toc: true
tags:
    - 未分类
---

Currently five cell types are supported:

1. sequence

```sequence
@found "You", ->
  @message "Think", ->
    @message "Write your idea", "JUMLY", ->
      @create "Diagram"
jumly.css "background-color":"#8CC84B"
```

行內公式 $\sin ^{ 2 }{ \theta +\cos ^{ 2 }{ \theta =1 }  }$ 行內公式
行內公式 $$\sin ^{ 2 }{ \theta +\cos ^{ 2 }{ \theta =1 }  }$$ 行內公式

$$\frac { dy }{ dx } =\frac { { e }^{ x } }{ 3{ y }^{ 2 } }$$

$$\lim _{ x\rightarrow \infty  }{ \sum _{ k=1 }^{ x }{ \frac { \sin { k } +\cos { k }  }{ k }  }  } $$

$$\lim \_{ x\rightarrow \infty  }{ \sum \_{ k=1 }^{ x }{ \frac { \sin { k } +\cos { k }  }{ k }  }  } $$

 1. A "Text Cell" lets you edit rich-text in-place. It supports images and links too.

 1. A "Code Cell" packs the awesome ACE code editor, with syntax highlighting support for 120+ 

 1. languages, 20+ themes, automatic indent and outdent, code completion, and much more.

 1. A "Markdown Cell" lets you write in Markdown with inline formatting and custom CSS options.

 1. A "LaTeX Cell” uses MathJax to typeset mathematical equations in your notes.

 1. A “Diagram Cell” lets you create sequence diagrams and flowcharts from text.
 
 1. a6666.


<h3>Text Cell</h3>


This is a <b>text cell</b> with <i>some</i>&nbsp;<span style="background-color: rgb(254, 250, 0);">simple</span><i>&nbsp;<u>formatting</u></i>.<div><div></div></div>


<div style="text-align: center;">This is <span style="font-size: 21px;"><i>an example</i></span> of a <u><font face="Georgia" style="font-size: 19px;">text cell</font></u> with <font color="#c14dff" style="">complex styles</font> applied.</div>


<div><div>You can change text formatting using the toolbar at the top, or with keyboard shortcuts. Look under the “Format” menu for all the formatting options and keyboard shortcuts.</div><div></div></div>


<h3>Code Cell</h3>


```javascript
// This is a code cell set to the JavaScript mode
// 2017-07-31 11:40
function hello() {
    console.log("Hello World!");
}
```


```coffee
# And this is a code cell set to the CoffeeScript mode

hello = -> console.log 'Hello World!'
```


<div>Code cells support syntax highlighting for 120+ languages, 20+ themes, automatic indent and outdent, code folding, multiple cursors and selections, code completion, tab triggers, Vim/Emacs keybinding, etc. You can read more about the awesome Ace editor on its website (<a href="http://ace.c9.io/" style="line-height: 1.4;">http://ace.c9.io/</a>)<span style="line-height: 1.4;">.</span></div>


<h3>Markdown Cell</h3>


Markdown cells support standard Markdown syntax as well as GitHub Flavored Markdown (GFM). Open the preview to see these rendered.

### Basics

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

*italic*, **bold**, ~~Scratch this.~~

`inline code`

### Lists

1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

### Quote

> Peace cannot be kept by force; it can only be achieved by understanding.

### Links

[I'm an inline-style link](https://www.google.com)
http://example.com

You can also create a link to another note: (Note menu -> Copy Note Link -> Paste)
[01 - Getting Started](quiver-note-url/D2A1CC36-CC97-4701-A895-EFC98EF47026)

### Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### GFM Task Lists

- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed


1. Unicode

&#9744; a task list item
&#9745; list syntax required
&#9746; normal **formatting**, @mentions, #1234 refs
&#9745; incomplete
&#9745; completed

### Inline LaTeX

You can use inline LaTeX inside Markdown cells as well, for example, $x^2$.


<h3>LaTeX Cell</h3>



LaTeX cells make it easy to typeset math equations. For example,

\begin{align}
  \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
  \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
  \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
  \nabla \cdot \vec{\mathbf{B}} & = 0
\end{align}




Open the preview to see how it's rendered.




Inline LaTeX is also supported, for example, $x^2$.



$$
You can also add custom macros in Preferences, and they will be available in all LaTeX cells.
$$


<h3>Diagram Cell</h3><div>Diagram cells let you create sequence diagrams and flowcharts from text.</div><div><br></div><div>Please check the syntax here:</div><div><ul><li>Sequence diagram:&nbsp;<a href="http://bramp.github.io/js-sequence-diagrams/">http://bramp.github.io/js-sequence-diagrams/</a></li><li>Flowchart:&nbsp;<a href="http://flowchart.js.org/">http://flowchart.js.org/</a></li></ul></div>


Open the preview to see how the following examples are rendered.


Sequence diagram example:


```sequence
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```


Flowchart example:


```flow
Title: Here is a title
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
```


