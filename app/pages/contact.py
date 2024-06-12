from flask import Blueprint, render_template, redirect, request, url_for, flash
from app.database.models.contact import Contact
from app.database import db
from sqlalchemy.exc import IntegrityError

# Create a Blueprint object
contacts = Blueprint('contacts', __name__)

@contacts.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        phone = request.form['phone']
        company = request.form['company']
        project_overview = request.form['project_overview']
        
        # Check if email already exists
        existing_contact = Contact.query.filter_by(email=email).first()
        if existing_contact:
            flash('Email already exists. Please use a different email.', 'danger')
            return redirect('/contact')
        
        new_contact = Contact(
            firstname=firstname,
            lastname=lastname,
            email=email,
            phone=phone,
            company=company,
            project_overview=project_overview,
            created_at=None,
            updated_at=None
        )
        
        try:
            db.add(new_contact)
            db.commit()
            flash('Contact added successfully!', 'success')
            return redirect('/contact')
        except IntegrityError:
            db.rollback()
            flash('An error occurred while adding the contact. Please try again.', 'danger')
            return redirect('/contact')

    return render_template('contact.html')