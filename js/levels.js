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
  instructions: "<div style='font-size:20px'>Welcome to Beetle Push, the game of arrays where you help Ladybug and friends by writing code to learn array methods in JavaScript !</div><br><br> <div style='font-size:16px'>To pass this level you need to use push() method to add a new ladybug at the end array myGrass.<br><br>For example in this level the solution is:<br><br><b>myGrass.push('ladybug');</b></div>"
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
    doThis: "Remove the intrusive bug in the end",
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
    `,
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> Some bugs live most of their lives underground, like worms. However, others are always flying, like bees.</div><br><br> <div style='font-size:16px'>In this level we have 3 bugs, two worms and one bee. Remove the bee at the end of the array myGrass, using the pop() method.</b></div> " 
  
  },

  /***  ******************
 * 
 * LEVEL 3 
 * 
 * *********************/ 


  {
    helpTitle: "Remove the first element in the array ",
    selectorName: "Shift method",
    doThis: "Remove the dragonfly at the beginning",
    selector: "dragonFly",
    syntax: "shift();",
    help: ' The shift() method removes the first array element. <a href= "https://www.w3schools.com/jsref/jsref_shift.asp"> more help </a>',
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> In the world of bugs there are several ways to feed. Some, like butterflies, feed on the nectar of flowers, others like dragonflies feed on other small bugs.</div><br><br> <div style='font-size:16px'>In this level myGrass has mostly butterfly but one intrusive dragonfly. Remove the 'dragonFly' at the beginning of the array myGrass, using the shift() method.</b></div> " 
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
    `,
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> Some bugs are known for their social nature, they form colonies in which each one has a role or responsibility. Ants are insects that live and form large colonies and always need the presence of a queen ant. </div><br><br> <div style='font-size:16px'>In this level the queen ant is not inside the array. Help the ants to change this using unshift method(). Remember that you need to inform the name of the element, 'antQueen',  to the method you are going to use. </b></div> " 
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> The way they move is another characteristic that differentiates groups of bugs. Some are terrestrial, others are aquatic, and others have the ability to fly. The wings can be very different in their size, color and number. </div><br><br> <div style='font-size:16px'>To pass this level you will create a new array, using slice() method. This new array has to contain only winged bugs.  </b></div> " 
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
    selector: "dragonFly, spider, .dance",
    syntax: "splice();",
    help: ' The splice() method adds/removes items to/from an array, and returns the removed item(s). <a href= "https://www.w3schools.com/jsref/jsref_splice.asp"> more help </a>',
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> Bugs are known for their great diversity. In addition to its wide distribution throughout the planet and its thousands of thousands of species. There are so many that more than half of the world's animal species are bugs. </div><br><br> <div style='font-size:16px'>It this level we want to represent that diversity, replace the repeated bugs with the bugs 'dragonFly' and 'spider'. To pass the level use splice() method correctly.</b></div> " 
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
    selector: "butterfly, cocoon, caterpillar",
    syntax: "reverse();",
    help: ' The reverse() method reverses the order of the elements in an array.This method overwrites the original array. <a href= "https://www.w3schools.com/jsref/jsref_reverse.asp"> more help </a>',
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> The life cycle of some bugs can be very interesting. Some simply grow in size, others change from terrestrial to aquatic life, and others are able to changing completely their appearance, such as butterflies. </div><br><br> <div style='font-size:16px'>At this level the order of the butterfly's life cycle is wrong. The correct path follows this order: 'caterpillar', 'cocoon', 'butterfly'. Use the reverse() method to restore the natural life cycle.</b></div> " 
  },
/***  ******************
 * 
 * LEVEL 8 
 * 
 * *********************/ 

  {
    helpTitle: "Includes returns a boolean if an array contains a specified value",
    selectorName: "Includes method",
    doThis: "Check if the array contains the bug 'bee'",
    selector: "bee",
    syntax: "includes();",
    help: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. <a href= "https://www.w3schools.com/jsref/jsref_includes.asp"> more help </a>',
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> Most probably bees are one of the most important bugs for our ecosystems and our planet. They pollinate flowers and produce sweet honey. That is why it is important to know and protect them. <br><br> <i>If the bee disappears from the surface of the Earth, man would have no more than four years left to live</i> <b>Albert Einstein</b></div><br><br> <div style='font-size:16px'>It this level use includes() method to know if there is a bee in the array myGrass.</b></div> " 
  },
  /***  ******************
 * 
 * LEVEL 9
 * 
 * *********************/ 
   {
    helpTitle: "Concatenates two or more arrays",
    selectorName: "Concat method",
    doThis: "Concat the array with small ladybugs to the first array",
    selector: ".small",
    syntax: "concat();",
    help: ' The concat() method concatenates (joins) two or more arrays.This method returns a new array, containing the joined arrays. <a href= "https://www.w3schools.com/jsref/jsref_concat_array.asp"> more help </a>',
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> Since we are born, our family takes care of us and protects us. In some bugs it is the same, the parents watch over, feed and protect their children until they grow up enough. <br> As a curious fact, did you know that a group of ladybugs went to space in 1999?</div><br><br> <div style='font-size:16px'>It this level use concat() method to join two arrays. Use myGrass and myGrassBaby so that the small ladybugs are in the same array as their parents.</b></div> " 
  },
  /***  ******************
   * LEVEL 10
   * *********************/
   {
    helpTitle: "Fills an array with a value",
    selectorName: "Fill method",
    doThis: "Cause the metamorphosis in all cocoon",
    selector: "cocoon",
    syntax: "fill();",
    help: "The fill() method fills all the elements of an array with a value. Fill method overwrites the original array. <a href= 'https://www.w3schools.com/jsref/jsref_fill.asp'> more help </a>",
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
  instructions: "<div style='font-size:20px'>Hello again ! <br><br> As you already know some bugs change their shape completely when they become adults. Some bugs do what is known as metamorphosis. This process is different depending on the bug, in the case of butterflies its transformation is total, first it is a caterpillar, then a cocoon and finally a beautiful butterfly.</div><br><br> <div style='font-size:16px'>Use the fill() method to transform this cocoon array in a butterfly array, and see the power of metamorphosis.</b></div>" 
  },

  /***  ******************
   * LEVEL 11
   * *********************/
   {
    helpTitle: "Returns the value of the first element in an array that pass a test",
    selectorName: "Find method",
    doThis: "Find the first bug which has no legs",
    selector: "caterpillar",
    syntax: "find();",
    help: "The find() method returns the value of the first element in an array that pass a test (provided as a function), find method returns undefined if no elements are found.<a href= 'https://www.w3schools.com/jsref/jsref_find.asp'> more help </a>" ,
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
  instructions: "<div style='font-size:20px'>Hello again ! <br><br> Another of the great differences that exist between bugs is their number of legs. Some bugs can have many legs, like centipedes, and others have no legs, like caterpillars or worms.The function of the legs is to move but they are also crucial for hunting, for reproducing and even grasshoppers have an ear on their legs!!</div><br><br> <div style='font-size:16px'> For example in this case, the spider has 8 legs, the ant has 6, the caterpillar has no legs and the ladybug has 6. Use find() method to find the bug which has no legs. </b></div>" 
  },
  /***  ******************
   * LEVEL 12
   * *********************/
   {
    helpTitle: "Returns the index of the first element in an array that pass a test",
    selectorName: "FindIndex method",
    doThis: "Find Index of the dragonfly",
    selector: "dragonFly",
    syntax: "findIndex();",
    help: "The findIndex() method returns the index of the first element in an array that pass a test (provided as a function), findIndex method returns -1 if no elements are found. <a href= 'https://www.w3schools.com/jsref/jsref_findindex.asp'> more help </a>",
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
  instructions: "<div style='font-size:20px'>Hello again !<br><br>Colors are another differential characteristic in bugs. Some of the patterns are used and copied by humans. Colors can warn us of their danger, serve for reproductive success or camouflage. There are also some colorless bugs. <br><br> Find the position of turquoise bug in the array using findIndex() method.</b></div>" 
  },
  /***  ******************
   * LEVEL 13
   * *********************/
   {
    helpTitle: "Checks if any of the elements in an array pass a test (provided as a function)",
    selectorName: "Some method",
    doThis: "Which one is poisonous ?",
    selector: "spider",
    syntax: "some();",
    help: "The some() method checks if any of the elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for one of the array elements <a href= 'https://www.w3schools.com/jsref/jsref_some.asp'> more help </a>",
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
    <grass>
    <spider>
   </grass>
  `,
  instructions: "<div style='font-size:20px'>Hello again !<br><br> You probably know someone who has been stung by a wasp or even yourself. Not all bugs are poisonous but some of these poisonous bugs can be deadly to humans.<br><br>Use the some() method to find the first bug in the array that is 'poisonous' .</b></div>" 
  },
  /***  ******************
   * LEVEL 14
   *  *********************/
   {
    helpTitle: "Every method checks if all elements in an array pass a test (provided as a function)",
    selectorName: "Every method",
    doThis: "What do they have in common ?",
    selector: ".dance",
    syntax: "every();",
    help: "The every() method checks if all elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for all array elements <a href= 'https://www.w3schools.com/jsref/jsref_every.asp'> more help </a>",
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
  instructions: "<div style='font-size:20px'> Congratulations you have reached the last level. <br><br>In this level we have an array of objects. For example: {name: 'worm', fly: false, poisonous: false} taking in to account these propierties, use the every() method to find out what do they have in common .</b></div>" 
  
  },
  /***  ******************
   * LEVEL 15
   * *********************/
   

];
