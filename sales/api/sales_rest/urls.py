from django.urls import path, include

from .api_views import(
    api_sales_person,
    api_sale_records,
    api_sales_person_detail,
    api_customer
)

urlpatterns = [
    path('salesperson/', api_sales_person, name='api_sales_person'),
    path('salesperson/<int:pk>/', api_sales_person_detail, name='api_sales_person'),
    path('salesrecord/', api_sale_records, name='api_sale_records' ),
    # path('salesrecord/<int:pk>/', api_sale_records, name='api_sale_records' )
    path('customers/', api_customer, name='api_customer' ),

]