# Generated by Django 2.2.4 on 2019-08-12 08:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0022_auto_20190812_1122'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='username',
            new_name='user',
        ),
    ]
