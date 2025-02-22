from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    roll_number = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.user.username} - {self.roll_number}"

class Subject(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Attendance(models.Model):
    STATUS_CHOICES = [
        ('present', 'Present'),
        ('absent', 'Absent'),
        ('late', 'Late'),
    ]
    
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    attendance_status = models.CharField(max_length=10, choices=STATUS_CHOICES)  # Changed from 'status' to 'attendance_status'
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['student', 'subject', 'date']

    def __str__(self):
        return f"{self.student} - {self.subject} - {self.date}"

class Marks(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    exam_type = models.CharField(max_length=10)
    obtained_marks = models.IntegerField()
    total_marks = models.IntegerField()
    
    class Meta:
        unique_together = ('student', 'subject', 'exam_type')
