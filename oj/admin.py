from django.contrib import admin
from .models import Problems, Testcase
# Register your models here.
class TestcaseInline(admin.TabularInline):
    model = Testcase
    extra = 1
@admin.register(Problems)
class ProblemsAdmin(admin.ModelAdmin):
    list_display = ('name', 'difficulty_levels',)
    list_filter = ('difficulty_levels',)
    search_fields = ('name', )
    ordering = ('name', )
    inlines = [TestcaseInline]


admin.site.register(Testcase)
