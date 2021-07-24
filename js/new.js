function displayPopup() {

    var elPopup = document.getElementById('popup');
    
    if (popup.style.display === 'flex') {popup.style.display = 'none';} 
    else {popup.style.display = 'flex';}
}
    
var elBtn = document.getElementById('btn');
elBtn.addEventListener('click', displayPopup, false);