from rest_framework.views import APIView
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from ..models import Member
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.tokens import default_token_generator


class ActivateMember(APIView):
    def get(self, request, uidb64, token):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            member = Member.objects.get(pk=uid)
            
        except (TypeError, ValueError, OverflowError, Member.DoesNotExist):
            member = None
            
        if member is not None and default_token_generator.check_token(member, token):
            member.is_active = True
            member.save()
            return Response({'detail':'Account activated successfully.'}, status = status.HTTP_200_OK)
        else:
            return Response({'detail': 'Activation Link is invalid!'}, status=status.HTTP_400_BAD_REQUEST)