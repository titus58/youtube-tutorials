# Production Gunicorn deployment to Compute Engine
In this video we will do a production deployment of a Django project to Google Compute Engine (GCE). We will use Gunicorn as an app server managed by Supervisor and then Nginx as a reverse proxy on top of Gunicorn. Because of the WSGI protocol, you can swap Django to Flask or other Python web framework and the process will stay more or less the same.

## URLs
 - [Django Development Server](https://docs.djangoproject.com/en/4.2/intro/tutorial01/#the-development-server)
 - [How to deploy Django](https://docs.djangoproject.com/en/4.2/howto/deployment/)
 - [Deploying Gunicorn](https://docs.gunicorn.org/en/stable/deploy.html)
 - [Running Gunicorn](https://docs.gunicorn.org/en/stable/run.html)
 - [Supervisord Homepage](http://supervisord.org/)
