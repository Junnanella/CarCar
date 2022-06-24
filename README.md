# CarCar

## Team

- **Wilson** - Sales microservice Lead
  - Sales Backend All
  - Frontend: SalesRecordForm, SalesHistory
- **Yehsun** - Services microservice Lead
  - Sevices Backend All
  - Frontend: AppointmentForm, AppointmentList, ServiceHistory
- **Junella** - Frontend Lead
  - Frontend
    - Inventory: All
    - Sales frontend: SalesPersonForm, CustomerForm
    - Service frontend: TechnicianForm
    - Navbar design
  - Backend - Assist with troubleshooting

## System diagram

![architecture diagram](docs/system_design_diagram.png)

## Design

### Service microservice

Explain your models and integration with the inventory microservice, here:

Models ([Source file](./service/api/service_rest/models.py))

Based on [LEARN requirements and screenshots](https://learn-2.galvanize.com/cohorts/3283/blocks/1890/content_files/build/01-practice-test-project/67-assessment-project.md) each property in the models are mapped to a column of the screenshots.

🌼🌼🌼 For the AutomobileVO, I used the pattern of having an `import_href` property based on previous class projects. The property of
`vip` is not noted in the front-end screenshots from LEARN, but was added due to the requirement of knowing if the automobile was purchased from the delearship or not. null=True

```python
class AutomobileVO(models.Model):
    import_href= models.CharField(unique= True, max_length=200)
    vin = models.CharField(unique=True,max_length=200)
    color = models.CharField(null= True, max_length=200)
    year = models.IntegerField(null=True)
    model = models.CharField(null=True, max_length=200)
    vip = models.BooleanField (default=True)
```

Per [specification](https://learn-2.galvanize.com/cohorts/3283/blocks/1890/content_files/build/01-practice-test-project/67-assessment-project.md) in the `Enter a Technician` section, I gave Technicians a name
and employee number. 🌼🌼🌼 I chose integer for the employee number, assuming it'll
always be a number and not start off with zeroes (eg. `00123`).

```python
class Technician(models.Model):
    name = models.CharField(max_length=200, unique=True)
    employee_number = models.IntegerField(unique=True, null=True)
```

Per [specification](https://learn-2.galvanize.com/cohorts/3283/blocks/1890/content_files/build/01-practice-test-project/67-assessment-project.md) from the `List of Appointments` section, 🌼🌼🌼 I built a Status model to note whether an automobile service is currently "Scheduled", "Finished", or has been "Canceled". In the next section of this README, you will see the Status is connected to the Service model via a ForeignKey, as a Status can have many Services, but a Service can only have one Status at a time.

```python
class Status(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
```

Per [specification](https://learn-2.galvanize.com/cohorts/3283/blocks/1890/content_files/build/01-practice-test-project/67-assessment-project.md) in the `Enter a Service Appointment` section, 🌼🌼🌼 I have created properties needed for the concierge. I made `vin` have a character field, and not an integer because a VIN will need to include alphabet characters. `Date` and `Time` are separate properties for clear separation in terms of the database columns. There is a ForeignKey connection with `Technician` under the assumption that a Technician can have many Services, but a Service instance will only be worked on by one Technician. The `on_delete` is set to PROTECT so that if the technician is removed from the system, the history of the service is still available. The methods `cancel`, `finish` are linked to the Status but within this service model because we want to be able to update the status for a specific instance of Service and it seems more logical to handle that within the instance of the model on the many side of the one-to-many relationship.

```python
class Service(models.Model):
    vin = models.CharField(unique=True,max_length=200)
    customer_name = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    time = models.DateTimeField(auto_now_add=True)
    technician = models.ForeignKey(
        Technician,
        related_name="services",
        on_delete=models.PROTECT
        )
    reason = models.CharField(max_length=200)
    status = models.ForeignKey(
        Status,
        null= True,
        related_name="services",
        on_delete=models.PROTECT,
        default=1,
        )

    def cancel(self):
        status= Status.object.get(name="cancelled")
        self.status= status
        self.save()

    def finish(self):
        status= Status.object.get(name="finished")
        self.status= status
        self.save()

    def get_api_url(self):
        return reverse("api_list_services", kwargs={"pk": self.vin})

    def __str__(self):
        return self.vin

    class Meta:
        verbose_name_plural = "Services"


    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="Scheduled")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment
```

### Integration with inventory micro-service

Every 60 seconds, the services-poller polls for automobiles from inventory API
via the `GET` method to poll from `/"http://inventory-api:8000/api/automobiles/"` URL. It then converts that into an AutomobileVO and
stores it in the database. ([Source file](./service/api/service_rest/poller.py))

### Sales microservice

Explain your models and integration with the inventory
microservice, here.

### How Automobiles are presented in each bounded context
