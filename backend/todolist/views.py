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
    data = list(Todo.objects.filter(user=request.user).values())
    return JsonResponse({"todos": data})

@login_required
@require_http_methods(['POST'])
def create_todo(request):
    try:
        data = json.loads(request.body)
        print(data)
        new_todo = Todo(
            text=data["text"],
            date=data["date"],
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
        todo_id = data["id"]
        todo_to_delete = Todo(
            id=data["id"])

        Todo.objects.filter(id=todo_id).delete()
        return JsonResponse(model_to_dict(todo_to_delete), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)

@login_required
@require_http_methods(['UPDATE'])
def change_status(request):
    try:
        data = json.loads(request.body)
        if(data['completed']):
            todo_updated = Todo(
                id=data["id"],
                text=data["text"],
                date=data["date"],
                starred=data["starred"],
                completed=False,
                user=request.user)
        else:
            todo_updated = Todo(
                id=data["id"],
                text=data["text"],
                date=data["date"],
                starred=data["starred"],
                completed=True,
                user=request.user)

        todo_updated.save()
        return JsonResponse(model_to_dict(todo_updated), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)

@login_required
@require_http_methods(['UPDATE'])
def change_priority(request):
    try:
        data = json.loads(request.body)
        if(data['starred']):
            todo_updated = Todo(
                id=data["id"],
                text=data["text"],
                date=data["date"],
                starred=False,
                completed=data["completed"],
                user=request.user)
        else:
            todo_updated = Todo(
                id=data["id"],
                text=data["text"],
                date=data["date"],
                starred=True,
                completed=data["completed"],
                user=request.user)

        todo_updated.save()
        return JsonResponse(model_to_dict(todo_updated), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)
