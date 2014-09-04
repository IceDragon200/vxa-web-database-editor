App = Ember.Application.create()

App.Store = DS.Store.extend
  revision: 11

###
# Models
###
attr = DS.attr
hasMany = DS.hasMany

App.Color = DS.Model.extend
  red: attr('number')
  green: attr('number')
  blue: attr('number')
  alpha: attr('number')

App.Tone = DS.Model.extend
  red: attr('number')
  green: attr('number')
  blue: attr('number')
  gray: attr('number')

App.Table = DS.Model.extend
  dimensions: attr('number')
  xsize: attr('number')
  ysize: attr('number')
  zsize: attr('number')
  size: attr('number')
  data: hasMany('number')

App.Feature = DS.Model.extend
  code: attr('number')
  data_id: attr('number')
  value: attr('number')

App.Actor = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  nickname: attr('string')
  class_id: attr('number')
  initial_level: attr('number')
  max_level: attr('number')
  character_name: attr('string')
  character_index: attr('number')
  face_name: attr('string')
  face_index: attr('number')
  equips: hasMany('number')

App.Learning = DS.Model.extend
  level: attr('number')
  skill_id: attr('number')
  note: attr('string')

App.Class = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  exp_params: hasMany('number')
  params: attr('table')
  learnings: hasMany('learning')

App.Effect = DS.Model.extend
  code: attr('number')
  data_id: attr('number')
  value1: attr('number')
  value2: attr('number')

App.Damage = DS.Model.extend
  type: attr('number')
  element_id: attr('number')
  formula: attr('string')
  variance: attr('number')
  critical: attr('bool')

App.Item = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  scope: attr('number')
  occasion: attr('number')
  speed: attr('number')
  success_rate: attr('number')
  repeats: attr('number')
  tp_gain: attr('number')
  hit_type: attr('number')
  animation_id: attr('number')
  damage: attr('damage')
  effects: hasMany('effect')

  itype_id: attr('number')
  price: attr('number')
  consumable: attr('number')

App.Skill = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  scope: attr('number')
  occasion: attr('number')
  speed: attr('number')
  success_rate: attr('number')
  repeats: attr('number')
  tp_gain: attr('number')
  hit_type: attr('number')
  animation_id: attr('number')
  damage: attr('damage')
  effects: hasMany('effect')

  stype_id: attr('number')
  mp_cost: attr('number')
  tp_cost: attr('number')
  message1: attr('string')
  message2: attr('string')
  required_wtype_id1: attr('number')
  required_wtype_id2: attr('number')

App.Weapon = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  price: attr('number')
  etype_id: attr('number')
  params: hasMany('number')

  wtype_id: attr('number')
  animation_id: attr('number')

App.Armor = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  price: attr('number')
  etype_id: attr('number')
  params: hasMany('number')

  atype_id: attr('number')

App.DropItem = DS.Model.extend
  kind: attr('number')
  data_id: attr('number')
  denominator: attr('number')

App.Action = DS.Model.extend
  skill_id: attr('number')
  condition_type: attr('number')
  condition_param1: attr('number')
  condition_param2: attr('number')
  rating: attr('number')

App.Enemy = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  battler_name: attr('string')
  battler_hue: attr('number')
  params: hasMany('number')
  exp: attr('number')
  gold: attr('number')
  drop_items: hasMany('dropItem')
  actions: hasMany('action')

App.State = DS.Model.extend
  id: attr('number')
  name: attr('string')
  icon_index: attr('number')
  description: attr('string')
  features: hasMany('feature')
  note: attr('string')

  restriction: attr('number')
  priority: attr('number')
  remove_at_battle_end: attr('bool')
  remove_by_restriction: attr('bool')
  auto_removal_timing: attr('number')
  min_turns: attr('number')
  max_turns: attr('number')
  remove_by_damage: attr('bool')
  chance_by_damage: attr('number')
  remove_by_walking: attr('bool')
  steps_to_remove: attr('number')
  message1: attr('string')
  message2: attr('string')
  message3: attr('string')
  message4: attr('string')

###
# Routes
###
App.Router.map ->
  @route 'actors', { path: "/actors" }
  @route 'classes', { path: "/classes" }
  @route 'skills', { path: "/skills" }
  @route 'items', { path: "/items" }
  @route 'weapons', { path: "/weapons" }
  @route 'armors', { path: "/armors" }
  @route 'enemies', { path: "/enemies" }
  @route 'troops', { path: "/troops" }
  @route 'states', { path: "/states" }
  @route 'animations', { path: "/animations" }
  @route 'tilesets', { path: "/tilesets" }
  @route 'common_events', { path: "/common_events" }
  @route 'system', { path: "/system" }
  @route 'terms', { path: "/terms" }


App.ActorsController = Ember.Controller.extend
  actions: {

  }
