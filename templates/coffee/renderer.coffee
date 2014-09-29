class DatabaseRenderer
  page_symbol: ->
    if $("#home-page").length > 0
      "home"
    else if $("#actor-page").length > 0
      "actor"
    else if $("#class-page").length > 0
      "class"
    else if $("#skill-page").length > 0
      "skill"
    else if $("#item-page").length > 0
      "item"
    else if $("#weapon-page").length > 0
      "weapon"
    else if $("#armor-page").length > 0
      "armor"
    else if $("#enemy-page").length > 0
      "enemy"
    else if $("#troop-page").length > 0
      "troop"
    else if $("#state-page").length > 0
      "state"
    else if $("#animation-page").length > 0
      "animation"
    else if $("#system-page").length > 0
      "system"
    else if $("#terms-page").length > 0
      "terms"
    else
      ""

  make_removable_button_element: ->
    $("<button></button>").addClass(".removable").text("-")

  make_addable_button_element: ->
    $("<button></button>").addClass(".addable").text("+")

  make_base_item_feature_element: (feature) ->
    unless feature
      feature =
        code: "--"
        value: "--"

    elem = $("<tr></tr>").addClass("feature")
    elem.append($("<td></td>").append(@make_removable_button_element()))
    elem.append($("<td></td>").text(feature.code))
    elem.append($("<td></td>").text(feature.value))
    elem

  make_base_item_feature_add_element: ->
    elem = $("<tr></tr>").addClass("feature").addClass("add")
    elem.append($("<td></td>").append(@make_addable_button_element()))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem

  make_usable_item_effect_element: (effect) ->
    unless effect
      effect =
        code: "--"
        value1: "--"

    elem = $("<tr></tr>").addClass("effect")
    elem.append($("<td></td>").append(@make_removable_button_element()))
    elem.append($("<td></td>").text(effect.code))
    elem.append($("<td></td>").text(effect.value1))
    elem

  make_usable_item_effect_add_element: ->
    elem = $("<tr></tr>").addClass("effect").addClass("add")
    elem.append($("<td></td>").append(@make_addable_button_element()))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem

  make_class_learning_element: (learning) ->
    unless learning
      learning =
        level: "--"
        skill_id: "--"
        note: "--"

    level = $("<input type=\"number\" class=\"clean\"></input>").val(learning.level)
    skillid = $("<input class=\"clean\"></input>").val(learning.skill_id)
    note = $("<input type=\"text\" class=\"clean\"></input>").val(learning.note)

    elem = $("<tr></tr>").addClass("learning")
    elem.append($("<td></td>").append(@make_removable_button_element()))
    elem.append($("<td></td>").append(level))
    elem.append($("<td></td>").append(skillid))
    elem.append($("<td></td>").append(note))
    elem

  make_class_learning_add_element: ->
    elem = $("<tr></tr>").addClass("learning").addClass("add")
    elem.append($("<td></td>").append(@make_addable_button_element()))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem

  make_enemy_action_element: (action) ->
    unless action
      action =
        skill_id: "--"
        condition_type: "--"
        condition_param1: "--"
        condition_param2: "--"
        rating: "--"

    skill = $("<input type=\"number\" class=\"clean\"></input>").val(action.skill_id)
    condition = $("<input class=\"clean\"></input>").val(action.condition_type)
    rating = $("<input type=\"number\" class=\"clean\"></input>").val(action.rating)

    elem = $("<tr></tr>").addClass("action")
    elem.append($("<td></td>").append(@make_removable_button_element()))
    elem.append($("<td></td>").append(skill))
    elem.append($("<td></td>").append(condition))
    elem.append($("<td></td>").append(rating))
    elem

  make_enemy_action_add_element: ->
    elem = $("<tr></tr>").addClass("action").addClass("add")
    elem.append($("<td></td>").append(@make_addable_button_element()))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem

  make_animation_timing_element: (timing) ->
    unless timing
      timing =
        frame: "--"
        se:
          name: "--"
        flash_color: new RPG.Color
        flash_scope: 0
        flash_duration: 0

    flcolor = timing.flash_color
    color_string = "#{flcolor.red}, #{flcolor.green}, #{flcolor.blue}, #{flcolor.alpha}"
    flash_string = "#{timing.flash_scope} (#{color_string}), @#{timing.flash_duration}"

    frame = $("<input type=\"number\" class=\"clean\"></input>").val(timing.frame)
    se = $("<input class=\"clean\"></input>").val(timing.se.name)
    flash = $("<input type=\"number\" class=\"clean\"></input>").val(flash_string)

    elem = $("<tr></tr>").addClass("timing")
    elem.append($("<td></td>").append(@make_removable_button_element()))
    elem.append($("<td></td>").append(frame))
    elem.append($("<td></td>").append(se))
    elem.append($("<td></td>").append(flash))
    elem

  make_animation_timing_add_element: ->
    elem = $("<tr></tr>").addClass("timing").addClass("add")
    elem.append($("<td></td>").append(@make_addable_button_element()))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem.append($("<td></td>").text(""))
    elem

  render_select_options: (target, data) ->
    for item, i in data
      id = i
      name = ""
      if item
        id = item.id if item.id
        name = item.name || item

      target.append($("<option></option>").attr("data-id", "#{id}").text("#{id} : #{name}"))

  inject_features: (target, data) ->
    target.empty()

    for feature in data
      target.append(@make_base_item_feature_element(feature))

    target.append(@make_base_item_feature_add_element())

  inject_effects: (target, data) ->
    target.empty()

    for effect in data
      target.append(@make_usable_item_effect_element(effect))

    target.append(@make_usable_item_effect_add_element())

  inject_enemy_actions: (target, data) ->
    target.empty()

    for action in data
      target.append(@make_enemy_action_element(action))

    target.append(@make_enemy_action_element())

  inject_class_learnings: (target, data) ->
    target.empty()

    for learning in data
      target.append(@make_class_learning_element(learning))

    target.append(@make_class_learning_add_element())

  inject_animation_timings: (target, data) ->
    target.empty()

    for timing in data
      target.append(@make_animation_timing_element(timing))

    target.append(@make_animation_timing_add_element())

  inject_animation_frames: (target, data) ->
    target.empty()
    for _, index in data
      target.append($("<option></option>").attr("data-index", "#{index}").text("##{index}"))

  render_base_item: (item) ->
    unless item
      item = new RPG.BaseItem

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")

    general.find("#id").val(item.id)
    general.find("#name").val(item.name)
    general.find("#icon_index").val(item.icon_index)
    general.find("#description").val(item.description)

    @inject_features(features.find("tbody"), item.features)

    notebox.find("#note").text(item.note)

  render_usable_item: (item) ->
    unless item
      item = new RPG.UsableItem

    general = $("#general")
    invocation = $("#invocation")
    damage = $("#damage")
    effects = $("#effects")

    @render_base_item(item)

    general.find("#scope").val(item.scope)
    general.find("#occasion").val(item.occasion)

    invocation.find("#speed").val(item.speed)
    invocation.find("#success_rate").val(item.success_rate)
    invocation.find("#repeats").val(item.repeats)
    invocation.find("#tp_gain").val(item.tp_gain)
    invocation.find("#hit_type").val(item.hit_type)

    damage.find("#damage-formula").val(item.damage.formula)
    damage.find("#damage-variance").val(item.damage.variance)
    damage.find("#damage-critical").val(item.damage.critical)

    @inject_effects(effects.find("tbody"), item.effects)

  render_equip_item: (item) ->
    unless item
      item = new RPG.EquipItem

    general = $("#general")
    parameter_changes = $("#parameter_changes")

    @render_base_item(item)

    general.find("#price").val(item.price)

    for param, i in item.params
      parameter_changes.find("#params-#{i}").val(item.params[i])

  render_actor: (item) ->
    unless item
      item = new RPG.Actor

    console.log "Rendering Actor #{item.id}"

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")
    graphic = $("#graphic")
    equipment = $("#equipment")

    @render_base_item(item)

    general.find("#class_id").val(item.class_id)
    general.find("#nickname").val(item.nickname)
    general.find("#initial_level").val(item.initial_level)
    general.find("#max_level").val(item.max_level)

    graphic.find("#character_name").val(item.character_name)
    graphic.find("#character_index").val(item.character_index)
    graphic.find("#face_name").val(item.face_name)
    graphic.find("#face_index").val(item.face_index)

    equipment.find("#weapon1").val(item.equips[0])
    equipment.find("#weapon2").val(item.equips[1])
    equipment.find("#shield").val(item.equips[1])
    equipment.find("#head").val(item.equips[2])
    equipment.find("#body").val(item.equips[3])
    equipment.find("#accessory").val(item.equips[4])

  render_class: (item) ->
    unless item
      item = new RPG.Class

    console.log "Rendering Class #{item.id}"

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")
    learnings = $("#learnings")

    @render_base_item(item)

    general.find("#exp_params-0").val(item.exp_params[0])
    general.find("#exp_params-1").val(item.exp_params[1])
    general.find("#exp_params-2").val(item.exp_params[2])
    general.find("#exp_params-3").val(item.exp_params[3])

    @inject_class_learnings(learnings.find("tbody"), item.learnings)

  render_skill: (item) ->
    unless item
      item = new RPG.Skill

    console.log "Rendering Skill #{item.id}"

    general = $("#general")
    invocation = $("#invocation")
    using_message = $("#using_message")
    required_weapon = $("#required_weapon")

    @render_usable_item(item)

    general.find("#stype_id").val(item.stype_id)
    general.find("#mp_cost").val(item.mp_cost)
    general.find("#tp_cost").val(item.tp_cost)

    invocation.find("#animation_id").val(item.animation_id)

    using_message.find("#message1").val(item.message1)
    using_message.find("#message2").val(item.message2)

    required_weapon.find("#required_wtype_id1").val(item.required_wtype_id1)
    required_weapon.find("#required_wtype_id2").val(item.required_wtype_id2)

  render_item: (item) ->
    unless item
      item = new RPG.Item

    console.log "Rendering Item #{item.id}"

    general = $("#general")
    notebox = $("#notebox")
    effects = $("#effects")
    damage = $("#damage")

    @render_usable_item(item)

    general.find("#price").val(item.price)
    general.find("#consumable").val(item.consumable)

  render_weapon: (item) ->
    unless item
      item = new RPG.Weapon

    console.log "Rendering Weapon #{item.id}"

    general = $("#general")

    @render_equip_item(item)

    general.find("#wtype_id").val(item.wtype_id)
    general.find("#animation_id").val(item.animation_id)

  render_armor: (item) ->
    unless item
      item = new RPG.Armor

    console.log "Rendering Armor #{item.id}"

    general = $("#general")

    @render_equip_item(item)

    general.find("#atype_id").val(item.atype_id)
    general.find("#etype_id").val(item.etype_id)

  render_enemy: (item) ->
    unless item
      item = new RPG.Enemy

    console.log "Rendering Enemy #{item.id}"

    general = $("#general")
    rewards = $("#rewards")
    features = $("#features")
    actions = $("#actions")

    @render_base_item(item)

    for p, i in item.params
      general.find("#params-#{i}").val(item.params[i])

    rewards.find("#exp").val(item.exp)
    rewards.find("#gold").val(item.gold)

    @inject_enemy_actions(actions.find("tbody"), item.actions)

  render_troop: (item) ->
    unless item
      item = new RPG.Troop

    console.log "Rendering Troop #{item.id}"

    general = $("#general")

    general.find("#name").val(item.name)

  render_state: (item) ->
    unless item
      item = new RPG.State

    console.log "Rendering State #{item.id}"

    general = $("#general")
    removal_conditions = $("#removal_conditions")
    messages = $("#messages")

    @render_base_item(item)

    general.find("#restriction").val(item.restriction)
    general.find("#priority").val(item.priority)

    removal_conditions.find("#remove_at_battle_end").val(item.remove_at_battle_end)
    removal_conditions.find("#remove_by_restriction").val(item.remove_by_restriction)
    removal_conditions.find("#auto_removal_timing").val(item.auto_removal_timing)
    removal_conditions.find("#min_turns").val(item.min_turns)
    removal_conditions.find("#max_turns").val(item.max_turns)
    removal_conditions.find("#remove_by_damage").val(item.remove_by_damage)
    removal_conditions.find("#chance_by_damage").val(item.chance_by_damage)
    removal_conditions.find("#remove_by_walking").val(item.remove_by_walking)
    removal_conditions.find("#steps_to_remove").val(item.steps_to_remove)

    messages.find("#message1").val(item.message1)
    messages.find("#message2").val(item.message2)
    messages.find("#message3").val(item.message3)
    messages.find("#message4").val(item.message4)

  render_animation: (item) ->
    unless item
      item = new RPG.Animation

    console.log "Rendering Animation #{item.id}"

    general = $("#general")
    timing = $("#timing")
    frames = $("#frames")

    general.find("#id").val(item.id)
    general.find("#name").val(item.name)
    general.find("#position").val(item.position)
    general.find("#frame_max").val(item.frame_max)
    general.find("#animation_name1").val(item.animation_name1)
    general.find("#animation_name2").val(item.animation_name2)

    @inject_animation_timings(timing.find("tbody"), item.timings)
    @inject_animation_frames(frames, item.frames)

  render_system: (system) ->
    unless system
      system = new RPG.System

  render_terms: (system) ->
    unless system
      system = new RPG.System

    terms = system.terms
    unless terms
      terms = new RPG.System.Terms

    elements = $("#elements")
    wtypes = $("#wtypes")
    atypes = $("#atypes")
    stypes = $("#stypes")

    basic = $("#basic")
    params = $("#params")
    etypes = $("#etypes")
    commands = $("#commands")

    @render_select_options(elements.find("select#list"), system.elements)
    @render_select_options(wtypes.find("select#list"), system.weapon_types)
    @render_select_options(atypes.find("select#list"), system.armor_types)
    @render_select_options(stypes.find("select#list"), system.skill_types)

    for t, i in terms.basic
      basic.find("#basic-#{i}").val(t)

    for t, i in terms.params
      params.find("#params-#{i}").val(t)

    for t, i in terms.etypes
      etypes.find("#etypes-#{i}").val(t)

    for t, i in terms.commands
      commands.find("#commands-#{i}").val(t)

  render_actor_by_id: (id) ->
    @render_actor DbEditor.actors.get_item(id)

  render_class_by_id: (id) ->
    @render_class DbEditor.classes.get_item(id)

  render_skill_by_id: (id) ->
    @render_skill DbEditor.skills.get_item(id)

  render_item_by_id: (id) ->
    @render_item DbEditor.items.get_item(id)

  render_weapon_by_id: (id) ->
    @render_weapon DbEditor.weapons.get_item(id)

  render_armor_by_id: (id) ->
    @render_armor DbEditor.armors.get_item(id)

  render_enemy_by_id: (id) ->
    @render_enemy DbEditor.enemies.get_item(id)

  render_troop_by_id: (id) ->
    @render_troop DbEditor.troops.get_item(id)

  render_state_by_id: (id) ->
    @render_state DbEditor.states.get_item(id)

  render_animation_by_id: (id) ->
    @render_animation DbEditor.animations.get_item(id)

  render_current_actor: ->
    item = $('#actors select#list').children(':selected')
    @render_actor_by_id(Number(item.attr("data-id")))

  render_current_class: ->
    item = $('#classes select#list').children(':selected')
    @render_class_by_id(Number(item.attr("data-id")))

  render_current_skill: ->
    item = $('#skills select#list').children(':selected')
    @render_skill_by_id(Number(item.attr("data-id")))

  render_current_item: ->
    item = $('#items select#list').children(':selected')
    @render_item_by_id(Number(item.attr("data-id")))

  render_current_weapon: ->
    item = $('#weapons select#list').children(':selected')
    @render_weapon_by_id(Number(item.attr("data-id")))

  render_current_armor: ->
    item = $('#armors select#list').children(':selected')
    @render_armor_by_id(Number(item.attr("data-id")))

  render_current_enemy: ->
    item = $('#enemies select#list').children(':selected')
    @render_enemy_by_id(Number(item.attr("data-id")))

  render_current_troop: ->
    item = $('#troops select#list').children(':selected')
    @render_troop_by_id(Number(item.attr("data-id")))

  render_current_state: ->
    item = $('#states select#list').children(':selected')
    @render_state_by_id(Number(item.attr("data-id")))

  render_current_animation: ->
    item = $('#animations select#list').children(':selected')
    @render_animation_by_id(Number(item.attr("data-id")))

  render_actor_list: ->
    console.log "Rendering Actor List"
    @render_select_options($("#actors select#list"), DbEditor.actors.get_list())

  render_class_list: ->
    console.log "Rendering Class List"
    @render_select_options($("#classes select#list"), DbEditor.classes.get_list())

  render_skill_list: ->
    console.log "Rendering Skill List"
    @render_select_options($("#skills select#list"), DbEditor.skills.get_list())

  render_item_list: ->
    console.log "Rendering Item List"
    @render_select_options($("#items select#list"), DbEditor.items.get_list())

  render_weapon_list: ->
    console.log "Rendering Weapon List"
    @render_select_options($("#weapons select#list"), DbEditor.weapons.get_list())

  render_armor_list: ->
    console.log "Rendering Armor List"
    @render_select_options($("#armors select#list"), DbEditor.armors.get_list())

  render_enemy_list: ->
    console.log "Rendering Enemy List"
    @render_select_options($("#enemies select#list"), DbEditor.enemies.get_list())

  render_troop_list: ->
    console.log "Rendering Troop List"
    @render_select_options($("#troops select#list"), DbEditor.troops.get_list())

  render_state_list: ->
    console.log "Rendering State List"
    @render_select_options($("#states select#list"), DbEditor.states.get_list())

  render_animation_list: ->
    console.log "Rendering Animation List"
    @render_select_options($("#animations select#list"), DbEditor.animations.get_list())

  mark_active_tab: ->
    $("#tab-#{@page_symbol()}").toggleClass("active", true)

  render_actor_tab: ->
    @render_actor_list()
    @render_current_actor()

  render_class_tab: ->
    @render_class_list()
    @render_current_class()

  render_skill_tab: ->
    @render_skill_list()
    @render_current_skill()

  render_item_tab: ->
    @render_item_list()
    @render_current_item()

  render_weapon_tab: ->
    @render_weapon_list()
    @render_current_weapon()

  render_armor_tab: ->
    @render_armor_list()
    @render_current_armor()

  render_enemy_tab: ->
    @render_enemy_list()
    @render_current_enemy()

  render_troop_tab: ->
    @render_troop_list()
    @render_current_troop()

  render_state_tab: ->
    @render_state_list()
    @render_current_state()

  render_animation_tab: ->
    @render_animation_list()
    @render_current_animation()

  render_system_tab: ->
    @render_system(DbEditor.system.data)

  render_terms_tab: ->
    @render_terms(DbEditor.system.data)

  render: ->
    sym = @page_symbol()
    setTimeout =>
      @["render_#{sym}_tab"]()
    , 1

window.DbRenderer = new DatabaseRenderer
