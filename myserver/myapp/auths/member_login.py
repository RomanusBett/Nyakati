from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.response import Response

@api_view(['POST'])
def member_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
        
    member = authenticate(request=None, email=email, password=password)
        
    if member is not None:
        refresh = RefreshToken.for_user(member)
        return Response(
            {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'detail': 'Login successful'
            },
            status=status.HTTP_200_OK)
    else:
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)