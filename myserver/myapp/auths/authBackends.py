from typing import Any, Optional
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model
from django.http import HttpRequest

class BcryptBackend(BaseBackend):
    def authenticate(self, request: Optional[HttpRequest] = None, email: str = None, password: str = None, **kwargs: Any):
        Member = get_user_model()
        
        try:
            member = Member.objects.get(email=email)
        except Member.DoesNotExist:
            return None
        
        if member.check_password(password):
            return member
        
        return None
        
    def get_user(self, user_id: int):
        Member = get_user_model()
        try:
            return Member.objects.get(pk=user_id)
        except Member.DoesNotExist:
            return None
