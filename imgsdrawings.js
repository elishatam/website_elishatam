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


image1.src = 'drawings/ReliefManHorse.jpg';
image2.src = 'drawings/IRemember.jpg';
image3.src = 'drawings/TamFamily.jpg';
image4.src = 'drawings/ads/ParryShen1.jpg';
image5.src = 'drawings/ads/ParryShen2.jpg';
image6.src = 'drawings/ads/AsianFetish.jpg';
image7.src = 'drawings/ads/DCN.jpg';
image8.src = 'drawings/ads/JamesYee.jpg';
image9.src = 'drawings/logos/MissionDeLaCasaLogo.png';
image10.src = 'drawings/logos/AccellBottomBannerThin.png';
image11.src = 'drawings/logos/AccellLogo.png';
image12.src = 'drawings/logos/AccellBlankBusinessCard.png';

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

var cap = ['0','Charcoal study of a Greek Relief, 50"x75", May 2007','Charcoal, June 2007',
	'Charcoal drawing of Tam Family, 53"x33", May 2009', 'Speaker event advertisement for actor Parry Shen in 2004. Created with Adobe Photoshop',
	'Speaker event advertisement for actor Parry Shen in 2004. Created with Adobe Photoshop', 'Event advertisement for Asian social awareness in 2005. Created with Adobe Photoshop',
	'Advertisement DAO Culture Night 2006. Created with Adobe Photoshop', 'Speaker event advertismenet for veteran James Yee in 2006. Created with Adobe Photoshop',
	'Mission De La Casa logo. Recreated the logo in high resolution vector format with Adobe Illustrator',
	'Portion of Accell bottom banner. Recreated the graphics from a business card in high resolution vector format. Created with Adobe Illustrator', 'Accell logo. Recreated the graphics from a business card in high resolution vector format. Created with Adobe Illustrator',
	'Recreated the graphics from a business card in high resolution vector format', '', 'Back to the Future', 'Frankenstein'];

function rollover(n) {
document.rollimg.src = window['image'+n].src;
document.getElementById('caption').innerHTML = cap[n];
} 