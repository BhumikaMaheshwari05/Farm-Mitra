from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
# Create your views here.
def loginview(request):
    if(request.method=="POST"):
        username = request.POST.get("username")#it will collect the info giving in the input field with name as an attribute "username"
        password = request.POST.get("password")
        if not username or not password:  # Check if either field is missing
            messages.error(request, "Please enter both username and password")
            return redirect("login")
        user=authenticate(request,username=username,password=password)
        if(user):
            login(request,user)
            return redirect("homepage")
        else:
            messages.error(request,"Baby check tyhe credentials")
    return redirect("homepage")

def registerview(request):
    pass

def logoutview(request):
    logout(request)
    return redirect("homepage")
