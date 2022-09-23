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
      //Main
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

      //Footer
      'footer':
      {
        'madeby': 'Made by',
        'hi': 'come by and say hi!',
        'feedback': 'Have feedback or questions? Please file an issue on ',
        'github': 'Github repo'
      },


      /*
      FORMATO NIVELES
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
        'instructions': `<div>Create a new <i>array</i>, using  <strong>slice()</strong>  <i>method</i>. Assign the result of the method to the variable <i>wingedBugs</i></div>`,
        'context': `<div>The way they move is another characteristic that differentiates groups of bugs. Some are terrestrial, others are aquatic, and others have the ability to fly. The wings can be very different in their size, color and number. </div>`
      },
      'level_5':
      {
        'methodTitle': `Replace the repeated bugs with the new ones`,
        'methodHelp': `Modifies the content of an array, adding new elements and / or removing old elements`,
        'methodName': `Slice() method`,
        'desc': `The slice() method adds/removes items to/from an array, and returns the removed item(s). <a target="_blank" href=https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice>More help</a>`,
        'instructions': `<div>Replace the repeated bugs with <strong>'dragonFly'</strong> and <strong>'spider'</strong>. Use <strong>splice()</strong>  <i>method</i> correctly. This time, overwrite the variable <strong>myGrass</strong> with the result of the method.</div>`,
        'context': `<div>Bugs are known for their great diversity. In addition to its wide distribution throughout the planet and its thousands of thousands of species. There are so many that more than half of the world's animal species are bugs. </div>`
      },
      'level_6':
      {
        'methodTitle': 'Replace the repeated bugs with the new ones',
        'methodHelp': 'Modifies the content of an array, adding new elements and / or removing old elements',
        'methodName': "Splice() method",
        'desc1': 'The splice() method adds/removes items to/from an array, and returns the removed item(s).',
        'desc2': ' More help',
        'lore': ''
      },
      'level_7':
      {
        'methodTitle': 'Reverse the elements of the array to restore the natural order',
        'methodHelp': 'Reverse the order of the elements in an array',
        'methodName': "Reverse method",
        'desc1': 'The reverse() method reverses the order of the elements in an array.This method overwrites the original array.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_8':
      {
        'methodTitle': 'Check if the array contains a bee',
        'methodHelp': 'Includes returns a boolean if an array contains a specified value',
        'methodName': "Includes method",
        'desc1': 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_9':
      {
        'methodTitle': 'Concatenate the array with small ladybugs after the first array',
        'methodHelp': 'Concatenates two or more arrays',
        'methodName': "Concat method",
        'desc1': 'The concat() method concatenates (joins) two or more arrays.This method returns a new array, containing the joined arrays.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_10':
      {
        'methodTitle': 'Make all the cocoons metamorphose',
        'methodHelp': 'Fills an array with an specific value',
        'methodName': "Fill method",
        'desc1': 'The fill() method fills all the elements of an array with a value. Fill method overwrites the original array.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_11':
      {
        'methodTitle': 'Find the first bug which has no legs',
        'methodHelp': 'Returns the value of the first element in an array that pass a test',
        'methodName': "Find method",
        'desc1': 'The find() method returns the value of the first element in an array that pass a test (provided as a function), find method returns undefined if no elements are found.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_12':
      {
        'methodTitle': 'Find the index of the turquoise dragonfly',
        'methodHelp': 'Returns the index of the first element in an array that pass a test',
        'methodName': "FindIndex method",
        'desc1': 'The find() method returns the value of the first element in an array that pass a test (provided as a function), find method returns undefined if no elements are found.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_13':
      {
        'methodTitle': 'Check if there is any poisonous bug',
        'methodHelp': 'Checks if any of the elements in an array pass a test (provided as a function)',
        'methodName': "Some method",
        'desc1': 'The some() method checks if any of the elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for one of the array elements',
        'desc2': ' More help',
        'lore': ''
      },
      'level_14':
      {
        'methodTitle': 'What do they have in common?',
        'methodHelp': 'The Every method checks if all elements in an array pass a test (provided as a function)',
        'methodName': "Every method",
        'desc1': `The every() method checks if all elements in an array pass a test (provided as a function).Method return true/false if the function returns true/false for all array elements`,
        'desc2': ' More help',
        'lore': ''
      },
      'level_16':
      {
        'methodTitle': `Doubles the weight of the bugs`, // levels.js -> doThis
        'methodHelp': `Map the bugs`, // levels.js -> helpTitle
        'methodName': `Map method`, // levels.js -> selectorName
        'desc': `The map() calls a function once for each element in an array.<a href= 'https://www.w3schools.com/jsref/jsref_map.asp'> More help. </a>`, // levels.js -> help
        'instructions': `<div>Our bugs are starving, use the <strong>map()</strong> methods to double their weight. You must assign the new array into <strong>feededBugs</strong></div>`, // levels.js -> instructions
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
      //Main
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

      //Footer
      'footer':
      {
        'madeby': 'Hecho por',
        'hi': 'ven y salúdanos!',
        'feedback': 'Tienes sugerencias o preguntas? Por favor, abre una propuesta en',
        'github': 'nuestro repositorio de Github'
      },


      /*
      NIVELES
      --------------------
      methodTitle = doThis
      methodHelp = helpTitle
      methodName = selectorName
      desc1 = help
      desc2 = <a> dentro de help
      lore = 
      */
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
        'context': `<div>La forma de desplazarse es otra característica que diferencia a los grupos de bichos. Algunos son terrestres, otros acuáticos y otros tienen la capacidad de volar. Las alas pueden ser muy diferentes en su tamaño, color y número.</div>`
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
      'level_6':
      {
        'methodTitle': 'Sustituye los bichos repetidos por los nuevos',
        'methodHelp': 'Modifica el contenido de un array, añadiendo nuevos elementos y/o eliminando los antiguos',
        'methodName': "Método Splice",
        'desc1': 'El método splice() añade/elimina elementos a/de un array, y devuelve el/los elementos eliminados.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_7':
      {
        'methodTitle': 'Invierte los elementos del array para restablecer el orden natural',
        'methodHelp': 'Invierte el orden de los elementos de un array',
        'methodName': "Método Reverse",
        'desc1': 'El método reverse() invierte el orden de los elementos de un array. Este método sobrescribe el array original.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_8':
      {
        'methodTitle': 'Comprueba si el array contiene una abeja',
        'methodHelp': 'Devuelve un booleano si un array contiene un valor especificado',
        'methodName': "Método Includes",
        'desc1': 'El método includes() determina si un array incluye un determinado valor entre sus entradas, devolviendo true (cierto) o false (falso) según corresponda.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_9':
      {
        'methodTitle': 'Concatena el array con pequeñas mariquitas después del primer array',
        'methodHelp': 'Concatena dos o más arrays',
        'methodName': "Método Concat",
        'desc1': 'El método concat() concatena (une) dos o más arrays y devuelve un nuevo array que contiene ambos arrays unidos.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_10':
      {
        'methodTitle': 'Haz que todos los capullos metamorfoseen',
        'methodHelp': 'Rellena un array con un valor específico',
        'methodName': "Método Fill",
        'desc1': 'El método fill() rellena todos los elementos de un array con un valor. Este método sobrescribe el array original.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_11':
      {
        'methodTitle': 'Encuentra el primer bicho que no tiene patas',
        'methodHelp': 'Devuelve el valor del primer elemento de un array que supera una prueba',
        'methodName': "Método Find",
        'desc1': 'El método find() devuelve el valor del primer elemento de un array que pasa un test (proporcionado como una función). Este método devuelve "undefined" (indefinido) si no se encuentra ningún elemento.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_12':
      {
        'methodTitle': 'Encuentra el índice de la libélula turquesa',
        'methodHelp': 'Devuelve el índice del primer elemento de un array que supera una prueba',
        'methodName': "Método FindIndex",
        'desc1': 'El método findIndex() devuelve el índice del primer elemento de un array que pasa una prueba (proporcionado como una función). Este método devuelve -1 si no se encuentra ningún elemento.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_13':
      {
        'methodTitle': 'Comprueba si hay algún bicho venenoso',
        'methodHelp': 'Comprueba si alguno de los elementos de un array pasa una prueba (proporcionado como función)',
        'methodName': "Método Some",
        'desc1': 'El método some() comprueba si alguno de los elementos de un array pasa una prueba (proporcionado como una función). Este método devuelve un booleano si la función devuelve true/false para uno de los elementos del array',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_14':
      {
        'methodTitle': '¿Qué tienen en común?',
        'methodHelp': 'Comprueba si todos los elementos de un array pasan una prueba (proporcionado como una función)',
        'methodName': "Método Every",
        'desc1': `El método every() comprueba si todos los elementos de un array pasan una prueba (proporcionado como una función). Este método devuelve un booleano si la función devuelve true/false para todos los elementos del array`,
        'desc2': ' Más ayuda',
        'lore': ''
      },'level_5':
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
        'methodTitle': `Duplica el peso de los insectos`, // levels.js -> doThis
        'methodHelp': `Transforma los insectos`, // levels.js -> helpTitle
        'methodName': `Método Map()`, // levels.js -> selectorName
        'desc': `El map() llama una función una vez por cada elemento del array. <a href= 'https://www.w3schools.com/jsref/jsref_map.asp'> Más ayuda. </a>`, // levels.js -> help
        'instructions': `<div>Nuestros insectos están hambrientos, usa el <i>método</i> <strong>map()</strong> para duplicar su peso. Debes asignar el nuevo array en la variable <strong>feededBugs</strong></div>`, // levels.js -> instructions
        'context': `` // levels.js -> contextInstructions
      },

    }
  },
}