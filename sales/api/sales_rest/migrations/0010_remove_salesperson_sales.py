# Generated by Django 4.0.3 on 2022-06-21 16:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0009_rename_automobilevin_salesrecord_automobile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='salesperson',
            name='sales',
        ),
    ]