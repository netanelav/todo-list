# Generated by Django 2.2.4 on 2019-08-07 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='title',
            new_name='text',
        ),
    ]
