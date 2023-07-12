from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from django.db.models import Q


# Create your views here.
class BookView(APIView):
    serializer_class = BookSerializer
    def get(self, request):
        l=[]
        # arg = request.GET.get('arg')
        # print(arg)
        context={"request": request}
        for detail in Book.objects.all().values():
            # image=context['request'].build_absolute_uri(detail["img"])
            detail={"image":detail["img"],"title":detail["title"],"author":detail["author"],"year":detail["year"],"ratings":detail["ratings"],"publication":detail["publication"],"genre":detail["genre"]}
            l.append(detail)        
         # Code Added here
        return Response(l)
        
    def post(self, request):
        arg = request.data
        igenre=arg['genre']
        
        print(arg)
        context={"request": request}
        serializer = BookSerializer(arg)
        l=[]
        for detail in Book.objects.filter(Q(genre=igenre)):
            image=context['request'].build_absolute_uri(detail.img.url)
            detail={"image":image,"title":detail.title,"author":detail.author,"year":detail.year,"ratings":detail.ratings,"publication":detail.publication}
            l.append(detail)        
        return Response(l)
        
