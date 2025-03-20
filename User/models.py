from django.contrib.auth.models import AbstractUser
from django import forms
from django.db import models
class CustomUser(AbstractUser):
    ROLE_CHOICES=[
        ("farmer","Farmer"),
        ("customer","Customer"),
    ]
    role=models.CharField(max_length=20, choices=ROLE_CHOICES, default="customer")
    
    def __str__(self):
        return f"{self.username} - {self.role}"