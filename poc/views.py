#from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializer import UserSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.contrib import auth
import jwt
from rest_framework.views import APIView
#from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.


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

        # return Response({
        #     "message":"hii"
        # })

        if user:

            auth_token = jwt.encode(

                {'username': user.username}, 'SECRET', algorithm="HS256")

            serializer = UserSerializer(user)

            data = {'user': serializer.data, 'token': auth_token}

            return Response(data, status=status.HTTP_200_OK)

            # SEND RES
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



#from rest_framework.authentication import TokenAuthentication


class HelloView(APIView):
    #authentication_classes = (TokenAuthentication)
    permission_classes = (IsAuthenticated)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)