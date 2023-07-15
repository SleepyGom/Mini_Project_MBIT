from django.db import models

# Create your models here.
class Developer(models.Model):
    name = models.CharField(max_length = 50)
    count = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
    
class Question(models.Model):
    number = models.IntegerField(unique=True)
    content = models.CharField(max_length=50)
    
    def __str__(self):
        return f'{self.number}. {self.content}'
    
class Choice(models.Model):
    content = models.CharField(max_length = 100)
    question = models.ForeignKey(to='main.Question',
                                 on_delete=models.CASCADE)
    developer = models.ForeignKey(to='main.Developer',
                                  on_delete=models.CASCADE,
                                 null=True)
    def __str__(self):
        return self.content