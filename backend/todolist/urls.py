from django.conf.urls import url
from . import views
from django.urls import path

urlpatterns = [
    path('', views.get_todos, name='get_todos'),
    # path('', views.get_completed, name='get_completed'),
    # url(r'^$', views.get_todos, name='get_todos'),
    # url(r'^create', views.create_todo, name='create_todo'),
    path('create', views.create_todo, name='create_todo'),
    path('delete', views.delete_todo, name='delete_todo'),
    path('completed', views.completed, name='completed'),
    # url(r'^login', login, name='login'),
    # url(r'^logout', logout, name='logout')
]
