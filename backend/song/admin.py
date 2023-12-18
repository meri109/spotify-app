from django.contrib import admin
from .models import Song, Genre, Playlist
# Register your models here.

admin.site.register(Song)
admin.site.register(Genre)
admin.site.register(Playlist)

