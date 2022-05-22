from rest_framework import generics
from rest_framework.response import Response
from .serializer import CustomerSerializer, ComputationResourceSerializer, ComputationResourceTypeSerializer
from .models import Customer, ComputationResource, ComputationResourceType


class ComputationResourceTypeCreateApi(generics.CreateAPIView):
    queryset = ComputationResourceType.objects.all()
    serializer_class = ComputationResourceTypeSerializer


class ComputationResourceTypeApi(generics.ListAPIView):
    queryset = ComputationResourceType.objects.all()
    serializer_class = ComputationResourceTypeSerializer


class ComputationResourceTypeUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = ComputationResourceType.objects.all()
    serializer_class = ComputationResourceTypeSerializer


class ComputationResourceTypeDeleteApi(generics.DestroyAPIView):
    queryset = ComputationResourceType.objects.all()
    serializer_class = ComputationResourceTypeSerializer


class ComputationResourceCreateApi(generics.CreateAPIView):
    queryset = ComputationResource.objects.all()
    serializer_class = ComputationResourceSerializer


class ComputationResourceApi(generics.ListAPIView):
    queryset = ComputationResource.objects.all()
    serializer_class = ComputationResourceSerializer


class ComputationResourceUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = ComputationResource.objects.all()
    serializer_class = ComputationResourceSerializer


class ComputationResourceDeleteApi(generics.DestroyAPIView):
    queryset = ComputationResource.objects.all()
    serializer_class = ComputationResourceSerializer


class CustomerCreateApi(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerApi(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerDeleteApi(generics.DestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
