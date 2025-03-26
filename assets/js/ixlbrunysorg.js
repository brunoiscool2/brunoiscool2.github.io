document.addEventListener("DOMContentLoaded", function() {
    
    if (window.location.hostname !== "ixl.brunys.org") {
        
        if (!localStorage.getItem('popupDismissed')) {
            document.getElementById("popup").style.display = "block";
        }
    }
});

function startPlaying() {
    
    document.getElementById("popup").style.display = "none";
    
    
    localStorage.setItem('popupDismissed', 'true');
}
