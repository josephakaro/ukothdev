from app.database import Base
from sqlalchemy import Column, Integer, String

class Subscribe(Base):
    __tablename__ = 'subscriber'
    subs_id = Column(Integer, primary_key=True)
    firstname = Column(String(50), unique=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)

    def __init__(self, firstname,lastname, email):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
    def __repr__(self):
        return f'<Subscribe {self.email}>'