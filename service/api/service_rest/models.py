from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
  


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField(unique=True, null=True)


class Service(models.Model):
    vin = models.OneToOneField(AutomobileVO, related_name="services", on_delete=models.PROTECT)
    customer_name = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)  
    time = models.TimeField(auto_now_add=True)  
    technician = models.ForeignKey(Technician, related_name="services", on_delete=models.PROTECT)
    reason = models.CharField(max_length=200)

