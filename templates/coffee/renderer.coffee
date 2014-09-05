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
    else if $("#state-page").length > 0
      "state"
    else
      ""

  make_feature_element: (feature) ->
    unless feature
      feature =
        code: "--"
        value: "--"

    elem = $("<tr></tr>").addClass("feature")
    elem.append($("<td></td>").text("x"))
    elem.append($("<td></td>").text(feature.code))
    elem.append($("<td></td>").text(feature.value))
    elem

  make_effect_element: (effect) ->
    unless effect
      effect =
        code: "--"
        value1: "--"

    elem = $("<tr></tr>").addClass("effect")
    elem.append($("<td></td>").text("x"))
    elem.append($("<td></td>").text(effect.code))
    elem.append($("<td></td>").text(effect.value1))
    elem

  make_learning_element: (learning) ->
    unless learning
      learning =
        level: "--"
        skill_id: "--"
        note: "--"

    level = $("<input type=\"number\" class=\"clean\"></input>").val(learning.level)
    skillid = $("<input class=\"clean\"></input>").val(learning.skill_id)
    note = $("<input type=\"text\" class=\"clean\"></input>").val(learning.note)

    elem = $("<tr></tr>").addClass("learning")
    elem.append($("<td></td>").text("x"))
    elem.append($("<td></td>").append(level))
    elem.append($("<td></td>").append(skillid))
    elem.append($("<td></td>").append(note))
    elem

  render_list: (target, data) ->
    for item, i in data
      id = i
      name = ""
      if item
        id = item.id
        name = item.name

      target.append($("<option></option>").attr("data-id", "#{id}").text("#{id} : #{name}"))

  render_features: (target, data) ->
    target.empty()

    for feature in data
      target.append(@make_feature_element(feature))

    target.append(@make_feature_element())

  render_effects: (target, data) ->
    target.empty()

    for effect in data
      target.append(@make_effect_element(effect))

    target.append(@make_effect_element())

  render_actor: (item) ->
    unless item
      item = new RPG.Actor

    console.log "Rendering Actor #{item.id}"

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")
    graphic = $("#graphic")
    equipment = $("#equipment")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)

    notebox.find("#note").text(item.note)

    general.find("#class_id").val(item.class_id)
    general.find("#nickname").val(item.nickname)
    general.find("#initial_level").val(item.initial_level)
    general.find("#max_level").val(item.max_level)

    graphic.find("#character_name").val(item.character_name)
    graphic.find("#character_index").val(item.character_index)
    graphic.find("#face_name").val(item.face_name)
    graphic.find("#face_index").val(item.face_index)

    @render_features(features.find("tbody"), item.features)

    equipment.find("#weapon1").val(item.equips[0])
    equipment.find("#weapon2").val(item.equips[1])
    equipment.find("#shield").val(item.equips[1])
    equipment.find("#head").val(item.equips[2])
    equipment.find("#body").val(item.equips[3])
    equipment.find("#accessory").val(item.equips[4])

  render_class_learnings: (target, data) ->
    target.empty()

    for learning in data
      target.append(@make_learning_element(learning))

    target.append(@make_learning_element())

  render_class: (item) ->
    unless item
      item = new RPG.Class

    console.log "Rendering Class #{item.id}"

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")
    learnings = $("#learnings")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)
    general.find("#exp_params-0").val(item.exp_params[0])
    general.find("#exp_params-1").val(item.exp_params[1])
    general.find("#exp_params-2").val(item.exp_params[2])
    general.find("#exp_params-3").val(item.exp_params[3])

    notebox.find("#note").text(item.note)

    @render_features(features.find("tbody"), item.features)
    @render_class_learnings(learnings.find("tbody"), item.learnings)

  render_skill: (item) ->
    unless item
      item = new RPG.Skill

    console.log "Rendering Skill #{item.id}"

    general = $("#general")
    invocation = $("#invocation")
    notebox = $("#notebox")
    effects = $("#effects")
    damage = $("#damage")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)
    general.find("#icon_index").val(item.icon_index)

    general.find("#stype_id").val(item.stype_id)
    general.find("#mp_cost").val(item.mp_cost)
    general.find("#tp_cost").val(item.tp_cost)

    general.find("#scope").val(item.scope)
    general.find("#occasion").val(item.occasion)

    invocation.find("#speed").val(item.speed)
    invocation.find("#success_rate").val(item.success_rate)
    invocation.find("#repeats").val(item.repeats)
    invocation.find("#tp_gain").val(item.tp_gain)
    invocation.find("#hit_type").val(item.hit_type)
    invocation.find("#animation_id").val(item.animation_id)

    damage.find("#damage-formula").val(item.damage.formula)
    damage.find("#damage-variance").val(item.damage.variance)
    damage.find("#damage-critical").val(item.damage.critical)

    @render_effects(effects.find("tbody"), item.effects)

    notebox.find("#note").text(item.note)

  render_item: (item) ->
    unless item
      item = new RPG.Item

    console.log "Rendering Item #{item.id}"

    general = $("#general")
    notebox = $("#notebox")
    effects = $("#effects")
    damage = $("#damage")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)

    general.find("#icon_index").val(item.icon_index)

    general.find("#price").val(item.price)
    general.find("#consumable").val(item.consumable)

    notebox.find("#note").text(item.note)

    damage.find("#damage-formula").val(item.damage.formula)
    damage.find("#damage-variance").val(item.damage.variance)
    damage.find("#damage-critical").val(item.damage.critical)

    @render_effects(effects.find("tbody"), item.effects)

  render_weapon: (item) ->
    unless item
      item = new RPG.Weapon

    console.log "Rendering Weapon #{item.id}"

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")
    effects = $("#effects")
    parameter_changes = $("#parameter_changes")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)
    general.find("#icon_index").val(item.icon_index)

    general.find("#wtype_id").val(item.wtype_id)
    general.find("#animation_id").val(item.animation_id)

    general.find("#price").val(item.price)

    notebox.find("#note").text(item.note)

    for param, i in item.params
      parameter_changes.find("#params-#{i}").val(item.params[i])

    @render_features(features.find("tbody"), item.features)

  render_armor: (item) ->
    unless item
      item = new RPG.Armor

    console.log "Rendering Armor #{item.id}"

    general = $("#general")
    features = $("#features")
    notebox = $("#notebox")
    effects = $("#effects")
    parameter_changes = $("#parameter_changes")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)
    general.find("#icon_index").val(item.icon_index)

    general.find("#atype_id").val(item.atype_id)
    general.find("#etype_id").val(item.etype_id)

    general.find("#price").val(item.price)

    notebox.find("#note").text(item.note)

    for param, i in item.params
      parameter_changes.find("#params-#{i}").val(item.params[i])

    @render_features(features.find("tbody"), item.features)

  render_state: (item) ->
    unless item
      item = new RPG.State

    console.log "Rendering State #{item.id}"

    general = $("#general")
    removal_conditions = $("#removal_conditions")
    messages = $("#messages")
    features = $("#features")
    notebox = $("#notebox")

    general.find("#name").val(item.name)
    general.find("#description").val(item.description)
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


    general.find("#icon_index").val(item.icon_index)

    @render_features(features.find("tbody"), item.features)

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

  render_state_by_id: (id) ->
    @render_state DbEditor.states.get_item(id)

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

  render_current_state: ->
    item = $('#states select#list').children(':selected')
    @render_state_by_id(Number(item.attr("data-id")))

  render_actor_list: ->
    console.log "Rendering Actor List"
    @render_list($("#actors select#list"), DbEditor.actors.get_list())

  render_class_list: ->
    console.log "Rendering Class List"
    @render_list($("#classes select#list"), DbEditor.classes.get_list())

  render_skill_list: ->
    console.log "Rendering Skill List"
    @render_list($("#skills select#list"), DbEditor.skills.get_list())

  render_item_list: ->
    console.log "Rendering Item List"
    @render_list($("#items select#list"), DbEditor.items.get_list())

  render_weapon_list: ->
    console.log "Rendering Weapon List"
    @render_list($("#weapons select#list"), DbEditor.weapons.get_list())

  render_armor_list: ->
    console.log "Rendering Armor List"
    @render_list($("#armors select#list"), DbEditor.armors.get_list())

  render_state_list: ->
    console.log "Rendering State List"
    @render_list($("#states select#list"), DbEditor.states.get_list())

  mark_active_tab: ->
    $("#tab-#{@page_symbol()}").toggleClass("active", true)

  render: ->
    sym = @page_symbol()
    setTimeout =>
      @["render_#{sym}_list"]()
      @["render_current_#{sym}"]()
    , 1

window.DbRenderer = new DatabaseRenderer
