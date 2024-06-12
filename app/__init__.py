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
    from app.pages.contact import contacts
    from app.pages.login import logins
    from app.pages.logout import logouts
    from app.pages.signup import signups
    from app.pages.dashboard import dashboards


    # Blueprint Registrations:
    app.register_blueprint(home)
    app.register_blueprint(subcribe)
    app.register_blueprint(thanks)
    app.register_blueprint(contacts)
    app.register_blueprint(logins)
    app.register_blueprint(logouts)
    app.register_blueprint(signups)
    app.register_blueprint(dashboards)

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        db.remove()
    
    return app