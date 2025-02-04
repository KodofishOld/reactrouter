from django.contrib import admin
from django.urls import *

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('articles.api.urls'))
]
