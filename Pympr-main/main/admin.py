# admin.py
from django.contrib import admin
from .models import Student, Subject, Attendance, Marks

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['user', 'roll_number']  
@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'code')
    search_fields = ('name', 'code')

@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('student', 'subject', 'date', 'attendance_status')
    list_filter = ('attendance_status', 'date', 'subject')
    search_fields = ('student__user__first_name', 'student__user__last_name', 'student__roll_number')
    date_hierarchy = 'date'
    list_per_page = 50

    def get_student_name(self, obj):
        return obj.student.user.get_full_name()
    get_student_name.short_description = 'Student Name'
@admin.register(Marks)
class MarksAdmin(admin.ModelAdmin):
    list_display = ['student', 'subject', 'exam_type', 'obtained_marks']  