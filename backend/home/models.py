from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel

from rest_framework import fields
from wagtail.api import APIField

import requests

class ChildrenSerializer(fields.Field):
    def to_representation(self, value):
        retval = []
        for item in value:
            retval.append({
                              'id': item.id,
                              'title': item.title,
                              'body': item.body,
                          })
        return retval


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]

    @property
    def get_child_pages(self):
        return self.get_children().specific().public().live()

    api_fields = [
        APIField('cards', serializer=ChildrenSerializer(source='get_child_pages'))
    ]

    def save(self, clean=True, user=None, log_action=False, **kwargs):
        try:
            return super().save(clean, user, log_action, **kwargs)
        finally:
            r = requests.get('http://localhost:3000/api/revalidate?secret=123')
            print(r.json())
