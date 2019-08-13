from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Todo(models.Model):
    task = models.CharField(max_length=500, null=False)
    deadline = models.DateField()
    creation = models.DateTimeField('date published', default=timezone.now)
    starred = models.BooleanField('priority', default=False)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def _str_(self):
        return self.task