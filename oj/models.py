from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

#    status_choices = (
#        (True, 'Solved'),
#        (False, 'Unsolved')
#    )
#    status = models.BooleanField(choices = status_choices, default = False)
class Problems(models.Model):
   difficulty_levels = (
       ('easy', 'Easy'),
       ('medium', 'Medium'),
       ('hard', 'hard')
   )
   name = models.CharField(max_length=64)
   statement = models.CharField(max_length=1000)
   constraints = models.JSONField(default=list)
   difficulty_levels = models.CharField(max_length=6, choices=difficulty_levels, default='easy')
   
   def __str__(self):
       return self.name

class User(AbstractUser):
    solved_problems = models.ManyToManyField(Problems)
    def __str__(self):
        return self.solved_problems
class Testcase(models.Model):
    problem = models.ForeignKey(Problems, related_name='test_cases', on_delete=models.CASCADE)
    input_data = models.TextField()
    output_data = models.TextField()
    
    def __str__(self):
        return f"Test cases for {self.problem.name}"