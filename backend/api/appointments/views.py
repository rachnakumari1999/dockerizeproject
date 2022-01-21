import re
from .serializers import AppointmentSerializer, GetDateSerializer
from .models import Appointment
from rest_framework import generics
from rest_framework import mixins 
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from datetime import date


class AppointmentList(APIView):

    permission_classes = (permissions.IsAuthenticated, )
    def get(self, request, format=None):
        appointments = Appointment.objects.filter(doctor=self.request.user.id, date=date.today())
        if len(appointments) != 0:
            serializer = AppointmentSerializer(appointments, many=True)
            return Response(serializer.data)
        else:
            return Response({"error" : 'No Appointments'})



class CreateAppointment(generics.GenericAPIView, mixins.CreateModelMixin):
    permission_classes = (permissions.AllowAny, )
    serializer_class=AppointmentSerializer

    def post(self,request):
        return self.create(request)



class GetTime(APIView):

    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        value = self.request.data
        date = value['date']
        doctor = value['doctor']
        time = Appointment.objects.filter(date=date, doctor=doctor)
        serializer = GetDateSerializer(time, many=True)
        return Response(serializer.data)
   



