# Generated by Django 2.2.4 on 2019-08-12 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0038_auto_20190812_1558'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date',
            field=models.DateField(),
        ),
    ]