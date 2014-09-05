class BaseEditor
  constructor: ->
    @data = null

  route: ->
    "/api"

  json_post: (route, data, cb) ->
    $.ajax route,
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
      success: (result) ->
        cb(result)

  post_data: (wait, cb) ->
    #$.ajax(@route(), type: "POST").done (data) ->

  request_data: (wait, cb) ->
    $.ajax(@route(), type: "GET", async: !wait).success (data) ->
      cb data

  update_data: (wait, cb) ->
    @post_data wait, (data) =>
      @data = JSON.parse data
      console.log "Updated #{@route()}"
      cb() if cb

  refresh_data: (wait, cb) ->
    @data = null
    @request_data wait, (data) =>
      @data = JSON.parse data
      console.log "Refreshed #{@route()}"
      cb() if cb

  get_list: ->
    unless @data
      @refresh_data(true)

    @data

  get_item: (id) ->
    @get_list()[id]

  set_item: (id, item) ->
    @get_list()[id] = item

  update_item: (id) ->
    @json_post "#{@route()}/#{id}", @get_item(id), (data) =>
      console.log data
      #@set_item(id, data)

  swap_item: (id1, id2) ->
    data = @get_list()
    tmp = data[id1]
    data[id1] = data[id2]
    data[id2] = tmp

class ActorsEditor extends BaseEditor
  route: ->
    "/api/actors"

class AnimationsEditor extends BaseEditor
  route: ->
    "/api/animations"

class ArmorsEditor extends BaseEditor
  route: ->
    "/api/armors"

class ClassesEditor extends BaseEditor
  route: ->
    "/api/classes"

class CommonEventsEditor extends BaseEditor
  route: ->
    "/api/common_events"

class EnemiesEditor extends BaseEditor
  route: ->
    "/api/enemies"

class ItemsEditor extends BaseEditor
  route: ->
    "/api/items"

class SkillsEditor extends BaseEditor
  route: ->
    "/api/skills"

class StatesEditor extends BaseEditor
  route: ->
    "/api/states"

class SystemEditor extends BaseEditor
  route: ->
    "/api/system"

class TermsEditor extends BaseEditor
  route: ->
    "/api/terms"

class TilesetsEditor extends BaseEditor
  route: ->
    "/api/tilesets"

class TroopsEditor extends BaseEditor
  route: ->
    "/api/troops"

class WeaponsEditor extends BaseEditor
  route: ->
    "/api/weapons"

class DatabaseEditor
  constructor: ->
    @editors = [
      @animations = new AnimationsEditor,
      @actors = new ActorsEditor,
      @armors = new ArmorsEditor,
      @classes = new ClassesEditor,
      @common_events = new CommonEventsEditor,
      @enemies = new EnemiesEditor,
      @items = new ItemsEditor,
      @skills = new SkillsEditor,
      @states = new StatesEditor,
      @system = new SystemEditor,
      @terms = new TermsEditor,
      @tilesets = new TilesetsEditor,
      @troops = new TroopsEditor,
      @weapons = new WeaponsEditor,
    ]

  update_data: ->
    for editor in @editors
      editor.update_data()

  refresh_data: (cb) ->
    len = @editors.length
    done = =>
      len -= 1
      cb() if len <= 0 if cb

    console.log "Refreshing Data"
    for editor in @editors
      editor.refresh_data(false, done)

window.DbEditor = new DatabaseEditor
