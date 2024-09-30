from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['POST'])
def loginuser(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, email=email, password=password)
    
    if user is not None:
        login(request, user)
        return Response({
            'detail': 'Login successful'
        }, status=status.HTTP_200_OK)
    else:
        return Response({
            'detail': 'invalid Credentials'
        }, status=status.HTTP_401_UNAUTHORIZED)