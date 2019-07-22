var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female=["Akosua"," Adwoa","Abenaa"," Akua","Yaa"," Afua"," Ama"];
function res(){
 document.getElementById("day").value += " ";
 document.getElementById("month").value += " ";
 document.getElementById("century").value += " ";
 document.getElementById("year").value += " ";
 document.getElementById("male").checked = false;
 document.getElementById("female").checked = false;
}
function birthday() {
 var day = parseInt(document.getElementById("day").value);
 var month= parseInt(document.getElementById("month").value);
 var century= parseInt(document.getElementById("century").value);
 var year= parseInt(document.getElementById("year").value);
 var CC= Math.floor((century/100)+1);
 if (day > 0 && day <= 31 && month > 0 && month <= 12){
   document.getElementById("output-day").innerHTML = day;
   document.getElementById("output-month").innerText = month;
   document.getElementById("output-century").innerText = century;
   document.getElementById("output-year").innerText = year;
 
   var dweek =  ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
   var final = Math.round(dweek);
   if(document.getElementById("male").checked) {
       document.getElementById("Akan").innerHTML= male[final];
    } else
   if(document.getElementById("female").checked) {
       document.getElementById("Akan").innerHTML= female[final];
   }
  } else 
  {
   alert("Enter valid data please!")
 }
}