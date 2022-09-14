var levels = [
/*********************************
 * LEVEL 1 (case 0) PUSH METHOD
 * *******************************/ 
  { 
    helpTitle: "Add an element at the end of the array, ",
    selectorName: "Push method",
    doThis: "Insert the 'ladybug' at the end of the array",
    selector: "ladybug",
    syntax: "push();",
    help: "Definition and Usage The push() method adds new items to the end of an array. It changes the length of the original array. <a href= 'https://www.w3schools.com/jsref/jsref_push.asp' target='_blank'> more help </a>",
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

  /****************************
 * LEVEL 2 (case 1) POP METHOD
 * ****************************/ 
  {
    helpTitle: "Remove the last of element in the array, ",
    selectorName: "Pop method",
    doThis: "Remove the intrusive bug in the end",
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

  /******************************
 * LEVEL 3 (case 2) SHIFT METHOD
 * ******************************/ 
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

  /********************************
 * LEVEL 4 (case 3) UNSHIFT METHOD
 * ********************************/ 
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br> Some bugs are known for their social nature, they form colonies in which each one has a role or responsibility. Ants are insects that live and form large colonies and always need the presence of a queen ant. </div><br><br> <div style='font-size:16px'>In this level the queen ant is not inside the array. Help the ants to change this using unshift() method. Remember that you need to inform the name of the element, 'antQueen',  to the method you are going to use. </b></div> " 
  },
  /******************************
 * LEVEL 5 (case 4) SLICE METHOD
 * ******************************/ 
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

   /******************************
 * LEVEL 6 (case 5) SPLICE METHOD
 * ******************************/ 
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

   /********************************
 * LEVEL 7 (case 6) REVERSE METHOD
 * *********************************/ 
  {
    helpTitle: "Reverse the order of the elements in an array",
    selectorName: "Reverse method",
    doThis: "Reverse the elements of the array to restore the natural order",
    selector: "butterfly, cocoon, caterpillar",
    syntax: "reverse();",
    help: ' The reverse() method reverses the order of the elements in an array.This method overwrites the original array. <a href= "https://www.w3schools.com/jsref/jsref_reverse.asp"> more help </a>',
    examples: [
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

   /********************************
 * LEVEL 8 (case 7) INCLUDES METHOD
 * *********************************/ 
  {
    helpTitle: "Includes returns a boolean if an array contains a specified value",
    selectorName: "Includes method",
    doThis: "Check if the array contains the bug 'bee'",
    selector: "bee",
    syntax: "includes();",
    help: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. <a href= "https://www.w3schools.com/jsref/jsref_includes.asp"> more help </a>',
    examples: [
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

 /********************************
 * LEVEL 9 (case 8) CONCAT METHOD
 * *********************************/ 
   {
    helpTitle: "Concatenates two or more arrays",
    selectorName: "Concat method",
    doThis: "Concatenate the array with small ladybugs after the first array",
    selector: ".small",
    syntax: "concat();",
    help: ' The concat() method concatenates (joins) two or more arrays.This method returns a new array, containing the joined arrays. <a href= "https://www.w3schools.com/jsref/jsref_concat_array.asp"> more help </a>',
    examples: [
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
 /********************************
 * LEVEL 10 (case 9) FILL METHOD
 * *********************************/ 
   {
    helpTitle: "Fills an array with a value",
    selectorName: "Fill method",
    doThis: "Cause the metamorphosis in all cocoon",
    selector: "cocoon, butterfly",
    syntax: "fill();",
    help: "The fill() method fills all the elements of an array with a value. Fill method overwrites the original array. <a href= 'https://www.w3schools.com/jsref/jsref_fill.asp'> more help </a>",
    examples: [
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

   /********************************
 * LEVEL 11 (case 10) FIND METHOD
 * *********************************/ 
   {
    helpTitle: "Returns the value of the first element in an array that pass a test",
    selectorName: "Find method",
    doThis: "Find the first bug which has no legs",
    selector: "caterpillar",
    syntax: "find();",
    help: "The find() method returns the value of the first element in an array that pass a test (provided as a function), find method returns undefined if no elements are found.<a href= 'https://www.w3schools.com/jsref/jsref_find.asp'> more help </a>" ,
    examples: [
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

   /***********************************
 * LEVEL 12 (case 11) FINDINDEX METHOD
 * *********************************/ 
   {
    helpTitle: "Returns the index of the first element in an array that pass a test",
    selectorName: "FindIndex method",
    doThis: "Find Index of the turquoise dragonfly",
    selector: "dragonFly",
    syntax: "findIndex();",
    help: "The findIndex() method returns the index of the first element in an array that pass a test (provided as a function), findIndex method returns -1 if no elements are found. <a href= 'https://www.w3schools.com/jsref/jsref_findindex.asp'> more help </a>",
    examples: [
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
  
   /********************************
 * LEVEL 13 (case 12) SOME METHOD
 * *********************************/ 
   {
    helpTitle: "Checks if any of the elements in an array pass a test (provided as a function)",
    selectorName: "Some method",
    doThis: "Check if there is any poisonous bug ",
    selector: ".dance",
    syntax: "some();",
    help: "The some() method checks if any of the elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for one of the array elements <a href= 'https://www.w3schools.com/jsref/jsref_some.asp'> more help </a>",
    examples: [
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
    instructions: "<div style='font-size:20px'>Hello again !<br><br> You probably know someone who has been stung by a wasp or even yourself. Not all bugs are poisonous but some of these poisonous bugs can be deadly to humans.<br><br>Use the some() method to find if there is any 'poisonous' bug in the array.</b></div>" 
  },

 /********************************
 * LEVEL 14 (case 13) EVERY METHOD
 * *********************************/ 
   {
    helpTitle: "Every method checks if all elements in an array pass a test (provided as a function)",
    selectorName: "Every method",
    doThis: "What do they have in common ?",
    selector: ".dance",
    syntax: "every();",
    help: "The every() method checks if all elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for all array elements <a href= 'https://www.w3schools.com/jsref/jsref_every.asp'> more help </a>",
    examples: [
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
    instructions: "<div style='font-size:20px'>Hello again ! <br><br>In this level we have an array of objects. For example: {name: 'worm', fly: false, poisonous: false} taking in to account these propierties, use the every() method to find out what do they have in common .</b></div>" 
  
  },

   /********************************
 * LEVEL 15 (case 14) FILTER METHOD
 * *********************************/ 
   {
    helpTitle: "Shows bugs with antennae",
    selectorName: "Filter method",
    doThis: "What bugs have antennae?",
    selector: ".dance",
    syntax: "filter();",
    help: "The filter() method creates a new array filled with elements that pass a test provided by a function. <a href= 'https://www.w3schools.com/jsref/jsref_filter.asp'> More help. </a>",
    examples: [
      '<strong>1</strong> const phones = ["iPhone 14", "nokia 1990", "Samsung Z Flip 4"]; <br><strong>2</strong> const newPhones = phones.filter(phone => phone.length > oldPhone);<br> <strong>3</strong> console.log (newPhones);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["iPhone 14", "Samsung Z Flip 4"]</div>',
    ],
    myGrass : [2, 0, 0, 2, 2],
    myGrassSolution : [2,2,2],
    completed: false,
    userSolution: "",
    boardMarkup: `
      <bracket>
        <grass>
          <ant class="dance">
        </grass>
        <grass>
          <spider>
        </grass>
        <grass>
          <caterpillar>
        </grass>
        <grass>
          <butterfly class="dance">
        </grass>
        <grass>
          <bee class="dance">
        </grass>
      </bracket>
    
    `,
    boardMarkupSolution: ` 
      <bracket>
        <grass>
          <ant class= "dance">
        </grass>
        <grass>
          <butterfly class= "dance">
        </grass>
        <grass>
          <bee class= "dance">
        </grass>
      </bracket>
    `,
    instructions: "<div style='font-size:20px'>Hello again!<br><br>We need you to find all the bugs that have antennae.<br>In this case the bug has no property, the only value is the number of antennae.<br>--> [2,0]</b></div>" 
  },

   /********************************
 * LEVEL 16 (case 15) SORT METHOD OBJ
 * *********************************/ 
     {
      helpTitle: "Sort the bugs by evolution",
      selectorName: "Sort method",
      doThis: "Sort the bugs by evolution",
      selector: ".dance",
      syntax: "sort();",
      help: "The sort() method sorts the elements of an array. <a href= 'https://www.w3schools.com/jsref/jsref_sort.asp'> More help. </a>",
      examples: [
      '<strong>1</strong> const evolution = [{name:"tadpole", eStage: "1"}, {name:"egg", eStage: "0"},{name:"frog", eStage: "2"}]; <br><strong>2</strong> evolution.sort((a, b) =>{return a.eStage - b.eStage;});<br> <strong>3</strong> console.log(evolution);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["egg", "tadpole", "frog"]</div>',
      ],
      myGrass : [{name:'butterfly', eStage: '2'},{name:'caterpillar', eStage: '0'},{name:'cocoon', eStage: '1'}],
      myGrassSolution : [{name:'caterpillar', eStage: '0'},{name:'cocoon', eStage: '1'},{name:'butterfly', eStage: '2'}],
      completed: false,
      userSolution: "",
      boardMarkup: `
        <bracket>
          <grass>
            <butterfly>
          </grass>
          <grass>
            <caterpillar>
          </grass>
          <grass>
            <cocoon>
          </grass>
        </bracket>
      `,
      boardMarkupSolution: ` 
        <bracket>
          <grass>
            <caterpillar class= "dance">
          </grass>
          <grass>
            <cocoon class= "dance">
          </grass>
          <grass>
            <butterfly class= "dance">
          </grass>
        </bracket>
      `,
      instructions: "<div style='font-size:20px'> Hello again ! <br><br>In this level you must order the insects by the order of their evolution.<br>You should know that each bug has 2 properties, its name and its stage of evolution ('eStage'):<br>-->[{name:'butterfly', eStage: '2'}]</b></div>" 
    },

 /**********************************
 * LEVEL 17 (case 16) REDUCE METHOD
 * *********************************/ 
     {
      helpTitle: "Reduce the ants ",
      selectorName: "Reduce method",
      doThis: "Turn ants into queen",
      selector: ".dance",
      syntax: "reduce();",
      help: "The reduce() method returns a single value: the function's accumulated result.<a href= 'https://www.w3schools.com/jsref/jsref_reduce.asp'> More help. </a>",
      examples: [
        '<strong>1</strong> const numbers = [1, 2, 3, 4]; <br><strong>2</strong> const sum = numbers.reduce((previousNum, actualNum) =>{return previousNum + actualNum;}); <br><strong>3</strong> console.log (sum);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> 10</div>',
        
      ],
      myGrass : [1,1,1,1],
      myGrassSolution : 4,
      completed: false,
      userSolution: "",
      boardMarkup: `
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
      <!--mirar de quitar el braket-->
      <grass style="height:130px">
      <ant class="small dance" style="top:0">
      <ant class="small dance" style="top:0">
      <ant class="small dance" style="top:0">
      <ant class="small dance" style="top:0">
    </grass>
      `,
      instructions: "<div style='font-size:20px'>Hello again! <br><br>In this exercise we have an array of ants, if we add each ant, we will get a queen ant.</b></div>" 
    },

     /********************************
 * LEVEL 18 (case 17) MAP METHOD
 * *********************************/ 
      {
        helpTitle: "Map the bugs ",
        selectorName: "Map method",
        doThis: "Make the bugs grow!",
        selector: ".dance",
        syntax: "map();",
        help: "The map() method creates a new array from calling a function for every array element.<a href= 'https://www.w3schools.com/jsref/jsref_map.asp'> More help. </a>",
        examples: [
          '<strong>1</strong> const list =  [1, 2, 3, 4, 5]; <br><strong>2</strong> const newlist = list.map(sum(actualElement) {return actualElement + 1; }); <br><strong>3</strong> console.log (newlist);',
          '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> [2, 3, 4, 5, 6]</div>',
        ],
        myGrass : ["dragonFly","bee","butterfly","ladybug"],
        myGrassSolution : ["DRAGONFLY","BEE","BUTTERFLY","LADYBUG"],
        completed: false,
        userSolution: "",
        boardMarkup: `
        <bracket>
          <grass>
            <dragonFly class="small">
          </grass>
          <grass>
            <bee class="small">
          </grass>
          <grass>
            <butterfly class="small">
          </grass>
          <grass>
            <ladybug class="small">
          </grass>
        </bracket>
        `,
        boardMarkupSolution: ` 
        <bracket>
          <grass>
            <dragonfly class= "dance">
          </grass>
          <grass>
            <bee class= "dance">
          </grass>
          <grass>
            <butterfly class= "dance">
          </grass>
          <grass>
            <ladybug class= "dance">
          </grass>
        </bracket>
      `,
      instructions: "<div style='font-size:20px'>Hello again!<br> Welcome to another level, as you can see we have some baby bugs and we want you to make them grow. You have to know that babies are 'lowercase' bugs, to make them grow up, use the convenient method and function to make them grow! If you need extra help, press the button above 😊!</b></div>" 
      },

      /***  ************************
   * LEVEL 19 (case 18) JOIN METHOD
   * *******************************/
        {
          helpTitle: "Join the ants ",
          selectorName: "Join method",
          doThis: "Create the ant colony",
          selector: ".dance",
          syntax: "join();",
          help: "The join() method returns an array as a string.<a href= 'https://www.w3schools.com/jsref/jsref_join.asp'> More help. </a>",
          examples: [
            //example with every method using names array
            '<strong>1</strong> const elements = ["Fire", "Air", "Water"]; <br><strong>2</strong> console.log(elements.join())',
            '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> "Fire,Air,Water"</div>',
            
          ],
          myGrass : ["ant","ant","ant"],
          myGrassSolution : "ant-ant-ant",
          completed: false,
          userSolution: "",
          boardMarkup: `
            <bracket>
              <grass class="grassNewMargin">
                <ant>
              </grass>
              <grass class="grassNewMargin">
                <ant>
              </grass>
              <grass>
                <ant>
              </grass>
              
            </bracket>
          `,
          //mirar de hacer abejitas y unirlos con flores a modo de coma o guion
          boardMarkupSolution: ` 
              <grass>
                <ant class= "dance">
              </grass>
              <grass>
                <ant class= "dance">
              </grass>
              <antString>
              <grass>
                <ant class= "dance">
              </grass>
        `,
        instructions: "<div style='font-size:20px'>Hello again! <br><br>in this exercise you have to transform this small group of ants into an anthill.</b></div>" 
        },

         /********************************
 * LEVEL 20 (case 19) MAP METHOD OBJ
 * *********************************/ 
         {
          helpTitle: "Map the bugs",
          selectorName: "Map method",
          doThis: "Doubles the weight of the bugs",
          selector: ".dance",
          syntax: "map();",
          help: "The map() calls a function once for each element in an array.<a href= 'https://www.w3schools.com/jsref/jsref_map.asp'> More help. </a>",
          examples: [
            //falta pensar un ejemplo
            '<strong>1</strong> const elements = ["Fire", "Air", "Water"]; <br><strong>2</strong> console.log(elements.join())',
            '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> "Fire,Air,Water"</div>',
            
          ],
          myGrass : [{name:'ladybug', weight: '10'},{name:'spider', weight: '30'},{name:'dragonfly', weight: '15'}, {name:'ant', weight: '2'}],
          myGrassSolution : [{name:'ladybug', weight: '20'},{name:'spider', weight: '60'},{name:'dragonfly', weight: '30'}, {name:'ant', weight: '4'}],
          completed: false,
          userSolution: "",
          boardMarkup: `
            <bracket>
              <grass>
                <ladybug class="small">
              </grass>
              <grass>
                <spider class="small">
              </grass>
              <grass>
                <dragonfly class="small">
              </grass>
              <grass>
                <ant class="small">
              </grass>
            </bracket>    
          `,
          boardMarkupSolution: ` 
            <bracket>
              <grass>
                <ladybug class="dance">
              </grass>
              <grass>
                <spider class="dance">
              </grass>
              <grass>
                <dragonfly class="dance">
              </grass>
              <grass>
                <ant class="dance">
              </grass>
            </bracket>
        `,
        instructions: "<div style='font-size:20px'>Hello again!<br><br>Our bugs are starving, double their weight to feed them. You should know that each bug has its 'weight' property, that will help you solve the problem, cheer up! 😁✌️<br><br>Each bug has 2 properties: name and weight.<br>--> [{name:'ladybug', weight: '10'}] </b></div>" 
        },
 /***********************************
 * LEVEL 21 (case 20) SORT OBJ METHOD
 * *********************************/ 
         {
          helpTitle: "Sort the bugs",
          selectorName: "Sort method",
          doThis: "Sort the bugs by their weight",
          selector: ".dance",
          syntax: "sort();",
          help: "The sort() method sorts the elements of an array. <a href= 'https://www.w3schools.com/jsref/jsref_sort.asp'> More help. </a>",
          examples: [
            '<strong>1</strong> const elements = ["Fire", "Air", "Water"]; <br><strong>2</strong> console.log(elements.join())',
            '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> "Fire,Air,Water"</div>',
          ],
          myGrass : [{name:'butterfly', weight: '7'},{name:'worm', weight: '5'},{name:'spider', weight: '25'}, {name:'bee', weight: '10'}],
          myGrassSolution : [{name:'worm', weight: '5'},{name:'butterfly', weight: '7'},{name:'bee', weight: '10'},{name:'spider', weight: '25'}],
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
                <spider>
              </grass>
              <grass>
                <bee>
              </grass>
            </bracket>
                    
          `,
          boardMarkupSolution: ` 
            <bracket>
              <grass>
                <worm class= "dance">
              </grass>
              <grass>
                <butterfly class= "dance">
              </grass>
              <grass>
                <bee class= "dance">
              </grass>
              <grass>
                <spider class= "dance">
              </grass>
            </bracket>
        `,
        instructions: "<div style='font-size:20px'>Hello again!<br><br>We need you to order all the bugs from least weight to greatest weight. Thank you! 🙌</b></div>" 
        },
        /***********************************
 * LEVEL 22 (case 21) FILTER OBJ METHOD
 * *********************************/ 
         {
          helpTitle: "Filter the bugs",
          selectorName: "Filter method",
          doThis: "Show only the bugs that don't have wings!",
          selector: ".dance",
          syntax: "filter();",
          help: "The filter() method creates a new array filled with elements that pass a test provided by a function. <a href= 'https://www.w3schools.com/jsref/jsref_filter.asp'> More help. </a>",
          examples: [
            '<strong>1</strong> const elements = ["Fire", "Air", "Water"]; <br><strong>2</strong> console.log(elements.join())',
            '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> "Fire,Air,Water"</div>',
          ],
          myGrass : [{name:'caterpillar', wings:false},{name:'butterfly', wings:true},{name:'bee', wings:true}, {name:'spider', wings:false},{name:'ladybug', wings:true}],
          myGrassSolution : [{name:'caterpillar', wings:false},{name:'spider', wings:false}],
          completed: false,
          userSolution: "",
          boardMarkup: `
            <bracket>
              <grass>
                <caterpillar>
              </grass>
              <grass>
                <butterfly>
              </grass>
              <grass>
                <bee>
              </grass>
              <grass>
                <spider>
              </grass>
              <grass>
                <ladybug>
              </grass>
            </bracket>
          `,
          boardMarkupSolution: ` 
            <bracket>
              <grass>
                <caterpillar class= "dance">
              </grass>
              <grass>
                <spider class= "dance">
              </grass>
            </bracket>
        `,
        instructions: "<div style='font-size:20px'>Congratulations you reached the last level!<br><br> As a last exercise we ask you to show us only the bugs that DON'T have wings. You should know that every bug has a property called 'wings' and it's boolean! That will help you solve the problem, cheer up you are right at the end! 🏅😍</b></div>" 
        }
];
