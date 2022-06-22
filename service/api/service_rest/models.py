
from django.db import models
from django.urls import reverse

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(unique=True,max_length=200)
    color = models.CharField(null= True, max_length=200)
    year = models.IntegerField(null=True)
    model = models.CharField(null=True, max_length=200)
    vip = models.BooleanField (default=True)

    def get_api_url(self):
        return reverse("api_automobiles", kwargs={"vin": self.vin})

    def __str__(self):
        return self.vin


class Technician(models.Model):
    name = models.CharField(max_length=200, unique=True,)
    employee_number = models.IntegerField(unique=True, null=True)

    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.employee_number})

    def __str__(self):
        return self.name

class Status(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "statuses"


class Service(models.Model):
    vin = models.CharField(unique=True,max_length=200)
    customer_name = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)  
    time = models.TimeField(auto_now_add=True)  
    technician = models.ForeignKey(
        Technician, 
        related_name="services", 
        on_delete=models.PROTECT
        )
    reason = models.CharField(max_length=200)
    status = models.ForeignKey(
        Status, 
        null= True,
        related_name="services", 
        on_delete=models.PROTECT
        )

    def get_api_url(self):
        return reverse("api_list_services", kwargs={"pk": self.vin})

    def __str__(self):
        return self.vin


    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="scheduled")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment


