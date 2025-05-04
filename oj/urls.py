from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name = "index"),
    path('login', views.login_view, name = "login"),
    path('register', views.register, name = "register"),
    path('logout', views.logout_view, name="logout"),
    path('submit', views.submit, name="submit"),
    path('problems', views.problems, name="problems"),
    path('solve/<int:problem_id>', views.solve, name="solve"),
    path('profile', views.profile, name="profile"),
    path('task', views.task, name = "task"),
    path('comingsoon', views.comingsoon, name="comingsoon"),
    path('evaluate', views.evaluate_code, name="evaluate")
]