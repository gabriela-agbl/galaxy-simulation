const galaxy = document.getElementById('galaxy');
const ctx = galaxy.getContext('2d');

function resize(){
    galaxy.width = window.innerWidth;
    galaxy.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

const centerX = galaxy.width / 2;
const centerY = galaxy.height / 2;

const STAR_COUNT = 1500;
const GALAXY_RADIUS = Math.min(galaxy.width, galaxy.height) * 0.4;

let stars = [];

for (let i = 0; i < STAR_COUNT; i++){
    const r = Math.random() * GALAXY_RADIUS;
    const angle = Math.random() * Math.PI * 2;

    stars.push({
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle),
        size: Math.random() * 1.5 + 0.5
    });
}

function draw(){
    ctx.clearRect(0, 0, galaxy.width, galaxy.height);

    ctx.fillStyle = 'white';

    for (const star of stars){
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0 , Math.PI * 2);
        ctx.fill();
    }
}

draw();