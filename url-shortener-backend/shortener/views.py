# shortener/views.py
import datetime as import_datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .db import get_db
from .utils import generate_short_code

class ShortenURLView(APIView):
    def post(self, request):
        original_url = request.data.get('original_url')
        if not original_url:
            return Response({'error': 'URL is required'}, status=status.HTTP_400_BAD_REQUEST)

        db = get_db()
        urls_collection = db['urls']

        # Generate a unique short code
        short_code = generate_short_code()
        while urls_collection.find_one({'short_code': short_code}):
            short_code = generate_short_code()

        # Save to MongoDB
        url_data = {
            'original_url': original_url,
            'short_code': short_code,
            'created_at': import_datetime.datetime.now()
        }
        urls_collection.insert_one(url_data)

        return Response({'original_url': original_url, 'short_code': short_code}, status=status.HTTP_201_CREATED)

from django.http import HttpResponseRedirect

class RedirectURLView(APIView):
    def get(self, request, short_code):
        db = get_db()
        urls_collection = db['urls']
        url = urls_collection.find_one({'short_code': short_code})
        if url:
            return HttpResponseRedirect(url['original_url'])
        return Response({'error': 'URL not found'}, status=status.HTTP_404_NOT_FOUND)