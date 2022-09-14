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
        'methodTitle': 'Add an element at the end of the array',
        'methodHelp': 'Add an element at the end of the array',
        'methodName': 'Push method',
        'desc1': 'The push() method adds new items to the end of an Array. It changes the length of the original Array.',
        'desc2': ' More Help',
        'lore': ''
      },
      'level_2':
      {
        'methodTitle': 'Remove the bee in the end',
        'methodHelp': 'Remove the last element in the array',
        'methodName': 'Pop method',
        'desc1': 'The Pop() method removes (pops) the last element of an Array, changing the length of the original Array.',
        'desc2': ' More Help',
        'lore': ''
      },
      'level_3':
      {
        'methodTitle': 'Remove the dragonfly at the beginning',
        'methodHelp': 'Remove the first element in the array',
        'methodName': 'Shift method',
        'desc1': 'The shift() method removes the first array element.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_4':
      {
        'methodTitle': 'Add the queen Ant at the beginning of the array',
        'methodHelp': 'Add element at the beginning of an array',
        'methodName': 'Unshift method',
        'desc1': 'The unshift() method adds a new element at the beginning of an array.',
        'desc2': ' More help',
        'lore': ''
      },
      'level_5':
      {
        'methodTitle': 'Create a new array only with winged bugs',
        'methodHelp': 'Creates a new array from selected elements',
        'methodName': "Slice method",
        'desc1': 'The slice() method creates a new array from selected elements, however it does NOT change the original array. This method has two parameters: "start" and "end" (not inclusive).',
        'desc2': ' More help',
        'lore': ''
      },
      'level_6':
      {
        'methodTitle': 'Replace the repeated bugs with the new ones',
        'methodHelp': 'Modifies the content of an array, adding new elements and / or removing old elements',
        'methodName': "Splice method",
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
        'methodTitle': 'Añade una mariquita al final del array',
        'methodHelp': 'Añade un elemento al final del array.',
        'methodName': 'Método Push',
        'desc1': 'El método push() añade nuevos elementos al final de un Array, cambiando la longitud del Array original.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_2':
      {
        'methodTitle': 'Quita la abeja del final',
        'methodHelp': 'Elimina el último elemento de un array.',
        'methodName': 'Método Pop',
        'desc1': 'El método pop() elimina (pops) el último elemento de un Array, cambiando la longitud del Array original.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_3':
      {
        'methodTitle': 'Quita la libélula del principio',
        'methodHelp': 'Elimina el primer elemento de un array',
        'methodName': 'Método Shift',
        'desc1': 'El método shift() elimina el primer elemento de un array.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_4':
      {
        'methodTitle': 'Añade la hormiga reina al principio del array',
        'methodHelp': 'Añade un elemento al principio de un array.',
        'methodName': 'Método Unshift',
        'desc1': 'El método unshift() añade un nuevo elemento al principio de un array.',
        'desc2': ' Más ayuda',
        'lore': ''
      },
      'level_5':
      {
        'methodTitle': 'Crea un nuevo array sólo con bichos alados',
        'methodHelp': 'Crea un nuevo array a partir de los elementos seleccionados',
        'methodName': "Método Slice",
        'desc1': 'El método slice() crea un nuevo array a partir de los elementos seleccionados, pero NO modifica el array original. Este método tiene dos parámetros: "start" y "end" (no inclusivos).',
        'desc2': ' Más ayuda',
        'lore': ''
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
      },
    }
  },
}