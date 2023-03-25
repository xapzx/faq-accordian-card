const accordion = document.querySelectorAll(".accordion");

accordion.forEach((acc) => {
    acc.addEventListener("click", function() {
        this.classList.toggle("active");
        this.lastElementChild.firstChild.classList.toggle("open");

        const panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});