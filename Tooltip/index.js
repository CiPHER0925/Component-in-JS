const closeTooltip = () => {
    const btn = document.getElementById("close-btn");
    const tooltip = document.getElementById("close-text");

    const closeText = () => {
        tooltip.style.display = "none";
    }
    btn.addEventListener("click", closeText);
}
closeTooltip();