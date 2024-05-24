from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Administrator(AbstractUser):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True, default='admin01')
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    roles = models.CharField(max_length=200)
    mobile_nr = models.CharField(max_length=20)
    address = models.TextField()

class FilmCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

class Film(models.Model):
    category = models.ForeignKey(FilmCategory, on_delete=models.CASCADE)
    administator = models.ForeignKey(Administrator, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    video = models.FileField(upload_to='videos', null=True)
    image = models.ImageField(upload_to='images', null=True)