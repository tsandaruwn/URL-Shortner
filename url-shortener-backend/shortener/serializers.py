from rest_framework import serializers
from .models import ShortenedURL

class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortenedURL
        fields = ['original_url', 'short_code']