# Generated by Django 5.0 on 2023-12-23 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0009_rename_followed_artist_customer_follow_artist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='follow_artist',
        ),
        migrations.AddField(
            model_name='customer',
            name='followed_artists',
            field=models.ManyToManyField(blank=True, related_name='followed_artist', to='user.artist'),
        ),
    ]
