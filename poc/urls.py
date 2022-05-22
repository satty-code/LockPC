from django.urls import path
from .api import ComputationResourceTypeCreateApi, ComputationResourceTypeApi, ComputationResourceTypeUpdateApi, \
    ComputationResourceTypeDeleteApi, ComputationResourceCreateApi, ComputationResourceApi, ComputationResourceUpdateApi, \
    ComputationResourceDeleteApi, CustomerCreateApi, CustomerApi, CustomerUpdateApi, CustomerDeleteApi

from rest_framework_simplejwt import views as jwt_views
from .views import RegisterView, LoginView
from .views import HelloView

urlpatterns = [
    path('api', ComputationResourceTypeApi.as_view()),
    path('api/create', ComputationResourceTypeCreateApi.as_view()),
    path('api/<int:pk>', ComputationResourceTypeUpdateApi.as_view()),
    path('api/<int:pk>/delete', ComputationResourceTypeDeleteApi.as_view()),

    path('resource', ComputationResourceApi.as_view()),
    path('resource/create', ComputationResourceCreateApi.as_view()),
    path('resource/<int:pk>', ComputationResourceUpdateApi.as_view()),
    path('resource/<int:pk>/delete', ComputationResourceDeleteApi.as_view()),
    path('customer/', CustomerApi.as_view()),
    path('customer/create', CustomerCreateApi.as_view()),
    path('customer/<int:pk>', CustomerUpdateApi.as_view()),
    path('customer/<int:pk>/delete', CustomerDeleteApi.as_view()),
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/token/', jwt_views.TokenObtainPairView.as_view()),
    path('api/token/refresh', jwt_views.TokenRefreshView.as_view()),
    #path('validate',)
    #path('Hello/', HelloView.as_view())
    #path('hello/', views.HelloView.as_view(), name ='hello'),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('Hello/', HelloView.as_view())



]