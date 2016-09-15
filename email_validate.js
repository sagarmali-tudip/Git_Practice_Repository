				function validateEmail(){
					var email = document.getElementById('email_id').value;
					
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    				
					if(filter.test(email)){
							document.getElementById('message_email').innerHTML = "Correct Email Format...!";
							document.getElementById('message_email').style.color = "green";
					}else{
							document.getElementById('message_email').innerHTML = "Email  Format is wrong...!";
							document.getElementById('message_email').style.color = "red";
					}
				}
				
				function validatePassword(){
					var password = document.getElementById('password').value;
					var confirm_password = document.getElementById('confirm_password').value;
					if(password === confirm_password){
							document.getElementById('message_pass').innerHTML = "Password Match...!";
							document.getElementById('message_pass').style.color = "green";
					}else{
							document.getElementById('message_pass').innerHTML = "Password do not Match...!";
							document.getElementById('message_pass').style.color = "red";
					}
				}
				function validateName()
				{
					var name = document.getElementById('name_id').value;
					var filter = /^[a-zA-Z]+$/;
					if(filter.test(name))
					{
						document.getElementById('message_name').innerHTML = "valid Name...!";
							document.getElementById('message_name').style.color = "green";
						
					}
					else{
							document.getElementById('message_name').innerHTML = "Name Contains only Letters...!";
							document.getElementById('message_name').style.color = "red";
					}
				}
				
				function validateMobile()
				{
					var phoneno = document.getElementById('mobno').value;
					var filter = /^\d{10}$/;
					if(filter.test(phoneno))
					{
						document.getElementById('message_phone').innerHTML = "valid Contact No...!";
							document.getElementById('message_phone').style.color = "green";
						
					}
					else{
							document.getElementById('message_phone').innerHTML = "Contact No contain only digits...!";
							document.getElementById('message_phone').style.color = "red";
					}
					
				}
				function validateTime()
				{
					var intime = document.getElementById('exampleInput').value;
					var outtime = document.getElementById('exampleOutput').value;
					if(outtime > intime)
					{
						document.getElementById('message_time').innerHTML = "valid Time...!";
							document.getElementById('message_time').style.color = "green";
						
					}
					else{
							document.getElementById('message_time').innerHTML = "Out time is greater than in time...!";
							document.getElementById('message_time').style.color = "red";
					}					
				}