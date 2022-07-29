var levels = [
  {
    helpTitle: "Select elements by their type",
    selectorName: "Type Selector",
    doThis: "Select the orange",
    selector: "orange",
    syntax: "A",
    help: "Agrega la naranja al final del array.",
    examples: [
      'table.push("orange");',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <orange/>
    <plate/>
    <plate>     
    </plate>
    `

  },
  {
    doThis: "Select the bento boxes",
    selector: "bento",
    syntax: "A",
    helpTitle: "Select elements by their type",
    selectorName: "Type Selector",
    help: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <bento id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis: "Select the fancy plate",
    selector: "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Select elements with an ID",
    syntax: "#id",
    help: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>'
    ],
    boardMarkup: `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  }
];
