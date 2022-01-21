from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from .settings import REACT_ROUTES

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

urlpatterns += [

    re_path(r'^(%s)?$' % '|'.join(REACT_ROUTES), TemplateView.as_view(template_name='index.html'))
]

handler404 = "backend.views.page_not_found_view"
