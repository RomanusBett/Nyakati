from django.contrib.auth.models import UserManager
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
    
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'
    
    objects = UserManager()
    
    def save(self, *args, **kwargs):
        if not self.pk: 
            salt = bcrypt.gensalt()
            self.password = bcrypt.hashpw(self.password.encode('utf-8'), salt).decode('utf-8')
        super(Member, self).save(*args, **kwargs)
        
    def check_password(self, raw_password):
        return bcrypt.checkpw(raw_password.encode('utf-8'), self.password.encode('utf-8'))
        
    @staticmethod
    def get_email_field_name():
        return 'email'
    
    @property
    def is_anonymous(self):
        return False
    
    @property
    def is_authenticated(self):
        return True
