var levels = [
  /*********************************
   * LEVEL 1 (case 0) PUSH METHOD
   * *******************************/ 
    { 
      helpTitle: "Add an element at the end of the array, ",
      selectorName: "Push() method",
      doThis: "Insert the 'ladybug' at the end of the array",
      selector: ".dance",
      syntax: "push();",
      regExp: "myGrass\.push.*ladybug",
      //add link in the help page
      help: "The push() method adds new items to the end of an array. It changes the length of the original array. ",
      examples: [
        '<strong>1</strong>const fruits = ["Banana", "Orange", "Apple"]; <br> <strong>2</strong> fruits.push("Kiwi"); <br> <strong>3</strong> console.log(fruits);',
        '<strong>TERMINAL</strong><br>  <div class="console-wrapper"> ["Banana", "Orange", "Apple", "Kiwi"] </div>',
      ],
      variableToCheck: "myGrass", // la variable que vamos a evaluar y que debe llenar el usuario para saber si el ejercicio es correcto
      myGrass :"var myGrass = ['ladybug','ladybug','ladybug','ladybug'];\n\nmyGrass.push();",
      myGrassSolution : ['ladybug','ladybug','ladybug','ladybug','ladybug'], // si es un array, colocal sus elementos separados por comas
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
          <ladybug class="dance">
        </grass>
      `,
      boardMarkupSolution: ` 
        <bracket>
          <grass>
            <ladybug class="dance">
          </grass>
          <grass>
            <ladybug class="dance">
          </grass> 
          <grass>
            <ladybug class="dance">
          </grass>
          <grass>
            <ladybug class="dance">
          </grass>
          <grass>
            <ladybug class="dance">
          </grass>
        </bracket>
  //   `,
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
  
  
  
    /****************************
   * LEVEL 2 (case 1) POP METHOD
   * ****************************/ 
    {
      helpTitle: "Remove the last of element in the array, ",
      selectorName: "Pop() method",
      doThis: "Remove the intrusive bug in the end",
      selector: "bee",
      syntax: "pop();",
      regExp: "myGrass\.pop\(\);?",
      help: " The pop() method removes (pops) the last element of an array, changing the length of the original array.",
      examples: [
        '<strong>1</strong> const fruits = ["Banana", "Orange", "Apple"]; <br><strong>2</strong> fruits.pop();<br> <strong>3</strong> console.log(fruits);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Banana", "Orange"]</div>',
      ],
      solutionIsArray: true,
      variableToCheck: "myGrass",
      myGrass : "var myGrass= ['worm','worm','bee'];\n\n",
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
  
    /******************************
   * LEVEL 3 (case 2) SHIFT METHOD
   * ******************************/ 
    {
      helpTitle: "Remove the first element in the array ",
      selectorName: "Shift() method",
      doThis: "Remove the 'dragonfly' at the beginning",
      selector: "dragonFly",
      syntax: "shift();",
      regExp: "myGrass\.shift\(\);?",
      help: ' The shift() method removes the first array element.',
      examples: [
        '<strong>1</strong> const colors = ["Red", "Orange", "Black", "Yellow"]; <br><strong>2</strong> colors.shift();<br> <strong>3</strong> console.log(colors);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Orange", "Black", "Yellow"]</div>',
      ],
      myGrass : "var myGrass = ['dragonFly','butterfly','butterfly','butterfly','butterfly']; \n\n",
      solutionIsArray: true,
      variableToCheck: "myGrass",
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
  
    /********************************
   * LEVEL 4 (case 3) UNSHIFT METHOD
   * ********************************/ 
    {
      helpTitle: "Add element at the beginning of an array ",
      selectorName: "Unshift() method",
      doThis: "Add the 'antQueen' at the beginning of the array",
      selector: ".dance",
      syntax: "unshift();",
      regExp: "myGrass\.unshift",
      help: ' The unshift() method adds a new element at the beginning of an array . ',
      examples: [
        '<strong>1</strong> const names = ["Maria", "Jesus", "Frank"]; <br><strong>2</strong> names.unshift("Laura");<br> <strong>3</strong> console.log(names);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Laura","Maria", "Jesus", "Frank"]</div>',
      ],
      variableToCheck: "myGrass",
      myGrass : "var myGrass = ['ant','ant','ant','ant'];\n\n",
      myGrassSolution : ['antQueen','ant','ant','ant','ant'],
      completed: false,
      userSolution: "",
      boardMarkup: `
        <grass>
          <antQueen class="dance">
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
            <antQueen class="dance">
          </grass>
          <grass>
            <ant class="dance">
          </grass>
          <grass>
            <ant class="dance">
          </grass>
          <grass>
            <ant class="dance">
          </grass>
          <grass>
            <ant class="dance">
          </grass>
        </bracket>
      `,
      contextInstructions: "<div>Some bugs are known for their social nature, they form colonies in which each one has a role or responsibility. Ants are insects that live and form large colonies and always need the presence of a queen ant. </div>" ,
      instructions: "<div>Add the <strong>'antQueen'</strong> inside the <i>array</i>. Use <strong>unshift()</strong><i> method</i></b></div>"
    },
    /******************************
   * LEVEL 5 (case 4) SLICE METHOD
   * ******************************/ 
    {
      helpTitle: "Creates a new array from selected elements",
      selectorName: "Slice() method",
      doThis: "Create a new array only with winged bugs",
      selector: "bee, butterfly, dragonFly",
      syntax: "slice();",
      regExp: "myGrass\.slice",
      help: ' The slice() method creates a new array from selected elements, does not change the original array.This method selects has two parameters "start" and "end" (not inclusive).',
      examples: [
        '<strong>1</strong> const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; <br><strong>2</strong> const citrus = fruits.slice(1,3);<br> <strong>3</strong> console.log(citrus);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Orange", "Lemon"]</div>',
      ],
      variableToCheck: "wingedBugs",
      myGrass : "var myGrass = ['worm','butterfly','bee','dragonFly','spider'];\n\nvar wingedBugs;",
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
      instructions:"<div>Create a new <i>array</i>, using  <strong>slice()</strong>  <i>method</i>. Assign the result of the method to the variable <i>wingedBugs</i></div>"
    },
  
     /******************************
   * LEVEL 6 (case 5) SPLICE METHOD
   * ******************************/ 
    {
      helpTitle: "Modifies the content of an array, adding new elements and / or removing old elements",
      selectorName: "Splice() method",
      doThis: "Replace the repeated bugs with the new ones",
      selector: "dragonFly, spider, .dance",
      syntax: "splice();",
      regExp: "myGrass\.splice",
      help: ' The splice() method adds/removes items to/from an array, and returns the removed item(s). ',
      examples: [
        '<strong>1</strong> const office = ["pencil", "pen", "orange", "salad", "notebook", "marker"]; <br><strong>2</strong> office.splice(2,2, "folder", "scissors");<br> <strong>3</strong> console.log(office);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["pencil", "pen", "folder", "scissors", "notebook", "marker"]</div>',
      ],
      myGrass : "var myGrass = ['bee','ant','ant','worm','butterfly','worm'];\n\nmyGrass;",
      variableToCheck: "myGrass",
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
  
    instructions:"<div>Replace the repeated bugs with <strong>'dragonFly'</strong> and <strong>'spider'</strong>. Use <strong>splice()</strong>  <i>method</i> correctly. This time, overwrite the variable <strong>myGrass</strong> with the result of the method.</div>"
    },
  
     /********************************
   * LEVEL 7 (case 6) REVERSE METHOD
   * *********************************/ 
    {
      helpTitle: "Reverse the order of the elements in an array",
      selectorName: "Reverse() method",
      doThis: "Reverse the elements of the array to restore the natural butterfly's life cycle order",
      regExp: "myGrass\.reverse",
      selector: "butterfly, cocoon, caterpillar",
      syntax: "reverse();",
      help: ' The reverse() method reverses the order of the elements in an array.This method overwrites the original array.',
      examples: [
        '<strong>1</strong> const cars = ["BMW", "Volvo", "Saab", "Ford"]; <br><strong>2</strong> cars.reverse();<br> <strong>3</strong> console.log(cars);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Ford", "Saab", "Volvo", "BMW"]</div>',
      ],
  
      myGrass : "var myGrass = ['butterfly','cocoon','caterpillar'];\n\n",
      myGrassSolution : ['caterpillar','cocoon','butterfly'],
      variableToCheck: "myGrass",
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
  
     /********************************
   * LEVEL 8 (case 7) INCLUDES METHOD
   * *********************************/ 
    {
      helpTitle: "Includes returns a boolean if an array contains a specified value",
      selectorName: "Includes() method",
      doThis: "Check if the array contains the bug 'bee'",
      selector: "bee",
      syntax: "includes();",
      regExp: "myGrass\.includes..bee",
      help: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. ',
      examples: [
        '<strong>1</strong> const vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"]; <br><strong>2</strong> console.log(vegetables.includes("Turnip"));',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> true</div>',
      ],
      variableToCheck: "beeIsPresent",
      myGrass : "var myGrass = ['ladybug','butterfly','ant','worm','caterpillar','bee'];\n\nvar beeIsPresent;\n",
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
      
      instructions:"<div>Use <strong>includes()</strong> <i>method</i> to know if there is a <strong>'bee'</strong> in the <i>array</i> <strong>'myGrass'</strong>. Assign the value into <strong>beeIsPresent</strong></div>"
    },
  
   /********************************
   * LEVEL 9 (case 8) CONCAT METHOD
   * *********************************/ 
     {
      helpTitle: "Concatenates two or more arrays",
      selectorName: "Concat() method",
      doThis: "Concatenate the array with small 'ladybugs' after the first array",
      selector: ".small",
      regExp: "myGrass\.concat",
      syntax: "concat();",
      help: ' The concat() method concatenates (joins) two or more arrays.This method returns a new array, containing the joined arrays. ',
      examples: [
        '<strong>1</strong> const flowers = ["rose", "tulip", "daisy"]; <br><strong>2</strong> const flowers2 = ["orchid", "lily"]; <br><strong>3</strong> const flowers3 = flowers.concat(flowers2);<br> <strong>4</strong> console.log(flowers3);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["rose", "tulip", "daisy", "orchid", "lily"]</div>',
      ],
      myGrass : "var myGrass = ['ladybug','ladybug','ladybug'];\nvar myGrassBaby = ['ladybugbaby','ladybugbaby','ladybugbaby'];\n\nvar fullFamily;",
      variableToCheck: "fullFamily",
      myGrassSolution : ['ladybug','ladybug','ladybug','ladybugbaby','ladybugbaby','ladybugbaby'],
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
  
      instructions:"<div>Use <strong>concat()</strong> <i>method</i> to join two <i>arrays</i> . Use <strong>'myGrass'</strong> and <strong>'myGrassBaby'</strong> so that the small <strong>'ladybugs'</strong> are in the same <i>array</i> as their parents.<br><br> Assign the result of the method into a new <i>variable</i> named <strong>'fullFamily'</strong></div>"
    },
   /********************************
   * LEVEL 10 (case 9) FILL METHOD
   * *********************************/ 
     {
      helpTitle: "Fills an array with a value",
      selectorName: "Fill() method",
      doThis: "Cause the metamorphosis in all 'cocoon'",
      regExp: "myGrass\.fill",
      selector: "cocoon, butterfly",
      syntax: "fill();",
      help: "The fill() method fills all the elements of an array with a value. Fill method overwrites the original array. ",
      examples: [
        '<strong>1</strong> const jobs = ["teacher", "programmer", "designer"]; <br><strong>2</strong> jobs.fill("engineer"); <br><strong>3</strong> console.log(jobs);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["engineer", "engineer", "engineer"]</div>',
      ],
      myGrass : "var myGrass = ['cocoon','cocoon','cocoon','cocoon'];\n\n",
      myGrassSolution : ['butterfly','butterfly','butterfly','butterfly'],
      solutionIsArray: true,
      variableToCheck: "myGrass",
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
  
     /********************************
   * LEVEL 11 (case 10) FIND METHOD
   * *********************************/ 
    //  {
    //   helpTitle: "Returns the value of the first element in an array that pass a test",
    //   selectorName: "Find() method",
    //   doThis: "Find the first legless bug ",
    //   selector: "caterpillar",
    //   regExp: "myGrass\.find",
    //   syntax: "find();",
    //   help: "The find() method returns the value of the first element in an array that pass a test (provided as a function), find method returns undefined if no elements are found." ,
    //   examples: [
    //     '<strong>1</strong> const animals = ["dog", "cat", "bird", "fish"]; <br><strong>2</strong> const firstFish = animals.find(animal => animal === "fish");<br> <strong>3</strong> console.log(firstFish);',
    //     '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> fish</div>',
    //   ],
    //   myGrass : [8,0,6,6],
    //   myGrassSolution : 0,
    //   completed: false,
    //   userSolution: "",
    //   boardMarkup: `
    //     <bracket>
    //       <grass>
    //         <spider>
    //       </grass>
    //       <grass>
    //         <caterpillar>
    //       </grass>
    //       <grass>
    //         <ant>
    //       </grass>
    //       <grass>
    //         <ladybug>
    //       </grass>
    //     </bracket>
    //   `,
    //   boardMarkupSolution: ` 
      
    //   <grass>
    //    <caterpillar>
    //   </grass>
    
     
    // `,
    // contextInstructions: "<div>Another of the great differences that exist between bugs is their number of legs. Some bugs can have many legs, like centipedes, and others have no legs, like caterpillars or worms.The function of the legs is to move but they are also crucial for hunting, for reproducing and even grasshoppers have an ear on their legs!!</div>" ,
    // instructions:"We have an array that represents the numbers of <i>legs</i> of each bug. <div>Use <strong>find()</strong> <i>method</i> to find the legless bug.</div>"
    // },
  
     /***********************************
   * LEVEL 12 (case 11) FINDINDEX METHOD
   * *********************************/ 
     {
      helpTitle: "Returns the index of the first element in an array that pass a test",
      selectorName: "FindIndex() method",
      doThis: "Find Index of the turquoise 'dragonfly'",
      selector: "dragonFly",
      regExp: "myGrass\.findIndex",
      syntax: "findIndex();",
      help: "The findIndex() method returns the index of the first element in an array that pass a test (provided as a function), findIndex method returns -1 if no elements are found. ",
      examples: [
        '<strong>1</strong> const numbers = [1, 2, 3, 4, 5]; <br><strong>2</strong> const firstEven = numbers.findIndex(number => number % 2 === 0);<br> <strong>3</strong> console.log(firstEven);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> 1</div>',
      ],
      myGrass : "var myGrass = ['red','pink','black','turquoise','yellow'];\n\nvar indexTurquoise;",
      myGrassSolution : 3,
      variableToCheck: "indexTurquoise",
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
    instructions:"<div>Find the position of turquoise bug in the <i>array</i> using <strong>findIndex()</strong> <i>method</i>. Assign that position to <i>varuable</i><strong>indexTurquoise</strong></div>"
    },
    
     /********************************
   * LEVEL 13 (case 12) SOME METHOD.
   * TODO: Metodo confuso tal y como se usa.
   * *********************************/ 
    //  {
    //   helpTitle: "Checks if any of the elements in an array pass a test (provided as a function)",
    //   selectorName: "Some() method",
    //   doThis: "Check if there is any 'poisonous' bug ",
    //   selector: ".dance",
    //   syntax: "some();",
    //   help: "The some() method checks if any of the elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for one of the array elements ",
    //   examples: [
    //     '<strong>1</strong> const foods = ["apple", "banana", "cherry", "mango"]; <br><strong>2</strong> const hasMango = foods.some(food => food === "mango");<br> <strong>3</strong> console.log(hasMango);',
    //     '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> true</div>',
    //   ],
    //   myGrass : ['non-poisonous','poisonous','non-poisonous','poisonous'],
    //   myGrassSolution : true,
    //   completed: false,
    //   userSolution: "",
    //   boardMarkup: `
    //     <bracket>
    //       <grass>
    //         <ladybug>
    //       </grass>
    //       <grass>
    //         <spider>
    //       </grass>
    //       <grass>
    //         <antQueen>
    //       </grass>
    //       <grass>
    //         <bee>
    //       </grass>
    //     </bracket>
    //   `,
    //   boardMarkupSolution: ` 
    //   <bracket>
    //   <grass>
    //    <ladybug>
    //   </grass>
    //   <grass>
    //    <spider class="dance">
    //   </grass>
    //   <grass>
    //    <antQueen>
    //   </grass>
    //   <grass>
    //    <bee class="dance">
    //   </grass>
    //   </bracket>
    // `,
    // contextInstructions: "<div>You probably know someone who has been stung by a wasp or even yourself. Not all bugs are poisonous but some of these poisonous bugs can be deadly to humans.</div>",
    // instructions:"<div>Use the <strong>some()</strong> <i>method</i> to find if there is any <strong>'poisonous'</strong> bug in the <i>array</i>.</div>" 
    // },
  
    /***  ******************
     * LEVEL 14
     *  *********************/
     {
      helpTitle: "Every method checks if all elements in an array pass a test (provided as a function)",
      selectorName: "Every() method",
      doThis: "What do they have in common?",
      selector: ".dance",
      regExp: "myGrass\.every(.*\.fly)", // TODO: cambiar esto por regexp lookahead. Ahora simplemente mira si en algun sitio hemos usado la propiedad "fly"
      syntax: "every();",
      help: "The every() method checks if all elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for all array elements ",
      examples: [
        '<strong>1</strong> const names = ["John", "Mary", "Joe"]; <br><strong>2</strong> const allNames = names.every(name => name.length > 3);<br> <strong>3</strong> console.log(allNames);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> false</div>',
      ],
      myGrass : `var myGrass=[{name:'ladybug',fly:true, poisonous: false, color: 'red'},
               {name:'bee',fly:true, poisonous: true, color:'yellow'},
               {name:'dragonFly',fly:true, poisonous: false, color:'turquoise'}];\n\nvar canWeAllFly;`,
      myGrassSolution : true,
      variableToCheck: "canWeAllFly",
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
      instructions: "<div style='font-size:20px'>In this level we have an array of objects. For example: {name: 'worm', fly: false, poisonous: false} taking in to account these propierties, use the every() method to find out what do they have in common. You should assign the result to <strong>canWeAllFly</strong></div>" 
    
    },
  
     /********************************
   * LEVEL 15 (case 14) FILTER METHOD
   * TODO: Nope, sorry. No queda claro, porque es un array de números, pero es difícil relacionarlo con antenas.
   * *********************************/ 
    //  {
    //   helpTitle: "Shows bugs with antennae",
    //   selectorName: "Filter method",
    //   doThis: "What bugs have antennae?",
    //   selector: ".dance",
    //   syntax: "filter();",
    //   help: "The filter() method creates a new array filled with elements that pass a test provided by a function. <a href= 'https://www.w3schools.com/jsref/jsref_filter.asp'> More help. </a>",
    //   examples: [
    //     '<strong>1</strong> const phones = ["iPhone 14", "nokia 1990", "Samsung Z Flip 4"]; <br><strong>2</strong> const newPhones = phones.filter(phone => phone.length > oldPhone);<br> <strong>3</strong> console.log (newPhones);',
    //     '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["iPhone 14", "Samsung Z Flip 4"]</div>',
    //   ],
    //   myGrass : [2, 0, 0, 2, 2],
    //   myGrassSolution : [2,2,2],
    //   completed: false,
    //   userSolution: "",
    //   boardMarkup: `
    //     <bracket>
    //       <grass>
    //         <ant class="dance">
    //       </grass>
    //       <grass>
    //         <spider>
    //       </grass>
    //       <grass>
    //         <caterpillar>
    //       </grass>
    //       <grass>
    //         <butterfly class="dance">
    //       </grass>
    //       <grass>
    //         <bee class="dance">
    //       </grass>
    //     </bracket>
      
    //   `,
    //   boardMarkupSolution: ` 
    //   <bracket>
    //   <grass>
    //    <ladybug class= "dance">
    //   </grass>
    //   <grass>
    //    <bee class= "dance">
    //   </grass>
    //   <grass>
    //    <dragonFly class= "dance">
    //   </grass>
    //   </bracket>
    // `,
    // contextInstructions: "<div> Congratulations you have reached an important level. Now things will get harder!.</div>" ,
    // instructions:"<div>Use the <strong>filter()</strong> <i>method</i> to find out the common features.</div><br><br><div><i>Example:</i> <strong>{name: 'worm', fly: false, poisonous: false}</strong> taking into account these properties</div>"
    
    // },
  
    {
      helpTitle: "Sort the bugs by evolution",
      selectorName: "Sort method",
      doThis: "Sort the bugs by evolution",
      selector: ".dance",
      syntax: "sort();",
      regExp: "myGrass\.sort(.*\.eStage)", // TODO: cambiar esto por regexp lookahead. Ahora simplemente mira si en algun sitio hemos usado la propiedad "eStage"
      help: "The sort() method sorts the elements of an array. <a href= 'https://www.w3schools.com/jsref/jsref_sort.asp'> More help. </a>",
      examples: [
      '<strong>1</strong> const evolution = [{name:"tadpole", eStage: "1"}, {name:"egg", eStage: "0"},{name:"frog", eStage: "2"}]; <br><strong>2</strong> evolution.sort((a, b) =>{return a.eStage - b.eStage;});<br> <strong>3</strong> console.log(evolution);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["egg", "tadpole", "frog"]</div>',
      ],
      myGrass : `var myGrass = [{name:'butterfly', eStage: '2'},
      {name:'caterpillar', eStage: '0'},{name:'cocoon', eStage: '1'}];\n\nmyGrass;`,
      myGrassSolution : [{name:'caterpillar', eStage: '0'},{name:'cocoon', eStage: '1'},{name:'butterfly', eStage: '2'}],
      completed: false,
      variableToCheck: "myGrass",
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
      instructions: "<div style='font-size:20px'>In this level you must order the insects by the order of their evolution.<br>You should know that each bug has 2 properties, its name and its stage of evolution ('eStage'):<br>-->[{name:'butterfly', eStage: '2'}]</b></div>" 
    },
  
    {
      helpTitle: "Reduce the ants ",
      selectorName: "Reduce method",
      doThis: "Turn ants into queen",
      regExp: "myGrass\.reduce", 
      selector: ".dance",
      syntax: "reduce();",
      help: "The reduce() method returns a single value: the function's accumulated result.<a href= 'https://www.w3schools.com/jsref/jsref_reduce.asp'> More help. </a>",
      examples: [
        '<strong>1</strong> const numbers = [1, 2, 3, 4]; <br><strong>2</strong> const sum = numbers.reduce((previousNum, actualNum) =>{return previousNum + actualNum;}); <br><strong>3</strong> console.log (sum);',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> 10</div>',
        
      ],
      myGrass : "var myGrass = [1,1,1,1];\n\nvar total;",
      myGrassSolution : 4,
      variableToCheck: "total",
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
      instructions: "<div style='font-size:20px'>Hello again! <br><br>In this exercise we have an array of ants, if we add each ant, we will get 4 ants (a number). Assign the value of the method into <strong>total</strong></div>" 
    },
    {
      helpTitle: "Join the ants ",
      selectorName: "Join method",
      doThis: "Join the ants with a chain",
      regExp: "myGrass\.join.*_", 
      selector: ".dance",
      syntax: "join();",
      help: "The join() method returns an array as a string.<a href= 'https://www.w3schools.com/jsref/jsref_join.asp'> More help. </a>",
      examples: [
        //example with every method using names array
        '<strong>1</strong> const elements = ["Fire", "Air", "Water"]; <br><strong>2</strong> console.log(elements.join())',
        '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> "Fire,Air,Water"</div>',
        
      ],
      myGrass : 'var myGrass = ["ant","ant","ant"];\n\nvar strLinked;',
      myGrassSolution : "ant_ant_ant",
      variableToCheck: "strLinked",
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
          <grass style='height:5px;width:30px'>
          </grass>
          <grass>
            <ant class= "dance">
          </grass>
          <grass style='height:5px;width:30px'>
          </grass>
          <grass>
            <ant class= "dance">
          </grass>
    `,
    instructions: "<div style='font-size:20px'>Hello again! <br><br>in this exercise you have to transform this small group of ants into an anthill.<br><br>We need you to join them with a underscore so that they are joined with a string. Assign the result into <strong>strLinked</strong></div>" 
    },
    {
      helpTitle: "Map the bugs",
      selectorName: "Map method",
      doThis: "Doubles the weight of the bugs",
      selector: ".dance",
      regExp: "myGrass\.map.*", 
  
      syntax: "map();",
      help: "The map() calls a function once for each element in an array.<a href= 'https://www.w3schools.com/jsref/jsref_map.asp'> More help. </a>",
      examples: [
        //falta pensar un ejemplo
        '<strong>1</strong> const list =  [1, 2, 3, 4, 5]; <br><strong>2</strong> const newlist = list.map(sum(actualElement) {return actualElement + 1; }); <br><strong>3</strong> console.log (newlist);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> [2, 3, 4, 5, 6]</div>',
        
      ],
      myGrass : `var myGrass = [{name:'ladybug', weight: 10},{name:'spider', weight: 30},
      {name:'dragonfly', weight: 15}, {name:'ant', weight: 2}];\n\nvar feededBugs;`,
      myGrassSolution : [{name:'ladybug', weight: 20},{name:'spider', weight: 60},{name:'dragonfly', weight: 30}, {name:'ant', weight: 4}],
      completed: false,
      userSolution: "",
      variableToCheck: "feededBugs",
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
    instructions: "<div>Our bugs are starving, use the <strong>map()</strong> methods to double their weight. You must assign the new array into <strong>feededBugs</strong> <br><br>Each bug has 2 properties: name and weight.<br>--> [{name:'ladybug', weight: '10'}]</div>" 
    },
    
  
  ];