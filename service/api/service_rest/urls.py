from django.urls import path

from .views import api_list_services, api_detail_services,api_list_technician,api_detail_technician, api_cancel_appointment, api_finish_appointment, api_history_view

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
    path(
        "services/<str:vin>/",
        api_cancel_appointment,
        name="api_cancel_appointment",
    ),
    path(
        "services/<str:vin>/",
        api_finish_appointment,
        name="api_finish_appointment",
    ),
    path(
        "services/<str:vin>/",
        api_history_view,
        name="api_history_view",
    ),
   

]
