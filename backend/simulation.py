import math
import random

STAR_COUNT = 1500
GALAXY_RADIUS = 1.0

stars = []´

def init_galaxy():
    global stars
    stars = []´

    for _ in range(STAR_COUNT):
        r = random.random() * GALAXY_RADIUS
        angle = random.random() * 2 * math.pi
        speed = 0.2 + 1.0 * (1-r / GALAXY_RADIUS)

        stars.append({
            "r": r,
            "angle": angle,
            "speed": speed
        })

def step(dt):
    for star in stars:
        star["angle"] += star["speed"] * dt

    return stars