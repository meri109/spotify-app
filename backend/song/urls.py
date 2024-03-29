from django.urls import path
from . import views


urlpatterns = [
    path('playlist/', views.PlaylistAV.as_view(), name='play-list'),
    path('playlist/<int:pk>/', views.PlaylistDetailAV.as_view(), name='playlist-detail'),
    path('songs/', views.SongListAV.as_view(), name='song-list'),
    path('song/<int:pk>/', views.SongDetailAv.as_view(), name='song-detail'),

]
