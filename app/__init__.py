from flask import Flask

app = Flask(__name__)

from app.routes.home import index
from app.routes.coming import coming