from flask import Blueprint, render_template, redirect, request, url_for
from app.database.models.subscriber import Subscribe
from app.pages.login import login_required
from app.database import db

subcriber = Blueprint('subscribe', __name__)
edit_subscribers = Blueprint('edit_subscribers', __name__)
delete_subscribers = Blueprint('delete_subscribers', __name__)
archive_subscribers = Blueprint('archive_subscribers', __name__)


@subcriber.route('/subscribe', methods=['GET', 'POST'])
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

@edit_subscribers.route('/edit_subscriber/<int:subs_id>', methods=['GET', 'POST'])
@login_required
def edit_subscriber(subs_id):
    subscriber = Subscribe.query.get(subs_id)
    if request.method == 'POST':
        subscriber.firstname = request.form['firstname']
        subscriber.lastname = request.form['lastname']
        subscriber.email = request.form['email']
        db.commit()
        return redirect(url_for('dashboards.dashboard'))
    return render_template('edit_subscriber.html', subscriber=subscriber)


@delete_subscribers.route('/delete_subscriber/<int:subs_id>', methods=['POST'])
@login_required
def delete_subscriber(subs_id):
    subscriber = Subscribe.query.get(subs_id)
    db.delete(subscriber)
    db.commit()
    return redirect(url_for('dashboards.dashboard'))

@archive_subscribers.route('/archive_subscriber/<int:subs_id>', methods=['POST'])
@login_required
def archive_subscriber(subs_id):
    subscriber = Subscribe.query.get(subs_id)
    subscriber.is_archived = True
    db.commit()
    return redirect(url_for('dashboards.dashboard'))
