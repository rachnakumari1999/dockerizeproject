from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from .serializers import PatientSerializer
from .models import Patient
from rest_framework import generics
from rest_framework import mixins
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from django.contrib import auth
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.db.models import Q

# Patient list for doctor -> GET API






class PatientList(APIView):
    
    def get(self, request, format=None):
        patientData=Patient.objects.filter(current_doctor=self.request.user.id)
        serializer = PatientSerializer(patientData,many=True)
        return Response(serializer.data)
       


# Patient form for doctor to add patient -> POST API

class PatientForm(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class=PatientSerializer

    def post(self,request):
        return self.create(request)

# Patient Detail for doctor based on patient id -> GET API
@api_view(['GET'])
def patientDetailId(request, pk):
    try: 
        patient = Patient.objects.get(pk=pk) 
    except Patient.DoesNotExist: 
        return JsonResponse({'message': 'The Patient does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        patient_serializer = PatientSerializer(patient) 
        return JsonResponse(patient_serializer.data) 
        
@method_decorator(csrf_protect, name='dispatch')
class PatientDataView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        patientId=data['patient_id']
        secretKey=data['secret_key']
        try:
            patientData=Patient.objects.filter(id=patientId,secretkey=secretKey)
            print(patientData)
            if len(patientData) != 0:
                serializer = PatientSerializer(patientData,many=True)
                return Response(serializer.data)
            else:
               return Response({"error":"Invalid Credentials"}) 
        except:
            return Response({"error":"Something"})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })

