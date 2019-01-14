let toggled = false;
function toggleHeight(el) {
    if (toggled === false) {
        el.parentElement.parentElement.style.height = '300px';
        toggled = true;
    } else {
        el.parentElement.parentElement.style.height = '50px';
        toggled = false;
    }
}
