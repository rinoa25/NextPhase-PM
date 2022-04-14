// Defines the three textfield variables
var elEmail = document.querySelector(".email");
var elPassword = document.querySelector(".pass");
var elConfirm = document.querySelector(".cpass");

// Register button
var elRegister = document.querySelector(".Register");

// Defines strong label on password and confirm password fields
var stronglabel = document.querySelector(".stronglabel");
var stronglabel2 = document.querySelector(".stronglabel2");

// Defines the red exclamation mark circle
var errorlabel = document.querySelector(".errorlabel");
var errorlabel2 = document.querySelector(".errorlabel2");

// Defines the green question mark circle
var infomark = document.querySelector(".infomark");
var infomark2 = document.querySelector(".infomark2");

// Minimum 12 characters, at least one uppercase letter, one lowercase letter and one number: 3C12
var correctform = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
// At least one uppercase letter, one lowercase letter and one number
var incompleteform = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;

// Defines the bottom error message variables
var emailfield = document.getElementById('email');
var passwordfield = document.getElementById('pass');
var cpasswordfield = document.getElementById('cpass');

// Faded out random password
var temporary = document.getElementById('temporary');
var temporary2 = document.getElementById('temporary2');

// Defines random password
var retVal;
var res;

var state = false;

// sweet alert hyperlink
var el = document.createElement('div')
el.innerHTML = "<img src='images/nudgeimage.png' style='width:100%;display:block;'>"

// Detecting browser name
var result = bowser.getParser(window.navigator.userAgent);
var name = result.getBrowserName();
var nam = name.toLowerCase();

// Detecting platform type (Desktop / mobile)
var platform = result.getPlatformType();
var plat = platform.toLowerCase();

// Detecting browser version
var version = result.getBrowserVersion();
var ver = parseInt(version);

// User inactive timer
var myTimer;
var minutes = 10;

var nudgecount = 0;

// user using mobile
if (plat == "mobile") {
  swal({title: "Error", text: "You are currently on a " + plat + " device. Please use a desktop to view this link.", icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://www.mturk.com/");});
}
else {
  // if browser is not chrome
  if (name.toLowerCase().indexOf("chrome") == -1) {
    // Checks for correct browser name. Ideally redirects them back to the recruitment post
    // redirects them back to mturk homepage for now since idk the recruitment post link
    swal({title: "Error", text: "You are currently using " + name + ". Please use Chrome to view this link.", icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://www.mturk.com/");});
  }
  // browser is chrome but not latest stable version
  else {
    if (ver < 95) {
      swal({title: "Error", content: el, icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://www.mturk.com/");});
    }
    else {
      document.addEventListener("visibilitychange", function() {
        // page out of sight
        if (document.visibilityState === 'hidden') {
          // then clear storage and show popup after
          // myTimer = setTimeout(function(){sessionStorage.clear(); localStorage.clear(); sessionOut();}, 600000);
          localStorage.setItem('setupTime', new Date().getTime());
        }
        // else {
        //   clearTimeout(myTimer);
        // }
      });
      var bc = new BroadcastChannel("my-awesome-site");
      bc.onmessage = (event) => {
        if (event.data === "Am I the first?") {
          bc.postMessage(`No you're not.`);
          // alert("Another tab of this site just got opened");
        }
        if (event.data === `No you're not.`) {
          swal({title: "Error: Multiple Sessions", text: "You are only allowed to have one session at a time. To continue the study, close the extra sessions and refresh the inital session.", icon:"error",closeOnClickOutside: false, closeOnEsc: false, buttons: false});
          //alert("An instance of this site is already running");
        }
      };
      bc.postMessage('Am I the first?');
    }
  }
}

// Checks if user restored page too late (10 minutes)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime != null) {
  if (now-setupTime > minutes * 60 * 1000) {
    localStorage.clear();
    sessionStorage.clear();
  }
}

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload(true);
  }
});

var textArray = ['1C8', '3C12'];
var arrayPass = Math.floor(Math.random()*textArray.length);

if (sessionStorage.getItem('passpolicy') == null) {
  sessionStorage.setItem('passpolicy', textArray[arrayPass]);
}

// once page loaded, password is generated
var retVal = sessionStorage.getItem('randomPass');
if (retVal == null) {
    retVal  = genrandom();
    sessionStorage.setItem('randomPass', retVal);
}

var savedpass = sessionStorage.getItem('SavedPass');
if (savedpass == null) {
    savedpass  = retVal;
    sessionStorage.setItem('SavedPass', savedpass);
}

// User not able to copy / cut anything from the page
$('body').bind('cut copy', function (e) {
  e.preventDefault();
});

function nudgedisplay() {
  swal({title: "Secure your account, don't get left behind!", content: el, text: "Users that used a randomly generated password are better protected than users who relied on their own password. The generated password will also be saved to your Google Chrome password manager, so you don't have to remember it.", closeOnClickOutside: false, closeOnEsc: false, buttons: {cancel: "Remain at risk", catch: {text: "Protect my account"}}}).then((value) => {
  switch (value) {
    case "catch":
     populate();
     break;

   default:
     errorlabel.style.display = 'block';
     errorlabel2.style.display = 'block';
     revert();
     break;
  }
});
}

// Generates random passwords that meet required policy
// at least 1 number, 1 upper case character, and 1 lower case character
function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

// Shuffles each password section (uppercase, lowercase, numbers) so it can be a true random password
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Generates random password
function genrandom() {
  res = generatePassword(6) + "-" + generatePassword(6) + "-" + generatePassword(6);
  return res;
}

function populate() {
  state = true;

  errorlabel.style.display = 'none';
  infomark.style.display = 'block';

  errorlabel2.style.display = 'none';
  infomark2.style.display = 'block';

  setNeutralFor(passwordfield);
  setNeutralFor(cpasswordfield);

  // Password and confirm password fields populated with invisible random password
  passwordfield.style.color = '#D0F0C0';
  cpasswordfield.style.color = '#D0F0C0';
  passwordfield.style.WebkitUserSelect = "none";
  cpasswordfield.style.WebkitUserSelect = "none";
  passwordfield.style.cursor = 'default';
  cpasswordfield.style.cursor = 'default';
  passwordfield.value = retVal;
  cpasswordfield.value = retVal;

  // Sets safari appearance and set to read only
  passwordfield.style.backgroundColor = "#D0F0C0";
  cpasswordfield.style.backgroundColor = "#D0F0C0";
  stronglabel.style.display = 'inline-block';
  stronglabel2.style.display = 'inline-block';
  passwordfield.readOnly = true;
  cpasswordfield.readOnly = true;

  // Faded random passwords are shown
  $('#pass').attr('placeholder', '');
  $('#cpass').attr('placeholder', '');
  temporary.style.display = 'inline-block';
  temporary.innerText = retVal;
  temporary2.style.display = 'inline-block';
  temporary2.innerText = retVal;
}

function revert() {

  if (state == true) {
    passwordfield.value = "";
    cpasswordfield.value = "";
  }
  
  // Text inside password and confirm password fields are no longer invisible, and fields are cleared
  state = false;

  infomark.style.display = 'none';
  infomark2.style.display = 'none';

  passwordfield.style.color = '#2C3E50';
  cpasswordfield.style.color = '#2C3E50';
  passwordfield.style.WebkitUserSelect = "text";
  cpasswordfield.style.WebkitUserSelect = "text";
  passwordfield.style.cursor = 'text';
  cpasswordfield.style.cursor = 'text';

  // Appearance reverted back, and is editable now
  passwordfield.style.backgroundColor = "#FFFFFF";
  cpasswordfield.style.backgroundColor = "#FFFFFF";
  stronglabel.style.display = 'none';
  stronglabel2.style.display = 'none';
  passwordfield.readOnly = false;
  cpasswordfield.readOnly = false;

  // Faded random passwords are hidden
  $('#pass').attr('placeholder', 'Enter your password');
  $('#cpass').attr('placeholder', 'Re-enter your password');
  temporary.style.display = 'none';
  temporary2.style.display = 'none';
}

// If user tries to paste a external source to the password field
elPassword.addEventListener('paste', function() {
  sessionStorage.setItem('pasted', 'yes');
});

elEmail.addEventListener('input', function() {
  emailfield.style.backgroundColor = "#FFFFFF";
  setNeutralFor(emailfield);
});

elPassword.addEventListener('input', function() {
  setNeutralFor(passwordfield);
  passwordfield.style.backgroundColor = "#FFFFFF";
});

elConfirm.addEventListener('input', function() {
  setNeutralFor(cpasswordfield);
  cpasswordfield.style.backgroundColor = "#FFFFFF";
});

// Actions that occur when user clicks on the password field
elPassword.addEventListener('focus', function() {
  // if fields are green
  if (state == true) {
    errorlabel.style.display = 'none';
  }
  // field are white
  else {
    if (nudgecount == 0) {
      nudgedisplay();
      nudgecount = 1;
    }
  }
});

// Actions that occur when user clicks on the confirm password field
elConfirm.addEventListener('focus', function() {
  // if fields are green
  if (state == true) {
    errorlabel2.style.display = 'none';
  }
  // field are white
  else {
    if (nudgecount == 0) {
      nudgedisplay();
      nudgecount = 1;
    }
  }
});

errorlabel.onmousedown = function () {
  nudgedisplay();
}

errorlabel2.onmousedown = function () {
  nudgedisplay();
}

infomark.onmousedown = function () {
  nudgedisplay();
}

infomark2.onmousedown = function () {
  nudgedisplay();
}

function nextpage() {
  sessionStorage.clear();
  swal({title: "Account Created Successfully", icon:"success",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("prototype2.html");});
  return true;
}

// Checks final validation
function final() {
  var emailValue = emailfield.value.trim();
  var passValue = passwordfield.value.trim();

  // Saved random password
  if (passValue == retVal) {
    sessionStorage.setItem('triedrandom', "yes");
    sessionStorage.setItem('status', "yes");
    sessionStorage.setItem('workeremail', emailValue);
    nextpage();
  }
  else {
    sessionStorage.setItem('status', "yes");
    sessionStorage.setItem('personalpass', passValue);
    sessionStorage.setItem('workeremail', emailValue);
    nextpage();
  }

  event.preventDefault();

}

if (sessionStorage.getItem('passpolicy') == '1C8') {
  var actualpass = document.getElementById('topinfo');
  var para = actualpass.querySelector("p");
  para.innerText = "Your password must contain at least 8 characters.";
}

if (sessionStorage.getItem('passpolicy') == '3C12') {
  var actualpass = document.getElementById('topinfo');
  var para = actualpass.querySelector("p");
  para.innerText = "Your password must be at least 12 characters long. It must contain an uppercase letter, a lowercase letter, and a digit.";
}

function completed() {
  setSuccessFor(emailfield);
  setSuccessFor(passwordfield);
  setSuccessFor(cpasswordfield);
  emailfield.style.cursor = "not-allowed";
  emailfield.readOnly = true;
  passwordfield.style.cursor = "not-allowed";
  passwordfield.readOnly = true;
  cpasswordfield.style.cursor = "not-allowed";
  cpasswordfield.readOnly = true;
  elRegister.style.cursor = "not-allowed";
  elRegister.disabled = true;
  final();
}

// Checks inputs of all textfields (Validation)
function checkValidation() {
  var emailValue = emailfield.value.trim();
  var passValue = passwordfield.value.trim();
  var passValue2 = cpasswordfield.value.trim();

  // Scenario that user uses random password
  if (isEmail(emailValue) && passValue == retVal && passValue == passValue2 && passValue != "") {
    if (sessionStorage.getItem('passpolicy') == '1C8' && passValue.length > 7) {
      sessionStorage.setItem('usedrandom', "yes");
      sessionStorage.setItem('randompass', retVal);
      completed();
    }
    else if (sessionStorage.getItem('passpolicy') == '3C12' && correctform.test(passValue)) {
      sessionStorage.setItem('usedrandom', "yes");
      sessionStorage.setItem('randompass', retVal);
      completed();
    }
  }

  // Scenario that user doesn't use random password
  if (isEmail(emailValue) && passValue != retVal && passValue != "" && passValue == passValue2) {
    if (sessionStorage.getItem('passpolicy') == '1C8' && passValue.length > 7) {
      sessionStorage.setItem('usedrandom', "no");
      sessionStorage.setItem('registerpass', passValue);
      completed();
    }
    else if (sessionStorage.getItem('passpolicy') == '3C12' && correctform.test(passValue)) {
      sessionStorage.setItem('usedrandom', "no");
      sessionStorage.setItem('registerpass', passValue);
      completed();
    }
  }

  // Checks the input of email field
  if (emailValue == "") {
    setErrorFor(emailfield, "Email cannot be blank");
  }
  else if (!isEmail(emailValue)) {
		setErrorFor(emailfield, "Invalid email");
	}
  else {
    setSuccessFor(emailfield);
  }

  checkInputs();

  return false;

}

// Checks inputs of only the two password fields
function checkInputs() {
  checkPass();
  checkCPass();
}

// checks input of password field
function checkPass() {
  var passValue = passwordfield.value.trim();
  if (passValue == "") {
    setErrorFor(passwordfield, "Password cannot be blank");
    elPassword.style.fontFamily = "text-security-disc";
  }
  // 1C8 Password Policy
  else if (sessionStorage.getItem('passpolicy') == '1C8') {
    if (passValue.length < 8) {
      setErrorFor(passwordfield, "Password must contain at least 8 characters");
    }
    else if (passValue.length > 7) {
      setSuccessFor(passwordfield);
    }
  }
  // 3C12 Password Policy
  else if (sessionStorage.getItem('passpolicy') == '3C12') {
    if (passValue.length < 12) {
      setErrorFor(passwordfield, "Password must contain at least 12 characters");
    }
    else if (incompleteform.test(passValue) == false) {
      setErrorFor(passwordfield, "password must contain an uppercase letter, a lowercase letter, and a digit.");
    }
    else if (correctform.test(passwordfield.value)) {
      setSuccessFor(passwordfield);
    }
  }
  else {
    setSuccessFor(passwordfield);
  }
  return false;
}

  // Checks the input of confirm password field
function checkCPass() {
  var passValue = passwordfield.value.trim();
  var passValue2 = cpasswordfield.value.trim();
  if (passValue2 == "") {
    setErrorFor(cpasswordfield, "Please retype your password");
    cpasswordfield.style.backgroundColor = "#FFFFFF";
    elConfirm.style.fontFamily = "text-security-disc";
    stronglabel2.style.display = "none";
  }
  else if (passValue !== passValue2) {
    setErrorFor(cpasswordfield, "Passwords do not match");
    cpasswordfield.style.backgroundColor = "#FFFFFF";
    stronglabel2.style.display = "none";
  }
  else {
    setSuccessFor(cpasswordfield);
  }
  return false;
}

// Validates the format of the given email
function isEmail(emailfield) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailfield);
}

// Sets the border colour to be red when error occurs
function setErrorFor(input, message) {
  var container = input.parentElement;
  var bottom = container.querySelector(".bottomerror");
  var small = bottom.querySelector("small");

  small.innerText = message;
  container.className = "container error";
}

function setNeutralFor(input) {
  var container = input.parentElement;
	container.className = 'container neutral';
}

// Sets the border colour to be green when successful
function setSuccessFor(input) {
	var container = input.parentElement;
	container.className = 'container success';
}
