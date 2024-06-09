from app import app
from app.db.db import db_session
from dotenv import load_dotenv

load_dotenv()

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)