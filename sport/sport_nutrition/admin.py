from django.contrib import admin
from .models import *
# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Product._meta.fields]
    prepopulated_fields = {'slug': ('title',)}

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    list_display_links = ['name']
    prepopulated_fields = {'slug': ('name',)}


class CartProductAdmin(admin.ModelAdmin):
    list_display = [field.name for field in CartProduct._meta.fields]


class CartAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Cart._meta.fields]


class CustomerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Customer._meta.fields]


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(CartProduct, CartProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Customer, CustomerAdmin)