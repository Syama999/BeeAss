from django.shortcuts import render
from django.views.generic import DetailView, ListView, CreateView, View
from .models import *

# Create your views here.
def base(request):
    r = Product.objects.all()
    b = Category.objects.all()
    # customer = Customer.objects.get(user = request.user)
    # cart = Cart.objects.get(owner = customer)
    return render(request, 'sport_nutrition/index.html', {'r':r, 'b': b})

def get_category(request, slug):
    product = Product.objects.filter(category__slug = slug) # наконец-то ааааааааааааааааааааааа
    get_cat = Category.objects.all()
    return render(request,'sport_nutrition/product_category.html', {'product' : product, 'get_cat':get_cat })
# class ProductCategory(ListView):
#     template_name = 'sport_nutrition/product_category.html'
#     # a = Product.objects.filter(category__slug = sel
#     context_object_name = 'product'
#
#
#     def get_queryset(self):
#         return Product.objects.all().select_related('category')
#         # return Category.objects.all()
#         # return Product.objects.filter(category__slug = self.kwargs['slug']) #надо будет разобраться
#
#     # def get_context_data(self, *, object_list=None, **kwargs):
#     #     context = super().get_context_data(**kwargs)
#     #     context['title'] = Category.objects.get(slug = self.kwargs['slug'])
#     #     return context


class ProductDetail(DetailView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/product.html'
    extra_context = {'b': Category.objects.all()}


class Favorite(ListView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/favorite.html'

class Brands(ListView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/brands.html'

class BrandProfile(ListView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/brand_profile.html'


class BrandPage(ListView):
    model = Product             # здесь надо будет переделать на ДитейлВью
    context_object_name = 'product'
    template_name = 'sport_nutrition/brand_page.html'

class Basket(ListView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/basket.html'
    # def get(self, request, *args, **kwargs):
    #     customer = Customer.objects.get(user=request.user)
    #     cart = Cart.objects.get(owner=customer)
    #     return render(request, 'sport_nutrition/index.html', {'customer': customer, 'cart': cart})

class Catalog(ListView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/catalog.html'
    extra_context = {'creatine': Product.objects.filter(category__name = 'Креатин'), 'geiner': Product.objects.filter(category__name = 'Гейнер'), 'aminokisloty' : Product.objects.filter(category__name = 'Аминокислоты'), 'protein': Product.objects.filter(category__name = 'Протеины')}



# class Productd(ListView): #здесь тоже на дитеил вью надо переделать
#     model = Product
#     context_object_name = 'product'
#     template_name = 'sport_nutrition/product.html'



class Support(ListView):
    model = Product
    context_object_name = 'product'
    template_name = 'sport_nutrition/support.html'




# <div class="catalog-items">
#             <div class="catalog-item categorie-item-muscles">
#                 <img src="{% static 'SportPit-master/assets/img/catalog/muscles/citrullin.webp'%}" alt="">
#                 <div class="catalog-item-info">
#                     <p>Citrullin<br>GLS</p>
#                     <p><span>1500</span>₽</p>
#                 </div>
#                 <form class="hover-items">
#                     <div class="add-to-cart__button"><a href="">В корзину</a></div>
#                     <div class="view__button"><a href="/product.html">Просмотр</a></div>
#                 </form>
#             </div>