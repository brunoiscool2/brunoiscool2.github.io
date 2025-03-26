function filterButtons() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let buttons = document.getElementsByClassName("filter-button");

    for (let i = 0; i < buttons.length; i++) {
        let text = buttons[i].innerText.toLowerCase();
        if (text.includes(input)) {
            buttons[i].style.display = "inline-block";
        } else {
            buttons[i].style.display = "none";
        }
    }
}