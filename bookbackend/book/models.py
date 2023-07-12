from django.db import models
from decimal import Decimal

# Create your models here.
class Book(models.Model):
    sno           =    models.IntegerField()
    title         =    models.CharField(max_length=120)
    img           =    models.ImageField()
    year          =    models.IntegerField()
    author        =    models.CharField(max_length=100)
    ratings       =    models.DecimalField(decimal_places=1,max_digits=5)
    publication   =    models.CharField(max_length=40)
    genre         =    models.CharField(max_length=60,default=None)
    def __unicode__(self):
        return self.img
        