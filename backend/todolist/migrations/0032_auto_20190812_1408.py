# Generated by Django 2.2.4 on 2019-08-12 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0031_auto_20190812_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
