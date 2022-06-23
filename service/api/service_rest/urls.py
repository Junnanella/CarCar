from django.urls import path

from .views import api_list_services, api_detail_services,api_list_technician,api_detail_technician

urlpatterns = [
    path(
        "services/",
        api_list_services,
        name="api_list_services",
    ),
    path(
        "services/<str:vin>/",
        api_detail_services,
        name="api_detail_service",
    ),
    
     path(
        "technician/",
        api_list_technician,
        name="api_list_technician",
    ),
    path(
        "technician/",
        api_detail_technician,
        name="api_detail_technician",
    ),
]
