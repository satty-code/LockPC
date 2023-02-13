from django.urls import path

from rest_framework_simplejwt import views as jwt_views
from .views import RegisterView, LoginView, LockView


urlpatterns = [
    path('api/token/', jwt_views.TokenObtainPairView.as_view()),
    path('api/token/refresh', jwt_views.TokenRefreshView.as_view()),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('lock/', LockView.as_view())
]