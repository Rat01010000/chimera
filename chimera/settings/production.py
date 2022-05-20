from .base import *

DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1', '.herokuapp.com'] 
try:
    from .local import *
except ImportError:
    pass
