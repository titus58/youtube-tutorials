from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

# 198.51.100.14/24  [198.51.100.0, 198.51.100.1 ... 198.51.100.255]
