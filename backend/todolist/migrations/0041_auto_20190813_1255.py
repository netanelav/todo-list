# Generated by Django 2.2.4 on 2019-08-13 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0040_auto_20190812_1659'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='starred',
            field=models.BooleanField(default=False, verbose_name='priority'),
        ),
    ]
