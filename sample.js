
var app = angular.module("myApp", ["ngRoute"]);

//Configuration...(index Page)

app.config(function($routeProvider) {
					$routeProvider
					.when("/", {
						templateUrl : "log.htm"
					})
					.when("/home", {
						templateUrl : "index.htm"
					})
					.when("/login", {
						templateUrl : "log.htm"
					})
					.when("/addreceptionist", {
						templateUrl : "Recept.htm"
					})
					.when("/addvisitor", {
						templateUrl : "visit.htm"
					})
					
					.when("/viewvisitor", {
						templateUrl : "view.htm"
					})
					.when("/logout", {
						templateUrl : "log.htm"
					});
					
				});
//Receptionst Register (Registration)

app.controller('Add_Receptionist', function($scope,$http,$window) {
    $scope.Add_Receptionist_Function = function(){
		var request = $http({method: "post",url:"http://atithi.dev.tudip.com/api/auth/register",
			data: {
					name:$scope.Receptionist_Name,
					email: $scope.Receptionist_Email,
					password: $scope.Receptionist_Password
            },
            headers: { 'Content-Type': 'application/json' }
        })
        request.success(function (response) 
        {
			$window.sessionStorage.setItem('add_receptionistToken',response.token);
			var add_receptionistToken = $window.sessionStorage.getItem('add_receptionistToken');				
			alert("User Added Sucessfully...!");	
			
        })
		request.error(function (response) 
        {			
			alert("OOp's an error occoured!");	
			console.log(response);
			console.log(request);

        })
	}
	
});

//Login Entry (Login)

app.controller('Login', function($scope,$http,$window,$location) {
    $scope.loginRequest= function(){
		var request = $http({method: "post",url:"http://atithi.dev.tudip.com/api/auth/login",
			data: {
                email: $scope.Login_Email,
                password: $scope.Login_Password
            },
            headers: { 'Content-Type': 'application/json' }
        })
        request.success(function (response) 
        {
			$window.sessionStorage.setItem('login_Token',response.token);
			var token=$window.sessionStorage.getItem('login_Token');
			alert("Login Sucessfully...!"+token);
			//window.open("index.htm");
						
        })
		request.error(function (response) 
        {			
			 alert("OOp's an error occoured!");	 
			console.log(response);
			console.log(request);
        })
	}
});

// Guest Entry Token (Add Visitor) 

app.controller('Add_Visitor', function($scope,$http,$window) {
    $scope.Add_Visitor_Function= function(){
		var login_Token=$window.sessionStorage.getItem('login_Token');
		var request = $http({method: "post",url:"http://atithi.dev.tudip.com/api/visitors/store?token="+login_Token,
			data: {
				name:$scope.Visitor_Name,
                email: $scope.Visitor_Email,
                phone_no: $scope.Visitor_Mobno,
				in_time: 1472556415,
				out_time: 1472556999				
            },
            headers: { 'Content-Type': 'application/json' }
        })
        request.success(function (response)
        {				
		
				alert("Visitors added successfully...!");
				
        })
		request.error(function (response) 
        {			
			alert("OOp's an error occoured!");	 
			console.log(response);
			console.log(request);
				
        })
	}
});
 

app.controller('View_Visitor', function($scope,$http,$window) {
	
//View Guest Booked (View Visitors)

    $scope.view_visitorRequest= function(){
		var view_visitor=$window.sessionStorage.getItem('login_Token');
		var request = $http.get("http://atithi.dev.tudip.com/api/visitors?token="+view_visitor)
        .then(function (response) 
        {			
            $scope.myWelcome = response.data;			
        })
		request.success(function (response) 
        {				
		
			 alert("Data View Sucessfully...!");
        })
		request.error(function (response) 
        {			
			 alert("OOp's an error occoured!");					
        })
	}
	
// Guest Entry Token (Update Visitor)   

    $scope.Update_Visitor_Function= function(content){
        var login_Token=$window.sessionStorage.getItem('login_Token');
		var request = $http({method: "post",url:"http://atithi.dev.tudip.com/api/visitors/" + content.id +"?token="+ login_Token,
		data: {
				name:this.content.name,
                email: this.content.email,
                phone_no: this.content.phone_no,
				in_time: 1472556415,
				out_time: 1472556999				
            },
            headers: { 'Content-Type': 'application/json' }
        })
        request.success(function (response) 
        {				
		
			 alert("Update Data Sucessfully...!");				
        })
		request.error(function (response) 
        {			
			 alert("OOp's an error occoured!");	 
			console.log(response);
			console.log(request);

        })
	}	
	
//Delete Visitors (Delete visitors)

	$scope.Delete_Visitor_Function= function(content){
       	var login_Token=$window.sessionStorage.getItem('login_Token');
		var request = $http({method: "delete",url:"http://atithi.dev.tudip.com/api/visitors/" + content.id +"?token="+ login_Token,
			headers: { 'Content-Type': 'application/json' }
        })
        request.success(function (response) 
        {				
		
			 alert("User Deleted Sucessfully...!");
			 $scope.view_visitorRequest();
        })
		request.error(function (response) 
        {			
			alert("OOp's an error occoured!");	 
			console.log(response);
			console.log(request);

        })
	}
	

});

