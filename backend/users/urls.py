from django.urls import path
from .views import UserRegistrationView
from rest_framework.authtoken.views import obtain_auth_token
from .views import TodoListView, TodoDetailView  # Added TodoDetailView for update/delete

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('todos/', TodoListView.as_view(), name='todo-list'),
    path('todo/<int:pk>/', TodoDetailView.as_view(), name='todo-detail'),  # Added this line for detail view
    path('login/', obtain_auth_token, name='api-token-auth'),
]
