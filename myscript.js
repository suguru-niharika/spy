var f=prompt("hello and welcome. please enter your first name");
var l=prompt("please enter your last name");
var age=prompt("how old are you?");
var height=prompt("how tall are you in centimeters");
var pet_name=prompt("what is the name of your pet");
if (f[0]==l[0])
 {
  if (age>=20 && age<=30)
   {
     if (height>=170)
     {
       if (pet_name[pet_name.length-1]=='y')
       {
         alert("thank you so much for your information");
         console.log("welcome you are spy now");
      }
    }
  }
}
else {
  console.log("");
}
