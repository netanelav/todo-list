# Generated by Django 2.2.4 on 2019-08-10 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0008_auto_20190810_1148'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='starred',
            field=models.BooleanField(default=False),
        ),
    ]
