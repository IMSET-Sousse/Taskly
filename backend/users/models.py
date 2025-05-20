from django.db import models

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)




class Todo(models.Model):
    task_name = models.CharField(max_length=255)
    status = models.CharField(max_length=20, default='pending')  # No choices now
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task_name