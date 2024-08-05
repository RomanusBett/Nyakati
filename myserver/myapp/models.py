from django.db import models
from django.utils import timezone
import bcrypt

class Member(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    password = models.CharField(max_length=150)
    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(null=True, blank=True) 
    
    def save(self, *args, **kwargs):
        salt = bcrypt.gensalt()
        self.password = bcrypt.hashpw(self.password.encode('utf-8'), salt)
        super(Member, self).save(*args, **kwargs)
        
    @staticmethod
    def get_email_field_name():
        return 'email'