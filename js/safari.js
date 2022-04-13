// Defines the three textfield variables
var elEmail = document.querySelector(".email");
var elPassword = document.querySelector(".pass");
var elConfirm = document.querySelector(".cpass");

// Defines the timestamp variables
moment.tz.add('America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5');
var myTimezone = "America/Toronto";
var myDatetimeFormat= "YYYY-MM-DD HH:mm:ss z";
var myDatetimeFormat2 = "YYYY-MM-DD HH:mm:ss:SSS z";
var myDatetimeString = moment().tz(myTimezone).format(myDatetimeFormat);

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

// Defines both arrow and key icons in password and confirm password fields
var full = document.querySelector(".full-container");
var full2 = document.querySelector(".full-container2");

var safarikey = document.querySelector(".normalcon");
var safarikey2 = document.querySelector(".normalcon2");

var hoverkey = document.querySelector(".hovercon");
var hoverkey2 = document.querySelector(".hovercon2");

var yellowkey = document.querySelector(".yellowcon");
var yellowkey2 = document.querySelector(".yellowcon2");

var hoveryellow = document.querySelector(".hoveryellow");
var hoveryellow2 = document.querySelector(".hoveryellow2");

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

var fromweb3 = document.querySelector(".fromweb3");
var smallkey3 = document.querySelector(".smallkey3");
var customdesc3 = document.querySelector(".customdesc3");
var fromdesc3 = document.querySelector(".fromdesc3");

var fromweb4 = document.querySelector(".fromweb4");
var smallkey4 = document.querySelector(".smallkey4");
var customdesc4 = document.querySelector(".customdesc4");
var fromdesc4 = document.querySelector(".fromdesc4");

// Defines fill again button
var fillagain = document.querySelector(".fillagain");
var fillagain2 = document.querySelector(".fillagain2");

// Save This Password functionality
var fillagain3 = document.querySelector(".fillagain3");
var fillagain4 = document.querySelector(".fillagain4");

var smallest = document.querySelector(".smallestmessage");
var smallest2 = document.querySelector(".smallestmessage2");

// Defines the bottom error message variables
var emailfield = document.getElementById('email');
var passwordfield = document.getElementById('pass');
var cpasswordfield = document.getElementById('cpass');

// Faded out random password
var temporary = document.getElementById('temporary');
var temporary2 = document.getElementById('temporary2');

// Save box
var safari = document.querySelector(".overlay");
var safari2 = document.querySelector(".overlay2");

// Defines random password
var retVal;
var res;

// state = true (didn't press use dontuse button)
// state = false (pressed dontuse button)
var state = true;

// make sure user can't interact with save prompt
var count = 0;

// Detecting browser name
var result = bowser.getParser(window.navigator.userAgent);
var name = result.getBrowserName();

// Detecting browser version
var version = result.getBrowserVersion();
var ver = parseInt(version);

// Detecting platform type (Desktop / mobile)
var platform = result.getPlatformType();
var plat = platform.toLowerCase();

// User inactive timer
var myTimer;
var minutes = 10;

// sweet alert hyperlink
var el = document.createElement('div')
el.innerHTML = "The version you are using (Safari " + ver + ") is outdated. For help updating Safari, please follow this <a href='updateguide.html'>link</a>."

function sessionOut() {
  swal({title: "Session Timeout", text: "You have been inactive for more than 10 minutes, you will be redirected back to the start of the study.", icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://ctrl9034.durhamfresh.online/");});
}

// // user using mobile
// if (plat == "mobile") {
//   swal({title: "Error", text: "You are currently on a " + plat + " device. Please use a desktop to view this link.", icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://www.mturk.com/");});
// }
// else {
//   // if browser is not safari
//   if (name.toLowerCase().indexOf("safari") == -1) {
//     // Checks for correct browser name. Ideally redirects them back to the recruitment post
//     // redirects them back to mturk homepage for now since idk the recruitment post link
//     swal({title: "Error", text: "You are currently using " + name + ". Please use Safari to view this link.", icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://www.mturk.com/");});
//   }
//   // browser is safari but not latest stable version
//   else {
//     if (ver < 14) {
//       swal({title: "Error", content: el, icon:"error",closeOnClickOutside: false, closeOnEsc: false}).then(function(){window.location.replace("https://www.mturk.com/");});
//     }
//     else {
//       document.addEventListener("visibilitychange", function() {
//         // page out of sight
//         if (document.visibilityState === 'hidden') {
//           // then clear storage and show popup after
//           // myTimer = setTimeout(function(){sessionStorage.clear(); sessionOut();}, 600000);
//           localStorage.setItem('setupTime', new Date().getTime());
//         }
//         // else {
//         //   clearTimeout(myTimer);
//         // }
//       });
//       // var bc = new BroadcastChannel("my-awesome-site");
//       // bc.onmessage = (event) => {
//       //   if (event.data === "Am I the first?") {
//       //     bc.postMessage(`No you're not.`);
//       //     // alert("Another tab of this site just got opened");
//       //   }
//       //   if (event.data === `No you're not.`) {
//       //     // You currently have another session open in another tab / window.
//       //     swal({title: "Error: Multiple Sessions", text: "You are only allowed to have one session at a time. To continue the study, close the extra sessions and refresh the inital session.", icon:"error",closeOnClickOutside: false, closeOnEsc: false, buttons: false});
//       //     //alert("An instance of this site is already running");
//       //   }
//       // };
//       // bc.postMessage('Am I the first?');
//     }
//   }
// }

// Checks if user restored page too late (10 minutes)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime != null) {
  if (now-setupTime > minutes * 60 * 1000) {
    localStorage.clear();
  }
}

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload(true);
  }
});

// User goes back to their respective page.
// They can't go back to a previous page they visited
// They can't jump to a page they havent visited
var checkauthentication = sessionStorage.getItem('actualprocess');
// if (checkauthentication == null) {
//   window.location.replace("https://ctrl9034.durhamfresh.online/");
// }
// else if (checkauthentication != null && checkauthentication != "registration.html") {
//   window.location.replace(sessionStorage.getItem('actualprocess'));
// }

// should have an else in front of  if
// replace with checkauthentication != null && checkauthentication == "registration.html")
if (checkauthentication == null) {
  // once page loaded, timestamp is generated
  var timestamp1 = sessionStorage.getItem('FirstTimestamp');
  if (timestamp1 == null) {
      sessionStorage.setItem('FirstTimestamp', myDatetimeString);
  }

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

  // show password snippet on password and confirm password fields
  setPhrase(retVal);
  setPhrase2(retVal);

  var savedpass = sessionStorage.getItem('SavedPass');
  if (savedpass == null) {
      savedpass  = retVal;
      sessionStorage.setItem('SavedPass', savedpass);
  }

  // once page loaded, name is decided
  var customname = sessionStorage.getItem('descname');
  if (customname == null) {
      customname  = "Password saved today";
      sessionStorage.setItem('descname', customname);
  }

  setName(sessionStorage.getItem('descname'));
  setName2(sessionStorage.getItem('descname'));
  setName3(sessionStorage.getItem('descname'));
  setName4(sessionStorage.getItem('descname'));

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

var stoppoint = 1;

var countnum = 0;
var countnum2 = 0;

// detects tabbing behaviour for confirm password field
var pink = true;

// detects yellow key
var purple = true;
var purple2  = true;

var actualname;

// When user hovers over the arrow and key icons in password field (turns blue)
full.addEventListener('mouseover', function() {
  if (purple == false) {
    yellowkey.style.display = 'none';
    hoveryellow.style.display = 'block';
  }
  else {
    safarikey.style.display = 'none';
    hoverkey.style.display = 'block';
  }
});
// When user stops hovering over the arrow and key icons in password field (reverts to original)
full.addEventListener('mouseout', function() {
  if (purple == false) {
    yellowkey.style.display = 'block';
    hoveryellow.style.display = 'none';
  }
  else {
    safarikey.style.display = 'block';
    hoverkey.style.display = 'none';
  }
});

// When user hovers over the arrow and key icons in confirm password field (turns blue)
full2.addEventListener('mouseover', function() {
  if (purple2 == false) {
    yellowkey2.style.display = 'none';
    hoveryellow2.style.display = 'block';
  }
  else {
    safarikey2.style.display = 'none';
    hoverkey2.style.display = 'block';
  }
});
// When user stops hovering over the arrow and key icons in confirm password field (reverts to original)
full2.addEventListener('mouseout', function() {
  if (purple2 == false) {
    yellowkey2.style.display = 'block';
    hoveryellow2.style.display = 'none';
  }
  else {
    safarikey2.style.display = 'block';
    hoverkey2.style.display = 'none';
  }
});

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

fromweb3.addEventListener('mouseover', function() {
  fromweb3.style.backgroundColor = '#E8E8E8';
});
fromweb3.addEventListener('mouseout', function() {
  fromweb3.style.backgroundColor = '#FFFFFF';
});

fromweb4.addEventListener('mouseover', function() {
  fromweb4.style.backgroundColor = '#E8E8E8';
});
fromweb4.addEventListener('mouseout', function() {
  fromweb4.style.backgroundColor = '#FFFFFF';
});

function populate() {
  var messageDisplayed = sessionStorage.getItem('messageDisplayed');
  if (messageDisplayed == null) {
      sessionStorage.setItem('messageDisplayed', moment().tz(myTimezone).format(myDatetimeFormat2));
  }

  var userIdle = sessionStorage.getItem('useridle');
  // if (userIdle == null && emailfield.value != "") {
  //   sessionStorage.setItem('useridle', moment().tz(myTimezone).format(myDatetimeFormat2));
  // }
  if (userIdle == null) {
    sessionStorage.setItem('useridle', moment().tz(myTimezone).format(myDatetimeFormat2));
  }

  setNeutralFor(passwordfield);
  setNeutralFor(cpasswordfield);

  // Password and confirm password fields populated with invisible random password
  passwordfield.style.color = '#FAFFBD';
  cpasswordfield.style.color = '#FAFFBD';
  passwordfield.style.WebkitUserSelect = "none";
  cpasswordfield.style.WebkitUserSelect = "none";
  passwordfield.style.cursor = 'default';
  cpasswordfield.style.cursor = 'default';
  passwordfield.value = retVal;
  cpasswordfield.value = retVal;

  // Sets safari appearance and set to read only
  passwordfield.style.backgroundColor = "#FAFFBD";
  cpasswordfield.style.backgroundColor = "#FAFFBD";
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
  var messageIgnored = sessionStorage.getItem('messageIgnored');
  if (messageIgnored == null) {
      sessionStorage.setItem('messageIgnored', moment().tz(myTimezone).format(myDatetimeFormat2));
  }

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

function nameplace() {
  var e = elEmail.value;

  if (counting == "1" && stoppoint == 1) {
    if (e.length > 0) {
      if (e == "") {
        e = "Password saved today";
      }
      setName(e);
      setName2(e);
      setName3(e);
      setName4(e);
      stoppoint = 2;
    }
    else {
      e = "Password saved today";
      setName(e);
      setName2(e);
      setName3(e);
      setName4(e);
      stoppoint = 2;
    }
  }

  if (counting == "1" && stoppoint == 2) {
    if (e == "") {
      e = "Password saved today";
    }
    sessionStorage.setItem('descname', e);
    sessionStorage.setItem('countime', "2");
  }

  if (counting == "2") {
    sessionStorage.getItem('descname');
    if (e == "") {
      e = "Password saved today";
    }
    sessionStorage.setItem('descname', e);
  }
}

// If user tries to paste a external source to the password field
elPassword.addEventListener('paste', function() {
  sessionStorage.setItem('pasted', 'yes');
  var messageIgnored = sessionStorage.getItem('messageIgnored');
  if (messageIgnored == null) {
      sessionStorage.setItem('messageIgnored', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
});

elEmail.addEventListener('input', function() {
  emailfield.style.backgroundColor = "#FFFFFF";
  setNeutralFor(emailfield);
});

elPassword.addEventListener('input', function() {
  purple = true;
  setNeutralFor(passwordfield);
  yellowkey.style.display = 'none';
  hoveryellow.style.display = 'none';
  safarikey.style.display = 'block';
  passwordfield.style.backgroundColor = "#FFFFFF";
  minimessage.style.display = 'none';
  smallest.style.display = 'none';
});

elPassword.addEventListener('change', function() {
  var userIdle = sessionStorage.getItem('useridle');
  // if (userIdle == null && emailfield.value != "") {
  //   sessionStorage.setItem('useridle', moment().tz(myTimezone).format(myDatetimeFormat2));
  // }
  if (userIdle == null) {
    sessionStorage.setItem('useridle', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
});

elConfirm.addEventListener('input', function() {
  purple2 = true;
  setNeutralFor(cpasswordfield);
  yellowkey2.style.display = 'none';
  hoveryellow2.style.display = 'none';
  safarikey2.style.display = 'block';
  cpasswordfield.style.backgroundColor = "#FFFFFF";
  minimessage2.style.display = 'none';
  smallest2.style.display = 'none';
});

// Actions that occur when user clicks on the password field
elPassword.addEventListener('focus', function() {
  // make sure user can't interact with save prompt after successfully clicking register button
  if (state == true && count == 1 ) {
    message.style.display = 'none';
  }
  // make sure user can't interact with save prompt after successfully clicking register button
  else if (state == false && count == 1 ) {
    full.style.display = 'none';
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
    full.style.display = 'block';
  }

  nameplace();

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
    full2.style.display = 'none';
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
    full2.style.display = 'block';
  }

  nameplace();

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
      smallest.style.display = 'none';
    }
  }
  // pressed esc key
  if (27 == e.keyCode) {
    if (purple == true) {
      state = false;
      if (passwordfield.value.length > 0 && passwordfield.style.backgroundColor == 'rgb(255, 255, 255)') {
        smallest.style.display = 'none';
      }
      else {
        message.style.display = 'none';
        minimessage.style.display = 'none';
        full.style.display = 'block';
        revert();
      }
    }
    else {
      minimessage.style.display = 'none';
      smallest.style.display = 'none';
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
    full.style.display = 'none';
    minimessage.style.display = 'none';
    smallest.style.display = 'none';
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
    smallest2.style.display = 'none';
  }
  // pressed esc key
  if (27 == e.keyCode) {
    if (purple2 == true) {
      state = false;
      if (cpasswordfield.value.length > 0 && cpasswordfield.style.backgroundColor == 'rgb(255, 255, 255)') {
        smallest2.style.display = 'none';
      }
      else {
        message2.style.display = 'none';
        minimessage2.style.display = 'none';
        full2.style.display = 'block';
        revert();
      }
    }
    else {
      minimessage2.style.display = 'none';
      smallest2.style.display = 'none';
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
    full2.style.display = 'none';
    minimessage2.style.display = 'none';
    smallest2.style.display = 'none';
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
full.onmousedown = function () {
  var x = elPassword.value;
  event.preventDefault();
  if (x.length == 0 || passwordfield.style.backgroundColor == "rgb(250, 255, 189)") {
    minimessage.style.display = 'block';
  }
  else {
    smallest.style.display = 'block';
  }
}

// These actions will happen when the arrow and key icons are clicked (CONFIRM PASSWORD FIELD)
full2.onmousedown = function () {
  var y = elConfirm.value;
  event.preventDefault();
  if (y.length == 0 || cpasswordfield.style.backgroundColor == "rgb(250, 255, 189)") {
    minimessage2.style.display = 'block';
  }
  else {
    smallest2.style.display = 'block';
  }
}

// These actions will happen when the dontuse button is clicked (PASSWORD FIELD)
dontuse.addEventListener('mousedown', function () {
  event.preventDefault();
  state = false;
  purple = true;
  message.style.display = 'none';
  yellowkey.style.display = 'none';
  hoveryellow.style.display = 'none';
  yellowkey2.style.display = 'none';
  hoveryellow2.style.display = 'none';
  safarikey.style.display = 'block';
  full.style.display = 'block';
  revert();
});

// These actions will happen when the dontuse button is clicked (CONFIRM PASSWORD FIELD)
dontuse2.addEventListener('mousedown', function () {
  event.preventDefault();
  state = false;
  purple = true;
  message2.style.display = 'none';
  yellowkey2.style.display = 'none';
  hoveryellow2.style.display = 'none';
  yellowkey.style.display = 'none';
  hoveryellow.style.display = 'none';
  safarikey2.style.display = 'block';
  full2.style.display = 'block';
  revert();
});

// These actions will happen when the usestrong button is clicked (PASSWORD FIELD)
usestrong.addEventListener('mousedown', function () {
  var messageClicked = sessionStorage.getItem('messageClicked');
  if (messageClicked == null) {
      sessionStorage.setItem('messageClicked', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  message.style.display = 'none';
});

// These actions will happen when the usestrong button is clicked (CONFIRM PASSWORD FIELD)
usestrong2.addEventListener('mousedown', function () {
  var messageClicked = sessionStorage.getItem('messageClicked');
  if (messageClicked == null) {
      sessionStorage.setItem('messageClicked', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
  pink = false;
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  message2.style.display = 'none';
});

function bigbutton() {
  purple = false;
  minimessage.style.display = 'none';
  safarikey.style.display = 'none';
  yellowkey.style.display = 'block';
  passwordfield.style.backgroundColor = "#FAFFBD";
  elPassword.value = sessionStorage.getItem('SavedPass');
  event.preventDefault();
  passwordfield.select();
  if (actualname != "Password saved today") {
    emailfield.style.backgroundColor = '#FAFFBD';
    emailfield.value = actualname;
  }
}

function bigbutton2() {
  purple2 = false;
  minimessage2.style.display = 'none';
  safarikey2.style.display = 'none';
  yellowkey2.style.display = 'block';
  cpasswordfield.style.backgroundColor = "#FAFFBD";
  cpasswordfield.value = sessionStorage.getItem('SavedPass');
  event.preventDefault();
  if (actualname != "Password saved today") {
    emailfield.style.backgroundColor = '#FAFFBD';
    emailfield.value = actualname;
    if (purple == false) {
      passwordfield.select();
    }
    else {
      passwordfield.focus();
    }
  }
}

// Biggest button in mini message (password field)
fromweb.addEventListener('mousedown', function () {
  bigbutton();
});

// Biggest button in mini message (confirm password field)
fromweb2.addEventListener('mousedown', function () {
  bigbutton2();
});

fromweb3.addEventListener('mousedown', function () {
  bigbutton();
});

fromweb4.addEventListener('mousedown', function () {
  bigbutton2();
});

// These actions will happen when the fillagain button is clicked (PASSWORD FIELD)
fillagain.addEventListener('mousedown', function () {
  purple = true;
  state = true;
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  minimessage.style.display = 'none';
  full.style.display = 'none';
  var messageClicked = sessionStorage.getItem('messageClicked');
  if (messageClicked == null) {
      sessionStorage.setItem('messageClicked', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
  populate();
});

// These actions will happen when the fillagain button is clicked (CONFIRM PASSWORD FIELD)
fillagain2.addEventListener('mousedown', function () {
  purple2 = true;
  state = true;
  document.getElementById("triedrandom").value = "Yes";
  sessionStorage.setItem('triedrandom', "yes");
  minimessage2.style.display = 'none';
  full2.style.display = 'none';
  var messageClicked = sessionStorage.getItem('messageClicked');
  if (messageClicked == null) {
      sessionStorage.setItem('messageClicked', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
  populate();
});

fillagain3.addEventListener('mousedown', function () {
  purple = false;
  if (elEmail.value == "") {
    var eval = "Password saved today";
  }
  else {
    var eval = elEmail.value;
  }
  sessionStorage.setItem('descname', eval);
  setName(sessionStorage.getItem('descname'));
  setName2(sessionStorage.getItem('descname'));
  setName3(sessionStorage.getItem('descname'));
  setName4(sessionStorage.getItem('descname'));
  sessionStorage.setItem('SavedPass', elPassword.value);
  elPassword.value = sessionStorage.getItem('SavedPass');
  smallest.style.display = 'none';
  safarikey.style.display = 'none';
  yellowkey.style.display = 'block';
  emailfield.style.backgroundColor = '#FAFFBD';
  passwordfield.style.backgroundColor = "#FAFFBD";
  event.preventDefault();
  passwordfield.select();
});

fillagain4.addEventListener('mousedown', function () {
  purple2 = false;
  if (elEmail.value == "") {
    var eval = "Password saved today";
  }
  else {
    var eval = elEmail.value;
  }
  sessionStorage.setItem('descname', eval);
  setName(sessionStorage.getItem('descname'));
  setName2(sessionStorage.getItem('descname'));
  setName3(sessionStorage.getItem('descname'));
  setName4(sessionStorage.getItem('descname'));
  sessionStorage.setItem('SavedPass', elConfirm.value);
  elConfirm.value = sessionStorage.getItem('SavedPass');
  smallest2.style.display = 'none';
  safarikey2.style.display = 'none';
  yellowkey2.style.display = 'block';
  emailfield.style.backgroundColor = '#FAFFBD';
  cpasswordfield.style.backgroundColor = "#FAFFBD";
  event.preventDefault();
});

function checkIdle() {
  var incompleteTime = moment(sessionStorage.getItem('userconfirmed'),"YYYY-MM-DD HH:mm:ss:SSS").diff(moment(sessionStorage.getItem('useridle'),"YYYY-MM-DD HH:mm:ss:SSS"));
  var idleDuration = moment.duration(incompleteTime);
  var idleFinal = moment.utc(incompleteTime).format("mm:ss:SSS");
  sessionStorage.setItem('idleTime', idleFinal);
}

// The amount of time ppl take to make a decision of either clicking on the suggestion or typing their own password
function checkDecisionTime() {
  var didntIgnore = moment(sessionStorage.getItem('messageClicked'),"YYYY-MM-DD HH:mm:ss:SSS").diff(moment(sessionStorage.getItem('messageDisplayed'),"YYYY-MM-DD HH:mm:ss:SSS"));
  var didntIgnoreDuration = moment.duration(didntIgnore);
  var didntIgnoreFinal = moment.utc(didntIgnore).format("mm:ss:SSS");

  var ignored = moment(sessionStorage.getItem('messageIgnored'),"YYYY-MM-DD HH:mm:ss:SSS").diff(moment(sessionStorage.getItem('messageDisplayed'),"YYYY-MM-DD HH:mm:ss:SSS"));
  var ignoredDuration = moment.duration(ignored);
  var ignoredFinal = moment.utc(ignored).format("mm:ss:SSS");

  // User didn't click the message at all, typed their own password only
  if (didntIgnoreFinal == 'NaNInvalid date') {
    sessionStorage.setItem("decisionTime", ignoredFinal);
    sessionStorage.setItem("decision", "typed their own password");
    sessionStorage.setItem('messageClicked', 'n/a');
  }
  // User didn't bother typing their own password, only clicked the suggestion
  else if (ignoredFinal == 'NaNInvalid date') {
    sessionStorage.setItem("decisionTime", didntIgnoreFinal);
    sessionStorage.setItem("decision", "clicked on the suggestion");
    sessionStorage.setItem('messageIgnored', 'n/a');
  }

  // User did both, now we want to see which they did first

  // User clicked the message instead of ignoring it
  else if (didntIgnoreFinal < ignoredFinal) {
    sessionStorage.setItem("decisionTime", didntIgnoreFinal);
    sessionStorage.setItem("decision", "clicked on the suggestion");
  }
  // User typed their own password  instead of clicking the message
  else {
    sessionStorage.setItem("decisionTime", ignoredFinal);
    sessionStorage.setItem("decision", "typed their own password");
  }
}

function nextpage() {
  sessionStorage.clear();
  checkIdle();
  checkDecisionTime();
  // sessionStorage.setItem('actualprocess', "questionnaire.html");
  sessionStorage.setItem('SecondTimestamp', moment().tz(myTimezone).format(myDatetimeFormat));
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
  else if (passValue != retVal && passValue == sessionStorage.getItem('SavedPass') && customdesc.querySelector("p") != "Password saved today") {
    sessionStorage.setItem('status', "yes");
    sessionStorage.setItem('personalpass', passValue);
    sessionStorage.setItem('workeremail', emailValue);
    nextpage();
  }
  else if (passValue != retVal && passValue == sessionStorage.getItem('SavedPass') && customdesc.querySelector("p") == "Password saved today") {
    safari2.style.display = "block";
  }
  else {
    safari.style.display = "block";
  }

  event.preventDefault();

  document.getElementById("user-save").addEventListener('click', function() {
    sessionStorage.setItem('status', "yes");
    sessionStorage.setItem('personalpass', passValue);
    sessionStorage.setItem('workeremail', emailValue);
    nextpage();
  });

  document.getElementById("user-never").addEventListener('click', function() {
    sessionStorage.setItem('status', "no");
    nextpage();
  });

  document.getElementById("user-not-now").addEventListener('click', function() {
    sessionStorage.setItem('status', "no");
    nextpage();
  });

  document.getElementById("user-save2").addEventListener('click', function() {
    sessionStorage.setItem('status', "yes");
    sessionStorage.setItem('personalpass', passValue);
    sessionStorage.setItem('workeremail', emailValue);
    nextpage();
  });

  document.getElementById("user-not-now2").addEventListener('click', function() {
    sessionStorage.setItem('status', "no");
    nextpage();
  });
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
  var messageClicked = sessionStorage.getItem('messageClicked');
  if (messageClicked == null && sessionStorage.getItem('messageIgnored') == null) {
      sessionStorage.setItem('messageClicked', moment().tz(myTimezone).format(myDatetimeFormat2));
  }
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

  if (sessionStorage.getItem('useridle') != null) {
    sessionStorage.setItem('userconfirmed', moment().tz(myTimezone).format(myDatetimeFormat2));
  }

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

function setName(message) {
  var paragraph = customdesc.querySelector("p");
  paragraph.innerText = message;
  actualname = paragraph.innerText;
}

function setName2(message) {
  var paragraph2 = customdesc2.querySelector("p");
  paragraph2.innerText = message;
}

function setName3(message) {
  var paragraph3 = customdesc3.querySelector("p");
  paragraph3.innerText = message;
}

function setName4(message) {
  var paragraph4 = customdesc4.querySelector("p");
  paragraph4.innerText = message;
}

// Displays random password snippet in save prompt near password field
function setPhrase(message) {
  var snippetpass = document.querySelector(".snippetpass");
  var para = snippetpass.querySelector("p");

  para.innerText = message;
}

// Displays random password snippet in save prompt near confirm password field
function setPhrase2(message) {
  var snippetpass2 = document.querySelector(".snippetpass2");
  var para2 = snippetpass2.querySelector("p");

  para2.innerText = message;
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
