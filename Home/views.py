from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView, DetailView
from .models import Products
from django.contrib.auth.mixins import LoginRequiredMixin


# Create your views here.
def home(request):
    products=Products.objects.all()[:15]
    return render(request,"home/index.html",{"products":products})




class PorodListView(LoginRequiredMixin,ListView):
    model=Products
    template_name='home/dashboard.html'
    context_object_name="products"
    login_url = '/login/'
    
    def get_queryset(self):
        return Products.objects.filter(Authors=self.request.user)

# class ProdDetailView(LoginRequiredMixin,DetailView):
#     model=Products
#     template_name=''