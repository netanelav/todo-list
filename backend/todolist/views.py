from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Todo
from django.http import JsonResponse
from django.forms.models import model_to_dict
import json


@require_http_methods(['GET'])
def get_todos(request):
    data = list(Todo.objects.values())
    return JsonResponse({"all": data})


