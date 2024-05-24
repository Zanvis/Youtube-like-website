from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Administrator)
admin.site.register(models.FilmCategory)
admin.site.register(models.Film)