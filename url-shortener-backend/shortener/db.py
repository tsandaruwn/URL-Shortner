# shortener/db.py
from pymongo import MongoClient

def get_db():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['url_shortener_db']
    return db