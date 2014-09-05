RPG = {}

RPG.Rect = class Rect
  constructor: (x = 0, y = 0, width = 0, height = 0) ->
    @x = x
    @y = y
    @width = width
    @height = height

RPG.Table = class Table
  constructor: (xs, ys, zs) ->
    @xsize = 1
    @ysize = 1
    @zsize = 1
    @dimensions = 0
    if zs == undefined && ys == undefined
      @xsize = xs
      @dimensions = 1
    else if zs == undefined
      @xsize = xs
      @ysize = ys
      @dimensions = 2
    else
      @xsize = xs
      @ysize = ys
      @zsize = zs
      @dimensions = 3

    @size = @xsize * @ysize * @zsize

    @data = []

    @refresh_data()

  refresh_data: ->
    @data = []

    for i in [0...@size]
      @data[i] = 0

  get: (x, y, z) ->
    switch @dimensions
      when 1
        unless x >= 0 && x < @xsize
          return 0
        @data[x]
      when 2
        unless (x >= 0 && x < @xsize) && (y >= 0 && y < @ysize)
          return 0
        @data[x + y * @xsize]
      when 3
        unless (x >= 0 && x < @xsize) && (y >= 0 && y < @ysize) && (z >= 0 && z < @zsize)
          return 0
        @data[x + y * @xsize + z * @ysize]

  set: (x, y, z, w) ->
    switch @dimensions
      when 1
        unless x >= 0 && x < @xsize
          return 0
        @data[x] = y
      when 2
        unless (x >= 0 && x < @xsize) && (y >= 0 && y < @ysize)
          return 0
        @data[x + y * @xsize] = z
      when 3
        unless (x >= 0 && x < @xsize) && (y >= 0 && y < @ysize) && (z >= 0 && z < @zsize)
          return 0
        @data[x + y * @xsize + z * @ysize] = w

RPG.Color = class Color
  constructor: (red = 255, green = 255, blue = 255, alpha = 255) ->
    @red = red
    @green = green
    @blue = blue
    @alpha = alpha

RPG.Tone = class Tone
  constructor: (red = 255, green = 255, blue = 255, gray = 255) ->
    @red = red
    @green = green
    @blue = blue
    @gray = gray

RPG.AudioFile = class AudioFile
  constructor: (name = '', volume = 100, pitch = 100) ->
    @name = name
    @volume = volume
    @pitch = pitch

RPG.BGM = class BGM extends AudioFile
RPG.BGS = class BGS extends AudioFile
RPG.ME = class ME extends AudioFile
RPG.SE = class SE extends AudioFile

RPG.BaseItem = class BaseItem
  constructor: ->
    @id = 0
    @name = ''
    @icon_index = 0
    @description = ''
    @features = []
    @note = ''

RPG.BaseItem.Feature = class Feature
  constructor: (code = 0, data_id = 0, value = 0) ->
    @code = code
    @data_id = data_id
    @value = value

RPG.Actor = class Actor extends BaseItem
  constructor: ->
    super()
    @nickname = ''
    @class_id = 1
    @initial_level = 1
    @max_level = 99
    @character_name = ''
    @character_index = 0
    @face_name = ''
    @face_index = 0
    @equips = [0,0,0,0,0]

RPG.Class = class Class extends BaseItem
  constructor: ->
    super()
    @exp_params = [30,20,30,30]
    @params = new RPG.Table(8, 100)

    for i in [1..99]
      @params.set(0, i, 400+i*50)
      @params.set(1, i, 80+i*10)

      for j in [2..5]
        @params.set(j, i, 15+i*5/4)

      for j in [6..7]
        @params.set(j, i, 30+i*5/2)

    @learnings = []

    @features.push(new RPG.BaseItem.Feature(23, 0, 1))
    @features.push(new RPG.BaseItem.Feature(22, 0, 0.95))
    @features.push(new RPG.BaseItem.Feature(22, 1, 0.05))
    @features.push(new RPG.BaseItem.Feature(22, 2, 0.04))
    @features.push(new RPG.BaseItem.Feature(41, 1))
    @features.push(new RPG.BaseItem.Feature(51, 1))
    @features.push(new RPG.BaseItem.Feature(52, 1))

RPG.Class.Learning = class Learning
  constructor: ->
    @level = 1
    @skill_id = 1
    @note = ''

RPG.UsableItem = class UsableItem extends BaseItem
  constructor: ->
    super()
    @scope = 0
    @occasion = 0
    @speed = 0
    @success_rate = 100
    @repeats = 1
    @tp_gain = 0
    @hit_type = 0
    @animation_id = 0
    @damage = new RPG.UsableItem.Damage
    @effects = []

RPG.UsableItem.Damage = class Damage
  constructor: ->
    @type = 0
    @element_id = 0
    @formula = '0'
    @variance = 20
    @critical = false

RPG.UsableItem.Effect = class Effect
  constructor: (code = 0, data_id = 0, value1 = 0, value2 = 0) ->
    @code = code
    @data_id = data_id
    @value1 = value1
    @value2 = value2

RPG.Skill = class Skill extends UsableItem
  constructor: ->
    super()
    @scope = 1
    @stype_id = 1
    @mp_cost = 0
    @tp_cost = 0
    @message1 = ''
    @message2 = ''
    @required_wtype_id1 = 0
    @required_wtype_id2 = 0

RPG.Item = class Item extends UsableItem
  constructor: ->
    super()
    @scope = 7
    @itype_id = 1
    @price = 0
    @consumable = true

RPG.EquipItem = class EquipItem extends BaseItem
  constructor: ->
    super()
    @price = 0
    @etype_id = 0
    @params = [0, 0, 0, 0, 0, 0, 0, 0]

RPG.Weapon = class Weapon extends EquipItem
  constructor: ->
    super()
    @wtype_id = 0
    @animation_id = 0
    @features.push(new RPG.BaseItem.Feature(31, 1, 0))
    @features.push(new RPG.BaseItem.Feature(22, 0, 0))

RPG.Armor = class Armor extends EquipItem
  constructor: ->
    super()
    @atype_id = 0
    @etype_id = 1
    @features.push(new RPG.BaseItem.Feature(22, 1, 0))

RPG.Enemy = class Enemy extends BaseItem
  constructor: ->
    super()
    @battler_name = ''
    @battler_hue = 0
    @params = [100,0,10,10,10,10,10,10]
    @exp = 0
    @gold = 0
    @drop_items = [
      new RPG.Enemy.DropItem,
      new RPG.Enemy.DropItem,
      new RPG.Enemy.DropItem,
    ]
    @actions = [new RPG.Enemy.Action]
    @features.push(new RPG.BaseItem.Feature(22, 0, 0.95))
    @features.push(new RPG.BaseItem.Feature(22, 1, 0.05))
    @features.push(new RPG.BaseItem.Feature(31, 1, 0))

RPG.Enemy.Action = class Action
  constructor: ->
    @skill_id = 1
    @condition_type = 0
    @condition_param1 = 0
    @condition_param2 = 0
    @rating = 5

RPG.Enemy.DropItem = class DropItem
  constructor: ->
    @kind = 0
    @data_id = 1
    @denominator = 1

RPG.Troop = class Troop
  constructor: ->
    @id = 0
    @name = ''
    @members = []
    @pages = [new RPG.Troop.Page]

RPG.Troop.Member = class Member
  constructor: ->
    @enemy_id = 1
    @x = 0
    @y = 0
    @hidden = false

RPG.Troop.Page = class Page
  constructor: ->
    @condition = new RPG.Troop.Page.Condition
    @span = 0
    @list = [new RPG.EventCommand]

RPG.Troop.Page.Condition = class Condition
  constructor: ->
    @turn_ending = false
    @turn_valid = false
    @enemy_valid = false
    @actor_valid = false
    @switch_valid = false
    @turn_a = 0
    @turn_b = 0
    @enemy_index = 0
    @enemy_hp = 50
    @actor_id = 1
    @actor_hp = 50
    @switch_id = 1

RPG.CommonEvent = class CommonEvent
  constructor: ->
    @id = 0
    @name = ''
    @trigger = 0
    @switch_id = 1
    @list = [new RPG.EventCommand]

RPG.EventCommand = class EventCommand
  constructor: (code = 0, indent = 0, parameters = []) ->
    @code = code
    @indent = indent
    @parameters = parameters

RPG.Animation = class Animation
  constructor: ->
    @id = 0
    @name = ''
    @animation1_name = ''
    @animation1_hue = 0
    @animation2_name = ''
    @animation2_hue = 0
    @position = 1
    @frame_max = 1
    @frames = [new RPG.Animation.Frame]
    @timings = []

RPG.Animation.Frame = class Frame
  constructor: ->
    @cell_max = 0
    @cell_data = new RPG.Table(0, 0)

RPG.Animation.Timing = class Timing
  constructor: ->
    @frame = 0
    @se = new RPG.SE('', 80)
    @flash_scope = 0
    @flash_color = new RPG.Color(255,255,255,255)
    @flash_duration = 5

RPG.System = class System
  constructor: ->
    @game_title = ''
    @version_id = 0
    @japanese = false
    @party_members = [1]
    @currency_unit = ''
    @elements = [null, '']
    @skill_types = [null, '']
    @weapon_types = [null, '']
    @armor_types = [null, '']
    @switches = [null, '']
    @variables = [null, '']
    @boat = new RPG.System.Vehicle
    @ship = new RPG.System.Vehicle
    @airship = new RPG.System.Vehicle
    @title1_name = ''
    @title2_name = ''
    @opt_draw_title = true
    @opt_use_midi = false
    @opt_transparent = false
    @opt_followers = true
    @opt_slip_death = false
    @opt_floor_death = false
    @opt_display_tp = true
    @opt_extra_exp = false
    @window_tone = new RPG.Tone(0,0,0)
    @title_bgm = new RPG.BGM
    @battle_bgm = new RPG.BGM
    @battle_end_me = new RPG.ME
    @gameover_me = new RPG.ME
    @sounds = []
    for i in [0...24]
      @sounds.push(new RPG.SE)
    @test_battlers = []
    @test_troop_id = 1
    @start_map_id = 1
    @start_x = 0
    @start_y = 0
    @terms = new RPG.System.Terms
    @battleback1_name = ''
    @battleback2_name = ''
    @battler_name = ''
    @battler_hue = 0
    @edit_map_id = 1

RPG.System.Vehicle = class Vehicle
  constructor: ->
    @character_name = ''
    @character_index = 0
    @bgm = new RPG.BGM
    @start_map_id = 0
    @start_x = 0
    @start_y = 0

RPG.System.Terms = class Terms
  constructor: ->
    @basic = []
    for i in [0...8]
      @basic.push('')
    @params = []
    for i in [0...8]
      @params.push('')
    @etypes = []
    for i in [0...5]
      @etypes.push('')
    @commands = []
    for i in [0...23]
      @commands.push('')

RPG.System.TestBattler = class TestBattler
  constructor: ->
    @actor_id = 1
    @level = 1
    @equips = [0,0,0,0,0]

RPG.State = class State extends BaseItem
  constructor: ->
    super()
    @restriction = 0
    @priority = 50
    @remove_at_battle_end = false
    @remove_by_restriction = false
    @auto_removal_timing = 0
    @min_turns = 1
    @max_turns = 1
    @remove_by_damage = false
    @chance_by_damage = 100
    @remove_by_walking = false
    @steps_to_remove = 100
    @message1 = ''
    @message2 = ''
    @message3 = ''
    @message4 = ''

window.RPG = RPG
