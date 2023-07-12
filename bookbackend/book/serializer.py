from rest_framework import serializers
from . models import *

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model   =  Book
        fields  =  ['sno','title','img','year','author','ratings','publication','genre']


