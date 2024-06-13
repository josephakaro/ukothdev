import os
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()
engine = create_engine(os.getenv('MYSQL_URI'))
db = scoped_session(sessionmaker(autocommit=False
                                ,autoflush=False
                                ,bind=engine))

Base = declarative_base()
metadata = MetaData()
Base.query = db.query_property()

# from app.database.models.subscriber import Subscribe

# with engine.connect() as connection:
#     if 'is_archived' not in Subscribe.__table__.columns.keys():
#         connection.execute('ALTER TABLE subscriber ADD COLUMN is_archived BOOLEAN DEFAULT FALSE')

def init_db():
    from app.database import Base
    import app.database.models
    Base.metadata.create_all(bind=engine)

