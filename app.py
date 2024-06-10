from app import app
from app.database import db
from app.database import init_db

@app.teardown_appcontext
def shutdown_session(exception=None):
    db.remove()

if __name__ == '__main__':
    with app.app_context():
        init_db()
    app.run(host='0.0.0.0', port=8000)