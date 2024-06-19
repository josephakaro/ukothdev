from flask import Blueprint, render_template, session
from app.pages.login import login_required
from app.database.models.user import User
from app.database.models.subscriber import Subscribe
from app.database.models.contact import Contact

dashboards = Blueprint('dashboards', __name__)

@dashboards.route('/dashboard', methods=['GET', 'POST'])
def dashboard():

    # Checking for the firstname and lastname stored in a session else query the database
    user_firstname = session.get('firstname', 'A')
    user_lastname = session.get('lastname', 'User')

    users = User.query.all()
    subscribers = Subscribe.query.all()
    contacts = Contact.query.all()
    recent_subscribers = Subscribe.query.order_by(Subscribe.subs_id.desc()).limit(5).all()
    return render_template('dashboard.html', users=users, subscribers=subscribers, contacts=contacts, recent_subscribers=recent_subscribers, user_firstname=user_firstname, user_lastname=user_lastname)