from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=20, unique=True)
    is_sold = models.BooleanField(blank=True, null=True)

    def __str__(self) -> str:
        return super().__str__()

class SalesPerson(models.Model):
    employee_name = models.CharField(max_length= 100)
    employee_num = models.PositiveSmallIntegerField(null=False, blank=False, unique=True)
    sales = models.ForeignKey('SalesRecord', related_name='salesperson', on_delete=models.PROTECT)

class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=17, unique=True, null=False, blank=False)

class SalesRecord(models.Model):
    automobile = models.ForeignKey(AutomobileVO, on_delete=models.PROTECT)
    sales_person = models.ForeignKey(SalesPerson, on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    price = models.PositiveIntegerField(null=False, blank=False)
