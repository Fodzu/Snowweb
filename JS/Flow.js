const deg = (a) => Math.PI / 180 * a;
const opt = {
    particles: window.innerWidth / 500 ? 1000 : 500,
    noiseScale: 0.009,
    angle: Math.PI / 180 * -90,
    hue1: 200, // specific hue value for the first color
    hue2: 340, // specific hue value for the second color
    sat1: 100, // specific saturation value for the first color
    sat2: 80, // specific saturation value for the second color
    light1: 100, // specific lightness value for the first color
    light2: 60, // specific lightness value for the second color
    strokeWeight: 1.2,
    tail: 82,
};
let Particles = [];
let time = 0;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lx = x;
        this.ly = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > .5 ? opt.hue1 : opt.hue2;
        this.sat = this.hueSemen > .5 ? opt.sat1 : opt.sat2;
        this.light = this.hueSemen > .5 ? opt.light1 : opt.light2;
        this.maxSpeed = this.hueSemen > .5 ? 3 : 2;
    }

    update() {
        this.follow();

        this.vx += this.ax;
        this.vy += this.ay;

        const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const a = Math.atan2(this.vy, this.vx);
        const m = Math.min(this.maxSpeed, p);
        this.vx = Math.cos(a) * m;
        this.vy = Math.sin(a) * m;

        this.x += this.vx;
        this.y += this.vy;
        this.ax = 0;
        this.ay = 0;

        this.edges();
    }

    follow() {
        const angle = Math.PI / 2; // 90 degrees pointing straight down

        this.ax += Math.cos(angle);
        this.ay += Math.sin(angle);
    }

    updatePrev() {
        this.lx = this.x;
        this.ly = this.y;
    }

    edges() {
        if (this.x < 0) {
            this.x = window.innerWidth;
            this.updatePrev();
        }
        if (this.x > window.innerWidth) {
            this.x = 0;
            this.updatePrev();
        }
        if (this.y < 0) {
            this.y = window.innerHeight;
            this.updatePrev();
        }
        if (this.y > window.innerHeight) {
            this.y = 0;
            this.updatePrev();
        }
    }

    render() {
        stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
        line(this.x, this.y, this.lx, this.ly);
        this.updatePrev();
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    initializeParticles();
    strokeWeight(opt.strokeWeight);
}

function initializeParticles() {
    Particles = [];
    for (let i = 0; i < opt.particles; i++) {
        Particles.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0); // Clear the background when the canvas is resized
    initializeParticles(); // Reinitialize particles to fit the new canvas size
}

function draw() {
    time++;
    background(0, 100 - opt.tail);

    for (let p of Particles) {
        p.update();
        p.render();
    }
}
