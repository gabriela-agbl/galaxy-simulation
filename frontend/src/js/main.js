document.addEventListener('DOMContentLoaded', () => {
    const galaxy = document.getElementById('galaxy');
    const ctx = galaxy.getContext('2d');

    function resize(){
        galaxy.width = window.innerWidth;
        galaxy.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const GALAXY_RADIUS = Math.min(galaxy.width, galaxy.height) * 0.4;

    async function draw(){
        const res = await fetch("http://127.0.0.1:5000/step");
        const stars = await res.json();

        ctx.clearRect(0, 0, galaxy.width, galaxy.height);
        ctx.fillStyle = 'white';

        for (const star of stars){
            const x =
                galaxy.width / 2 +
                star.r * GALAXY_RADIUS * Math.cos(star.angle);

            const y =
                galaxy.height / 2 +
                star.r * GALAXY_RADIUS * Math.sin(star.angle);

            ctx.beginPath();
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }
    draw();
});