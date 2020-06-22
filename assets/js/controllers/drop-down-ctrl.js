function toggleDisplay(event){
    const targetArrowParent = event.target.parentNode
    if (!targetArrowParent.classList.contains('is-active')) {
        targetArrowParent.classList.add('is-active');
    }else{
        targetArrowParent.classList.remove('is-active');
    }
}

function init() {
    const dropDownArrow = document.querySelectorAll('.c-functionalities__arrow');
    if (dropDownArrow ) {
        dropDownArrow.forEach((el) => {
        el.addEventListener('click', toggleDisplay);
    });
    }
}

export default init();