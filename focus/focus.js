let selectedElement = null;

window.onclick = (e) => {
    selectedElement = e.target;
}

window.onkeyup = (e) => {

    if(!selectedElement) return;

    if(e.key === "Shift"){
        selectedElement.classList.add('focus_erased_ext');
        selectedElement.innerHTML = "";
    }else if(e.key === "Backspace"){
        selectedElement.remove();
    }
}

window.onmouseover = (e) => {
    e.target.style.outline = 'solid 1px #E9F2FF';
}

window.onmouseout = (e) => {
    e.target.style.outline = '';
    selectedElement = null;
}