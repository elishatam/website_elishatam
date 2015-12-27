if (document.images) {
image1 = new Image;
image2 = new Image;
image3 = new Image;
image4 = new Image;
image5 = new Image;
image6 = new Image;
image7 = new Image;
image8 = new Image;
image9 = new Image;
image10 = new Image;
image11 = new Image;
image12 = new Image;
image13 = new Image;
image14 = new Image;
image15 = new Image;


image1.src = 'photos/01.jpg';
image2.src = 'photos/02.jpg';
image3.src = 'photos/03.jpg';
image4.src = 'photos/04.jpg';
image5.src = 'photos/05.jpg';
image6.src = 'photos/06.jpg';
image7.src = 'photos/07.jpg';
image8.src = 'photos/08.jpg';
image9.src = 'photos/09.jpg';
image10.src = 'photos/10.jpg';
image11.src = 'photos/11.jpg';
image12.src = 'photos/12.jpg';
image13.src = 'photos/13.jpg';
image14.src = 'photos/14.jpg';
image15.src = 'photos/15.jpg';



} else {
image1 = '';
image2 = '';
image3 = '';
image4 = '';
image5 = '';
image6 = '';
image7 = '';
image8 = '';
image9 = '';
image10 = '';
image11 = '';
image12 = '';
image13 = '';
image14 = '';
image15 = '';


document.rollimg = '';
}

var cap = ['0','Front of our Mission Impossible FLICKER','Back of the FLICKER',
	'Team Firefox', 'Assembling the masonite pieces together',
	' ', ' ',
	'Testing our stepper motor', 'SPDL Lab',
	'Lab', 'Public presentation 11/18/2009',
	' ', ' ',
	'MIB', 'Back to the Future', 'Frankenstein'];

function rollover(n) {
document.rollimg.src = window['image'+n].src;
document.getElementById('caption').innerHTML = cap[n];
} 