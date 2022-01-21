from .models import Prescription,Medication
from rest_framework import serializers

class PrescriptionSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Prescription
        fields = '__all__'
class MedicationSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Medication
        fields = '__all__'
