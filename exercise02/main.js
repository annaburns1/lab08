function next() {
    if(num==1) {
        num+=1;
        document.getElementById('picture').src = "images/Jayhawk2.png";
    }
    else if(num==2) {
        num+=1;
        document.getElementById('picture').src = "images/Jayhawk3.png";
    }
    else if(num==3) {
        num+=1;
        document.getElementById('picture').src = "images/Jayhawk4.png";
    }
    else if(num==4) {
        num+=1;
        document.getElementById('picture').src = "images/Jayhawk5.png";
    }
    else if(num==5) {
        num+=1;
        document.getElementById('picture').src = "images/Jayhawk6.png";
    }
    else if(num==6) {
        num = 1;
        document.getElementById('picture').src = "images/Jayhawk1.png";
    }
}

function back() {
    if(num==1) {
        num=6;
        document.getElementById('picture').src = "images/Jayhawk6.png";
    }
    else if(num==2) {
        num-=1;
        document.getElementById('picture').src = "images/Jayhawk1.png";
    }
    else if(num==3) {
        num-=1;
        document.getElementById('picture').src = "images/Jayhawk2.png";
    }
    else if(num==4) {
        num-=1;
        document.getElementById('picture').src = "images/Jayhawk3.png";
    }
    else if(num==5) {
        num-=1;
        document.getElementById('picture').src = "images/Jayhawk4.png";
    }
    else if(num==6) {
        num-=1;
        document.getElementById('picture').src = "images/Jayhawk5.png";
    }
}