function verify(){
    let first = "";
    first = document.getElementById("first").value;
    let second = "";
    second = document.getElementById("second").value;
    let length = first.length;

    if(first == second) {
        if(length >= 8) {
            alert("Password is valid and match!")
        }
        else {
            alert("Passwords match but are not 8 characters long.")
        }
    }
    else {
        alert("Passwords are invalid! Make sure they match and are at least 8 characters long.")
    }
}