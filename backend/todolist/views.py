from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Todo, Completed
from django.http import JsonResponse
from django.forms.models import model_to_dict
import json

# @login_required
@require_http_methods(['GET'])
def get_todos(request):
    data = list(Todo.objects.values())
    return JsonResponse({"all": data})

@require_http_methods(['GET'])
def get_todos(request):
    data = list(Completed.objects.values())
    return JsonResponse({"all": data})

@require_http_methods(['POST'])
def create_todo(request):
    try:
        data = json.loads(request.body)
        new_todo = Todo(
            text=data["text"],
            date=data["date"])

        new_todo.save()
        return JsonResponse(model_to_dict(new_todo), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)


@require_http_methods(['DELETE'])
def delete_todo(request):
    try:
        data = json.loads(request.body)
        todo_id = data["id"]
        todo_to_delete = Todo(
            id=data["id"],
            text=data["text"],
            date=data["date"])

        Todo.objects.filter(id=todo_id).delete()
        return JsonResponse(model_to_dict(todo_to_delete), status=201)
    except Exception as ex:
        return JsonResponse({"error", ex}, status=500, safe=False)


@require_http_methods(['POST'])
def completed(request):
    # try:
        data = json.loads(request.body)
        todo_completed = Completed(
            text=data["text"],
            date=data["date"])

        todo_completed.save()
        return JsonResponse(model_to_dict(todo_completed), status=201)
    # except Exception as ex:
        # return JsonResponse({"error", ex}, status=500, safe=False)