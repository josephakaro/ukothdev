import os
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()
engine = create_engine(os.getenv('MYSQL_URI'))
db = scoped_session(sessionmaker(autocommit=False
                                ,autoflush=False
                                ,bind=engine))

Base = declarative_base()
Base.query = db.query_property()

def init_db():
    from app.database import Base
    import app.database.models
    Base.metadata.create_all(bind=engine)