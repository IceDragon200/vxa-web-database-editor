class DatabaseUpdate
  setup_actor_events: ->
    $("#actors #list").change (e) ->
      DbRenderer.render_current_actor()

  setup_class_events: ->
    $("#classes #list").change (e) ->
      DbRenderer.render_current_class()

  setup_skill_events: ->
    $("#skills #list").change (e) ->
      DbRenderer.render_current_skill()

  setup_item_events: ->
    $("#items #list").change (e) ->
      DbRenderer.render_current_item()

  setup_weapon_events: ->
    $("#weapons #list").change (e) ->
      DbRenderer.render_current_weapon()

  setup_armor_events: ->
    $("#armors #list").change (e) ->
      DbRenderer.render_current_armor()

  setup_enemy_events: ->
    $("#enemies #list").change (e) ->
      DbRenderer.render_current_enemy()

  setup_troop_events: ->
    $("#troops #list").change (e) ->
      DbRenderer.render_current_troop()

  setup_state_events: ->
    $("#states #list").change (e) ->
      DbRenderer.render_current_state()

  setup_animation_events: ->
    $("#animations #list").change (e) ->
      DbRenderer.render_current_animation()

  setup_terms_events: ->
    #

  setup_events: ->
    funcname = "setup_#{DbRenderer.page_symbol()}_events"
    if func = @[funcname]
      func()

window.DbUpdate = new DatabaseUpdate
