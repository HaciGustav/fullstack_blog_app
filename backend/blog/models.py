from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)
    
    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length = 200, unique= True)
    content = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    is_published = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title