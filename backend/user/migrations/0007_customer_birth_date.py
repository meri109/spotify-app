# Generated by Django 5.0 on 2023-12-18 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_alter_customer_followed_artist_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='birth_date',
            field=models.DateField(default='2000-10-10'),
            preserve_default=False,
        ),
    ]