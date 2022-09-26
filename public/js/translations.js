var resources = {
  dev: { translation: { 'key': 'value' } },
  'en-US':
  {
    translation:
    {
      'resetProgress': 'Reset Progress',
      'chooseLevel': 'Choose a level',
      'example': 'Example',
      'level': "Level",
      'of': 'of',
      'header':
      {
        'share': 'Share'
      },
      'main':
      {
        'top':
        {
          'help':
          {
            'title': `Help, I'm stuck!`,
          }
        },
        'array':
        {
          // Empty
        },
        'script':
        {
          'viewer':
          {
            'name': 'Instructions',
            'expected': 'Expected results: '
          },
          'editor':
          {
            'top':
            {
              'name': 'JavaScript Editor',
              'filename': 'javascript.js'
            },
            'content':
            {
              'preview': `/* javascript would go here. */`,
              'input': 'Type in an Array method',
              'enter': 'enter'
            },
          }
        }
      },

      'footer':
      {
        'madeby': 'Made by',
        'hi': 'come by and say hi!',
        'feedback': 'Have feedback or questions? Please file an issue on ',
        'github': 'Github repo'
      },

      /*
      LEVEL FORMAT
      --------------------
      'level_XX':
      {
        'methodTitle': ``, // levels.js -> doThis
        'methodHelp': ``, // levels.js -> helpTitle
        'methodName': ``, // levels.js -> selectorName
        'desc': ``, // levels.js -> help
        'instructions': ``, // levels.js -> instructions
        'context': `` // levels.js -> contextInstructions
      },
      */

      'level_1':
      {
        'methodTitle': `Insert the 'ladybug' at the end of the array`,
        'methodHelp': `Add an element at the end of the array`,
        'methodName': `Push() method`,
        'desc': `The push() method adds new items to the end of an array. It changes the length of the original array. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push>More help</a>`,
        'instructions': `<div>To pass this level you need to use <strong>push()</strong> <i>method</i> to add a new <strong>'ladybug'</strong>at the end of the <i>array</i> <strong>'myGrass'</strong>.<br><br><i>Example:</i>&nbsp<strong>myGrass.push('ladybug');</strong></div>`,
        'context': `<div>Welcome to BeetlePush, a game where you learn how to code array methods in Javascript!</div>`
      },
      'level_2':
      {
        'methodTitle': `Remove the intrusive bug in the end`,
        'methodHelp': `Remove the last of element in the array`,
        'methodName': `Pop() method`,
        'desc': `The pop() method removes (pops) the last element of an array, changing the length of the original array. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop>More help</a>`,
        'instructions': `<div>Remove the <strong>'bee'</strong> at the end of the <i>array</i> <strong>'myGrass'</strong>, using the <strong>pop()</strong><i> method<i/>.</div>`,
        'context': `<div>Some bugs live most of their lives underground, like worms. However, others are always flying, like bees.</div>`
      },
      'level_3':
      {
        'methodTitle': `Remove the 'dragonfly' at the beginning`,
        'methodHelp': `Remove the first element in the array`,
        'methodName': `Shift() method`,
        'desc': `The shift() method removes the first array element. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift> More help</a>`,
        'instructions': `Remove the <strong>'dragonFly'</strong> at the beginning of the <i>array</i> <strong>'myGrass'</strong> , using the <strong>shift()</strong> <i>method</i>.`, 
        'context': `<div>In the world of bugs there are several ways to feed. Some, like butterflies, feed on the nectar of flowers, others like dragonflies feed on other small bugs.</div>`
      },
      'level_4':
      {
        'methodTitle': `Add the 'antQueen' at the beginning of the array`,
        'methodHelp': `Add an element at the beginning of an array`,
        'methodName': `Unshift() method`,
        'desc': `The unshift() method adds a new element at the beginning of an array. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift>More help</a>`,
        'instructions': `<div>Add the <strong>'antQueen'</strong> inside the <i>array</i>. Use <strong>unshift()</strong><i> method</i></b></div>`,
        'context': `<div>Some bugs are known for their social nature, they form colonies in which each one has a role or responsibility. Ants are insects that live and form large colonies and always need the presence of a queen ant. </div>`
      },
      'level_5':
      {
        'methodTitle': `Create a new array only with winged bugs`,
        'methodHelp': `MCreates a new array from selected elements`,
        'methodName': `Slice() method`,
        'desc': `The slice() method creates a new array from selected elements, does not change the original array.This method selects has two parameters "start" and "end" (not inclusive). <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice>More help</a>`,
        'instructions': `<div>Create a new <i>array</i>, using  <strong>slice()</strong>  <i>method</i>. Assign the result of the method to the variable <i>wingedBugs</i></div>`,
        'context': `<div>The way they move is another characteristic that differentiates groups of bugs. Some are terrestrial, others are aquatic, and others have the ability to fly. The wings can be very different in their size, color and number. </div>`
      },
      'level_6':
      {
        'methodTitle': `Replace the repeated bugs with the new ones`,
        'methodHelp': `Modifies the content of an array, adding new elements and / or removing old elements`,
        'methodName': `Splice() method`,
        'desc': `The splice() method adds/removes items to/from an array, and returns the removed item(s).`,
        'instructions': `<div>Replace the repeated bugs with <strong>'dragonFly'</strong> and <strong>'spider'</strong>. Use <strong>splice()</strong>  <i>method</i> correctly. This time, overwrite the variable <strong>myGrass</strong> with the result of the method.</div>`,
        'context': `<div>Bugs are known for their great diversity. In addition to its wide distribution throughout the planet and its thousands of thousands of species. There are so many that more than half of the world's animal species are bugs. </div>`
      },
      'level_7':
      {
        'methodTitle': `Reverse the elements of the array to restore the natural butterfly's life cycle order`,
        'methodHelp': `Reverse the order of the elements in an array`,
        'methodName': `Reverse() method`,
        'desc': `The reverse() method reverses the order of the elements in an array.This method overwrites the original array.`,
        'instructions': `<div>The correct path follows this order: <strong>'caterpillar'</strong>, <strong>'cocoon'</strong> ,   <strong>'butterfly'</strong>. Use the <strong>reverse()</strong> <i>method</i>.</div>`,
        'context': `<div>The life cycle of some bugs can be very interesting. Some simply grow in size, others change from terrestrial to aquatic life, and others are able to changing completely their appearance, such as butterflies. </div>`
      },
      'level_8':
      {
        'methodTitle': `Check if the array contains the bug 'bee'`,
        'methodHelp': `Includes returns a boolean if an array contains a specified value`,
        'methodName': `Includes() method`,
        'desc': `The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.`,
        'instructions': `<div>Use <strong>includes()</strong> <i>method</i> to know if there is a <strong>'bee'</strong> in the <i>array</i> <strong>'myGrass'</strong>. Assign the value into <strong>beeIsPresent</strong></div>`,
        'context': `<div>Most probably bees are one of the most important bugs for our ecosystems and our planet. They pollinate flowers and produce sweet honey. That is why it is important to know and protect them. </div>`
      },
      'level_9':
      {
        'methodTitle': `Concatenate the array with small 'ladybugs' after the first array`,
        'methodHelp': `Concatenates two or more arrays`,
        'methodName': `Concat() method`,
        'desc': `The concat() method concatenates (joins) two or more arrays.This method returns a new array, containing the joined arrays.`,
        'instructions': `<div>Use <strong>concat()</strong> <i>method</i> to join two <i>arrays</i> . Use <strong>'myGrass'</strong> and <strong>'myGrassBaby'</strong> so that the small <strong>'ladybugs'</strong> are in the same <i>array</i> as their parents.<br><br> Assign the result of the method into a new <i>variable</i> named <strong>'fullFamily'</strong></div>`,
        'context': `<div>Since we are born, our family takes care of us and protects us. In some bugs it is the same, the parents watch over, feed and protect their children until they grow up enough. <br> As a curious fact, did you know that a group of ladybugs went to space in 1999?</div>`
      },
      'level_10':
      {
        'methodTitle': `Cause the metamorphosis in all 'cocoon'`,
        'methodHelp': `Fills an array with a value`,
        'methodName': `Fill() method`,
        'desc': `The fill() method fills all the elements of an array with a value. Fill method overwrites the original array.`,
        'instructions': `<div>Use the <strong>fill()</strong>  <i>method</i> to transform this <strong>'cocoon'</strong> <i>array</i>  in a <strong>'butterfly'</strong> <i>array</i>, and see the power of metamorphosis.</b></div>`,
        'context': `<div>As you already know some bugs change their shape completely when they become adults. Some bugs do what is known as metamorphosis. This process is different depending on the bug, in the case of butterflies its transformation is total, first it is a caterpillar, then a cocoon and finally a beautiful butterfly.</div>`
      },
      'level_11':
      {
        'methodTitle': `Find Index of the turquoise 'dragonfly'`,
        'methodHelp': `Returns the index of the first element in an array that pass a test`,
        'methodName': `FindIndex() method`,
        'desc': `The findIndex() method returns the index of the first element in an array that pass a test (provided as a function), findIndex method returns -1 if no elements are found.`,
        'instructions': `<div>Find the position of turquoise bug in the <i>array</i> using <strong>findIndex()</strong> <i>method</i>. Assign that position to <i>varuable</i><strong>indexTurquoise</strong></div>`,
        'context': `<div>Colors are another differential characteristic in bugs. Some of the patterns are used and copied by humans. Colors can warn us of their danger, serve for reproductive success or camouflage. There are also some colorless bugs.</div>`
      },
      'level_12':
      {
        'methodTitle': `What do they have in common?`,
        'methodHelp': `Every method checks if all elements in an array pass a test (provided as a function)`,
        'methodName': `Every() method`,
        'desc': `The every() method checks if all elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for all array elements`,
        'instructions': `<div>In this level we have an array of objects. For example: {name: 'worm', fly: false, poisonous: false} taking in to account these propierties, use the every() method to find out what do they have in common. You should assign the result to <strong>canWeAllFly</strong></div>`,
        'context': `` // levels.js -> contextInstructions
      },
      'level_13':
      {
        'methodTitle': `Sort the bugs by evolution`,
        'methodHelp': `Sort the bugs by evolution`,
        'methodName': `Sort method`,
        'desc': `The sort() method sorts the elements of an array.`,
        'instructions': `<div>In this level you must order the insects by the order of their evolution.<br>You should know that each bug has 2 properties, its name and its stage of evolution ('eStage'):<br>-->[{name:'butterfly', eStage: '2'}]</b></div>`,
        'context': `` // levels.js -> contextInstructions
      },
      'level_14':
      {
        'methodTitle': `Turn ants into queen`,
        'methodHelp': `Reduce the ants`,
        'methodName': `Reduce method`,
        'desc': `The reduce() method returns a single value: the function's accumulated result.`,
        'instructions': `<div>Hello again! <br><br>In this exercise we have an array of ants, if we add each ant, we will get 4 ants (a number). Assign the value of the method into <strong>total</strong></div>`,
        'context': `` // levels.js -> contextInstructions
      },
      'level_15':
      {
        'methodTitle': `Join the ants with a chain`,
        'methodHelp': `Join the ants`,
        'methodName': `Join method`,
        'desc': `The join() method returns an array as a string.`,
        'instructions': `<div>Hello again! <br><br>in this exercise you have to transform this small group of ants into an anthill.<br><br>We need you to join them with a underscore so that they are joined with a string. Assign the result into <strong>strLinked</strong></div>`,
        'context': `` // levels.js -> contextInstructions
      },
      'level_16':
      {
        'methodTitle': `Doubles the weight of the bugs`,
        'methodHelp': `Map the bugs`,
        'methodName': `Map method`,
        'desc': `The map() calls a function once for each element in an array.`,
        'instructions': `<div>Our bugs are starving, use the <strong>map()</strong> methods to double their weight. You must assign the new array into <strong>feededBugs</strong> <br><br>Each bug has 2 properties: name and weight.<br>--> [{name:'ladybug', weight: '10'}]</div>`,
        'context': `` // levels.js -> contextInstructions
      },
    }
  },
  'es-ES':
  {
    translation:
    {
      'resetProgress': 'Reiniciar progreso',
      'chooseLevel': 'Elige un nivel',
      'example': 'Ejemplo',
      'level': "Nivel",
      'of': 'de',
      'header':
      {
        'share': 'Compartir'
      },
      'main':
      {
        'top':
        {
          'help':
          {
            'title': `Ayuda, estoy atascado!`,
          }
        },
        'array':
        {
          // Empty
        },
        'script':
        {
          'viewer':
          {
            'name': 'Instrucciones',
            'expected': 'Resultado esperado: '
          },
          'editor':
          {
            'top':
            {
              'name': 'Editor de JavaScript',
              'filename': 'javascript.js'
            },
            'content':
            {
              'preview': `/* Tu código javascript iría aquí */`,
              'input': 'Escribe un método de Array',
              'enter': 'enter'
            },
          }
        }
      },

      'footer':
      {
        'madeby': 'Hecho por',
        'hi': 'ven y salúdanos!',
        'feedback': 'Tienes sugerencias o preguntas? Por favor, abre una propuesta en',
        'github': 'nuestro repositorio de Github'
      },
     
      'level_1':
      {
        'methodTitle': `Inserta la 'ladybug' al final del array`,
        'methodHelp': `Añade un elemento al final del array`,
        'methodName': `Método Push()`,
        'desc': `El método push() añade nuevos elementos al final de un array. Este método cambia la longitud del array original. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push>Más ayuda</a>`,
        'instructions': `<div>Para pasar este nivel debes usar el <i>método</i> <strong>push()</strong> para añadir una nueva <strong>'ladybug'</strong> (mariquita) al final del <i>array</i> <strong>'myGrass'</strong>.<br><br><i>Ejemplo:</i>&nbsp<strong>myGrass.push('ladybug');</strong></div>`,
        'context': `<div>Welcome to BeetlePush, a game where you learn how to code array methods in Javascript!</div>`
      },
      'level_2':
      {
        'methodTitle': `Elimina el insecto invasor al final`,
        'methodHelp': `Elimina el último elemento del array`,
        'methodName': `Método Pop()`,
        'desc': `El método pop() elimina (pops) el último elemento de un array. Este método cambia la longitud del array original. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop>Más ayuda</a>`,
        'instructions': `<div>Quita la <strong>'bee'</strong> (abeja) al final del <i>array</i> <strong>'myGrass'</strong>, usando el <i>método<i/> <strong>pop()</strong>.</div>`,
        'context': `<div>Algunos insectos viven la mayoría de su vida bajo tierra, como los gusanos. Sin embargo, otros siempre están volando, como las abejas.</div>`
      },
      'level_3':
      {
        'methodTitle': `Quita la "dragonfly" del principio`,
        'methodHelp': `Quita el primer elemento de un array`,
        'methodName': `Método Shift()`,
        'desc': `El método shift() elimina el primer elemento de un array. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift> Más ayuda</a>`,
        'instructions': `Quita la <strong>'dragonFly'</strong> (libélula) al principio del <i>array</i> <strong>'myGrass'</strong> , usando el <i>método</i> <strong>shift()</strong>.`, 
        'context': `<div>En el mundo de los insectos hay varias formas de alimentarse. Algunos, como las mariposas, se alimentan del néctar de las flores, otros, como las libélulas, se alimentan de otros pequeños insectos.</div>`
      },
      'level_4':
      {
        'methodTitle': `Añade la 'antQueen' al principio del array`,
        'methodHelp': `Añade un elemento al principio de un array`,
        'methodName': `Método Unshift()`,
        'desc': `El método unshift() añade un nuevo elemento al principio de un array. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift>Más ayuda</a>`,
        'instructions': `<div>Crea un nuevo <i>array</i>, usando el <i>método</i> <strong>slice()</strong>. Asignar el resultado del método a la variable <i>wingedBugs</i></div>`,
        'context': `<div>Some bugs are known for their social nature, they form colonies in which each one has a role or responsibility. Ants are insects that live and form large colonies and always need the presence of a queen ant. </div>`
      },
      'level_5':
      {
        'methodTitle': `Sustituye los insectos repetidos por los nuevos`,
        'methodHelp': `Modifica el contenido de un array, añadiendo nuevos elementos y/o eliminando los antiguos`,
        'methodName': `Método Splice()`,
        'desc': `El método splice() añade/elimina elementos a/de un array, y devuelve el/los elementos eliminados. <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice>Más ayuda</a>`,
        'instructions': `<div>Sustituye los insectos repetidos por <strong>'dragonFly'</strong> (libélula) y <strong>'spider'</strong> (araña). Usa el <i>método</i> <strong>splice()</strong> corretcamente. Esta vez, sobrescribe la variable <strong>myGrass</strong> con el resultado del método.</div>`,
        'context': `<div>Los insectos son conocidos por su gran diversidad. Además de su amplia distribución por todo el planeta y sus miles de miles de especies. Son tantos que más de la mitad de las especies animales del mundo son bichos.</div>`
      },

      'level_16':
      {
        'methodTitle': `Duplica el peso de los insectos`,
        'methodHelp': `Transforma los insectos`,
        'desc': `El map() llama una función una vez por cada elemento del array. <a href= 'https://www.w3schools.com/jsref/jsref_map.asp'> Más ayuda. </a>`,
        'instructions': `<div>Nuestros insectos están hambrientos, usa el <i>método</i> <strong>map()</strong> para duplicar su peso. Debes asignar el nuevo array en la variable <strong>feededBugs</strong></div>`,
        'context': `` // levels.js -> contextInstructions
      },

    }
  },
}