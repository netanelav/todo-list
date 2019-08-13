from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.forms.models import model_to_dict
from .models import Todo
from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views import generic
import json


class SignUp(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

@login_required
@require_http_methods(['GET'])
def get_todos(request):
    data = list(Todo.objects.filter(user=request.user).values().order_by('-starred'))
    return JsonResponse({"todos": data})

@login_required
@require_http_methods(['POST'])
def create_todo(request):
    try:
        data = json.loads(request.body)
        new_todo = Todo(
            task=data["task"],
            deadline=data["deadline"],
            user=request.user)

        new_todo.save()
        return JsonResponse(model_to_dict(new_todo), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)

@login_required
@require_http_methods(['DELETE'])
def delete_todo(request):
    try:
        data = json.loads(request.body)
        todo_to_delete = Todo(id=data["id"])
        Todo.objects.filter(id=data["id"]).delete()
        return JsonResponse(model_to_dict(todo_to_delete), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)

@login_required
@require_http_methods(['UPDATE'])
def change_status(request):
    try:
        data = json.loads(request.body)
        data['completed'] = not data['completed']
        data['user'] = request.user
        todo_updated = Todo(**data)
        todo_updated.save()
        return JsonResponse(model_to_dict(todo_updated), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)

@login_required
@require_http_methods(['UPDATE'])
def change_priority(request):
    try:
        data = json.loads(request.body)
        data['starred'] = not data['starred']
        data['user'] = request.user
        todo_updated = Todo(**data)
        todo_updated.save()
        return JsonResponse(model_to_dict(todo_updated), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)
