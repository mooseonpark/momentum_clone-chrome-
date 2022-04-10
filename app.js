const title = document.querySelector('#title');

function handler() {
	title.style.color = 'blue';
}

function mouse() {
	title.innerText = 'mouse is here';
}

function mousegone() {
	title.innerText = 'mouse is gone';
}
title.addEventListener('click', handler);
title.addEventListener('mouseenter', mouse);
title.addEventListener('mouseleave', mousegone);
