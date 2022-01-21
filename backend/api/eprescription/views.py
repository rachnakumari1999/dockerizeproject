from curses import keyname
from rest_framework import viewsets
from .serializers import PrescriptionSerializer,MedicationSerializer
from .models import Prescription,Medication
from rest_framework import generics
from rest_framework import mixins 
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status,permissions
from rest_framework.views import APIView
from .models import Prescription,Medication
from .serializers import PrescriptionSerializer,MedicationSerializer
from rest_framework.response import Response
 
from rest_framework.decorators import api_view

class PrescriptionList(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        patientId=data['id']
        prescription = Prescription.objects.filter(patient_id=patientId)
        serializer = PrescriptionSerializer(prescription, many=True)
        return Response(serializer.data)

class MedicationList(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        prescription_id=data['prescription_id']
        medication = Medication.objects.filter(prescription_id=prescription_id)
        serializer = MedicationSerializer(medication, many=True)
        return Response(serializer.data)

class PrescriptionCreate(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

    def post(self, request):
        return self.create(request)

class MedicationCreate(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = MedicationSerializer
    queryset = Medication.objects.all()

    def post(self, request):
        return self.create(request)


