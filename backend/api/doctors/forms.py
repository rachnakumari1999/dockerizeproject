from django.contrib.auth.forms import UserCreationForm

from .models import Doctor


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Doctor
        fields = '__all__'
