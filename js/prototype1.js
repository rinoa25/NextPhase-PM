// Defines the three textfield variables
var elEmail = document.querySelector(".email");
var elPassword = document.querySelector(".pass");
var elConfirm = document.querySelector(".cpass");

// Register button
var elRegister = document.querySelector(".Register");

// Defines save prompt message beside password and confirm password fields
var message = document.querySelector(".message");
var message2 = document.querySelector(".message2");

// Defines usestrong button for password and confirm password fields
var usestrong = document.querySelector(".usestrong");
var usestrong2 = document.querySelector(".usestrong2");

// Defines dontuse button for password and confirm password fields
var dontuse = document.querySelector(".dontuse");
var dontuse2 = document.querySelector(".dontuse2");

// Defines strong label on password and confirm password fields
var stronglabel = document.querySelector(".stronglabel");
var stronglabel2 = document.querySelector(".stronglabel2");

// Defines the red info circle
var stronglabel3 = document.querySelector(".stronglabel3");
var stronglabel4 = document.querySelector(".stronglabel4");

// Defines the mini message under password and confirm password fields
var minimessage = document.querySelector(".minimessage");
var minimessage2 = document.querySelector(".minimessage2");

var fromweb = document.querySelector(".fromweb");
var smallkey = document.querySelector(".smallkey");
var customdesc = document.querySelector(".customdesc");
var fromdesc = document.querySelector(".fromdesc");

var fromweb2 = document.querySelector(".fromweb2");
var smallkey2 = document.querySelector(".smallkey2");
var customdesc2 = document.querySelector(".customdesc2");
var fromdesc2 = document.querySelector(".fromdesc2");

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

// state = true (didn't press use dontuse button)
// state = false (pressed dontuse button)
var state = true;

// make sure user can't interact with save prompt
var count = 0;

// User goes back to their respective page.
// They can't go back to a previous page they visited
// They can't jump to a page they havent visited
var checkauthentication = sessionStorage.getItem('actualprocess');
// should have an else in front of  if
// replace with checkauthentication != null && checkauthentication == "registration.html")
if (checkauthentication == null) {
  var textArray = [
      '1C8',
      '3C12'
  ];
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

  var counting = sessionStorage.getItem('countime');
  if (counting == null) {
    counting = "1";
    sessionStorage.setItem('countime', counting);
  }

}

// User not able to copy / cut anything from the page
$('body').bind('cut copy', function (e) {
  e.preventDefault();
});

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

var countnum = 0;
var countnum2 = 0;

// detects tabbing behaviour for confirm password field
var pink = true;

// detects yellow key
var purple = true;
var purple2  = true;

// When user hovers over the biggest button in minimessage password field
fromweb.addEventListener('mouseover', function() {
  fromweb.style.backgroundColor = '#E8E8E8';
});
// When user stops hovering over the biggest button in minimessage password field
fromweb.addEventListener('mouseout', function() {
  fromweb.style.backgroundColor = '#FFFFFF';
});

// When user hovers over the biggest button in minimessage confirm password field
fromweb2.addEventListener('mouseover', function() {
  fromweb2.style.backgroundColor = '#E8E8E8';
});
// When user stops hovering over the biggest button in minimessage confirm password field
fromweb2.addEventListener('mouseout', function() {
  fromweb2.style.backgroundColor = '#FFFFFF';
});

function populate() {
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
  // Text inside password and confirm password fields are no longer invisible, and fields are cleared
  passwordfield.style.color = '#2C3E50';
  cpasswordfield.style.color = '#2C3E50';
  passwordfield.style.WebkitUserSelect = "text";
  cpasswordfield.style.WebkitUserSelect = "text";
  passwordfield.style.cursor = 'text';
  cpasswordfield.style.cursor = 'text';
  passwordfield.value = "";
  cpasswordfield.value = "";

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
  purple = true;
  setNeutralFor(passwordfield);
  passwordfield.style.backgroundColor = "#FFFFFF";
  minimessage.style.display = 'none';
});

elConfirm.addEventListener('input', function() {
  purple2 = true;
  setNeutralFor(cpasswordfield);
  cpasswordfield.style.backgroundColor = "#FFFFFF";
  minimessage2.style.display = 'none';
});

// Actions that occur when user clicks on the password field
elPassword.addEventListener('focus', function() {
  // make sure user can't interact with save prompt after successfully clicking register button
  if (state == true && count == 1 ) {
    message.style.display = 'none';
  }
  // make sure user can't interact with save prompt after successfully clicking register button
  else if (state == false && count == 1 ) {
    stronglabel3.style.display = 'none';
  }
  // Actions that may trigger if user didn't press dontuse button (state = true)
  else if (state == true) {
    // save prompt will appear
    message.style.display = 'block';
    populate();
  }
  // Actions that may trigger if user pressed dontuse button (state = false)
  else if (state == false) {
    // onclick, save prompt will not appear. Instead, arrow and key icons will appear
    message.style.display = 'none';
    stronglabel3.style.display = 'block';
  }

});

// Actions that occur when user clicks on the confirm password field
elConfirm.addEventListener('focus', function() {
  pink = true;
  // make sure user can't interact with save prompt after successfully clicking register button
  if (state == true && count == 1 ) {
    message2.style.display = 'none';
  }
  // make sure user can't interact with save prompt after successfully clicking register button
  else if (state == false && count == 1 ) {
    stronglabel4.style.display = 'none';
  }
  // Actions that may trigger if user didn't press dontuse button (state = true)
  else if (state == true) {
    // save prompt will appear
    message2.style.display = 'block';
    populate();
  }
  // Actions that may trigger if user pressed dontuse button (state = false)
  else if (state == false) {
    // onclick, save prompt will not appear. Instead, arrow and key icons will appear
    message2.style.display = 'none';
    stronglabel4.style.display = 'block';
  }

});

// pressed keys trigger appropriate response
elPassword.addEventListener('keydown', function(e) {
  // pressed enter key
  if (13 == e.keyCode) {
    if (state == true) {
      message.style.display = 'none';
      if (countnum < 1) {
        e.preventDefault();
        countnum = 1;
      }
    }
    else {
      minimessage.style.display = 'none';
    }
  }
  // pressed esc key
  if (27 == e.keyCode) {
    if (purple == true) {
      state = false;
      if (passwordfield.value.length > 0 && passwordfield.style.backgroundColor == 'rgb(255, 255, 255)') {
      }
      else {
        message.style.display = 'none';
        minimessage.style.display = 'none';
        stronglabel3.style.display = 'block';
        revert();
      }
    }
    else {
      minimessage.style.display = 'none';
    }
  }
  // pressed tab key
  if (9 == e.keyCode) {
    if (state == false) {
      event.preventDefault();
      cpasswordfield.focus();
    }
    else {
      if (message.style.display == "none") {
        event.preventDefault();
        cpasswordfield.focus();
      }
      else if (message.style.display == "block") {
        event.preventDefault();
        message.focus();
      }
    }
  }
});

// Actions that occur when user clicks outside the password field
elPassword.addEventListener('blur', function() {
  countnum =0;
  // Actions that may trigger if user didn't press dontuse button (state = true)
  if (state == true) {
    // save prompt will not appear
    message.style.display = 'none';
  }
  // Actions that may trigger if user pressed dontuse button (state = false)
  else {
    stronglabel3.style.display = 'none';
    minimessage.style.display = 'none';
  }
});

// pressed keys trigger appropriate response
elConfirm.addEventListener('keydown', function(e) {
  // pressed enter key
  if (state == true) {
    message2.style.display = 'none';
    if (countnum2 < 1) {
      e.preventDefault();
      countnum2 = 1;
    }
  }
  else {
    minimessage2.style.display = 'none';
  }
  // pressed esc key
  if (27 == e.keyCode) {
    if (purple2 == true) {
      state = false;
      if (cpasswordfield.value.length > 0 && cpasswordfield.style.backgroundColor == 'rgb(255, 255, 255)') {
      }
      else {
        message2.style.display = 'none';
        minimessage2.style.display = 'none';
        stronglabel4.style.display = 'block';
        revert();
      }
    }
    else {
      minimessage2.style.display = 'none';
    }
  }
  // pressed tab key
  if (9 == e.keyCode) {
    if (state == true) {
      // Focus (tabbing) or blur (user doesnt click on confirm password field)
      if (pink == false) {
        event.preventDefault();
        elRegister.focus();
      }
      // mousedown only (user directly clicks on confirm password field or chooses strong password of confirm password field)
      else {
        event.preventDefault();
        message2.style.display = "block";
      }
    }
  }
});


// Actions that occur when user clicks outside the confirm password field
elConfirm.addEventListener('blur', function() {
  pink = true;
  countnum2 = 0;
  // Actions that may trigger if user didn't press dontuse button (state = true)
  if (state == true) {
    // save prompt will not appear
    message2.style.display = 'none';
  }
  // Actions that may trigger if user pressed dontuse button (state = false)
  else {
    stronglabel4.style.display = 'none';
    minimessage2.style.display = 'none';
  }
});

// Make sure message disappears when user clicks on password field again
elPassword.onmousedown = function () {
  message.style.display = 'none';
}
// Make sure message disappears when user clicks on confirm password field again
elConfirm.onmousedown = function () {
  message2.style.display = 'none';
  pink = false;
}

// Make sure message doesn't disappear when user clicks on message
message.onmousedown = function () {
  event.preventDefault();
}
// Make sure message doesn't disappear when user clicks on message
message2.onmousedown = function () {
  event.preventDefault();
}

// These actions will happen when the arrow and key icons are clicked (PASSWORD FIELD)
stronglabel3.onmouseover = function () {
  event.preventDefault();
  minimessage.style.display = 'block';
}

stronglabel3.onmousedown = function () {
  event.preventDefault();
  minimessage.style.display = 'block';
}

// These actions will happen when the arrow and key icons are clicked (CONFIRM PASSWORD FIELD)
stronglabel4.onmouseover = function () {
  event.preventDefault();
  minimessage2.style.display = 'block';
}

stronglabel4.onmousedown = function () {
  event.preventDefault();
  minimessage2.style.display = 'block';
}

// These actions will happen when the dontuse button is clicked (PASSWORD FIELD)
dontuse.addEventListener('mousedown', function () {
  event.preventDefault();
  state = false;
  purple = true;
  message.style.display = 'none';
  stronglabel3.style.display = 'block';
  revert();
});

// These actions will happen when the dontuse button is clicked (CONFIRM PASSWORD FIELD)
dontuse2.addEventListener('mousedown', function () {
  event.preventDefault();
  state = false;
  purple = true;
  message2.style.display = 'none';
  stronglabel4.style.display = 'block';
  revert();
});

// These actions will happen when the usestrong button is clicked (PASSWORD FIELD)
usestrong.addEventListener('mousedown', function () {
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  message.style.display = 'none';
});

// These actions will happen when the usestrong button is clicked (CONFIRM PASSWORD FIELD)
usestrong2.addEventListener('mousedown', function () {
  pink = false;
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  message2.style.display = 'none';
});

// Biggest button in mini message (password field)
fromweb.addEventListener('mousedown', function () {
  purple = true;
  state = true;
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  minimessage.style.display = 'none';
  stronglabel3.style.display = 'none';
  populate();
});

// Biggest button in mini message (confirm password field)
fromweb2.addEventListener('mousedown', function () {
  purple2 = true;
  state = true;
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  minimessage2.style.display = 'none';
  stronglabel4.style.display = 'none';
  populate();
});

function nextpage() {
  sessionStorage.clear();
  swal({title: "Account Created Successfully", icon:"success",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("registration.html");});
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
  // Saved own password (non-random)
  else {
    sessionStorage.setItem('status', "yes");
    sessionStorage.setItem('personalpass', passValue);
    sessionStorage.setItem('workeremail', emailValue);
    nextpage();
  }

  event.preventDefault();

}

// Minimum 12 characters, at least one uppercase letter, one lowercase letter and one number:
var correctform = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
// At least one uppercase letter, one lowercase letter and one number
var incompleteform = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;

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
  count = 1;
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
