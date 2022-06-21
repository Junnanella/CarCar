from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    AutomobileVOEncoder,
    CustomerEncoder,
    SalesPersonEncoder,
    SalesRecordEncoder
)
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord


@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method=="GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {'salesperson': sales_person},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            name = SalesPerson.objects.create(**content)
            employee_num = content['employee_num']
            employee = SalesPerson.objects.get(pk=employee_num)
            content['employee_num'] = employee
            return JsonResponse(
                name,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {'message': 'Could not create sales person'}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET", "POST"])
def api_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {'customer': customer},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoders=Customer, 
                safe=False
            )
        except:
            return JsonResponse(
                {"message": 'just existing'}, status=400
            )

@require_http_methods(["GET", "POST"])
def api_sale_records(request):
    if request.method == "GET":
        records = SalesRecord.objects.all()
        return 