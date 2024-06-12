from flask import Blueprint, flash, redirect, url_for, session

logouts = Blueprint('logouts', __name__)

@logouts.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('user_name', None)
    flash('You have been logged out.', 'success')
    return redirect(url_for('login.login'))