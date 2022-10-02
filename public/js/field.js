var selectedLang;
var level; // Holds current level info
var currentLevel = parseInt(localStorage.currentLevel, 10) || 0; // Keeps track of the current level Number (0 is level 1)
var levelTimeout = 3000; // Delay between levels after completing
var finished = false; // Keeps track if the game is showing the Your Rock! screen (so that tooltips can be disabled)

// https://api.jquery.com/addclass/ Array of classes to be added depending if the exercise is
// correct, there is an execution error or the exercise is not correct
const FEEDBACK_MESSAGE_CLASSES = {
  correct: 'alert-success',
  notCorrect: 'alert-warning',
  error: 'alert-danger'
}


var blankProgress = {
  totalCorrect: 0,
  percentComplete: 0,
  lastPercentEvent: 0,
  progress: "",
  guessHistory: {},
};


// Get progress from localStorage, or start from scratch if we don't have any
var progress = JSON.parse(localStorage.getItem("progress")) || blankProgress;
localStorage.setItem("progress", JSON.stringify(progress));

$(document).ready(function () {
  // Custom scrollbar plugin
  // $(".left-col, .level-menu").mCustomScrollbar({
  //   scrollInertia: 0,
  //   autoHideScrollbar: true,
  // });

  $(".note-toggle").on("click", function () {
    $(this).hide();
    $(".note").slideToggle();
  });

  $(".level-menu-toggle-wrapper").on("click", function () {
    if ($(".menu-open").length == 0) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  $(".level-nav").on("click", "a", function () {
    var direction;
    if ($(this).hasClass("next")) {
      direction = "next";
    }

    addAnimation($(this), "link-jiggle");

    if (direction == "next") {
      currentLevel++;
      if (currentLevel >= levels.length) {
        currentLevel = levels.length - 1;
      }
    } else {
      currentLevel--;
      if (currentLevel < 0) {
        currentLevel = 0;
      }
    }

    loadLevel();
    return false;
  });

  // Resets progress and progress indicators
  $(".reset-progress").on("click", function () {
    resetProgress();
    return false;
  });

  $("input").on("keyup", function (e) {
    e.stopPropagation();
    var length = $(this).val().length;
    if (length > 0) {
      $("input").removeClass("input-strobe");
    } else {
      $("input").addClass("input-strobe");
    }
  });

  //muestra los tags <bee></bee>
  $(".table").on("mouseover", "*", function (e) {
    e.stopPropagation();
    showTooltip($(this));
  });

  //Shows the tooltip on the table
  $(".markup").on("mouseover", "div *", function (e) {
    el = $(this);
    var markupElements = $(".markup *");
    var index = markupElements.index(el) - 1;
    showTooltip($(".table *").eq(index));
    e.stopPropagation();
  });

  // Shows the tooltip on the table
  $(".markup").on("mouseout", "*", function (e) {
    e.stopPropagation();
    hideTooltip();
  });

  //muestra siempre los tags
  $(".table").on("mouseout", "*", function (e) {
    hideTooltip();
    e.stopPropagation();
  });

  $(".enter-button").on("click", function () {
    //enterHit();
    const text = flask.getCode();
    fireArray(text);
  });

  $(".table-wrapper,.table-edge").css("opacity", 0);

  buildLevelmenu();

  setTimeout(function () {
    loadLevel();
    $(".table-wrapper,.table-edge").css("opacity", 1);
  }, 50);
});

function addAnimation(el, className) {
  el.addClass("link-jiggle");
  el.one("animationend", function (e) {
    $(e.target).removeClass("link-jiggle");
  });
}

// Reset all progress
// * Removes checkmarks from level header and list
// * Scrolls level menu to top
// * Resets the progress object

function resetProgress() {
  currentLevel = 0;
  progress = blankProgress;
  localStorage.setItem("progress", JSON.stringify(progress));
  finished = false;

  $(".completed").removeClass("completed");
  loadLevel();
  closeMenu();
  $("#mCSB_2_container").css("top", 0); // Strange element to reset scroll due to scroll plugin
}

//Checks if the level is completed

function checkCompleted(levelNumber) {
  if (progress.guessHistory[levelNumber]) {
    if (progress.guessHistory[levelNumber].correct) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Builds the slide-out level menu


function buildLevelmenu() {
  for (var i = 0; i < levels.length; i++) {
    var level = levels[i];
    var item = document.createElement("a");
    $(item).html(
      "<span class='checkmark'></span><span class='level-number'>" +
      (i + 1) +
      "</span>" +
      level.syntax
    );
    $(".level-menu .levels").append(item);

    if (checkCompleted(i)) {
      $(item).addClass("completed");
    }

    $(item).on("click", function () {
      finished = false;
      currentLevel = $(this).index();
      loadLevel();
      closeMenu();
    });
  }
}

function closeMenu() {
  $(".right-col").removeClass("menu-open");
}

function openMenu() {
  $(".right-col").addClass("menu-open");
}

// Hides & shows the tooltip that appears when an eleemnt
// on the table or the editor is hovered over.

function hideTooltip() {
  $(".enhance").removeClass("enhance");
  $("[data-hovered]").removeAttr("data-hovered");
  $(".helper").hide();
}

function showTooltip(el) {
  if (finished) {
    return; // Only show tooltip if the game isn't finished yet
  }

  el.attr("data-hovered", true);
  var tableElements = $(".table *");
  var index = tableElements.index(el);
  var that = el;
  $(".markup > div *")
    .eq(index)
    .addClass("enhance")
    .find("*")
    .addClass("enhance");

  var helper = $(".helper");

  var pos = el.offset();
  helper.css("top", pos.top - 65);
  helper.css("left", pos.left + el.width() / 2);

  var helpertext;

  var elType = el.get(0).tagName;
  elType = elType.toLowerCase();
  helpertext = "<" + elType;

  var elClass = el.attr("class");

  if (elClass) {
    if (elClass.indexOf("strobe") > -1) {
      elClass = elClass.replace("strobe", "");
    }
  }

  if (elClass) {
    helpertext = helpertext + ' class="' + elClass + '"';
  }

  var elFor = el.attr("for");

  if (elFor) {
    helpertext = helpertext + ' for="' + elFor + '"';
  }

  var id = el.attr("id");
  if (id) {
    helpertext = helpertext + ' id="' + id + '"';
  }

  helpertext = helpertext + "></" + elType + ">";
  helper.show();
  helper.text(helpertext);
}

//Animate the enter button
function enterHit() {
  $(".enter-button").removeClass("enterhit");
  $(".enter-button").width($(".enter-button").width());
  $(".enter-button").addClass("enterhit");
  var value = $("input").val();
  handleInput(value);
  //fireArray(value);
}

//Parses text from the input field
function handleInput(text) {
  console.log("text", parseInt(text, 10));
  if (parseInt(text, 10) > 0 && parseInt(text, 10) < levels.length + 1) {
    currentLevel = parseInt(text, 10) - 1;

    console.log("currentLevel", currentLevel);
  }
  // fireRule(text);
  fireArray(text); //hemos cambiado el nombre de la función que evalúa la respuesta del usuario
}

function setFeedbackMessage(type, evalCode) {
  console.log("🚀 ~ file: field.js ~ line 293 ~ setFeedbackMessage ~ type", type)

  $('#exercise-feedback').removeClass('d-none alert-success alert-warning alert-danger');
  $('#exercise-feedback').addClass(FEEDBACK_MESSAGE_CLASSES[type]);

  if (type == "correct") {
    $('#feedback-success').removeClass('d-none');

  }

  else {
    $('#feedback-error').removeClass('d-none');
    $('#exercise-feedback #evaluated-code').html(evalCode);

  }
}

function clearFeedbackMessage() {
  
  $('#exercise-feedback').addClass('d-none');
  $('#feedback-error').addClass('d-none');
  $('#feedback-success').addClass('d-none');

  $('#exercise-feedback #evaluated-code').html('');
}

function fireArray(text) {

  // evaluamos cualquier error que pueda existir en el array. Esto no lo utilizamos para validar el resultado del usuario, sino para detectar errores de sintaxis de JavaScript.
clearFeedbackMessage();
  let isCorrect;
  try {
    isCorrect = checkLevelCorrect(currentLevel, text);
  }

  catch (error) {
    setFeedbackMessage('error', error.message);
    shakeEditor();
    return;
  }



  if (isCorrect) {

    setFeedbackMessage('correct', 'You code is correct! Well done! ');



    level.boardMarkup = level.boardMarkupSolution;
    level.completed = true;
    level.userSolution = text;

    trackProgress(currentLevel, "correct");

    loadLevel();

    setTimeout(function () {
      currentLevel++;
      loadLevel();
      flask.updateCode(levels[currentLevel].myGrass);
      clearFeedbackMessage();
    }, levelTimeout);

    return;
  } else {
    trackProgress(currentLevel, "incorrect");
    console.log("🚀 ~ file: field.js ~ line 346 ~ fireArray ~ currentLevel", currentLevel)
    let { variableToCheck } = levels[currentLevel];

    console.log("🚀 ~ file: field.js ~ line 348 ~ fireArray ~ variableToCheck", variableToCheck)
    let evaluatedVariable = getVariableEval(text, variableToCheck);
    setFeedbackMessage('notCorrect', `<b>${variableToCheck} = ${evaluatedVariable}</b>`)
    shakeEditor();
  }
}

function shakeEditor() {

  $(".editor").addClass("shake");
  setTimeout(function () {
    $(".editor").removeClass("shake");
  }, 1000);
}

function getVariableEval(inputCode, variableToCheck) {

  let evaluatedVariable;
  try {
    eval(inputCode); // we need to eval all user code to declare variable
    evaluatedVariable = eval(variableToCheck);
  } catch (error) {
    evaluatedVariable = error.message;
  }

  return JSON.stringify(evaluatedVariable);

}

function checkLevelCorrect(currentLevel, inputUser) {
  // a partir del nivel 7, case 6, no pasa al siguiente nivel!
  // seria interesante que aparezcan los nombres de los nuevos arrays? o de los varios arrays como en el concat

  let isCorrect = false
  var expresion

  //let myGrass = levels[currentLevel].myGrass;
  let myGrassSolution = levels[currentLevel].myGrassSolution;


  let evalInputUser;
  let { variableToCheck } = levels[currentLevel];
  console.log("🚀 ~ file: field.js ~ line 351 ~ checkLevelCorrect ~ variableToCheck", variableToCheck)

  let methodCorrect;
  let valuesAreEqual;


  try {
    // Al hacer eval lo que hacemos es DECLARAR tantas variables como haya en el editor JavaScript
    evalInputUser = eval(inputUser);

  } catch (error) {
    throw new Error(error);
  }



  // if (levels[currentLevel].solutionIsArray) {

  //   // obtenemos un string de levels.js, que transformamos en array mediante el método split
  //   myGrassSolution = myGrassSolution.split(',');
  //   console.log("🚀 ~ file: field.js ~ line 368 ~ checkLevelCorrect ~ myGrassSolution", myGrassSolution)
  // }

  //AQUI EMPEZAMOS NOSOTROS
  let regExpExercise = levels[currentLevel].regExp;

  expresion = new RegExp(regExpExercise, "g");

  // test devuelve true si lo que ha puesto en el usuario en el editor al menos contiene la cadena de texto "myGrass.filter"
  methodCorrect = expresion.test(inputUser);
  console.log("🚀 ~ file: field.js ~ line 379 ~ checkLevelCorrect ~ methodCorrect", methodCorrect)

  // arrayEquals devuelve true si los dos arrays son iguales, el de la solución y el que queda tras ejecutar el código del usuario. 
  // TODO : try catch
  let variableToCheckEvaluated = "";

  try {
    variableToCheckEvaluated = eval(variableToCheck);
  } catch (error) {
    console.log("🚀 ~ file: field.js ~ line 378 ~ checkLevelCorrect ~ error", error)
  }

  valuesAreEqual = _.isEqual(myGrassSolution, variableToCheckEvaluated);
  console.log("🚀 ~ file: field.js ~ line 382 ~ checkLevelCorrect ~ eval de variableToCheckEvaluated", variableToCheckEvaluated)
  console.log("🚀 ~ file: field.js ~ line 382 ~ checkLevelCorrect ~ myGrassSolution", myGrassSolution)
  console.log("🚀 ~ file: field.js ~ line 383 ~ checkLevelCorrect ~ valuesAreEqual", valuesAreEqual)

  // isCorrect es lo que devuelve esta función y podemos decir que el ejercicio es correcto si se cumple la expresión regular y el aray resultante tras aplicar el método de array es igual al array de la solución
  // isCorrect=methodCorrect && valuesAreEqual;
  isCorrect = valuesAreEqual && methodCorrect;



  return isCorrect //load next level
}

//la comparación del array con el array de solución funciona ok
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );

  //
}
//console.log(myGrass, currentLevel);
// Loads up the help text & examples for each level
function showHelp() {
  var helpTitle = level.helpTitle || "";
  var help = level.help || "";
  var examples = level.examples || [];
  var selector = level.selector || "";
  var syntax = level.syntax || "";
  var syntaxExample = level.syntaxExample || "";
  var selectorName = level.selectorName || "";

  $(".display-help .syntax").html(syntax);
  $(".display-help .syntax-example").html(syntaxExample);
  $(".display-help .selector-name").html(selectorName);
  $(".display-help .title").html(helpTitle);
  $(".display-help .examples").html("");
  $(".display-help .examples-title").hide(); // Hide the "Examples" heading



  for (var i = 0; i < examples.length; i++) {
    var example = $("<div class='example'>" + examples[i] + "</div>");
    $(".display-help .examples").append(example);
    $(".display-help .examples-title").show(); // Show it if there are examples
  }

  $(".display-help .hint").html(help);
  $(".display-help .selector").text(selector);
}

function resetTable() {
  $(".display-help").removeClass("open-help");
  $(".clean,.strobe").removeClass("clean,strobe");
  $(".clean,.strobe").removeClass("clean,strobe");
  $("input").addClass("input-strobe");
  $(".table *").each(function () {
    $(this).width($(this).width());
  });

  var tableWidth = $(".table").outerWidth();
  $(".table-wrapper, .table-edge").width(tableWidth);
}

function fireRule(rule) {
  // prevent cheating
  if (rule === ".strobe") {
    rule = null;
  }

  $(".shake").removeClass("shake");
  $(".strobe,.clean,.shake").each(function () {
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });

  // var baseTable = $('.table-wrapper > .table, .table-wrapper > .nametags, .table-wrapper > .table-surface');
  var baseTable = $(".table");

  // Check if jQuery will throw an error trying the mystery rule
  // If it errors out, change the rule to null so the wrong-guess animation will work
  try {
    $(".table").find(rule).not(baseTable);
  } catch (err) {
    rule = null;
  }

  var ruleSelected = $(".table").find(rule).not(baseTable); // What the correct rule finds
  var levelSelected = $(".table").find(level.selector).not(baseTable); // What the person finds

  console.log(ruleSelected);
  console.log(levelSelected);

  var win = false;

  // If nothing is selected
  if (ruleSelected.length == 0) {
    $(".editor").addClass("shake");
  }

  if (ruleSelected.length == levelSelected.length && ruleSelected.length > 0) {
    win = checkResults(ruleSelected, levelSelected, rule);
  }

  if (win) {
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("clean");
    $("input").val("");
    $(".input-wrapper").css("opacity", 0.2);
    updateProgressUI(currentLevel, true);
    currentLevel++; //aqui podemos hacer que se vea el boardmarkupsolution

    if (currentLevel >= levels.length) {
      winGame();
    } else {
      setTimeout(function () {
        loadLevel();
        clearFeedbackMessage();

      }, levelTimeout);
    }
  } else {
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("shake");

    setTimeout(function () {
      $(".shake").removeClass("shake");
      $(".strobe").removeClass("strobe");
      levelSelected.addClass("strobe");
    }, 500);

    $(".result").fadeOut();
  }

  // If answer is correct, let's track progress

  if (win) {
    trackProgress(currentLevel - 1, "correct");
  } else {
    trackProgress(currentLevel, "incorrect");
  }
}

// Marks an individual number as completed or incompleted
// Just in the level heading though, not the level list
function updateProgressUI(levelNumber, completed) {
  if (completed) {
    $(".levels a:nth-child(" + (levelNumber + 1) + ")").addClass("completed");
    $(".level-header").addClass("completed");
  } else {
    $(".level-header").removeClass("completed");
  }
}

function trackProgress(levelNumber, type) {
  if (!progress.guessHistory[levelNumber]) {
    progress.guessHistory[levelNumber] = {
      correct: false,
      incorrectCount: 0,
      userCode: flask.getCode(),
    };
  }

  progress.guessHistory[levelNumber].userCode = flask.getCode();

  var levelStats = progress.guessHistory[levelNumber];

  if (type == "incorrect") {
    if (levelStats.correct == false) {
      levelStats.incorrectCount++; // Only update the incorrect count until it is guessed correctly
    }
  } else {
    if (levelStats.correct == false) {
      levelStats.correct = true;
      progress.totalCorrect++;
      progress.percentComplete = progress.totalCorrect / levels.length;
      sendEvent("guess", true, levelNumber + 1, getIncorrectCount(levelNumber)); // Send event
    }
  }

  // Increments the completion percentage by 10%, and sends an event every time
  var increment = 0.1;
  if (progress.percentComplete >= progress.lastPercentEvent + increment) {
    progress.lastPercentEvent = progress.lastPercentEvent + increment;
    //sendEvent("progress", "percent", Math.round(progress.lastPercentEvent * 100));
  }

  localStorage.setItem("progress", JSON.stringify(progress));
}

//funcion para recuperar el numero de errores del usuario para un nivel determinado

function getIncorrectCount(level) {
  let wrongValue;

  try {
    wrongValue = JSON.parse(localStorage.progress).guessHistory[level]
      .incorrectCount;
  } catch {
    wrongValue = 0;
  }

  return wrongValue;
}

//var wrongValue = JSON.parse(localStorage.progress).guessHistory[currentLevel].incorrectCount;

// Sends event to Google Analytics
// Doesn't send events if we're on localhost, as the ga variable is set to false
function sendEvent(category, action, label, wrongCount) {

  console.log(
    "parametros funcion sendEvent",
    category,
    action,
    label,
    wrongCount
  );

  $.post(
    "/statistics",
    {
      action,
      label,
      wrongCount,
    },
    function (result) {
      console.log(result);
    }
  );

}

function winGame() {
  $(".table").html(
    '<span class="winner"><strong>You did it!</strong><br>You rock at CSS.</span>'
  );
  addNametags();
  finished = true;
  resetTable();
}

function checkResults(ruleSelected, levelSelected, rule) {
  console.log(rule);
  var ruleTable = $(".table").clone();
  ruleTable.find(".strobe").removeClass("strobe");
  ruleTable.find(rule).addClass("strobe");
  return $(".table").html() == ruleTable.html();
}

// Returns all formatted markup within an element...

function getMarkup(el) {
  var hasChildren = el.children.length > 0 ? true : false;
  var elName = el.tagName.toLowerCase();
  var wrapperEl = $("<div/>");
  var attributeString = "";
  $.each(el.attributes, function () {
    if (this.specified) {
      attributeString =
        attributeString + " " + this.name + '="' + this.value + '"';
    }
  });
  var attributeSpace = "";
  if (attributeString.length > 0) {
    attributeSpace = " ";
  }
  if (hasChildren) {
    wrapperEl.text("<" + elName + attributeSpace + attributeString + ">");
    $(el.children).each(function (i, el) {
      wrapperEl.append(getMarkup(el));
    });
    wrapperEl.append("&lt;/" + elName + "&gt;");
  } else {
    wrapperEl.text("<" + elName + attributeSpace + attributeString + " />");
  }
  return wrapperEl;
}

//new board loader...

function loadBoard() {
  boardMarkup = ""; // what is this
  showHelp();

  $(".table").html(level.boardMarkup);
  addNametags();
  $(".table *").addClass("pop");
  $(".markup").html(level.instructions);
  $(".contextInstructions").html(level.contextInstructions);
  $("#expected-results  span").html(`${level.variableToCheck} = ${JSON.stringify(level.myGrassSolution)}`);
}

// Adds nametags to the items on the table
function addNametags() {
  $(".nametags *").remove();
  $(".table-wrapper").css("transform", "rotateX(0)");
  $(".table-wrapper").width($(".table-wrapper").width());

  $(".table *").each(function () {
    if ($(this).attr("for")) {
      var pos = $(this).position();
      var width = $(this).width();
      var nameTag = $("<div class='nametag'>" + $(this).attr("for") + "</div>");
      $(".nametags").append(nameTag);
      var tagPos = pos.left + width / 2 - nameTag.width() / 2 + 12;
      nameTag.css("left", tagPos);
    }
  });

  $(".table-wrapper").css("transform", "rotateX(20deg)");
}

function loadLevel() {
  // Make sure we don't load a level we don't have
  if (currentLevel < 0 || currentLevel >= levels.length) {
    currentLevel = 0;
  }

  hideTooltip();

  level = levels[currentLevel];

  // Show the help link only for the first three levels
  if (currentLevel < 3) {
    $(".note-toggle").show();
  } else {
    $(".note-toggle").hide();
  }

  $(".level-menu .current").removeClass("current");
  $(".level-menu div a").eq(currentLevel).addClass("current");

  var percent = ((currentLevel + 1) / levels.length) * 100;
  $(".progress").css("width", percent + "%");

  localStorage.setItem("currentLevel", currentLevel);

  loadBoard();
  resetTable();

  $(".level-header .level-text").html(
    "Level " + (currentLevel + 1) + " of " + levels.length
  );

  updateProgressUI(currentLevel, checkCompleted(currentLevel));

  $(".order").text(level.doThis);

  $(".input-wrapper").css("opacity", 1);
  $(".result").text("");

  let local = JSON.parse(localStorage.progress);
  Translate(selectedLang, false);
  if (local.guessHistory[currentLevel]) {
    flask.updateCode(`${local.guessHistory[currentLevel].userCode}`);
  } else {
    flask.updateCode(levels[currentLevel].myGrass);
  }

  //hemos agregado una variable "completed" para saber si el nivel ya esta completado, de manera que si esta completado, no se puede volver a hacer el nivel, eliminamos el botón y deshabilitamos el input. Además cambiamos de color el tilde de la sección de la derecha para indicar que ese nivel ya esta completado.
  //ya habían otras validaciones, que deberíamos limpiar.
  if (levels[currentLevel].completed) {
    $(".enter-button").hide();
    $("#input-solution").attr("placeholder", levels[currentLevel].userSolution);
    $("#input-solution").removeClass("input-strobe");
    $("#input-solution").attr("disabled", true);
    $(".checkmark").addClass("completed");
  } else {
    $(".enter-button").show();
    $("#input-solution").attr("placeholder", "Type in an Array method");
    $("#input-solution").addClass("input-strobe");
    $("#input-solution").attr("disabled", false);
    $(".checkmark").removeClass("completed");
  }

  //Strobe what's supposed to be selected
  setTimeout(function () {
    $(".table " + level.selector).addClass("strobe");
    $(".pop").removeClass("pop");
  }, 200);



}

// Popup positioning code from...
// http://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen

function PopupCenter(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = ((height / 2) - (h / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}


function Translate(language, user) {

  $('.order').html('');
  $('.markup').removeAttr('data-i18n');
  $('.contextInstructions').removeAttr('data-i18n');

  var lang;

  if (user) {
    lang = language;
    localStorage.setItem('language', language);
  } else {
    lang = localStorage.getItem('language');
  }

  i18n.init({
    resStore: resources,
    lng: lang
  });

  $('.order').html(i18n.t(`level_${currentLevel + 1}.methodTitle`));
  $('.markup').html(i18n.t(`level_${currentLevel + 1}.instructions`));
  $('.contextInstructions').html(i18n.t(`level_${currentLevel + 1}.context`));

  $('.display-help .selector-name').html(i18n.t(`level_${currentLevel + 1}.methodName`));
  $('.title').html(i18n.t(`level_${currentLevel + 1}.methodHelp`));
  $('.hint').html(i18n.t(`level_${currentLevel + 1}.desc`));


  $(".level-header .level-text").html(i18n.t('level') + " " + (currentLevel + 1) + " " + i18n.t('of') + " " + levels.length);

  $(document).i18n();
}

