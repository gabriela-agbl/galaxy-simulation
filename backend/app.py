from flask import Flask, jsonify
from flask_cors import CORS
from simulation import init_galaxy, step

app = Flask(__name__)
CORS(app)

init_galaxy()

@app.route("/step")
def galaxy_step():
    stars = step(0.016)
    return jsonify(stars)

if __name__ == "__main__":
    app.run(debug=True)