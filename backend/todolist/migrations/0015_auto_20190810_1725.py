# Generated by Django 2.2.4 on 2019-08-10 14:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0014_auto_20190810_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='creation',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date published'),
        ),
    ]
