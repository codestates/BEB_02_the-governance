from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html")

@app.route('/suggest')
def suggest():
    return render_template("suggestion.html")

#@app.route('/send')
#def sendIt():
#    return render_template("sendIt.html")

if __name__ == "__main__":
    app.run(debug=True)