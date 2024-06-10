from flask import Blueprint, render_template

subcribe = Blueprint('subscribe', __name__)

@subcribe.route('/subscribe')
def subscribe():
    return render_template('subcribe.html')
