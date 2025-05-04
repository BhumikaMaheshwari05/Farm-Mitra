from django.db import models
from User.models import CustomUser
# Create your models here.
class Products(models.Model):
    unit_choices=[
        ("gm","gram"),
        ("Kg","KiloGram"),
    ]
    Product_Name=models.CharField(max_length=100)
    Description=models.TextField()
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    Quantity=models.DecimalField(max_digits=10, decimal_places=2,null=False,default=1)
    unit=models.CharField(max_length=5,choices=unit_choices,default="Kg")
    Image_URL=models.ImageField(default='default.jpg',upload_to='product_pics')
    Authors = models.ManyToManyField(CustomUser, related_name='products')
    def __str__(self):
        return self.Product_Name