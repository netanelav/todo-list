# Generated by Django 2.2.4 on 2019-08-12 13:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0039_auto_20190812_1558'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='date',
            new_name='deadline',
        ),
        migrations.RenameField(
            model_name='todo',
            old_name='text',
            new_name='task',
        ),
    ]