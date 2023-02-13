# from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializer import UserSerializer, LoginSerializer, LockSerializer
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.contrib import auth
import jwt
import pyautogui
from time import sleep


class RegisterView(GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        data = request.data
        username = data.get('username', '')
        password = data.get('password', '')
        user = auth.authenticate(username=username, password=password)

        if user:
            auth_token = jwt.encode(

                {'username': user.username}, 'SECRET', algorithm="HS256")

            serializer = UserSerializer(user)

            data = {'user': serializer.data, 'token': auth_token}

            return Response(data, status=status.HTTP_200_OK)

            # SEND RES
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# Lock pc using UI
class LockView(GenericAPIView):
    serializer_class = LockSerializer

    def post(self, request):
        data = request.data
        lock = data.get('lock', '')

        if lock == 'lock':
            return Response(pyautogui.hotkey('win', 'r'), sleep(0.500),
                            pyautogui.typewrite('Rundll32.exe user32.dll,LockWorkStation\n'))
