from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

USERS = {
    'Kamil': {'role': 'admin', 'password': 'mmmmm'},
    'Karolina': {'role': 'adminka', 'password': 'uuuuu'},
    'Guest': {'role': 'guest', 'password': 'guest'}
}

RESTAURANTS = {
    'Ming Wok': {'price': '$$', 'rating': 4.3, 'cuisine': 'asian'},
    'U Dziadka': {'price': '$', 'rating': 4.5, 'cuisine': 'polish'},
    'Bar-a-boo': {'price': '$$', 'rating': 4.7, 'cuisine': 'italian'},
    'MUGA': {'price': '$$$', 'rating': 4.9, 'cuisine': 'european'}
}

LUNCHES = {
    'Ming Wok': {'soup': 'pho', 'main_course': 'fried duck', 'dessert': 'brownie', 'price': 19},
    'U Dziadka': {'soup': 'broth', 'main_course': 'pork cutlet', 'dessert': 'compote', 'price': 15},
    'Bar-a-boo': {'soup': 'tomato cream', 'main_course': 'tagliatelle arrabbiata', 'price': 25},
    'MUGA': {'soup': 'leek cream', 'main_course': 'beef tartar', 'dessert': 'vanilla ice cream', 'price': 40}
}

@app.route('/users')
def users():
    return jsonify(USERS)

@app.route('/restaurants')
def restaurants():
    return jsonify(RESTAURANTS)

@app.route('/lunches')
def lunches():
    return jsonify(LUNCHES)
