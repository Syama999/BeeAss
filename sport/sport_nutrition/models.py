from django.db import models
from django.contrib.auth import get_user_model# А если просто импортировать модель Юзера?
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.urls import reverse

User = get_user_model()
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200, verbose_name='Наименование категории')
    slug = models.SlugField(max_length=200, verbose_name="URL", db_index = True, unique = True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('product_category', kwargs={'slug':self.slug})


class Product(models.Model):
    category = models.ForeignKey(Category, verbose_name = 'Категория', on_delete = models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Наименование')
    slug = models.SlugField(max_length=200, verbose_name = 'URL', db_index=True, unique = True )
    description = models.TextField(null = True, verbose_name = 'Описание')
    image = models.ImageField(verbose_name='Изображение')
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Цена')
    existence = models.BooleanField(default=True, verbose_name='В наличии')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('product_detail', kwargs={'slug':self.slug})

class CartProduct(models.Model):
    user = models. ForeignKey('Customer',verbose_name='Покупатель', on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', verbose_name='Корзина', on_delete=models.CASCADE, related_name='related_products') #бордюр
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null = True)
    object_id = models.PositiveIntegerField(null = True)
    content_object = GenericForeignKey('content_type', 'object_id')
    quantity = models.PositiveIntegerField(default = 1)
    final_price = models.DecimalField(max_digits=10, decimal_places = 2, verbose_name='Общая цена')

    def __str__(self):
        return 'Продукт: {} (для корзины)'.format(self.content_object.title)#не знаю че это но прикольно


class Cart(models.Model):
    owner = models.ForeignKey('Customer', verbose_name='Владелец', on_delete=models.CASCADE)
    products = models.ManyToManyField(CartProduct, blank = True, related_name='related_cart')
    final_price = models.DecimalField(max_digits=10, decimal_places = 2, verbose_name='Общая цена')
    total_products = models.PositiveIntegerField(default =0)
    in_order = models.BooleanField(default=False)
    for_anonymous_user = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)


class Customer(models.Model):
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20,verbose_name='Номер телефона')
    address = models.CharField(max_length=200, verbose_name='Адрес')

    def __str__(self):
        return 'Пользователь: {} {}'.format(self.user.first_name, self.user.last_name)

