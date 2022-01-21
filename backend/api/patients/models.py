from pyexpat import model
from django.db import models
from api.doctors.models import Doctor
from datetime import date

# Create your models here.
class Patient(models.Model):
    GENDER = (
        ('M', "Male"),
        ('F', "Female"),
    )

    WEIGHT = tuple([(str(weight), str(weight) + ' Kg') for weight in range(0, 100)])
    HEIGHT = tuple([(str(height), str(height) + ' Cm') for height in range(43, 200)])
   

    email=models.EmailField(null=False)
    firstname=models.CharField(max_length=30, null=False)
    lastname=models.CharField(max_length=30, null=False)
    dob=models.DateField(null=False, default=date.today())
    height=models.CharField(max_length=5, null=False, choices=HEIGHT)
    weight=models.CharField(max_length=10, null=False, choices=WEIGHT)
    phone=models.CharField(max_length=12, null=False)
    address=models.TextField(null=False)
    gender=models.CharField(max_length=1, null=False, choices=GENDER)
    secretkey=models.CharField(max_length=4, null=False)
    current_doctor=models.ForeignKey(Doctor, on_delete=models.PROTECT)

    def __str__(self):
        return self.firstname


