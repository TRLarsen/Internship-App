var obj_in = {
    "packet":"ClockIn",
    "lastName": "null",
    "firstName":"null", 
}
var intern = "out"

//Button look/content Change
function clickFunction() {
    if (intern == "out") {
        document.querySelector("button").style.backgroundColor = "red";
        document.querySelector("button").innerText = "Out"
        intern = "in"
        console.log("Clocked In:")}
    else if (intern == "in") {
        document.querySelector("button").style.backgroundColor = "green";
        document.querySelector("button").innerText = "In"
        intern = "out"
        console.log("Clocked Out:")
    }
    console.log(Date())
}

//Submit to Google Sheet through apispreadsheets
function SubForm (){
  obj_in.firstName = myForm.firstName.value;
  obj_in.lastName = myForm.lastName.value;
    $.ajax({
        url:'https://jkcoxson.com',
        type:'post',
        data: JSON.stringify(obj_in), //https://www.apispreadsheets.com/guides/update-data-subset-rows
        callback: (data) => {
          console.log(data)
        },
     success: function(){
        console.log("Form Data Submitted :)")
     },
     error: function(){
       console.log("There was an error :(")
     },
    });
}