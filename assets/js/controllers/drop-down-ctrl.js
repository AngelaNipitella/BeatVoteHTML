import {getParentWithClass} from './utils';

function toggleDisplay(event){
    const element = getParentWithClass(event.target, 'js-parent-wrapper');
    if (!element.classList.contains('is-active')) {
        element.classList.add('is-active');
    }else{
        element.classList.remove('is-active');
    }
}

function init() {
    const dropDownArrow = document.querySelectorAll('.js-dropDown');
        if (dropDownArrow ) {
            dropDownArrow.forEach((el) => {
            el.addEventListener('click', toggleDisplay);
        });
    }
}

export default init();
