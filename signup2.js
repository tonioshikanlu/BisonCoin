

function submitFunction(){
	validatePassword();
}

function validatePassword(){
	var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
  if(password.value != password2.value) {
  	alert("passwords do not match");
  	return false;
  } else {
  	alert("passwords  match");
  	return true;
  }
}

//password.onchange = validatePassword;
//password2.onkeyup = validatePassword;