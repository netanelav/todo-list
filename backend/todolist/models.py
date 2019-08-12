from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Todo(models.Model):
    text = models.CharField(max_length=500, null=False)
    date = models.DateField(null=True)
    creation = models.DateTimeField('date published', default=timezone.now)
    starred = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def _str_(self):
        return self.text