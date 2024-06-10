# This is Flask Application Factory
from flask import Flask

def create_app(config=None):
    # App Configurations:
    app = Flask(__name__)
    app.config.from_object(config)

    # Database Configurations

    # Blueprint Imports:
    from app.pages.index import home
    from app.pages.subcribe import subcribe
    from app.pages.thanks import thanks


    # Blueprint Registrations:
    app.register_blueprint(home)
    app.register_blueprint(subcribe)
    app.register_blueprint(thanks)
    
    return app