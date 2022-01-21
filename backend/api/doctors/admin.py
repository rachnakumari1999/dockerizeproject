from django.contrib import admin
from .models import Doctor

from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    model = Doctor
    list_display = ('email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password', 'firstname', 'lastname', 'qualification', 'specialization', 'dob', 'phone_no', 'gender')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('firstname', 'lastname', 'email', 'password1', 'password2', 'qualification', 'specialization', 'dob', 'phone_no', 'gender', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(Doctor, CustomUserAdmin)
