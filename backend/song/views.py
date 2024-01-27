from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Playlist, Song, Genre
from .serializers import (
    PlaylistSerializer,
    SongSerializer,
    SongDetailSerializer
)
# Create your views here.

class PlaylistAV(ListCreateAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlaylistSerializer


class PlaylistDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlaylistSerializer    

class SongListAV(ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class SongDetailAv(RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongDetailSerializer     