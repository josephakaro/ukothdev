import os
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base

MYSQL_URI = os.getenv('MYSQL_URI')

# if not MYSQL_URI:
#     raise ValueError('No DATABASE_URL enironment variable set')

engine = create_engine(MYSQL_URI)
db_session = scoped_session(sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
))

Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    import app.models
    Base.metadata.create_all(bind=engine)