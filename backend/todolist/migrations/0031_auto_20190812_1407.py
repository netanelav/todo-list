# Generated by Django 2.2.4 on 2019-08-12 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0030_auto_20190812_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date',
            field=models.DateTimeField(max_length=200, null=True),
        ),
    ]