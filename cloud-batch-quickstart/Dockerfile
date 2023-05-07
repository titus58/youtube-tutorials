FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY main.py /app

ENTRYPOINT ["python", "main.py"]
