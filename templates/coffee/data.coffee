class DatabaseData
  refresh: ->
    keys = ["animations", "actors", "armors", "classes", "common_events", "enemies",
            "items", "skills", "states", "system", "terms", "tilesets", "troops",
            "weapons"]

    for key in keys
      elem = $("#data-#{key}")
      elem.empty()

      for item, i in DbEditor[key].get_list()
        id = i
        name = ""
        if item
          id = item.id
          name = item.name

        elem.append($("<option></option>").attr("data-id", "#{id}").val(id).text("#{id} : #{name}"))

    for armor in DbEditor.armors.get_list()
      if armor
        id = armor.id
        name = armor.name

        option = $("<option></option>").attr("data-id", "#{id}").val(id).text("#{id} : #{name}")

        switch armor.etype_id
          when 1
            $("#data-armors_shield").append(option)
          when 2
            $("#data-armors_body").append(option)
          when 3
            $("#data-armors_head").append(option)
          when 4
            $("#data-armors_accessory").append(option)

window.DbData = new DatabaseData

###
  atype_id
    0 - Weapon
    1 - Shield
    2 - Body
    3 - Head
    4 - Accessory
###
