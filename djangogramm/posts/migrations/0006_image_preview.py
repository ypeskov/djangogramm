# Generated by Django 5.0.1 on 2024-02-21 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_alter_like_unique_together'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='preview',
            field=models.ImageField(blank=True, null=True, upload_to='previews/'),
        ),
    ]
