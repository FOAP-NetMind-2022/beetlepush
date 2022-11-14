var resources = {
    dev: { translation: { 'key': 'value' } },       
    'es': { 
      translation: { 
        'menu': {
            'navPlay':'Juega ahora',
            'navStory':'Historia',
            'navAbout':'Sobre Nosotros',
            'ourstory':'Sobre nosotros',
            'storydescription': 'Somos un grupo de estudiantes de un curso de desarrollo de aplicaciones con tecnología web, como proyecto de final de curso, después de valorar diferentes ideas de proyecto, surgió como idea implementar un juego para ayudar a la gente a aprender a programar. Debido a que nos estábamos formando en programación, vimos conveniente plasmar nuestro aprendizaje con una temática relacionada. A continuación, os presentamos Beetle Push, la idea es ayudar a la comunidad con estos simpáticos bichitos a ir resolviendo los siguientes niveles con métodos de array del lenguaje Javascript.',
            'franBio':'Desarrollador full stack junior.',
            'franDescription':'Siempre es bueno intentar hacer las cosas bien.',
            'saraBio':'Desarrolladora full stack junior y ambientóloga.',
            'saraDescription':'Empezando en programación. Me encanta la Biología, los videojuegos y el café.',
            'fabianBio':'Desarrollador full stack y diseñador.',
            'fabianDescription':'La belleza de las cosas tal cual son.',
            'javiBio':'Desarrollador full stack junior.',
            'javiDescription':'Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza.',
            'stefanoBio':'Desarrollador full stack junior y Chef.',
            'stefanoDescription':'Chef y Developer junior. No saber algo ya es un comienzo para alcanzar el objetivo.',
            'carolBio':'Desarrolladora full stack junior y diseñadora.',
            'carolDescription':'Diseñar y desarrollar soluciones fáciles de usar.',
            'victoriaBio':'Desarrolladora full stack junior.',
            'victoriaDescription':'Aprendiendo programación y próximamente diseño. Disfruto mucho de ver series y pelis.',
            'andreuBio':'Desarrollador full stack junior y diseñador.',
            'andreuDescription':'Los errores son la prueba de que lo estás intentando.',
            'oscarBio':'Ingeniero de Software',
            'oscarDescription':'Primero resuelve el problema, después escribe el código.',
            'footer':'Humilde proyecto de estudiantes de programación.'

        } ,
                                  
      } 
    },
    'en': { 
        translation: { 
          'menu': {
              'navPlay':'Play now',
              'navStory':'History',
              'navAbout':'About us',
              'ourstory':'About us',
              'storydescription': 'We are a group of students of a development course of applications with web technology, such as final project of course. After evaluating different project ideas, it emerged as an idea implement a game to help people learn programming. Because we were training in programming, we saw convenient to capture our learning with a theme related. Next, we present Beetle Push, the idea is to help the community with these cute little bugs to go solving the following levels with array methods of the language JavaScript.',
              'franBio':'Full stack junior developer.',
              'franDescription':"It's always good to try to do things right.",
              'saraBio':'Full stack jr developer & Environmentalist.',
              'saraDescription':'Starting in programming. I love biology video games and coffee.',
              'fabianBio':'Full stack developer & Designer.',
              'fabianDescription':'The beauty of things as they are.',
              'javiBio':'Full stack junior developer.',
              'javiDescription':"It's great to work with computers. They don't argue, they remember everything and they don't drink your beer.",
              'stefanoBio':'Full stack developer junior & Chef.',
              'stefanoDescription':'Chef and Junior Developer. Not knowing something is already a start for achieve the objective.',
              'carolBio':'Full stack junior developer & Designer.',
              'carolDescription':'Design and develop easy-to-use solutions.',
              'victoriaBio':'Full stack junior developer.',
              'victoriaDescription':'Learning programming and soon design. I really enjoy to watch series and movies.',
              'andreuBio':'Full stack junior developer & Designer.',
              'andreuDescription':'Mistakes are proof that you are trying.',
              'oscarBio':'Software engineer developer.',
              'oscarDescription':'Solve the problem first, then write the code.',
              'footer':'Humble project by programming students.'
  
          } 
        }
    }            
  };
  
  $(document).ready(function() {
    i18n.init({ 
      resStore: resources,
      //lng: 'es'
      lng: 'en' 
    });
    $(document).i18n();
  });

 var selectLanguage = document.querySelector('#selector-language');

  selectLanguage.addEventListener('change', (e)=>{
    // i18n.changeLanguage(e.target.value);

    var language= e.target.value;
    if(language=='es'){
      $(document).i18n({lng: 'es'});
    } else if (language=='en'){
      $(document).i18n({lng: 'en'});
    }
  });
 