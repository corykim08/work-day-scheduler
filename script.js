let today = new Date(); // Get the current date
let hours = today.getHours(); // Get the current hour

$(function(){ // This function is automatically runned after reloading the web page

    for (i=9; i<18; i++){ // bring saved input data from sessionstorage and write on the web page.
        document.getElementById((i).toString()+"Btn").value = sessionStorage.getItem("key"+(i).toString()); 
    }
    document.getElementById("currentDay").innerHTML = today.toLocaleDateString(); // writge the local date in the user's timezone
    checkHours(); // update the colors based on current time
})


// function init(){
//     console.log(sessionStorage.getItem('key'))
//     document.getElemen tById("9am").innerHTML = sessionStorage.getItem('key');
// }
function checkHours(){
    
    let index = hours;
    if (index <9){ // if time is earlier than 9, do nothing.
        return
    }
    if (index >= 18){ // reduce time spent on for loop
        index = 18;
    }
    for (var i = 9; i < index; i++){ // Color of time-blocks before current time are adjusted since they are in the past.
        let str1 = (i).toString()
        let str2 = (i).toString() + "Btn"
        document.getElementById(str1).className = "past"
        document.getElementById(str2).className = "past"
    }
    if (index <= 17){ // adjust the color of time-block which is in the present.
        str1 = (index).toString()
        str2 = (index).toString() + "Btn"
        document.getElementById(str1).className = "present"
        document.getElementById(str2).className = "present"
    }
 
}

function save(time) { // run if the user click "save" button on the webpage
    let str1 = (time).toString() + "Btn"
    let str2 = "key" + (time).toString()
    timevalue = document.getElementById(str1).value;
    sessionStorage.setItem(str2, timevalue); // save the input text value in sessionstorage.
}
