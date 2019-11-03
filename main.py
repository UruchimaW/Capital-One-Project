import webapp2
import logging
import jinja2
import os

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPageHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        response_html = jinja_env.get_template('templates/main.html')
        self.response.write(response_html.render())

class AboutUsHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        response_html = jinja_env.get_template('templates/aboutus.html')
        self.response.write(response_html.render())


app = webapp2.WSGIApplication([
    ('/', MainPageHandler),
    ('/aboutus', AboutUsHandler),
], debug = True)
