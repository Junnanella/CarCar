from django.contrib import admin

# Register your models here.
<<<<<<< HEAD


from .models import Service,Technician, Status

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass

@admin.register(Technician)
class Techniciandmin(admin.ModelAdmin):
    pass
@admin.register(Status)
class Statusdmin(admin.ModelAdmin):
    pass

=======
from .models import 
>>>>>>> main
