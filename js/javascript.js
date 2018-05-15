/* function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#resultEmail");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid ");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid ");
    $result.css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate); */
function Submit(){
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('number').value;
		var web = document.getElementById('web').value;
		var DOB = document.getElementById('dob').value;
		
		var regWeb = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/; 
		
		// name validation
		if(name == '' || name == null){
			document.getElementById('resultName').innerHTML = " empty string";
		}else if(/^[A-Za-z\s]+$/.test(name)){
			document.getElementById('resultName').innerHTML = name;
		}else{
			document.getElementById('resultName').innerHTML = " invalid name";
		}
		
		//email validation
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(email == '' || email == null){
			document.getElementById('resultEmail').innerHTML = " empty string email";
		}else if(pattern.test(email)){
			document.getElementById('resultEmail').innerHTML = email;
		}else{
			document.getElementById('resultEmail').innerHTML = " invalid email";
		}
		
		//Phone Number validation
		if(phone == '' || phone == null){
			document.getElementById('resultPhone').innerHTML = " empty";
		}else if(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)){
			document.getElementById('resultPhone').innerHTML = phone;
		}else{
			document.getElementById('resultPhone').innerHTML = "invalid Phone No";
		}
		
		//Web address validation
		if(web == '' || web == null){
			document.getElementById('resultWeb').innerHTML = " empty Web address";
		}else if(regWeb.test(web)){
			document.getElementById('resultWeb').innerHTML = web;
		}else{
			document.getElementById('resultWeb').innerHTML = " invalid Web url";
		}
	}