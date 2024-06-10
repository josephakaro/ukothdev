from flask import Blueprint, render_template, redirect, request, url_for
from app.database.models.subscriber import Subscribe
from app.database import db

subcribe = Blueprint('subscribe', __name__)

@subcribe.route('/subscribe', methods=['GET', 'POST'])
def subscribe():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']

        isEmail = Subscribe.query.filter_by(email=email).first()

        if email == isEmail:
            db.abort()
            return redirect('thanks.thank')

        else:
            new_subscriber = Subscribe(firstname=firstname, lastname=lastname, email=email)
            db.add(new_subscriber)
            db.commit()
            return redirect(url_for('thanks.thank'))
    return render_template('subscribe.html')
