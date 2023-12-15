const cvs = document.createElement('canvas');
const ctx = cvs.getContext('2d');

cvs.width = 600;
cvs.height = 600;

const images = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
images[0].src = '1086639728784326736.webp';
images[1].src = '1086645368160264302.webp';
images[2].src = '1096138420914495671.webp';
images[3].src = '1096147771163168900.webp';
images[4].src = '1096148482286432286.webp';
images[5].src = '1114987343032623275.webp';

setTimeout(() => {
	for (let i = 0; i < 31; i ++) {
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		let iteration = 0;
		for (let rotation = 0; rotation < Math.PI * 2; rotation += Math.PI / 6) {
			iteration ++;
			const xOffset = Math.sin(rotation + i / 10) * 270;
			const yOffset = Math.cos(rotation + i / 10) * 270;
			const size = 50;
			ctx.drawImage(images[iteration % 6],
				300 + xOffset - size / 2,
				300 + yOffset - size / 2, 
				size, 
				size
			);
		}
		const data = cvs.toDataURL();
		const img = document.createElement('img');
		img.src = data;
		document.body.appendChild(img);
		
		const link = document.createElement('a');
		link.href = data;
		link.download = `sssseb-${i}.png`;
		link.click();
	}
}, 1000);
