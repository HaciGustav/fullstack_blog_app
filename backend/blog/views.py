from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Category, Blog
from .serializers import CategorySerializer, BlogSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .permissions import IsAdminOrReadOnly
# Create your views here.

class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_fields = ["name"]
    permission_classes = [IsAdminOrReadOnly]
    
class BlogView(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    filter_fields = ["category"]
    search_fields = ["title", "content"]
    permission_classes =[IsAuthenticatedOrReadOnly]