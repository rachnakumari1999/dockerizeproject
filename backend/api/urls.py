from django.urls import include, path


urlpatterns = [
    path('doctors/', include('api.doctors.urls')),
    path('eprescription/', include('api.eprescription.urls')),
    path('patient/', include('api.patients.urls')),
    path('appointments/', include('api.appointments.urls')),
]


