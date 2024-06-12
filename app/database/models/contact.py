from app.database import Base
from sqlalchemy import Column, Integer, String, DateTime
import datetime

class Contact(Base):
    __tablename__ = 'contact'
    contact_id = Column(Integer, primary_key=True)
    firstname = Column(String(50), unique=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)
    phone = Column(String(50), nullable=False)
    company = Column(String(100))
    project_overview = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    def __init__(self, firstname,lastname, email, phone, company, project_overview, created_at, updated_at):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.phone = phone
        self.company = company
        self.project_overview = project_overview
        self.created_at = created_at
        self.updated_at = updated_at

    def __repr__(self):
        return f'<Contact {self.email}>'