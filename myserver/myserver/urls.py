"""
URL configuration for myserver project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from myapp.auths import register
from myapp.auths.activate import ActivateMember
from myapp.auths import member_login
from myapp.auths.googlelogin import GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', register.registration, name='registration'),
    path('activate/<uidb64>/<token>/', ActivateMember.as_view(), name='activate'),
    path('login/', member_login.member_login, name='login'),
    path('accounts/', include('allauth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/google/', GoogleLogin.as_view(), name='google-login'),
]
