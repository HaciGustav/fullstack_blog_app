from django.urls import path, include
from .views import RegisterView, ProfileUpdateView
from rest_framework.authtoken import views

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("auth/", include("dj_rest_auth.urls")),
    path("profile/<int:pk>/", ProfileUpdateView.as_view()),
]
