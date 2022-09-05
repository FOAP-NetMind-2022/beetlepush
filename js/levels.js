var levels = [
  {
    helpTitle: "Add an element at the end of the array, ",
    selectorName: "Push method",
    doThis: "Insert the 'ladybug' at the end of the array",
    selector: "ladybug",
    syntax: "push();",
    //add link in the help page
    help: "Definition and Usage The push() method adds new items to the end of an array. It changes the length of the original array. <a href= 'https://www.w3schools.com/jsref/jsref_push.asp' target='_blank'> more help </a>",
    examples: [
      '<strong>1</strong>const fruits = ["Banana", "Orange", "Apple"]; <br> <strong>2</strong> fruits.push("Kiwi"); <br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong><br>  <div class="console-wrapper"> ["Banana", "Orange", "Apple", "Kiwi"] </div>',
    ],
    myGrass : ['ladybug','ladybug','ladybug','ladybug'],
    myGrassSolution : ['ladybug','ladybug','ladybug','ladybug','ladybug'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <grass>
     <ladybug>
    </grass>
    <grass>
     <ladybug>
    </grass>
    <grass>
     <ladybug>
    </grass>
    <grass>
     <ladybug>
    </grass>
    `,
    boardMarkupSolution: ` 
    <grass>
     <ladybug>
    </grass>
    <grass>
      <ladybug>
    </grass> 
    <grass>
      <ladybug>
    </grass>
    <grass>
      <ladybug>
    </grass>
    <grass>
      <ladybug>
    </grass>
  `
  },
  // restaurant.js
  // eval(level.boardMarkup)
  // grass.forEach() // Crear tanto elementos dentro del .grid como elementos en el array. Y sabeis que "bicho" hay que pintar porque es justamente el elemento del array 
  // let elemento = document.createElement(...) // contenedorGrid.appendChild(elemento)


  {
    helpTitle: "Remove the last of element in the array, ",
    selectorName: "Pop method",
    doThis: "Remove the bee in the end",
    selector: "bee",
    syntax: "pop();",
    help: " The pop() method removes (pops) the last element of an array, changing the length of the original array. <a href= 'https://www.w3schools.com/jsref/jsref_pop.asp' target='_blank'> more help </a>",
    examples: [
      '<strong>1</strong> const fruits = ["Banana", "Orange", "Apple"]; <br><strong>2</strong> fruits.pop();<br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Banana", "Orange"]</div>',
    ],
    myGrass : ['worm','worm','bee' ],
    myGrassSolution : ['worm','worm'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <grass>
    <worm>
   </grass>
   <grass>
    <worm>
   </grass>
   <grass>
    <bee>
   </grass>
    `
  } 
];
