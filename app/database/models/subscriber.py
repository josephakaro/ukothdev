from app.database import Base
from sqlalchemy import Column, Integer, String, Boolean

class Subscribe(Base):
    __tablename__ = 'subscriber'
    subs_id = Column(Integer, primary_key=True)
    firstname = Column(String(50), unique=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)
    is_archived = Column(Boolean, default=False)

    def __init__(self, firstname,lastname, email, is_archived):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.is_archived = is_archived

    def __repr__(self):
        return f'<Subscribe {self.email}>'