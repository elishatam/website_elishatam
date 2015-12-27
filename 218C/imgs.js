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
image16 = new Image;
image19 = new Image;
image20 = new Image;
image21 = new Image;
image22 = new Image;
image23 = new Image;
image24 = new Image;


image1.src = 'photos/01.JPG';
image2.src = 'photos/02.JPG';
image3.src = 'photos/03.JPG';
image4.src = 'photos/04.JPG';
image5.src = 'photos/05.JPG';
image6.src = 'photos/06.JPG';
image7.src = 'photos/07.JPG';
image8.src = 'photos/08.JPG';
image9.src = 'photos/09.JPG';
image10.src = 'photos/10.JPG';
image11.src = 'photos/11.JPG';
image12.src = 'photos/12.JPG';
image13.src = 'photos/13.JPG';
image14.src = 'photos/14.JPG';
image15.src = 'photos/15.JPG';
image16.src = 'photos/16.JPG';
image19.src = 'photos/19.JPG';
image20.src = 'photos/20.JPG';
image21.src = 'photos/21.JPG';
image22.src = 'photos/22.JPG';
image23.src = 'photos/23.JPG';
image24.src = 'photos/24.JPG';

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
image16 = '';
image19 = '';
image20 = '';
image21 = '';
image22 = '';
image23 = '';
image24 = '';

document.rollimg = '';
}

var cap = ['0','Eli, happily working on the LCD','Elisha: debugging is so fun',
	'The Main PIC board', 'We are sending messages!',
	'The best work station. The boat is in its early testing stages', 'Our boat looks like a crab. Hmm...ideas ideas.',
	'Elisha, soldering', 'Testing our floating ability',
	'A lot of noise was coming from this corner', 'Testing. Our motor logic was backwards but flipping the controller made it alright',
	'Late night testing', 'Late night repairing',
	'Testing fleetwide communication with other teams. Steve: I would be happy to be Master', 'This is Pinchy, the Crab', 'Grading session 5/26/2010 4pm', 'Public Presentation 5/27/2010 5pm', '', '', '', '', 'Matt, noting the score', 'Our first race', '', '', ''];

function rollover(n) {
document.rollimg.src = window['image'+n].src;
document.getElementById('caption').innerHTML = cap[n];
} 