const initSlider = () => {
    const slideButtons = document.querySelectorAll(".clubs_content .my_icon");
    const clubsSlayds = document.querySelector(".clubs_content .clubs_slayds");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev_slide" ? -1:1;
            const scrollAmount = clubsSlayds.clientWidth * direction;
            clubsSlayds.scrollBy({ left: scrollAmount, behavior: "smooth" })
        });
    });
}


window.addEventListener("load", initSlider);