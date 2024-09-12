from rest_framework.decorators import api_view
from .mailer import Mailer
from .serializers import UserSerializer
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def registration(request):
    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.save()
        current_site = get_current_site(request)
        mail_subject = 'Activate your Nyakati account'
        message = f'Hi {user.first_name}, \nPlease click on the link below to activate your account: \nhttp://{current_site.domain}/activate/{urlsafe_base64_encode(force_bytes(user.pk))}/{default_token_generator.make_token(user)}/'
        recipient = user.email
        Mailer(mail_subject, message, recipient)
        
        return Response({'detail': 'Please confirm your email address to complete the registration'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)