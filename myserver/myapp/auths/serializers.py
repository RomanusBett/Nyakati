from rest_framework import serializers
from ..models import Member
from django.contrib.auth.password_validation import validate_password

class CustomMemberCreateSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = Member
        fields = ('email', 'first_name', 'last_name', 'password1', 'password2')
        
    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields did not match."})
        return attrs
    
    def create(self, validated_data):
        member = Member(
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            password = validated_data['password1']
        )
        member.is_active = False
        member.save()
        
        return member