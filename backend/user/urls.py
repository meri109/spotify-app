from django.urls import path
from . import views


urlpatterns = [
    path('liked-playlists/', views.LikedPlaylistAV.as_view(), name='liked_playlists'),
    path('like-playlist/<int:pk>/', views.like_playlist, name='like_playlist'),
    path('unlike-playlist/<int:pk>/', views.unlike_playlist, name='unlike_playlist'),
    path('liked-songs/', views.LikedSongListAV.as_view(), name='liked_songs'),
    path('like-song/<int:pk>/', views.like_song, name='like_song'),
    path('unlike-song/<int:pk>/', views.unlike_song, name='unlike_song'),
    path('following-artists/', views.FollowingArtistListAV.as_view(), name='following-list'),
    path('follow-artist/<int:pk>/', views.follow_artist, name='follow-artist' ),
    path('unfollow-artist/<int:pk>/', views.unfollow_artist, name='unfollow-artist' ),
    path('artists/', views.ArtistListAV.as_view(), name='artists'),
    path('artist/<int:pk>/', views.ArtistDetailAV.as_view(), name='artists'),
    path('register/', views.register_view, name='register' ),
    path('login/', views.login_view, name='login' ),
    path('customer-profile/', views.CustomerProfileDetailAV.as_view(), name='customer-profile')

]


