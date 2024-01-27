from rest_framework import serializers
from user.serializers import CustomerInfoSerializer
from .models import (
    Playlist,
    Song,
    Genre
)
from user.serializers import ArtistDetailSerializer, ArtistSerializer

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['title'] 

class SongSerializer(serializers.ModelSerializer):
    genre_info = GenreSerializer(many=True, source='genres', read_only=True)
    artist_info = ArtistDetailSerializer(many=True, source='artist.all', read_only=True)
    class Meta:
        model = Song
        exclude = ['lyrics']
        extra_kwargs={
            'genres': {'write_only': True},
            'artist': {'write_only': True},
        }
 
class SongDetailSerializer(serializers.ModelSerializer):
    artist_title = ArtistSerializer(many=True, source='artist.all', read_only=True)

    class Meta:
        model = Song
        fields = '__all__'
        extra_kwargs={
            'artist': {'write_only': True},
        }
       

class PlaylistSerializer(serializers.ModelSerializer):
    author = CustomerInfoSerializer()
    songs = SongSerializer(many=True, read_only = True)
    class Meta:
        model = Playlist
        fields = '__all__'

      
      