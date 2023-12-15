const colon3 = new Image();

colon3.src = 'colon3.png';

const cvs = document.createElement('canvas');
const ctx = cvs.getContext('2d');
cvs.width = 600;
cvs.height = 600;

class Particle {
	constructor(x, y, xvel, yvel) {
		this.x = x;
		this.y = y;
		this.xvel = xvel;
		this.yvel = yvel;
		this.opacity = Math.random() / 2 + 0.5;
		this.size = Math.random() * 50 + 50
	}

	update() {
		this.x += this.xvel;
		this.y += this.yvel;
		this.xvel *= 0.99;
		this.yvel *= 0.99;
		this.yvel += 0.5;
		this.opacity -= 0.02;
	}
}

function burst() {
	return Math.random() * 50 - 25
}

const posMaps = {
	0: [250, 250],
	15: [450, 300],
	30: [210, 320],
}

const particles = [];
colon3.onload = () => {
	for (let i = 0; i < 130; i ++) {
		ctx.clearRect(0, 0, cvs.width, cvs.height);

		if (i % 15 === 0 && i < 40) {
			for (let h = 0; h < 20; h ++) {
				const [x, y] = posMaps[i];
				particles.push(new Particle(x, y, burst(), burst()));
			}
		}

		particles.forEach(particle => {
			particle.update();
			if (particle.opacity > 0) {
				ctx.globalAlpha = particle.opacity;
				ctx.drawImage(colon3, particle.x, particle.y, particle.size, particle.size);
			}
		})
		ctx.globalAlpha = 1;

		const data = cvs.toDataURL();
		const img = document.createElement('img');
		img.src = data;
		document.body.appendChild(img);

		// Download image
		const link = document.createElement('a');
		link.href = data;
		link.download = `uwu-${i}.png`;
		link.click();
	}
}
