/*
=====================================

 Project:  Gigya
 Author:   Lee McNamara

=====================================
*/

;if(!window.console){
	console = {
		log : function(msg){},
		debug : function(msg){},
		info : function(msg){},
		warn : function(msg){},
		error : function(msg){}
	};
}

;(function ( win, doc, undefined ){

	"use strict";

	win.gigya = win.gigya || {};

	gigya.elements = {
		login 			: doc.getElementById("login"),
		logout 			: doc.getElementById("logout"),
		provider 		: doc.getElementById("provider"),
		firstName 		: doc.getElementById("firstName"),
		lastName 		: doc.getElementById("lastName"),
		gender 			: doc.getElementById("gender"),
		avatar 			: doc.getElementById("avatar"),
		profileURI 		: doc.getElementById("profileURI"),
		login_params 	: {
			screenSet : "Default-RegistrationLogin", 
			mobileScreenSet : "DefaultMobile-RegistrationLogin"
		}
	};

	gigya.loginEventHandler = function(eventObj){
		
		//Log all details of user login for debugging purposes only
		console.log("User logged in!");
		console.log("Profile details: " + JSON.stringify(eventObj.profile, null, 4));
		console.log("Login object: " + JSON.stringify(eventObj, null, 4));

		//Inject user details
		gigya.elements.provider.innerHTML 	= eventObj.provider;
		gigya.elements.firstName.innerHTML 	= eventObj.profile.firstName;
		gigya.elements.lastName.innerHTML 	= eventObj.profile.lastName;
		gigya.elements.gender.innerHTML 	= eventObj.profile.gender;
		gigya.elements.avatar.src 			= eventObj.profile.thumbnailURL;
		gigya.elements.profileURI.href 		= eventObj.profile.profileURL;
		gigya.elements.profileURI.innerHTML = eventObj.profile.profileURL;

	};

	gigya.logoutEventHandler = function(eventObj){

		//Log all details of user logout for debugging purposes only
		console.log("User has logged out");
		console.log(JSON.stringify(eventObj, null, 4));
		
		//Remove user details
		gigya.elements.provider.innerHTML 	= null;
		gigya.elements.firstName.innerHTML 	= null;
		gigya.elements.lastName.innerHTML 	= null;
		gigya.elements.gender.innerHTML 	= null;
		gigya.elements.avatar.innerHTML 	= null;
		gigya.elements.profileURI.innerHTML = null;

	};

	gigya.init = function(){};

	win.onload = function(){
		gigya.init();
	};

	//Event Listerners
	gigya.elements.login.addEventListener("click", function(e){
		e.preventDefault();
		gigya.accounts.showScreenSet(gigya.elements.login_params);
	});
	gigya.elements.logout.addEventListener("click", function(e){
		e.preventDefault();
		gigya.accounts.logout({
			forceProvidersLogout: true, 
			callback:gigya.onLogout
		});
	});

	//Event handlers
	gigya.accounts.addEventHandlers({
		onLogin:gigya.loginEventHandler,
		onLogout:gigya.logoutEventHandler
	});

})( window, document );