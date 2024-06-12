from flask import Blueprint, render_template, redirect, request
from app.database.models.contact import Contact
from app.database import db

# Create a Blueprint object
contacts = Blueprint('contacts', __name__)

@contacts.route('/contact', methods=['GET', 'POST'])
def contact():
    # Form validations:
    if request.method == 'POST':
        # Get the form data
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        phone = request.form['phone']
        company = request.form['company']
        project_overview = request.form['project_overview']
        
        # Validates the form data in the Database
        isEmail = Contact.query.filter_by(email=email).first()
        
        if email == isEmail:
        # If the email exists, return a message
            db.abort()
            return redirect('thanks.thank')

        else:
        # Else, save the form data in the Database
            new_contact = Contact(firstname=firstname, lastname=lastname, email=email, phone=phone, company=company, project_overview=project_overview, created_at=None, updated_at=None)
            db.add(new_contact)
            db.commit()
            return redirect('index.home')

    return render_template('contact.html')