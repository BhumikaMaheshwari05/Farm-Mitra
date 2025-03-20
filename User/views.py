from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import get_user_model


CustomUser = get_user_model()

def loginview(request):
    if(request.method=="POST"):
        username = request.POST.get("username")#it will collect the info giving in the input field with name as an attribute "username"
        password = request.POST.get("password")
        role=request.POST.get("role")
        if not username or not password:  # Check if either field is missing
            messages.error(request, "Please enter both username and password")
            return redirect("login")
        user=authenticate(request,username=username,password=password)
        if(user):
            login(request,user)
            messages.success(request,f'{username} Baby Welcome!!!')
            if(role=="farmer"):
                return redirect("homepage_farmer")
            return redirect("homepage")
        else:
            messages.error(request,"Baby check the credentials")
    return redirect("homepage")

def registerview(request):
    if(request.method=="POST"):
        username = request.POST.get("username")#it will collect the info giving in the input field with name as an attribute "username"
        password = request.POST.get("password")
        role=request.POST.get("role")
        if username and password and role:
            user = CustomUser.objects.create_user(username=username, password=password,role=role)
            #print(form.username)--> its not working here!!..
            messages.success(request,f'Account Created for {username} now Login Plzzz ')
            return redirect('login')
        else:
            messages.warning(request,f'Plz read the validation points carefully!!!!')
            #return render(request,'users/register.html',{'form':form}) no need here
     
    return redirect("homepage")

@login_required
def logoutview(request):
    logout(request)
    return redirect("homepage")
