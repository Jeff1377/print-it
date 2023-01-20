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

/*tagLineLeft.addEventListener('click', function() {
	position = position-1;
	if (position<0) {
		position = 3;
	}

	console.log(slides[position].tagLine);
	tagLineLeft.innerText = slides[position].tagLine;
});

tagLineRight.addEventListener('click', function() {
	position = position+1;
	if (position>3) {
		position = 0;
	}

	console.log(slides[position].tagLine);
});*/

arrowLeft.addEventListener('click', function() {
	//position = position-1;
	position--
	/*if (position<0) {
		position = 3;
	}*/
	position = position<0 ? 3 : position;

	console.log(slides[position]);
	console.log(slides[position].image);
	console.log(position);

	image.src = slides[position].image;
	// TODO trouver comment remplacer le contenu d'un <p> depuis la doc
	tagLine = slides[position].tagLine;
});

arrowRight.addEventListener('click', function() {
	position = position+1;
	if (position>3) {
		position = 0;
	}

	console.log(slides[position]);
	console.log(slides[position].image);
	console.log(position);

	image.src = slides[position].image;
	//TODO la même chose
});