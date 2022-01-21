import re
from rest_framework import viewsets
from .serializers import DoctorSerializer, DoctorListSerializer
from .models import Doctor
from rest_framework import generics
from rest_framework import mixins 
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator


class DoctorList(APIView):

    permission_classes = (permissions.IsAuthenticated, )
    def get(self, request, format=None):
        doctor = Doctor.objects.filter(id=self.request.user.id)
        serializer = DoctorSerializer(doctor, many=True)
        return Response(serializer.data)


class DoctorListAll(APIView):

    permission_classes = (permissions.AllowAny, )
    def get(self, request, format=None):
        doctor = Doctor.objects.all()
        serializer = DoctorListSerializer(doctor, many=True)
        return Response(serializer.data)

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })
        
@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, format=None):
        user = self.request.user
        
        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({ 'isAuthenticated': 200 })
            else:
                return Response({ 'error': '1' })
        except:
            return Response({ 'error': 'Something went wrong', 'code' : 404 })



@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        email = data['email']
        password = data['password']

        try:
            user = auth.authenticate(email=email, password=password)

            if user is not None:
                auth.login(request, user)
                return Response({ 'code': 200 })
            else:
                return Response({ 'error': 'Error Authenticating', 'code': 401 })
        except:
            return Response({ 'error': 'Something went wrong when logging in' })
 

class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({ 'success': 'Loggout Out', 'code': 200 })
        except:
            return Response({ 'error': 'Something went wrong when logging out' })
