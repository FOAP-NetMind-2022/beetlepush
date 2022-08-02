var levels = [
  {
    helpTitle: "Add an element at the end of the array, ",
    selectorName: "Push method",
    doThis: "Insert the orange at the end of the array",
    selector: "Push",
    syntax: "push();",
    //add link in the help page
    help: "Definition and Usage The push() method adds new items to the end of an array. It changes the length of the original array. <a href= 'https://www.w3schools.com/jsref/jsref_push.asp'> more help </a>",
    examples: [
      '<strong>1</strong>const fruits = ["Banana", "Orange", "Apple"]; <br> <strong>2</strong> fruits.push("Kiwi"); <br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong><br>  <div class="console-wrapper"> ["Banana", "Orange", "Apple", "Kiwi"] </div>',
    ],
    myGrass : ['apple'],
    myGrassSolution : ['apple', 'orange'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <orange/>
    <plate> 
    <apple/>    
    </plate>
    `

  },

  {
    helpTitle: "Remove the last of element in the array, ",
    selectorName: "Pop method",
    doThis: "Remove the orange in the end",
    selector: "pop",
    syntax: "pop();",
    help: ' DThe pop() method removes (pops) the last element of an array, changing the length of the original array. <a href= "https://www.w3schools.com/jsref/jsref_pop.asp"> more help </a>',
    examples: [
      '<strong>1</strong> const fruits = ["Banana", "Orange", "Apple"]; <br><strong>2</strong> fruits.pop();<br> <strong>3</strong> console.log(fruits);',
      '<strong>TERMINAL</strong> <br> <div class="console-wrapper"> ["Banana", "Orange"]</div>',
    ],
    myGrass : ['pickle', 'apple', 'orange'],
    myGrassSolution : ['pickle', 'apple'],
    completed: false,
    userSolution: "",
    boardMarkup: `
    <plate> 
    <pickle/>    
    </plate>
    <plate> 
    <apple/>    
    </plate>
    <plate> 
    <orange/>    
    </plate>
    `
  } 
];
