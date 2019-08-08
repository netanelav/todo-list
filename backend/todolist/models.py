from django.db import models
from django.utils import timezone

class Todo(models.Model):
    text = models.CharField(max_length=500, null=False)
    date = models.DateTimeField(max_length=200, null=True) 
    # check again -> null = true
    creation = models.DateTimeField('date published', default=timezone.now)

class Completed(models.Model):
    text = models.CharField(max_length=500, null=False)
    date = models.DateTimeField(max_length=200, null=True) 
    # check again -> null = true
    creation = models.DateTimeField('date published', default=timezone.now)


    
    # def _str_(self):
    #     return self.text