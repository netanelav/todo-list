from django.conf.urls import url
from . import views
# from django.contrib.auth.views import login, logout

urlpatterns = [
    url(r'^$', views.get_todos, name='get_todos'),
    # url(r'^create', views.create_new_activity, name='create_activites'),
    # url(r'^login', login, name='login'),
    # url(r'^logout', logout, name='logout')
]