from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.generics import ListAPIView

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)  # Log the validation errors to the console
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




from rest_framework.generics import ListCreateAPIView
from .models import Todo
from .serializers import TodoSerializer

class TodoListView(ListCreateAPIView):
    queryset = Todo.objects.all().order_by('-created_at')
    serializer_class = TodoSerializer

from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

class TodoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        response['Content-Type'] = 'application/json'  # Ensure the response is JSON
        return response