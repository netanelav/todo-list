from django.contrib import admin
from todolist.models import Todo, Completed

admin.site.register(Todo)
admin.site.register(Completed)