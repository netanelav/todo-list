from django.conf.urls import url
from . import views
from django.urls import path

urlpatterns = [
    path('', views.get_todos, name='get_todos'),
    path('create', views.create_todo, name='create_todo'),
    path('delete', views.delete_todo, name='delete_todo'),
    path('status', views.change_status, name='change_status'),
    # path('star', views.change_priority, name='change_priority'),
    # url(r'^login', login, name='login'),
    # url(r'^logout', logout, name='logout')
]
