# Generated by Django 4.2.5 on 2023-09-29 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sport_nutrition', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='existence',
            field=models.BooleanField(default=True, verbose_name='В наличии'),
        ),
        migrations.DeleteModel(
            name='Specification',
        ),
    ]