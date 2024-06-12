from app.database import Base
from sqlalchemy import Column, Integer, String, DateTime

import datetime


class User(Base):
    __tablename__ = 'user'
    user_id = Column(Integer, primary_key=True)
    firstname = Column(String(50), unique=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)
    phone = Column(String(50), nullable=False)
    password = Column(String(255), nullable=False, unique=True)
    is_active = Column(Integer, default=1)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    def __init__(self, firstname,lastname, email, phone,password, is_active, created_at, updated_at):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.phone = phone
        self.password = password
        self.is_active = is_active
        self.created_at = created_at
        self.updated_at = updated_at

    def __repr__(self):
        return f'<User {self.email}>'