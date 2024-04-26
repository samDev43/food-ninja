const burger = document.queryselector('#burger');
const menu = document.querySelector('#menu');


burger.addEventlistener('click', () => {
    if (menu.classList.contains('hidden'))
    {
        manu.classList.remove('hidden')
    }
    else {
        menu.classList.add('hidden')
    }
})