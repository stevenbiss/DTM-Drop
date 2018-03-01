// Append header
var headerscript = document.createElement("script");
headerscript.src = "https://assets.adobedtm.com/<YOUR DTM STAGING LIBRARY>";
document.head.appendChild(headerscript);
console.log("// DTM DROP - HEADER CODE INSERTED: \n <script src='" +headerscript.src+ "'></script>" );

setTimeout(function(){
	
	// Append body
	var bodyscript = document.createElement("script");
	bodyscript.text = "_satellite.setDebug(true); _satellite.pageBottom();";
	bodyscript.type = "text/javascript";
	document.body.appendChild(bodyscript);
	console.log("// DTM DROP - BODY CODE INSERTED: \n <script type='text/javascript'>" +bodyscript.text+ "</script>" );

// 3 second delay to intialize DTM	
}, 3000);


//Creating Elements Example for Debugging
/*
	var dtmDropImage = document.createElement("img")
	dtmDropImage.src = "http://stevenbiss.io/images/icon-48-on.png";
	document.body.appendChild(dtmDropImage);
*/
