

var label=document.createElement("label");
label.innerHTML="First Name";
label.setAttribute("for","fname")
var input=document.createElement("input");
input.setAttribute("id","fname")
 
label.append(input)
document.body.append(label);


var label=document.createElement("label");
label.setAttribute("for","lname")
label.innerHTML="Last Name";
var input=document.createElement("input");
input.setAttribute("id","lname")
 
label.append(input)
document.body.append(label);


var label=document.createElement("label");
label.setAttribute("for","email")
label.innerHTML="Email";
var input=document.createElement("input");
input.setAttribute("id","email")
 
label.append(input)
document.body.append(label);


var label=document.createElement("label");
label.setAttribute("for","password")
label.innerHTML="Password";
var input=document.createElement("input");
input.setAttribute("id","password")
input.setAttribute("type","password")
 
label.append(input)
document.body.append(label);


var button=document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-outline-primary";
button.innerHTML="Click Me";
button.addEventListener("click",foo);
document.body.append(button);


function foo(){
      
    let res1=document.getElementById("fname").value;
    let res2=document.getElementById("lname").value;
    let res3=document.getElementById("email").value;

    let res4=document.getElementById("password").value;
    console.log(res1,'\n',res2,'\n',res3,'\n',res4);
}