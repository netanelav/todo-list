# Generated by Django 2.2.4 on 2019-08-10 08:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0007_auto_20190809_1912'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='isCompleted',
            new_name='completed',
        ),
    ]
