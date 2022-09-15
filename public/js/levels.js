var levels = [

  /***  ******************
 * 
 * LEVEL 1 
 * 
 * *********************/ 

  { 
    helpTitle: "Add an element at the end of the array, ",
    selectorName: "Push() method",
    doThis: "Insert the 'ladybug' at the end of the array",
    selector: "ladybug",
    syntax: "push();",
    //add link in the help page
    help: "Definition and Usage The push() method adds new items to the end of an array. It changes the length of the original array. ",
    examples: [
      '<strong>1</strong>const fruits = ["Banana", "Orange", "Apple"]; <br> <strong>2</strong> fruits.push("Kiwi"); <br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong><br>  <div class="console-wrapper"> ["Banana", "Orange", "Apple", "Kiwi"] </div>',
    ],
    myMethod: "push",
    myElements: ["ladybug"],
    mySolution: "myGrass.push('ladybug');",
    myGrass : ['ladybug','ladybug','ladybug','ladybug'],
    myGrassSolution :['ladybug','ladybug','ladybug','ladybug','ladybug'],
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
  `,
  instructions: "<div>To pass this level you need to use <strong>push()</strong> <i>method</i> to add a new <strong>'ladybug'</strong>at the end of the <i>array</i> <strong>'myGrass'</strong>.<br><br><i>Example:</i>&nbsp<strong>myGrass.push('ladybug');</strong></div>"
  ,
  contextInstructions: "<div>Welcome to BeetlePush, a game where you learn how to code array methods in Javascript!</div>"
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
    selectorName: "Pop() method",
    doThis: "Remove the intrusive bug in the end",
    selector: "bee",
    syntax: "pop();",
    help: " The pop() method removes (pops) the last element of an array, changing the length of the original array.",
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
    `,
    contextInstructions: "<div>Some bugs live most of their lives underground, like worms. However, others are always flying, like bees.</div>"
    ,
    instructions: " <div>Remove the <strong>'bee'</strong> at the end of the <i>array</i> <strong>'myGrass'</strong>, using the <strong>pop()</strong><i> method<i/>.</div>"
    //In this level we have 3 bugs, two worms and one bee.//
  
  },

  /***  ******************
 * 
 * LEVEL 3 
 * 
 * *********************/ 


  {
    helpTitle: "Remove the first element in the array ",
    selectorName: "Shift() method",
    doThis: "Remove the 'dragonfly' at the beginning",
    selector: "dragonFly",
    syntax: "shift();",
    help: ' The shift() method removes the first array element.',
    examples: [
      '<strong>1</strong> const colors = ["Red", "Orange", "Black", "Yellow"]; <br><strong>2</strong> colors.shift();<br> <strong>3</strong> console.log(colors);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Orange", "Black", "Yellow"]</div>',
    ],
    myGrass : ['dragonFly','butterfly','butterfly','butterfly','butterfly'],
    myGrassSolution : ['butterfly','butterfly','butterfly','butterfly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
    <dragonFly>
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
    `,
    contextInstructions: "<div>In the world of bugs there are several ways to feed. Some, like butterflies, feed on the nectar of flowers, others like dragonflies feed on other small bugs.</div>" ,
    instructions: "Remove the <strong>'dragonFly'</strong> at the beginning of the <i>array</i> <strong>'myGrass'</strong> , using the <strong>shift()</strong> <i>method</i>. "
  },

  /***  ******************
 * 
 * LEVEL 4 
 * 
 * *********************/ 

  {
    helpTitle: "Add element at the beginning of an array ",
    selectorName: "Unshift() method",
    doThis: "Add the 'antQueen' at the beginning of the array",
    selector: "antQueen",
    syntax: "unshift();",
    help: ' The unshift() method adds a new element at the beginning of an array . ',
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
    `,
    contextInstructions: "<div>Some bugs are known for their social nature, they form colonies in which each one has a role or responsibility. Ants are insects that live and form large colonies and always need the presence of a queen ant. </div>" ,
    instructions: "<div>Add the <strong>'antQueen'</strong> inside the <i>array</i>. Use <strong>unshift()</strong><i> method</i></b></div>"
  },


  /***  ******************
 * 
 * LEVEL 5 
 * 
 * *********************/ 


  {
    helpTitle: "Creates a new array from selected elements",
    selectorName: "Slice() method",
    doThis: "Create a new array only with winged bugs",
    selector: "bee, butterfly, dragonFly",
    syntax: "slice();",
    help: ' The slice() method creates a new array from selected elements, does not change the original array.This method selects has two parameters "start" and "end" (not inclusive).',
    examples: [
      '<strong>1</strong> const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; <br><strong>2</strong> const citrus = fruits.slice(1,3);<br> <strong>3</strong> console.log(citrus);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Orange", "Lemon"]</div>',
    ],
    myGrass : ['worm','butterfly','bee','dragonFly','spider'],
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
    <spider>
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
    `,
    contextInstructions: "<div>The way they move is another characteristic that differentiates groups of bugs. Some are terrestrial, others are aquatic, and others have the ability to fly. The wings can be very different in their size, color and number. </div>" ,
    instructions:"<div>Create a new <i>array</i>, using  <strong>slice()</strong>  <i>method</i>.</div>"
  },


  /***  ******************
 * 
 * LEVEL 6 
 * 
 * *********************/ 

  {
    helpTitle: "Modifies the content of an array, adding new elements and / or removing old elements",
    selectorName: "Splice() method",
    doThis: "Replace the repeated bugs with the new ones",
    selector: "dragonFly, spider, .dance",
    syntax: "splice();",
    help: ' The splice() method adds/removes items to/from an array, and returns the removed item(s). ',
    examples: [
      '<strong>1</strong> const office = ["pencil", "pen", "orange", "salad", "notebook", "marker"]; <br><strong>2</strong> office.splice(2,2, "folder", "scissors");<br> <strong>3</strong> console.log(office);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["pencil", "pen", "folder", "scissors", "notebook", "marker"]</div>',
    ],
    myGrass : ['bee','ant','ant','worm','butterfly','worm'],
    myGrassSolution : ['bee','ant','dragonFly','spider','butterfly','worm'],
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
    <spider>
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
    <spider>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <worm>
   </grass>
   </bracket>
    `,
    contextInstructions: "<div>Bugs are known for their great diversity. In addition to its wide distribution throughout the planet and its thousands of thousands of species. There are so many that more than half of the world's animal species are bugs. </div>" ,

  instructions:"<div>Replace the repeated bugs with <strong>'dragonFly'</strong> and <strong>'spider'</strong>. Use <strong>splice()</strong>  <i>method</i> correctly.</b></div>"
  },

  /***  ******************
 * 
 * LEVEL 7 
 * 
 * *********************/ 

  {
    helpTitle: "Reverse the order of the elements in an array",
    selectorName: "Reverse() method",
    doThis: "Reverse the elements of the array to restore the natural butterfly's life cycle order",
    selector: "butterfly, cocoon, caterpillar",
    syntax: "reverse();",
    help: ' The reverse() method reverses the order of the elements in an array.This method overwrites the original array.',
    examples: [
      //example with reverse method using cars array
      '<strong>1</strong> const cars = ["BMW", "Volvo", "Saab", "Ford"]; <br><strong>2</strong> cars.reverse();<br> <strong>3</strong> console.log(cars);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Ford", "Saab", "Volvo", "BMW"]</div>',
    ],
    myGrass : ['butterfly','cocoon','caterpillar'],
    myGrassSolution : ['caterpillar','cocoon','butterfly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <cocoon>
   </grass>
   <grass>
    <caterpillar>
   </grass>
   </bracket>
   
   
    `,
    boardMarkupSolution: `
    <bracket>
    <grass>
    <caterpillar>
    </grass>
    <grass>
    <cocoon>
    </grass>
    <grass>
    <butterfly>
    </grass>
    </bracket>
    `,
    contextInstructions: "<div>The life cycle of some bugs can be very interesting. Some simply grow in size, others change from terrestrial to aquatic life, and others are able to changing completely their appearance, such as butterflies. </div>",
    instructions:"<div>The correct path follows this order: <strong>'caterpillar'</strong>, <strong>'cocoon'</strong> ,   <strong>'butterfly'</strong>. Use the <strong>reverse()</strong> <i>method</i>.</div> " 
  },
/***  ******************
 * 
 * LEVEL 8 
 * 
 * *********************/ 

  {
    helpTitle: "Includes returns a boolean if an array contains a specified value",
    selectorName: "Includes() method",
    doThis: "Check if the array contains the bug 'bee'",
    selector: "bee",
    syntax: "includes();",
    help: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. ',
    examples: [
      //example with includes method using vegetables array
      '<strong>1</strong> const vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"]; <br><strong>2</strong> console.log(vegetables.includes("Turnip"));',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> true</div>',


    ],
    myGrass : ['ladybug','butterfly','ant','worm','caterpillar','bee'],
    myGrassSolution : true,
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
   <grass>
    <ladybug>
   </grass>
   <grass>
    <butterfly>
   </grass>
   <grass>
    <ant>
   </grass>
   <grass>
    <worm>
   </grass>
   <grass>
    <caterpillar>
   </grass>
   <grass>
    <bee>
   </grass>
   </bracket>
   
    `,
    boardMarkupSolution: `
    
    <grass>
     <bee>
    </grass>
  
    `,
    contextInstructions: "<div>Most probably bees are one of the most important bugs for our ecosystems and our planet. They pollinate flowers and produce sweet honey. That is why it is important to know and protect them. </div>",
    
    instructions:"<div>Use <strong>includes()</strong> <i>method</i>  to know if there is a <strong>'bee'</strong> in the <i>array</i> <strong>'myGrass'</strong>.</b></div>"
  },
  /***  ******************
 * 
 * LEVEL 9
 * 
 * *********************/ 
   {
    helpTitle: "Concatenates two or more arrays",
    selectorName: "Concat() method",
    doThis: "Concatenate the array with small 'ladybugs' after the first array",
    selector: ".small",
    syntax: "concat();",
    help: ' The concat() method concatenates (joins) two or more arrays.This method returns a new array, containing the joined arrays. ',
    examples: [
      //example with concat method using flowers array
      '<strong>1</strong> const flowers = ["rose", "tulip", "daisy"]; <br><strong>2</strong> const flowers2 = ["orchid", "lily"]; <br><strong>3</strong> const flowers3 = flowers.concat(flowers2);<br> <strong>4</strong> console.log(flowers3);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["rose", "tulip", "daisy", "orchid", "lily"]</div>',

    ],
    myGrass : ['ladybug','ladybug','ladybug'],
    myGrassSolution : ['ladybug','ladybug','ladybug'],
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
   </bracket>

   <bracket>
   <grass>
    <ladybug class="small">
   </grass>
   <grass>
    <ladybug class="small">
   </grass>
   <grass>
    <ladybug class="small">
   </grass>
   </bracket>
   
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
     <ladybug class="small">
    </grass>
    <grass>
     <ladybug class="small">
    </grass>
    <grass>
     <ladybug class="small">
    </grass>
    </bracket>
    `,
    contextInstructions: "<div>Since we are born, our family takes care of us and protects us. In some bugs it is the same, the parents watch over, feed and protect their children until they grow up enough. <br> As a curious fact, did you know that a group of ladybugs went to space in 1999?</div>" ,

    instructions:"<div>Use <strong>concat()</strong> <i>method</i> to join two <i>arrays</i> . Use <strong>'myGrass'</strong> and <strong>'myGrassBaby'</strong> so that the small <strong>'ladybugs'</strong> are in the same <i>array</i> as their parents.</b></div>"
  },
  /***  ******************
   * LEVEL 10
   * *********************/
   {
    helpTitle: "Fills an array with a value",
    selectorName: "Fill() method",
    doThis: "Cause the metamorphosis in all 'cocoon'",
    selector: "cocoon, butterfly",
    syntax: "fill();",
    help: "The fill() method fills all the elements of an array with a value. Fill method overwrites the original array. ",
    examples: [
      //example with fill method using jobs array
      '<strong>1</strong> const jobs = ["teacher", "programmer", "designer"]; <br><strong>2</strong> jobs.fill("engineer"); <br><strong>3</strong> console.log(jobs);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["engineer", "engineer", "engineer"]</div>',

    ],
    myGrass : ['cocoon','cocoon','cocoon','cocoon'],
    myGrassSolution : ['butterfly','butterfly','butterfly','butterfly'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
      <cocoon>
    </grass>
    <grass>
      <cocoon>
    </grass>
    <grass>
      <cocoon>
    </grass>
    <grass>
      <cocoon>
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
  `,
  contextInstructions: "<div>As you already know some bugs change their shape completely when they become adults. Some bugs do what is known as metamorphosis. This process is different depending on the bug, in the case of butterflies its transformation is total, first it is a caterpillar, then a cocoon and finally a beautiful butterfly.</div>" ,
  instructions:"<div>Use the <strong>fill()</strong>  <i>method</i> to transform this <strong>'cocoon'</strong> <i>array</i>  in a <strong>'butterfly'</strong> <i>array</i>, and see the power of metamorphosis.</b></div>"
  },

  /***  ******************
   * LEVEL 11
   * *********************/
   {
    helpTitle: "Returns the value of the first element in an array that pass a test",
    selectorName: "Find() method",
    doThis: "Find the first legless bug ",
    selector: "caterpillar",
    syntax: "find();",
    help: "The find() method returns the value of the first element in an array that pass a test (provided as a function), find method returns undefined if no elements are found." ,
    examples: [
      //example with find method using animals array
      '<strong>1</strong> const animals = ["dog", "cat", "bird", "fish"]; <br><strong>2</strong> const firstFish = animals.find(animal => animal === "fish");<br> <strong>3</strong> console.log(firstFish);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> fish</div>',
    ],
    myGrass : [8,0,6,6],
    myGrassSolution : ['spider','caterpillar','ant','ladybug'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    
    <bracket>
    <grass>
     <spider>
    </grass>
    <grass>
     <caterpillar>
    </grass>
    <grass>
     <ant>
    </grass>
    <grass>
     <ladybug>
    </grass>
    </bracket>
    
    `,
    boardMarkupSolution: ` 
    
    <grass>
     <caterpillar>
    </grass>
  
   
  `,
  contextInstructions: "<div>Another of the great differences that exist between bugs is their number of legs. Some bugs can have many legs, like centipedes, and others have no legs, like caterpillars or worms.The function of the legs is to move but they are also crucial for hunting, for reproducing and even grasshoppers have an ear on their legs!!</div>" ,
  instructions:"<div>Use <strong>find()</strong> <i>method</i> to find the legless bug.</div>"
  },
  /***  ******************
   * LEVEL 12
   * *********************/
   {
    helpTitle: "Returns the index of the first element in an array that pass a test",
    selectorName: "FindIndex() method",
    doThis: "Find Index of the turquoise 'dragonfly'",
    selector: "dragonFly",
    syntax: "findIndex();",
    help: "The findIndex() method returns the index of the first element in an array that pass a test (provided as a function), findIndex method returns -1 if no elements are found. ",
    examples: [
      //example with findIndex method using numbers array
      '<strong>1</strong> const numbers = [1, 2, 3, 4, 5]; <br><strong>2</strong> const firstEven = numbers.findIndex(number => number % 2 === 0);<br> <strong>3</strong> console.log(firstEven);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> 1</div>',
      
    ],
    myGrass : ['red','pink','black','turquoise','yellow'],
    myGrassSolution : ['ladybug','ladybug','ladybug','ladybug','ladybug'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
     <ladybug>
    </grass>
    <grass>
     <worm>
    </grass>
    <grass>
     <antQueen>
    </grass>
    <grass>
     <dragonFly>
    </grass>
    <grass>
    <bee>
   </grass>
   </bracket>
    `,
    boardMarkupSolution: ` 
    <grass>
     <dragonFly>
    </grass>
    
  `,
  contextInstructions: "<div>Colors are another differential characteristic in bugs. Some of the patterns are used and copied by humans. Colors can warn us of their danger, serve for reproductive success or camouflage. There are also some colorless bugs.</div>" ,
  instructions:"<div>Find the position of turquoise bug in the <i>array</i> using <strong>findIndex()</strong> <i>method</i>.</div>"
  },
  /***  ******************
   * LEVEL 13
   * *********************/
   {
    helpTitle: "Checks if any of the elements in an array pass a test (provided as a function)",
    selectorName: "Some() method",
    doThis: "Check if there is any 'poisonous' bug ",
    selector: ".dance",
    syntax: "some();",
    help: "The some() method checks if any of the elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for one of the array elements ",
    examples: [
      //example with some method using foods array
      '<strong>1</strong> const foods = ["apple", "banana", "cherry", "mango"]; <br><strong>2</strong> const hasMango = foods.some(food => food === "mango");<br> <strong>3</strong> console.log(hasMango);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> true</div>',
      
    ],
    myGrass : ['non-poisonous','poisonous','non-poisonous','poisonous'],
    myGrassSolution : ['ladybug','ladybug','ladybug','ladybug','ladybug'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
     <ladybug>
    </grass>
    <grass>
     <spider>
    </grass>
    <grass>
     <antQueen>
    </grass>
    <grass>
     <bee>
    </grass>
    </bracket>
    `,
    boardMarkupSolution: ` 
    <bracket>
    <grass>
     <ladybug>
    </grass>
    <grass>
     <spider class="dance">
    </grass>
    <grass>
     <antQueen>
    </grass>
    <grass>
     <bee class="dance">
    </grass>
    </bracket>
  `,
  contextInstructions: "<div>You probably know someone who has been stung by a wasp or even yourself. Not all bugs are poisonous but some of these poisonous bugs can be deadly to humans.</div>",
  instructions:"<div>Use the <strong>some()</strong> <i>method</i> to find if there is any <strong>'poisonous'</strong> bug in the <i>array</i>.</div>" 
  },

  /***  ******************
   * LEVEL 14
   *  *********************/
   {
    helpTitle: "Every method checks if all elements in an array pass a test (provided as a function)",
    selectorName: "Every() method",
    doThis: "What do they have in common?",
    selector: ".dance",
    syntax: "every();",
    help: "The every() method checks if all elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for all array elements ",
    examples: [
      //example with every method using names array
      '<strong>1</strong> const names = ["John", "Mary", "Joe"]; <br><strong>2</strong> const allNames = names.every(name => name.length > 3);<br> <strong>3</strong> console.log(allNames);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> false</div>',
      
    ],
    myGrass : [{name:'ladybug',fly:true, poisonous: false, color: 'red'},{name:'bee',fly:true, poisonous: true, color:'yellow'},{name:'dragonFly',fly:true, poisonous: false, color:'turquoise'}],
    myGrassSolution : ['ladybug','ladybug','ladybug','ladybug','ladybug'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <bracket>
    <grass>
     <ladybug>
    </grass>
    <grass>
     <bee>
    </grass>
    <grass>
     <dragonFly>
    </grass>
    </bracket>
    
    `,
    boardMarkupSolution: ` 
    <bracket>
    <grass>
     <ladybug class= "dance">
    </grass>
    <grass>
     <bee class= "dance">
    </grass>
    <grass>
     <dragonFly class= "dance">
    </grass>
    </bracket>
  `,
  contextInstructions: "<div> Congratulations you have reached the last level.</div>" ,
  instructions:"<div>Use the <strong>every()</strong> <i>method</i> to find out the common features.</div><br><br><div><i>Example:</i> <strong>{name: 'worm', fly: false, poisonous: false}</strong> taking into account these properties</div>"
  
  },
  /***  ******************
   * LEVEL 15
   * *********************/
   

];