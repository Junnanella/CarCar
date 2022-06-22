from re import S
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    AutomobileVOEncoder,
    CustomerEncoder,
    SalesPersonEncoder,
    SalesRecordEncoder,
)
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord


@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": sales_person},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            employee_name = content["employee_name"]
            employee_num = content["employee_num"]
            newSalesPerson = SalesPerson.objects.create(**content)
            return JsonResponse(
                newSalesPerson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Could not create sales person"})
            response.status_code = 400
            return response


@require_http_methods(["GET"])
def api_sales_person_detail(request, pk):
    sales_person = SalesPerson.objects.get(id=pk)
    return JsonResponse(
        sales_person,
        encoder=SalesPersonEncoder,
        safe=False,
    )


@require_http_methods(["GET", "POST"])
def api_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(customer, encoders=Customer, safe=False)
        except:
            return JsonResponse({"message": "just existing"}, status=400)


# need to finish view for sales record
# need to finish poller
# then can move into react
@require_http_methods(["GET", "POST"])
def api_sale_records(request):
    if request.method == "GET":
        records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_record": records},
            encoder=SalesRecordEncoder,
            safe=False,
        )
        # JsonResponse(dictionary, encoder, safe=false)
    else:
        content = json.loads(request.body)
        content = {
            **content,
            "vin": AutomobileVO.objects.get(id=content["vin"]),
            "sales_person": SalesPerson.objects.get(id=content["sales_person"]),
            "customer": Customer.objects.get(id=content["customer"]),
        }
        records = SalesRecord.objects.create(**content)
        return JsonResponse(
            records,
            encoder=SalesRecordEncoder,
            safe=False,
        )
