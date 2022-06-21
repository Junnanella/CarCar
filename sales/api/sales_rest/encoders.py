from common.json import ModelEncoder

from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "name"]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "customer_name",
        "address",
        "phone_number"
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "employee_name",
        "employee_num",
    ]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "sales_person",
        "customer",
        "automobile",
        "price"
    ]
