# Generated by Django 2.2.4 on 2019-08-12 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0027_auto_20190812_1405'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date',
            field=models.DateField(max_length=200, null=True),
        ),
    ]
