var group = ["image2", "image3", "description", "description2"];
var stepValue = 5;
var down = 0;
var pass = getText("set_password");
var use = getText("set_username")

onEvent("sign_in", "click", function( ) {
    setScreen("screen2");
});

onEvent("login", "click", function( ) {
  
    if(getText("username") === ""){
  var x = prompt("please enter username");
  setText("username", x)
  }
  
  if(getText("password") === ""){
  var x = prompt("please enter password");
  setText("password", x)
  }
 
  // if(){
  //   setScreen("screen3")
  // }
  
   if(getText("username") === "sport_swap" && getText("password") === "prototype"){
     setScreen("screen3")
     
  }
  var y =  getText("username")
  setText("greet","Hi "+ y)
  
});

onEvent("exchange", "click", function( ) {
  setScreen("screen4")
});

onEvent("btnUp", "click", function( ) {
  var dir = -1*stepValue;
  scrollGroup(group,dir);
  down = down-1
  console.log(down)
});


onEvent("btnDown", "click", function( ) {
  var dir = 1*stepValue;
  scrollGroup(group,dir);
});

function scrollGroup(group, dir){
  for (var i = 0; i < group.length; i++) {
    setPosition(group[i],getXPosition(group[i]),getYPosition(group[i]) + dir);
  }
}

onEvent("image2", "click", function( ) {
  setScreen("screen5");
});
onEvent("button3", "click", function( ) {
  if(getText("username")==="sport_swap"){
    setScreen("screen3");
  }else if(getText("set_username") !== ""){
      setScreen("screen7");
    }
});
onEvent("button6", "click", function( ) {
  setScreen("screen4");
});
onEvent("button7", "click", function( ) {
  setScreen("screen1")
});


onEvent("select_profile", "change", function( ) {
	console.log("select_profile photo selected!");
	console.log(getImageURL("select_profile"));
	var url = getImageURL("select_profile");
	setImageURL("Profile", url)
});

onEvent("button1", "click", function( ) {
	if(getText("text_input3") !== "" && getText("text_input4") !== "" && getText("set_username") !== "" && getText("set_password") !== ""){
	setScreen("screen7")
	var y =  getText("set_username")
	 setText("text_area2","Hi "+ y)
	}
});


onEvent("photo_select1", "change", function( ) {
	console.log("photo_select1 photo selected!");
	var url = getImageURL("photo_select1")
	setImageURL("image1", url)
});
onEvent("button4", "click", function( ) {
	if(getText("search") === "helmet" || getText("search") === "cricket helmet" || getText("search") === "Helmet"){
	  setScreen("screen5")
	}
	
});

onEvent("image3", "click", function( ) {
	console.log("image3 clicked!");
	setScreen("screen9")
});

onEvent("button14", "click", function( ) {
	console.log("button14 clicked!");
	setScreen("screen4")
});


onEvent("button22", "click", function( ) {
  setScreen("screen1")
});

onEvent("button18", "click", function( ) {
  setScreen("screen1")
});

onEvent("button2", "click", function( ) {
	setScreen("screen6")
});

onEvent("button23", "click", function( ) {
	if(getText("username") === "sport_swap"){
	  setScreen("screen3")
	}else if(getText("set_username") !== ""){
	  setScreen("screen7")
	}
});

onEvent("button25", "click", function( ) {
  if(getText("username") === "username"){
  	setScreen("screen3")
  } else if(getText("set_username") !== ""){
    setScreen("screen7")
  }
});

onEvent("button4", "click", function( ) {
  if(getText("search")==="football" || getText("search") === "soccer" || getText("search")==="Football" || getText("search") === "Soccer"){
    setScreen("screen9")
  }else if(getText("search") !== "helmet" && getText("search") !== "cricket helmet" && getText("search") !== "Helmet"){
    setScreen("screen8")
  }
});

onEvent("button5", "click", function( ) {
  setScreen("screen4")
});

onEvent("photo_select5", "change", function( ) {
	var url = getImageURL("photo_select5");
	setImageURL("image10",url)
});   
onEvent("button24", "click", function( ) {
	if(getText("text_input5") !== "" && getText("text_input6") !== "" && getText("text_input7") !== "" && getImageURL("image10")!== "assets/donate.png"){
	  setScreen("screen13")
	}
});
onEvent("button10", "click", function( ) {
	if(getText("text_input1") !== "" && getText("text_input2") !== "" && getText("text_input8") !== "" && getImageURL("image4")!== "assets/donate.png"){
	   setScreen("screen11") 
	}
});
onEvent("photo_select2", "change", function( ) {
  var url = getImageURL("photo_select2");
	setImageURL("image4",url)
});
onEvent("button8", "click", function( ) {
	setScreen("screen10")
});
onEvent("button9", "click", function( ) {
	setScreen("screen3")
});
onEvent("button12", "click", function( ) {
	setScreen("screen3")
});


onEvent("button17", "click", function( ) {
	setScreen("screen4")
});
onEvent("button16", "click", function( ) {
	setScreen("screen6")
});

onEvent("button25", "click", function( ) {
	setScreen("screen6")
});







