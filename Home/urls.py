from django.urls import path
from .views import PorodListView
from User import views as user_views
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns=[
    path('',views.home,name="homepage"),
    path('dashboard/',PorodListView.as_view(),name="homepage_farmer"),
    path('login/',user_views.loginview,name="login"),
    path('logout/',user_views.logoutview,name="logout"),
    path('register/',user_views.registerview,name="register"),
    
]
if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)