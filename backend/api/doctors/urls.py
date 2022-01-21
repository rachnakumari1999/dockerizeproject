from django.urls import path
from .views import GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DoctorListAll
from . import views


urlpatterns = [
    path('list/', views.DoctorList.as_view()),
    path('all/', views.DoctorListAll.as_view()),
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view())
]
