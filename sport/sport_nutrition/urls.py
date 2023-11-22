from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', base, name = 'base'),
    path('category/<slug:slug>', get_category, name = 'product_category'),
    path('product/<slug:slug>', ProductDetail.as_view(), name = 'product_detail'),
    path('favorite', Favorite.as_view(), name = 'favorite'),
    path('brands', Brands.as_view(), name = 'brands'),
    path('brand_profile', BrandProfile.as_view(), name = 'brand_profile'),
    path('brand_page', BrandPage.as_view(), name = 'brand_page'),
    path('basket', Basket.as_view(), name = 'basket'),
    path('catalog', Catalog.as_view(), name = 'catalog'),
    path('product', ProductDetail.as_view(), name = 'product'),
    path('support', Support.as_view(), name = 'support'),
]