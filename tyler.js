var obj_in = {"data": {"in_or_out":"In", "date_and_time":Date(), "full_name":"null", "email":"null", "message":"null"}}
var intern = "out"

//Button look/content Change
function clickFunction() {
    if (intern == "out") {
        document.querySelector("button").style.backgroundColor = "red";
        document.querySelector("button").innerText = "Out"
        intern = "in"
        obj_in.data.in_or_out = "Out"
        console.log("Clocked In:")}
    else if (intern == "in") {
        document.querySelector("button").style.backgroundColor = "green";
        document.querySelector("button").innerText = "In"
        intern = "out"
        obj_in.data.in_or_out = "In"
        console.log("Clocked Out:")
    }
    console.log(Date())
}

//Submit to Google Sheet through apispreadsheets

function SubForm (){
  obj_in.data.full_name = myForm.full_name.value;
  obj_in.data.email = myForm.email.value;
  obj_in.data.message = myForm.message.value;
  obj_in.data.date_and_time = Date()
    $.ajax({
        url:'https://api.apispreadsheets.com/data/5119/',
        type:'post',
        data: JSON.stringify(obj_in), //https://www.apispreadsheets.com/guides/update-data-subset-rows
     success: function(){
        console.log("Form Data Submitted :)")
     },
     error: function(){
       console.log("There was an error :(")
     },
    });
}