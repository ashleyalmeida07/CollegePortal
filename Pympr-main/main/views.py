from django.shortcuts import render, redirect,get_object_or_404

from .models import *
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required,user_passes_test
from datetime import timedelta, date
from django.db.models import Q
from django.db.models import Count
from .forms import MarksUploadForm
from django.http import JsonResponse
from datetime import datetime
# Create your views here.


def home(request):
    return render(request , 'main.html')

def login_page(request):
    if request.method== "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not User.objects.filter(username = username).exists():
             messages.info(request, 'Invalid Data')
             return redirect('/login/')
        user = authenticate(username = username, password = password)

        if user is None:
             messages.info(request, 'Invalid Data')
             return redirect('/login/')
        else :
            login(request, user)
            return redirect('/')

    return render(request, 'login.html')
    

def register_page(request):

    if request.method== "POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = User.objects.filter(username = username)
        if user.exists():
            messages.info(request, 'Username already Taken')
            return redirect('/register/')

        user=User.objects.create(
            first_name = first_name,
            last_name = last_name,
            username = username,
        )
        user.set_password(password)
        user.save()


        messages.info(request, 'Account Created Successfully')

        return redirect("/login/")

    return render(request, 'register.html')

def logout_page(request):
    logout(request)
    return redirect('/login/')

@login_required
def homework_page(request):
    return render(request, 'homework.html')

# Assign Homework
@login_required
def homework_assign(request):
    return render(request, 'homework_assign.html')

@login_required
def dashboard(request):
    context = {
        'semester_progress': 65,
        'total_classes': 90,
        'classes_attended': 85,
        'overall_attendance': 94.4,
        'subjects': {
            'Mathematics': {
                'attendance': 85,
                'marks': {
                    'ISE 1': {'obtained': 5, 'total': 20},
                    'MSE': {'obtained': 24, 'total': 30},
                    'ISE 2': {'obtained': 14, 'total': 20},
                    'ESE': {'obtained': 24, 'total': 30},
                }
            },
            'Data-Structure': {
                'attendance': 75,
                'marks': {
                    'ISE 1': {'obtained': 12, 'total': 20},
                    'MSE': {'obtained': 82, 'total': 100},
                    'ISE 2': {'obtained': 8, 'total': 30},
                    'ESE': {'obtained': 80, 'total': 100},
                }
            },
            'Java': {
                'attendance': 90,
                'marks': {
                    'ISE 1': {'obtained': 12, 'total': 20},
                    'MSE': {'obtained': 82, 'total': 100},
                    'ISE 2': {'obtained': 8, 'total': 30},
                    'ESE': {'obtained': 80, 'total': 100},
                }
            },
            'Python': {
                'attendance': 90,
                'marks': {
                    'ISE 1': {'obtained': 12, 'total': 20},
                    'MSE': {'obtained': 82, 'total': 100},
                    'ISE 2': {'obtained': 8, 'total': 30},
                    'ESE': {'obtained': 80, 'total': 100},
                }
            },
            'React': {
                'attendance': 90,
                'marks': {
                    'ISE 1': {'obtained': 12, 'total': 20},
                    'MSE': {'obtained': 82, 'total': 100},
                    'ISE 2': {'obtained': 8, 'total': 30},
                    'ESE': {'obtained': 80, 'total': 100},
                }
            }
        },
        'user': request.user
    }
    return render(request, 'index.html', context)
        
@login_required
def attendance_page(request):
    total_classes = 90
    classes_attended = 85
    overall_attendance = 94.4
    classes_missed = total_classes - classes_attended  # Calculate missed classes here
    
    context = {
        'total_classes': total_classes,
        'classes_attended': classes_attended,
        'classes_missed': classes_missed,  # Add to context
        'overall_attendance': overall_attendance,
        'subjects': {
            'Mathematics': {'attendance': 35, 'classes_attended': 2, 'total_classes': 40},
            'Data-Structure': {'attendance': 75, 'classes_attended': 30, 'total_classes': 40},
            'Java': {'attendance': 90, 'classes_attended': 36, 'total_classes': 40},
            'Python': {'attendance': 90, 'classes_attended': 36, 'total_classes': 40},
            'React': {'attendance': 90, 'classes_attended': 36, 'total_classes': 40},
        }
    }
    return render(request, 'attendance.html', context)

@login_required
def marks_page(request):
    return render(request, 'marks.html')


# def marks_page(request):
#     student = request.user.student
#     marks_data = Marks.objects.filter(student=student)
    
#     subjects = {}
#     overall_total = 0
#     overall_obtained = 0
    
#     for mark in marks_data:
#         if mark.subject not in subjects:
#             subjects[mark.subject] = {
#                 'marks': {},
#                 'total_obtained': 0,
#                 'total_marks': 0,
#                 'grade': '',
#                 'percentage': 0
#             }
        
#         percentage = (mark.obtained_marks / mark.total_marks) * 100
#         subjects[mark.subject]['marks'][mark.exam_type] = {
#             'obtained': mark.obtained_marks,
#             'total': mark.total_marks,
#             'percentage': percentage
#         }
        
#         subjects[mark.subject]['total_obtained'] += mark.obtained_marks
#         subjects[mark.subject]['total_marks'] += mark.total_marks
        
#         overall_obtained += mark.obtained_marks
#         overall_total += mark.total_marks
    
#     # Calculate percentages and grades
#     for subject_data in subjects.values():
#         subject_data['percentage'] = (subject_data['total_obtained'] / subject_data['total_marks']) * 100
    
#     overall_percentage = (overall_obtained / overall_total * 100) if overall_total > 0 else 0
    
#     context = {
#         'overall_percentage': overall_percentage,
#         'subjects': subjects
#     }
    
#     return render(request, 'marks.html', context)

@login_required
@user_passes_test(lambda u: u.is_staff)
def upload_marks(request):
    students = Student.objects.all()  # Get all students
    if request.method == 'POST':
        form = MarksUploadForm(request.POST)
        if form.is_valid():
            student = form.cleaned_data['student']
            subject = form.cleaned_data['subject']
            exam_type = form.cleaned_data['exam_type']
            marks = form.cleaned_data['marks']
            
            total_marks = 20 if exam_type in ['ISE1', 'ISE2'] else 30
            
            Marks.objects.update_or_create(
                student=student,
                subject=subject,
                exam_type=exam_type,
                defaults={
                    'obtained_marks': marks,
                    'total_marks': total_marks
                }
            )
            return redirect('marks')
    else:
        form = MarksUploadForm()
    return render(request, 'upload_marks.html', {'form': form, 'students': students})
    
# @login_required
# def marks_page(request):
#     try:
#         student = request.user.student
#         # Get all marks for the student
#         marks = Marks.objects.filter(student=student)
#         context = {
#             'student': student,
#             'marks': marks
#         }
#         return render(request, 'viewmarks.html', context)
#     except Student.DoesNotExist:
#         messages.error(request, "No student profile found.")
#         return redirect('upload_marks') 
    
@login_required
def manage_attendance(request):
    # Get the subject (you might want to pass this as a parameter or select it in the form)
    subject = Subject.objects.first()  # Or get it based on your logic
    students = Student.objects.all().order_by('roll_number')

    if request.method == 'POST':
        attendance_date = datetime.now().date()
        
        # Process attendance for each student
        for student in students:
            attendance_status = request.POST.get(f'attendance_{student.id}')
            notes = request.POST.get(f'notes_{student.id}', '')
            
            if attendance_status:
                # Create or update attendance record
                Attendance.objects.update_or_create(
                    student=student,
                    subject=subject,
                    date=attendance_date,
                    defaults={
                        'attendance_status': attendance_status,  # Changed from 'status' to 'attendance_status'
                        'notes': notes
                    }
                )
        
        messages.success(request, 'Attendance has been recorded successfully!')
        return redirect('attendance_list')  # Make sure this URL pattern exists

    context = {
        'subject': subject,
        'students': students,
    }
    return render(request, 'updateattendance.html', context)

@login_required
def teacher_connect(request):
    return render(request, 'teacher_connect.html')

@login_required
def message(request):
    return render(request, 'message.html')