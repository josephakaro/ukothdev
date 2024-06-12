# This is Flask Application Factory
from flask import Flask
from app.database import db
from dotenv import load_dotenv

def create_app():
    # App Configurations:
    load_dotenv()

    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'mysecretkey'

    # Database Configurations

    # Blueprint Imports:
    from app.pages.index import home
    from app.pages.subcribe import subcribe
    from app.pages.thanks import thanks


    # Blueprint Registrations:
    app.register_blueprint(home)
    app.register_blueprint(subcribe)
    app.register_blueprint(thanks)

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        db.remove()
    
    return app