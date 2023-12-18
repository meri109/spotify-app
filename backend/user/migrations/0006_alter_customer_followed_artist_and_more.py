# Generated by Django 5.0 on 2023-12-18 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('song', '0003_alter_song_playlists'),
        ('user', '0005_alter_artist_cover'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='followed_artist',
            field=models.ManyToManyField(blank=True, related_name='followed_artists', to='user.artist'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='liked_playlists',
            field=models.ManyToManyField(blank=True, related_name='liked_playlists', to='song.playlist'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='liked_songs',
            field=models.ManyToManyField(blank=True, related_name='liked_songs', to='song.song'),
        ),
    ]
