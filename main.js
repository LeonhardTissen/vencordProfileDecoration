const cvs = document.createElement('canvas');
const ctx = cvs.getContext('2d');

cvs.width = 600;
cvs.height = 600;

const image = new Image();
image.src = 'warze.png';
image.onload = () => {
	for (let i = 0; i < 21; i ++) {
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		for (let rotation = 0; rotation < Math.PI * 2; rotation += Math.PI / 3) {
			const xOffset = Math.sin(rotation + i / 20) * 270;
			const yOffset = Math.cos(rotation + i / 20) * 270;
			const size = 50;
			ctx.drawImage(image,
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
		// Download image
		const link = document.createElement('a');
		link.href = data;
		link.download = `warze-${i}.png`;
		link.click();
	}
}
