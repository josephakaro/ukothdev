from flask import Blueprint, render_template, redirect, request, url_for, flash, session
from werkzeug.security import check_password_hash
from app.database.models.user import User
from functools import wraps

# Create a Blueprint object
logins = Blueprint('login', __name__)

@logins.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        # Check Email
        user = User.query.filter_by(email=email).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.user_id
            session['firstname'] = user.firstname
            session['lastname'] = user.lastname
            flash('Login successful!', 'success')
            return redirect(url_for('dashboards.dashboard'))
        else:
            flash('Login failed. Check your email and password.', 'danger')
            return redirect(url_for('login.login'))
    
    return render_template('login.html')


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash('Please log in to access this page.', 'warning')
            return redirect(url_for('login.login'))
        return f(*args, **kwargs)
    return decorated_function