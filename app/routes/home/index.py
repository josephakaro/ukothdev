from app import app
from flask import redirect, url_for

@app.route('/')
def Index():
    return redirect(url_for('subscribe'))