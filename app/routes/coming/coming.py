from app import app
from flask import render_template, redirect, request, url_for
from app.models.newsletter import add_subscriber
from app.db.db import init_db
@app.route('/subscribe', methods=['GET', 'POST'])
def subscribe():
    if request.method == 'POST':
        init_db()
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        add_subscriber(firstname=firstname, lastname=lastname, email=email)
        return redirect(url_for('thank_you'))
    return render_template('coming.html')


@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')