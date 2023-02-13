from django.db import models
from django.core.validators import RegexValidator


class Lock(models.Model):
    lock = models.CharField(max_length=82, null=False)
