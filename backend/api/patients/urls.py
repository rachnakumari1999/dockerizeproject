
from django.urls import include, path
from . import views
from .models import Patient
from .views import GetCSRFToken


urlpatterns = [
    path('list/', views.PatientList.as_view()),
    path('addpatient/',views.PatientForm.as_view()),
    path('list/<int:pk>',views.patientDetailId),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('patientlogin',views.PatientDataView.as_view())
]