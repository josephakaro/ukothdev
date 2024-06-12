from flask import Blueprint, render_template, redirect, request, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash
from app.database.models.user import User
from app.database import db
from sqlalchemy.exc import IntegrityError

signups = Blueprint('signups', __name__)

@signups.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        phone = request.form['phone']
        password = request.form['password']
        
        # Check if email already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash('Email already exists. Please use a different email.', 'danger')
            return redirect(url_for('signups.signup'))
        
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        new_user = User(firstname=firstname, lastname=lastname, email=email,phone=phone, password=hashed_password, is_active=1, created_at=None, updated_at=None)
        
        try:
            db.add(new_user)
            db.commit()
            flash('Registration successful! Please login.', 'success')
            return redirect(url_for('login.login'))
        except IntegrityError:
            db.rollback()
            flash('An error occurred while registering. Please try again.', 'danger')
            return redirect(url_for('signups.signup'))
    
    return render_template('signup.html')