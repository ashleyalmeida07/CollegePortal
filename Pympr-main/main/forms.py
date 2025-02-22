# forms.py
from django import forms
from .models import Student

class MarksUploadForm(forms.Form):
    student = forms.ModelChoiceField(
        queryset=Student.objects.all(),
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    subject = forms.ChoiceField(
        choices=[('Mathematics', 'Mathematics'), ('Data Structure', 'Data Structure'), ('Java', 'Java'),('Python', 'Python'),('React', 'React')],
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    exam_type = forms.ChoiceField(
        choices=[('ISE1', 'ISE 1'), ('ISE2', 'ISE 2'), ('MSE', 'MSE'),('ESE', 'ESE')],
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    marks = forms.IntegerField(
        widget=forms.NumberInput(attrs={'class': 'form-control'}),
        min_value=0
    )

    def clean(self):
        cleaned_data = super().clean()
        exam_type = cleaned_data.get('exam_type')
        marks = cleaned_data.get('marks')

        max_marks = {
            'ISE1': 20,
            'ISE2': 20,
            'MSE': 30,
            'ESE': 30
        }

        if marks and exam_type and marks > max_marks[exam_type]:
            raise forms.ValidationError(f"Maximum marks for {exam_type} is {max_marks[exam_type]}")
        return cleaned_data