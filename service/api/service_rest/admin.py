from django.contrib import admin

# Register your models here.


from .models import Service,AutomobileVO, Technician

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass
@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass
@admin.register(Technician)
class Techniciandmin(admin.ModelAdmin):
    pass
