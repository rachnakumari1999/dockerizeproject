from django.db import models

# Create your models here.
from pyexpat import model
from django.db import models
from api.doctors.models import Doctor
from datetime import date, time, timedelta

# Create your models here.
class Appointment(models.Model):

    firstname=models.CharField(max_length=30, null=False)
    lastname=models.CharField(max_length=30, null=False)
    date=models.DateField(null=False, default=date.today())
    time=models.CharField(max_length=20, null=False)
    phone=models.CharField(max_length=12, null=False)
    doctor=models.ForeignKey(Doctor, on_delete=models.PROTECT)
    issue=models.TextField(null=False)
    existing=models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.firstname


