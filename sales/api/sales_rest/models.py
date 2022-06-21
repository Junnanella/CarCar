from django.db import models


# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    is_sold = models.BooleanField(default=False, blank=True, null=True)


    def __str__(self):
        return f"{self.vin} {self.name}"

class SalesPerson(models.Model):
    employee_name = models.CharField(max_length= 100)
    employee_num = models.PositiveSmallIntegerField(null=False, blank=False, unique=True)
    sales = models.ManyToManyField('SalesRecord', blank=True)

    def __str__(self):
        return f"{self.employee_name}"

class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=17, unique=True, null=False, blank=False)

    def __str__(self):
        return f"{self.customer_name}"

class SalesRecord(models.Model):
    automobile = models.ForeignKey(AutomobileVO, on_delete=models.PROTECT)
    sales_person = models.ForeignKey(SalesPerson, on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    price = models.PositiveIntegerField(null=False, blank=False)

    def __str__(self):
        return f"{self.automobile}"
