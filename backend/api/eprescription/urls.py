from django.urls import include, path
from rest_framework import routers
from . import views


urlpatterns = [
    path('prescription/', views.PrescriptionList.as_view()),
    path('prescriptiondata/', views.PrescriptionList.as_view()),
    path('medicationdata/', views.MedicationList.as_view()),
    path('prescriptioncreate/', views.PrescriptionCreate.as_view()),
    path('medicationcreate/', views.MedicationCreate.as_view()), 

]