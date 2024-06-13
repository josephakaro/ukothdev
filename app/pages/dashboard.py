from flask import Blueprint, render_template
from app.pages.login import login_required
from app.database.models.user import User
from app.database.models.subscriber import Subscribe
from app.database.models.contact import Contact

dashboards = Blueprint('dashboards', __name__)

@dashboards.route('/dashboard')
@login_required
def dashboard():
    users = User.query.all()
    subscribers = Subscribe.query.all()
    contacts = Contact.query.all()
    recent_subscribers = Subscribe.query.order_by(Subscribe.subs_id.desc()).limit(5).all()
    return render_template('dashboard.html', users=users, subscribers=subscribers, contacts=contacts, recent_subscribers=recent_subscribers)