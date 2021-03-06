define(["require", "exports", "database_editor"], function (require, exports, database_editor_1) {
    var DatabaseData = (function () {
        function DatabaseData() {
        }
        DatabaseData.prototype.refresh = function () {
            var elem, i, id, item, keys, name, option, _i, _len, _ref, _results;
            keys = ["animations", "actors", "armors", "classes", "common_events", "enemies", "items", "skills", "states", "system", "terms", "tilesets", "troops", "weapons"];
            keys.forEach(function (key) {
                elem = $("#data-" + key);
                elem.empty();
                _ref = database_editor_1.default[key].get_list();
                _results = [];
                for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                    item = _ref[i];
                    id = i;
                    name = "";
                    if (item) {
                        id = item.id;
                        name = item.name;
                    }
                    _results.push(elem.append($("<option></option>").attr("data-id", id).val(id).text(id + " : " + name)));
                }
                return _results;
            });
            return database_editor_1.default.armors.get_list().map(function (armor) {
                if (armor) {
                    id = armor.id;
                    name = armor.name;
                    option = $("<option></option>").attr("data-id", id).val(id).text(id + " : " + name);
                    switch (armor.etype_id) {
                        case 1:
                            return $("#data-armors_shield").append(option);
                        case 2:
                            return $("#data-armors_body").append(option);
                        case 3:
                            return $("#data-armors_head").append(option);
                        case 4:
                            return $("#data-armors_accessory").append(option);
                    }
                }
            });
        };
        return DatabaseData;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new DatabaseData;
});
/*
  atype_id
    0 - Weapon
    1 - Shield
    2 - Body
    3 - Head
    4 - Accessory
*/
