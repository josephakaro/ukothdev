from app import app
from flask import render_template

@app.route('/')
def Index():
    return render_template('index.html')