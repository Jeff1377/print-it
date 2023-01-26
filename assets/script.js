const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]; 

let position = 0;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const image = document.querySelector('.image_js');
const tagLine = document.querySelector('.text_js');
const dots = document.querySelectorAll('.dots .dot');

arrowLeft.addEventListener('click', function() {
	position = position-1;
	
	if (position<0) {
		position = 3;
	}
	
	image.src = slides[position].image;
	tagLine.innerHTML = slides[position].tagLine;
	resetDotClass();
	dots[position].classList.add('dot_selected');
	
});

arrowRight.addEventListener('click', function() {
	position = position+1;

	if (position>3) {
		position = 0;
	}

	image.src = slides[position].image;
	tagLine.innerHTML = slides[position].tagLine;
	resetDotClass();
	dots[position].classList.add('dot_selected');
});

dots.forEach ((dot, p) => {
	dot.addEventListener('click', function() {
		image.src = slides[p].image;
		tagLine.innerHTML = slides[p].tagLine;
		resetDotClass();
		dots[p].classList.add('dot_selected');
		position = p;
	});
});

function resetDotClass() {
	dots.forEach ((dot) => {
  		dot.classList.remove('dot_selected');
	});
};