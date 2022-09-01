var levels = [

  /***  ******************
 * 
 * LEVEL 1 
 * 
 * *********************/ 

  {
    helpTitle: "Add an element at the end of the array, ",
    selectorName: "Push method",
    doThis: "Insert the 'ladybug' at the end of the array",
    selector: "ladybug",
    syntax: "push();",
    //add link in the help page
    help: "Definition and Usage The push() method adds new items to the end of an array. It changes the length of the original array. <a href= 'https://www.w3schools.com/jsref/jsref_push.asp'> more help </a>",
    examples: [
      '<strong>1</strong>const fruits = ["Banana", "Orange", "Apple"]; <br> <strong>2</strong> fruits.push("Kiwi"); <br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong><br>  <div class="console-wrapper"> ["Banana", "Orange", "Apple", "Kiwi"] </div>',
    ],
    myGrass : ['ladybug','ladybug','ladybug','ladybug'],
    myGrassSolution : ['ladybug','ladybug','ladybug','ladybug','ladybug'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    
    <bracket>
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
    </bracket>
    <grass>
     <ladybug>
    </grass>
    `,
    boardMarkupSolution: ` 
    <bracket>
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
    </bracket>
  `
  },
  // restaurant.js
  // eval(level.boardMarkup)
  // grass.forEach() // Crear tanto elementos dentro del .grid como elementos en el array. Y sabeis que "bicho" hay que pintar porque es justamente el elemento del array 
  // let elemento = document.createElement(...) // contenedorGrid.appendChild(elemento)

  /***  ******************
 * 
 * LEVEL 2 
 * 
 * *********************/ 



  {
    helpTitle: "Remove the last of element in the array, ",
    selectorName: "Pop method",
    doThis: "Remove the bee in the end",
    selector: "bee",
    syntax: "pop();",
    help: ' DThe pop() method removes (pops) the last element of an array, changing the length of the original array. <a href= "https://www.w3schools.com/jsref/jsref_pop.asp"> more help </a>',
    examples: [
      '<strong>1</strong> const fruits = ["Banana", "Orange", "Apple"]; <br><strong>2</strong> fruits.pop();<br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Banana", "Orange"]</div>',
    ],
    myGrass : ['worm','worm','bee' ],
    myGrassSolution : ['worm','worm'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
    <worm>
   </grass>
   <grass>
    <worm>
   </grass>
   <grass>
    <bee>
   </grass> 
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <worm>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
    `
  },

  /***  ******************
 * 
 * LEVEL 3 
 * 
 * *********************/ 


  {
    helpTitle: "Remove the first element in the array ",
    selectorName: "Shift method",
    doThis: "Remove the worm at the beginning",
    selector: "worm",
    syntax: "shift();",
    help: ' The shift() method removes the first array element. <a href= "https://www.w3schools.com/jsref/jsref_shift.asp"> more help </a>',
    examples: [
      '<strong>1</strong> const colors = ["Red", "Orange", "Black", "Yellow"]; <br><strong>2</strong> colors.shift();<br> <strong>3</strong> console.log(colors);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Orange", "Black", "Yellow"]</div>',
    ],
    myGrass : ['worm','butterfly','butterfly','butterfly','butterfly'],
    myGrassSolution : ['butterfly','butterfly','butterfly','butterfly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
    <worm>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <butterfly>
   </grass>
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <butterfly>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <butterfly>
   </grass>
   </bracket>
    `
  },

  /***  ******************
 * 
 * LEVEL 4 
 * 
 * *********************/ 

  {
    helpTitle: "Add element at the beginning of an array ",
    selectorName: "Unshift method",
    doThis: "Add the queen Ant at the beginning of the array",
    selector: "antQueen",
    syntax: "unshift();",
    help: ' The unshift() method adds a new element at the beginning of an array . <a href= "https://www.w3schools.com/jsref/jsref_unshift.asp"> more help </a>',
    examples: [
      '<strong>1</strong> const names = ["Maria", "Jesus", "Frank"]; <br><strong>2</strong> names.unshift("Laura");<br> <strong>3</strong> console.log(names);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Laura","Maria", "Jesus", "Frank"]</div>',
    ],
    myGrass : ['ant','ant','ant','ant'],
    myGrassSolution : ['antQueen','ant','ant','ant','ant'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <grass>
    <antQueen>
   </grass>
    <bracket>
   <grass>
    <ant>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <ant>
   </grass>
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <antQueen>
   </grass>
    <grass>
    <ant>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <ant>
   </grass>
   </bracket>
    `
  },

  /***  ******************
 * 
 * LEVEL 5 
 * 
 * *********************/ 


  {
    helpTitle: "Creates a new array from selected elements",
    selectorName: "Slice method",
    doThis: "Create a new array only with winged bugs",
    selector: "bee, butterfly, dragonFly",
    syntax: "slice();",
    help: ' The slice() method creates a new array from selected elements, does not change the original array.This method selects has two parameters "start" and "end" (not inclusive).<a href= "https://www.w3schools.com/jsref/jsref_slice_array.asp"> more help </a>',
    examples: [
      '<strong>1</strong> const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; <br><strong>2</strong> const citrus = fruits.slice(1,3);<br> <strong>3</strong> console.log(citrus);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Orange", "Lemon"]</div>',
    ],
    myGrass : ['worm','butterfly','bee','dragonFly','worm'],
    myGrassSolution : ['butterfly','bee','dragonFly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
   <grass>
    <worm>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <bee>
   </grass>
   <grass>
    <dragonFly>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <butterfly>
   </grass>
   <grass>
    <bee>
   </grass>
   <grass>
    <dragonFly>
   </grass>
   </bracket>
    `
  },


  /***  ******************
 * 
 * LEVEL 6 
 * 
 * *********************/ 

  {
    helpTitle: "Modifies the content of an array, adding new elements and / or removing old elements",
    selectorName: "Splice method",
    doThis: "Replace the repeated bugs with the new ones",
    selector: "dragonFly, antQueen, .dance",
    syntax: "splice();",
    help: ' The splice() method adds/removes items to/from an array, and returns the removed item(s). <a href= "https://www.w3schools.com/jsref/jsref_splice.asp"> more help </a>',
    examples: [
      '<strong>1</strong> const office = ["pencil", "pen", "orange", "salad", "notebook", "marker"]; <br><strong>2</strong> office.splice(2,2, "folder", "scissors");<br> <strong>3</strong> console.log(office);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["pencil", "pen", "folder", "scissors", "notebook", "marker"]</div>',
    ],
    myGrass : ['bee','ant','ant','worm','butterfly','worm'],
    myGrassSolution : ['bee','ant','dragonFly','antQueen','butterfly','worm'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
   <grass>
    <bee>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <ant class= "dance">
   </grass>
   <grass>
    <worm class= "dance">
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
   <grass>
   <dragonFly>
    </grass>
    <grass>
    <antQueen>
    </grass>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
   <grass>
    <bee>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <dragonFly>
   </grass>
   <grass>
    <antQueen>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
    `
  },

  /***  ******************
 * 
 * LEVEL 7 
 * 
 * *********************/ 

  {
    helpTitle: "Reverse the order of the elements in an array",
    selectorName: "Reverse method",
    doThis: "Reverse the elements of the array to restore the natural order",
    selector: "dragonFly, antQueen",
    syntax: "reverse();",
    help: ' The reverse() method reverses the order of the elements in an array.This method overwrites the original array. <a href= "https://www.w3schools.com/jsref/jsref_reverse.asp"> more help </a>',
    examples: [
      //example with reverse method using cars array
      '<strong>1</strong> const cars = ["BMW", "Volvo", "Saab", "Ford"]; <br><strong>2</strong> cars.reverse();<br> <strong>3</strong> console.log(cars);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Ford", "Saab", "Volvo", "BMW"]</div>',
    ],
    myGrass : ['butterfly','worm','worm'],
    myGrassSolution : ['worm','worm','butterfly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <worm>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <worm>
    </grass>
    <grass>
    <worm>
    </grass>
    <grass>
    <butterfly>
    </grass>
    </bracket>
    `
  },
/***  ******************
 * 
 * LEVEL 8 
 * 
 * *********************/ 


  {
    helpTitle: "Reverse the order of the elements in an array",
    selectorName: "Reverse method",
    doThis: "Reverse the elements of the array to restore the natural order",
    selector: "dragonFly, antQueen",
    syntax: "reverse();",
    help: ' The reverse() method reverses the order of the elements in an array.This method overwrites the original array. <a href= "https://www.w3schools.com/jsref/jsref_reverse.asp"> more help </a>',
    examples: [
      //example with reverse method using cars array
      '<strong>1</strong> const cars = ["BMW", "Volvo", "Saab", "Ford"]; <br><strong>2</strong> cars.reverse();<br> <strong>3</strong> console.log(cars);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Ford", "Saab", "Volvo", "BMW"]</div>',
    ],
    myGrass : ['butterfly','worm','worm'],
    myGrassSolution : ['worm','worm','butterfly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <worm>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <worm>
    </grass>
    <grass>
    <worm>
    </grass>
    <grass>
    <butterfly>
    </grass>
    </bracket>
    `
  }

];
