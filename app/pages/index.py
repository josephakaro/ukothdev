from flask import Blueprint, render_template

# Create a Blueprint object
home = Blueprint('home', __name__)

@home.route('/')
def index():
    return render_template('index.html')