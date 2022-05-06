from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.search import index
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):

    # database fields
    body = RichTextField()
    extra_info = RichTextField()

    # search index config
    search_fields = Page.search_fields + [
        index.SearchField('body'),
        index.SearchField('extra_info'),
    ]

    # editor panels config
    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
        FieldPanel('extra_info', classname="extra_info"),
    ]