from flask import Blueprint, render_template

thanks = Blueprint('thanks', __name__)

@thanks.route('/thank_you')
def thank():
    return render_template('thanks.html')