from django.urls import path
from . import views
# from .views import register_user, login, user_logout

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('category/', views.CategoryList.as_view()),
    path('film/', views.AddMedia.as_view()),
]