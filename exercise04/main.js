function customize() {
    let bordR = document.getElementById('redBO').value;
    let bordG = document.getElementById('greenBO').value;
    let bordB = document.getElementById('blueBO').value;
    let bordW = document.getElementById('widthBO').value;
    let backR = document.getElementById('red').value;
    let backG = document.getElementById('green').value;
    let backB = document.getElementById('blue').value;
    if(bordR < 0 || bordR > 255) {
        alert("Invalid value");
    }
    else if(bordG < 0 || bordG > 255) {
        alert("Invalid value");
    }
    else if(bordB < 0 || bordB > 255) {
        alert("Invalid value");
    }
    else if(backR < 0 || backR > 255) {
        alert("Invalid value");
    }
    else if(backG < 0 || backG > 255) {
        alert("Invalid value");
    }
    else if(backB < 0 || backB > 255) {
        alert("Invalid value");
    }
    else {

        let bordValue = bordW + 'px solid #' + Number(bordR).toString(16) + Number(bordG).toString(16) + Number(bordB).toString(16);
        document.getElementById('here').style.border = bordValue;
        let backValue = '#' + Number(backR).toString(16) + Number(backG).toString(16) + Number(backB).toString(16);
        document.getElementById('here').style.backgroundColor = backValue;
    }
}