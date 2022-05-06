from wagtail.core import hooks
from wagtail.admin.rich_text.converters.html_to_contentstate import BlockElementHandler
import wagtail.admin.rich_text.editors.draftail.features as draftail_features

@hooks.register('register_rich_text_features')
def register_note_feature(features):
  feature_name = 'note1'
  type_ = 'note1'

  control = {
    'type': type_,
    'label': 'note1',
    'description': 'note',
    'element': 'div'
  }

  features.register_editor_plugin(
    'draftail', feature_name, draftail_features.BlockFeature(control, css={'all': ['style.css']})
  )

  features.register_converter_rule('contentstate', feature_name, {
    'from_database_format': {'div[class=cube1, id=cube1]': BlockElementHandler(type_)},
    'to_database_format': {'block_map': {type_: {'element': 'div', 'props': {'class': 'cube1', 'id':'cube1'}}}},
  })

  features.default_features.append('note1')


@hooks.register('register_rich_text_features')
def register_note_feature(features):
  feature_name = 'note2'
  type_ = 'note2'

  control = {
    'type': type_,
    'label': 'note2',
    'description': 'note',
    'element': 'div'
  }

  features.register_editor_plugin(
    'draftail', feature_name, draftail_features.BlockFeature(control, css={'all': ['style.css']})
  )

  features.register_converter_rule('contentstate', feature_name, {
    'from_database_format': {'div[class=cube2]': BlockElementHandler(type_)},
    'to_database_format': {'block_map': {type_: {'element': 'div', 'props': {'class': 'cube2'}}}},
  })

  features.default_features.append('note2')

@hooks.register('register_rich_text_features')
def register_note_feature(features):
  feature_name = 'note3'
  type_ = 'note3'

  control = {
    'type': type_,
    'label': 'note3',
    'description': 'note',
    'element': 'div'
  }

  features.register_editor_plugin(
    'draftail', feature_name, draftail_features.BlockFeature(control, css={'all': ['style.css']})
  )

  features.register_converter_rule('contentstate', feature_name, {
    'from_database_format': {'div[class=cube3]': BlockElementHandler(type_)},
    'to_database_format': {'block_map': {type_: {'element': 'div', 'props': {'class': 'cube3'}}}},
  })

  features.default_features.append('note3')

@hooks.register('register_rich_text_features')
def register_note_feature(features):
  feature_name = 'space'
  type_ = 'space'

  control = {
    'type': type_,
    'label': 'space',
    'description': 'layout tool',
    'element': 'div'
  }

  features.register_editor_plugin(
    'draftail', feature_name, draftail_features.BlockFeature(control, css={'all': ['style.css']})
  )

  features.register_converter_rule('contentstate', feature_name, {
    'from_database_format': {'div[class=space]': BlockElementHandler(type_)},
    'to_database_format': {'block_map': {type_: {'element': 'div', 'props': {'class': 'space'}}}},
  })

  features.default_features.append('space')