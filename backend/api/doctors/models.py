from django.db import models
from datetime import date
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from django.db.models.expressions import F

class UserManager(BaseUserManager):


    def create_user(self, email, password=None, **validated_data):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email)
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class Doctor(AbstractBaseUser, PermissionsMixin):
    GENDER = (
        ('M', "Male"),
        ('F', "Female"),
    )
    email = models.EmailField(unique=True)
    firstname = models.CharField(max_length=40, null=False, default="")
    lastname = models.CharField(max_length=40, null=False, default="")
    qualification = models.CharField(max_length=40,null=False, default="")
    specialization = models.CharField(max_length=40,null=False, default="")
    dob = models.DateField(null=False, default=date.today())
    phone_no = models.CharField(max_length=12, null=False, default="")
    gender = models.CharField(max_length=1, null=False, default="", choices=GENDER)
    registration_no = models.CharField(max_length=6, null= False, default="")

    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []

    objects = UserManager()


    def _str_(self):
        return self.registration_no
