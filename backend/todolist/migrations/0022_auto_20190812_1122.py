# Generated by Django 2.2.4 on 2019-08-12 08:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0021_auto_20190812_1111'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='user',
            new_name='username',
        ),
    ]
