const toastComponent = () => {
    const btn = document.getElementById("btn-toast");
    const toast = document.getElementById("show-toast");
    const closeBtn = document.getElementById("close-btn");

    let clicked = false;

    const showToast = () => {
        if(!clicked) {
            clicked = true;
            toast.style.display = "block";
            setTimeout(() => {
                toast.style.display = "none";
                clicked = false;
            }, 2000);
        }
    }

    const closeToast = () => toast.style.display = "none";

    btn.addEventListener("click", showToast);
    closeBtn.addEventListener("click", closeToast);
}
toastComponent();


//addind and removing eventlistner
// const showToast = () => {
//     toast.style.display = "block";
//     btn.removeEventListener("click", showToast);
//     setTimeout(() => {
//         toast.style.display = "none";
//     }, 2000);
// }


//tooltip
const closeTooltip = () => {
    const btn = document.getElementById("close-btn-tooltip");
    const tooltip = document.getElementById("close-text");

    const closeText = () => {
        tooltip.style.display = "none";
    }
    btn.addEventListener("click", closeText);
}
closeTooltip();