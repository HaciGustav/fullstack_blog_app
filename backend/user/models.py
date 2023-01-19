from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=50, blank=True, null=True)
    avatar = models.TextField(null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.user.username}"