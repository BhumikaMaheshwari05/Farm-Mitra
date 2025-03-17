from django.urls import path
from . import views
from User import views as user_views

urlpatterns=[
    path('',views.home,name="homepage"),
    path('login/',user_views.loginview,name="login"),
    path('logout/',user_views.logoutview,name="logout"),
    path('register/',user_views.registerview,name="register"),
]
