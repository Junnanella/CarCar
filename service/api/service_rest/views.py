from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Service, Technician

class AutomobileVODEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [ 
        "id",
        "vin"
        ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]
    
class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "id",
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason",
    ]
  
    encoders = {
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        count = AutomobileVO.objects.filter(vin=o.vin).count()
        return {"vip": count > 0}

    def get_extra_data(self, o):
        return {"status": o.status.name}


@require_http_methods(["GET", "POST"])
def api_list_services(request):
    if request.method == "GET":
        services = Service.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceEncoder,
        )
    else:
            content = json.loads(request.body)
            print(content)
            try:
                technician_id = content["technician"]
                technician = Technician.objects.get(id=technician_id)
                content["technician"] = technician
                # print("hello", technician)
                # auto = AutomobileVO.objects.get(vin=vin_vo)
                # # print("Here",type(auto))
                # # print(auto)
                # content["vin"] = auto
            except Technician.DoesNotExist:
                return JsonResponse(
                        {"message": "Unable to create service"},
                        status=400,
                    )
            service = Service.create(**content)
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False,
            )

@require_http_methods(["PUT", "DELETE", "GET"])
def api_detail_services(request, vin):
    if request.method == "GET":
        try:
            service = Service.objects.get(vin=vin)
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False,
            )
        except Service.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            service = Service.objects.get(vin=vin)
            service.delete()
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False,
            )
        except Service.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            service = Service.objects.get(vin=vin)

            props = ["customer_name", "date", "time", "reason"]
            for prop in props:
                if prop in content:
                    setattr(service, prop, content[prop])
            service.save()
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False,
            )
        except Service.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

      
@require_http_methods(["GET","POST"])
def api_list_technician(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        print(content)
        try:
            id= content["employee_number"]
            name = content["name"]
         
        except:
            return JsonResponse(
                {"message": "Unable to create technician"},
                status=400,
            )
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )    
@require_http_methods(["GET","DELETE"])
def api_detail_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

