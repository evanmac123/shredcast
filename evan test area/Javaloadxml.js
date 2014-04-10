// JavaScript Document

//window.onload - function() {
	//		  var xmlDoc=loadXMLDoc("content.xml");
//var x=xmlDoc.getElementsByTagName("title");

//for (i=0;i<x.length;i++)
 // {
  //document.write(x[i].childNodes[0].nodeValue);
  //document.write("<br>");
  //}}
  
var list; 
var x = document.getElementById("frm1"); 
var cars= new Array("Saab","Volvo","BMW");
var txt = "";






//Creates holder for one iteration out of XML file information







function myFunction(a,b)
{
return a*b;
}

window.onload - function array(){
	list=window.onload.getElementsByTagName("p")
	}

//array example
//for(var i=0, len=cars.length; i<len; i++){
//document.write(cars[i] + "<br>");}
var xmlDoc = loadXMLDoc("content.xml");

function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
} 




//}  