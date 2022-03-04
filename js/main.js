// var x=7;
// var y=3;

// // console.log(++x);
// // console.log(x++);
// x/=3
// console.log(x); 
// Arifmetik operatorlar



// var x=2;
// // console.log(x<0);
// // console.log(x>=1);
// // console.log(x<2);
// console.log("1"===1);
// console.log("1"==1);
// x=10;
// y=5;
// console.log(x>y);
// x=5;
// x!=="5";
// console.log(x);
// "2"=="12" 
// console.log(2=>12);
// var points =70;
// var result = points>60? "O'tdi" : "O'tmadi";
// console.log("Imtihon natijasi:" , result);
// var str = "Hello world!!!"
// console.log(str.length);
// console.log(str.trim(
    
// ));
// var namePerson ="Ibrohim"
// var greeting ="Hello"
// function sayelHelllo(name) {
//    return "Hello " + name.trim()  
// }
// console.log(sayelHelllo("       Umid     "));
// function Sayfullo(name) {
//     return "Hello " + name.trim()
    
// }
// console.log(Sayfullo("       Ibrohim      "));




// function checkAge(name, age) {
// if (age > 0  && age<12) {
//     return name + "Chaqaloq "
// }  else if (age >12 && age <16) {
//    return name + "Ospirin " 
// } else if (age >16 && age<21) {
//   return name + "Ibrohim balogat yoshda "  
// } else if (age>21 && age<50) {
//   return name + "Ibrohim o'rta yoshda "  
// } else if (age>50) {
//   return name + "Ibrohim qariya"  
// }{
    
// }  
// }

// console.log(checkAge("Ibrohim", 34));
// function meningFunksiyam(name1,name2) {
//   return name1 + name2
// }

// console.log(meningFunksiyam(10,20)); //30
// const result = meningFunksiyam(30,40);//70
// console.log(result + 10);
// console.log(kvadrat(2));
//  function kvadrat(son) {
//   return son*son; 
//  }
//  console.log(kvadrat(10));
// const kvadrat = function (son) {
//   return son + son;
// }
// console.log(kvadrat(10));
// const kvadrat = (son)=>{
//   return son*son;
// }
// console.log(kvadrat(10));//100



var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elMan = document.querySelector(".list__result-man");
var elBicycle = document.querySelector(".list__result-bicycle");
var elCar = document.querySelector(".list__result-car");
var elPlane = document.querySelector(".list__result-plane");


elForm.addEventListener("submit", function (e) {
   e.preventDefault();
   
   var elValue = elInput.value;
   var odam = 3.6;
   var velasiped = 20.1;
   var transport = 70;
   var samaliyot = 800;
   var elReturn = document.querySelector(".return");

   if (elValue <= 0 || isNaN(elValue)) {
     elReturn.textContent = "0 dan katta son kiriting ";
     elReturn.classList.add("return-error");
     return;
   } else {
     elReturn.textContent = "";
     elReturn.classList.remove("return-error");
   }

function milesTime_1 (distance,speed) {
  var hour= Math.floor(elValue/odam)
  var minute = Math.floor((elValue / odam - hour) * 60);
  var second = Math.floor(((elValue / odam - hour) * 60 - minute) * 60);
  return hour + " soat " + minute + " minut " + second + "secund";
}

function milesTime_2 (distance,speed) {
  var hour =Math.floor(elValue/velasiped)
  var minute = Math.floor((elValue/velasiped-hour)*60);
  var second=Math.floor(((elValue/velasiped-hour)*60 -minute)*60);
  return hour + " soat " + minute + " minut " + second + " second ";
}

function milesTime_3 (distance,speed) {
  var hour = Math.floor(elValue/transport);
  var minute = Math.floor((elValue/transport-hour)*60);
  var second = Math.floor(((elValue/transport-hour)*60 - minute)*60);
  return hour + "soat" + minute + "minut" + second + " second" ;
  
}

function milesTime_4(distance, speed) {
  var hour = Math.floor(elValue/samaliyot);
  var minute =Math.floor((elValue/samaliyot-hour)*60);
  var second =Math.floor (((elValue/samaliyot-hour)*60-minute)*60);
  return hour + "soat" + minute + "minut" +second + "second";
  
}


elMan.textContent = milesTime_1();
elBicycle.textContent = milesTime_2();
elCar.textContent = milesTime_3();
elPlane.textContent = milesTime_4();





})

























