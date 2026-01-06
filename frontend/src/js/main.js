document.addEventListener('DOMContentLoaded', () => {
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
            r: r,
            angle: angle,
            speed: 0.0005 + 0.002 * (1 - r / GALAXY_RADIUS),
            size: Math.random() * 1.5 + 0.5
        });
    }

    let lastTime = 0;

    function animate(time){
        const dt = time - lastTime;
        lastTime = time;

        ctx.clearRect(0, 0, galaxy.width, galaxy.height);
        ctx.fillStyle = 'white';

        for (const star of stars){
            star.angle += star.speed * dt;

            const x = centerX + star.r * Math.cos(star.angle);
            const y = centerY + star.r * Math.sin(star.angle);

            ctx.beginPath();
            ctx.arc(x, y, star.size, 0 , Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});