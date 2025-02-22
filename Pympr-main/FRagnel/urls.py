"""
URL configuration for FRagnel project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.urls import path
from main.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home,name = "home"),
    path('login/' , login_page , name="login"),
    path('register/' , register_page , name="register"),
    path('logout/' , logout_page , name="logout"),
    path('dashboard/', dashboard, name='dashboard'),
    path('attendance/', attendance_page, name='attendance'),
    path('marks/', marks_page, name='marks'),
    path('upload-marks/', upload_marks, name='upload_marks'),
    path('manage-attendance/', manage_attendance, name='manage_attendance'),
    path('homework/', homework_page, name='homework'),
    path('homework-assign/', homework_assign, name='homework_assign'),
    path('teacher-connect/', teacher_connect, name='teacher_connect'),
    path('message/', message, name='message'),
    path('login/', login, name='login'),


]
