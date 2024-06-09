from sqlalchemy import Column, Integer, String
from app.db.db import Base
from app.db.db import db_session

class Newsletter(Base):
    __tablename__ = 'newsletters'
    news_id = Column(Integer, primary_key=True)
    firstname = Column(String(50), nullable=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(255), nullable=False, unique=True)

    def __init__(self, firstname=None, lastname=None, email=None):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
    
    def __repr__(self):
        return f'<Newsletter {self.firstname!r}>'


def add_subscriber(firstname, lastname, email):
    new_subscriber = Newsletter(firstname, lastname, email)
    db_session.add(new_subscriber)
    try:
        db_session.commit()
    except Exception as e:
        db_session.rollback()
        print(f'Error occurred: {e}')
    finally:
        db_session.close()