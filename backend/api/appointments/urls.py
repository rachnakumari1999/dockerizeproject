from django.urls import path
from .views import AppointmentList, CreateAppointment, GetTime
from . import views


urlpatterns = [
    path('create/', views.CreateAppointment.as_view()),
    path('list/',AppointmentList.as_view()),
    path('date', views.GetTime.as_view())
]
