from flask import Blueprint, render_template
from app.pages.login import login_required

dashboards = Blueprint('dashboards', __name__)

@dashboards.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')