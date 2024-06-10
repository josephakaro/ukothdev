from app.database import Base
from sqlalchemy import Column, Integer, String


class User(Base):
    __tablename__ = 'user'
    user_id = Column(Integer, primary_key=True)
    firstname = Column(String(50), unique=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)
    phone = Column(String(100))
    role = Column(String(100))
    password = Column(String(255), nullable=False)
    created_at = Column(Integer(255))
    updated_at = Column(Integer(255))

    def __init__(self, firstname,lastname, email, phone, role,password, created_at, updated_at):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.phone = phone
        self.role = role
        self.password = password
        self.created_at = created_at
        self.updated_at = updated_at

    def __repr__(self):
        return f'<User {self.email}>'