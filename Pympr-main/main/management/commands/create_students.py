# main/management/commands/create_students.py
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from main.models import Student

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        username = '10255'
        try:
            # Check if user already exists
            if User.objects.filter(username=username).exists():
                self.stdout.write(self.style.WARNING(f'User {username} already exists'))
                return

            # Create new user if doesn't exist
            user = User.objects.create_user(
                username=username,
                password='1118',
                first_name='Dhaval',
                last_name='khandhadia'
            )

            # Create associated student record
            Student.objects.create(
                user=user,
                roll_number=username
            )
            
            self.stdout.write(self.style.SUCCESS(f'Successfully created user and student {username}'))

        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error creating user: {str(e)}'))