from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.hashers import check_password
from .models import CustomUser



class Auth_Backend(ModelBackend):
    def authenticate(self, request, username = ..., password = ..., **kwargs):
        try:
            user = CustomUser.objects.get(username=username)  # Fallback to username
            if check_password(password, user.password):  # Secure password check
                return user
        except CustomUser.DoesNotExist:
            return None
        return None