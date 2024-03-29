# Generated by Django 5.0 on 2023-12-23 08:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('song', '0003_alter_song_playlists'),
        ('user', '0008_customer_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='hide',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='playlist',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='playlists', to='user.customer'),
        ),
        migrations.AlterField(
            model_name='song',
            name='artist',
            field=models.ManyToManyField(related_name='songs', to='user.artist'),
        ),
        migrations.AlterField(
            model_name='song',
            name='genres',
            field=models.ManyToManyField(related_name='songs', to='song.genre'),
        ),
        migrations.AlterField(
            model_name='song',
            name='playlists',
            field=models.ManyToManyField(blank=True, related_name='songs', to='song.playlist'),
        ),
    ]
