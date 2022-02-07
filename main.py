from flask import Flask, render_template
import os


app = Flask(__name__)
a = 1


@app.route('/')
def index():
    return render_template('base.html')


@app.route('/about')
def about():
    return f'<h{a}>About Flask</h{a}>'


if __name__ == '__main__':
    app.run(debug=True)
