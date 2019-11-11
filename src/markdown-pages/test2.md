---
path: "/blog/test2"
date: "2019-05-04"
title: "Markdown test"
---

Currently five cell types are supported:

1. A "Text Cell" lets you edit rich-text in-place. It supports images and links too.
2. A "Code Cell" packs the awesome ACE code editor, with syntax highlighting support for 120+ languages, 20+ themes, automatic indent and outdent, code completion, and much more.
3. A "Markdown Cell" lets you write in Markdown with inline formatting and custom CSS options.
4. A "LaTeX Cell” uses MathJax to typeset mathematical equations in your notes.
5. A “Diagram Cell” lets you create sequence diagrams and flowcharts from text.

### Text Cell

This is a **text cell** with *some* simple* formatting*.

This is *an example* of a text cell with complex styles applied.

You can change text formatting using the toolbar at the top, or with keyboard shortcuts. Look under the “Format” menu for all the formatting options and keyboard shortcuts.

### Code Cell

```js
// This is a code cell set to the JavaScript mode

function hello() {
    console.log("Hello World!");
}
```

```coffee
# And this is a code cell set to the CoffeeScript mode

hello = -> console.log 'Hello World!'
```

Code cells support syntax highlighting for 120+ languages, 20+ themes, automatic indent and outdent, code folding, multiple cursors and selections, code completion, tab triggers, Vim/Emacs keybinding, etc. You can read more about the awesome Ace editor on its website (<http://ace.c9.io/>).

### Markdown Cell

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
[01 - Getting Started](quiver:///notes/D2A1CC36-CC97-4701-A895-EFC98EF47026)

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

### Inline LaTeX

You can use inline LaTeX inside Markdown cells as well, for example, $x^2$.

### LaTeX Cell

LaTeX cells make it easy to typeset math equations. For example,

```latex
\begin{align}
  \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
  \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
  \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
  \nabla \cdot \vec{\mathbf{B}} & = 0
\end{align}
```

```tex
\begin{align}
  \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
  \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
  \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
  \nabla \cdot \vec{\mathbf{B}} & = 0
\end{align}
```

```context
\begin{align}
  \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
  \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
  \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
  \nabla \cdot \vec{\mathbf{B}} & = 0
\end{align}
```

Open the preview to see how it's rendered.

Inline LaTeX is also supported, for example, $x^2$.

You can also add custom macros in Preferences, and they will be available in all LaTeX cells.

### Diagram Cell

Diagram cells let you create sequence diagrams and flowcharts from text.

Please check the syntax here:

* Sequence diagram: <http://bramp.github.io/js-sequence-diagrams/>
* Flowchart: <http://flowchart.js.org/>

Open the preview to see how the following examples are rendered.

Sequence diagram example:

```sequence
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```

```sequence
Title: App 架构
调用网络API->展现列表: 展现列表
展现列表->选择列表: 选择列表
选择列表 ->展现单页:
```

Flowchart example:

```flow
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
