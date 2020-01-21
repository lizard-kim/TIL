from django.contrib import admin
from django.urls import path, include
import myapp.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(myapp.urls)),
    #path('jet_api/', include('jet_django.urls')),
]
