define(["require", "exports", "rpg", "core/color", "database_editor"], function (require, exports, rpg_1, color_1, database_editor_1) {
    var DatabaseRenderer = (function () {
        function DatabaseRenderer() {
        }
        DatabaseRenderer.prototype.page_symbol = function () {
            if ($("#home-page").length > 0) {
                return "home";
            }
            else if ($("#actor-page").length > 0) {
                return "actor";
            }
            else if ($("#class-page").length > 0) {
                return "class";
            }
            else if ($("#skill-page").length > 0) {
                return "skill";
            }
            else if ($("#item-page").length > 0) {
                return "item";
            }
            else if ($("#weapon-page").length > 0) {
                return "weapon";
            }
            else if ($("#armor-page").length > 0) {
                return "armor";
            }
            else if ($("#enemy-page").length > 0) {
                return "enemy";
            }
            else if ($("#troop-page").length > 0) {
                return "troop";
            }
            else if ($("#state-page").length > 0) {
                return "state";
            }
            else if ($("#animation-page").length > 0) {
                return "animation";
            }
            else if ($("#system-page").length > 0) {
                return "system";
            }
            else if ($("#terms-page").length > 0) {
                return "terms";
            }
            else {
                return "";
            }
        };
        DatabaseRenderer.prototype.make_removable_button_element = function () {
            return $("<button></button>").addClass("removable").text("-");
        };
        DatabaseRenderer.prototype.make_addable_button_element = function () {
            return $("<button></button>").addClass("addable").text("+");
        };
        DatabaseRenderer.prototype.make_base_item_feature_element = function (feature) {
            var elem;
            if (!feature) {
                feature = {
                    code: "--",
                    value: "--"
                };
            }
            elem = $("<tr></tr>").addClass("feature");
            elem.append($("<td></td>").append(this.make_removable_button_element()));
            elem.append($("<td></td>").text(feature.code));
            elem.append($("<td></td>").text(feature.value));
            return elem;
        };
        DatabaseRenderer.prototype.make_base_item_feature_add_element = function () {
            var elem;
            elem = $("<tr></tr>").addClass("feature").addClass("add");
            elem.append($("<td></td>").append(this.make_addable_button_element()));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            return elem;
        };
        DatabaseRenderer.prototype.make_usable_item_effect_element = function (effect) {
            var elem;
            if (!effect) {
                effect = {
                    code: "--",
                    value1: "--"
                };
            }
            elem = $("<tr></tr>").addClass("effect");
            elem.append($("<td></td>").append(this.make_removable_button_element()));
            elem.append($("<td></td>").text(effect.code));
            elem.append($("<td></td>").text(effect.value1));
            return elem;
        };
        DatabaseRenderer.prototype.make_usable_item_effect_add_element = function () {
            var elem;
            elem = $("<tr></tr>").addClass("effect").addClass("add");
            elem.append($("<td></td>").append(this.make_addable_button_element()));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            return elem;
        };
        DatabaseRenderer.prototype.make_class_learning_element = function (learning) {
            var elem, level, note, skillid;
            if (!learning) {
                learning = {
                    level: "--",
                    skill_id: "--",
                    note: "--"
                };
            }
            level = $("<input type=\"number\" class=\"clean\"></input>").val(learning.level);
            skillid = $("<input class=\"clean\"></input>").val(learning.skill_id);
            note = $("<input type=\"text\" class=\"clean\"></input>").val(learning.note);
            elem = $("<tr></tr>").addClass("learning");
            elem.append($("<td></td>").append(this.make_removable_button_element()));
            elem.append($("<td></td>").append(level));
            elem.append($("<td></td>").append(skillid));
            elem.append($("<td></td>").append(note));
            return elem;
        };
        DatabaseRenderer.prototype.make_class_learning_add_element = function () {
            var elem;
            elem = $("<tr></tr>").addClass("learning").addClass("add");
            elem.append($("<td></td>").append(this.make_addable_button_element()));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            return elem;
        };
        DatabaseRenderer.prototype.make_enemy_action_element = function (action) {
            var condition, elem, rating, skill;
            if (!action) {
                action = {
                    skill_id: "--",
                    condition_type: "--",
                    condition_param1: "--",
                    condition_param2: "--",
                    rating: "--"
                };
            }
            skill = $("<input type=\"number\" class=\"clean\"></input>").val(action.skill_id);
            condition = $("<input class=\"clean\"></input>").val(action.condition_type);
            rating = $("<input type=\"number\" class=\"clean\"></input>").val(action.rating);
            elem = $("<tr></tr>").addClass("action");
            elem.append($("<td></td>").append(this.make_removable_button_element()));
            elem.append($("<td></td>").append(skill));
            elem.append($("<td></td>").append(condition));
            elem.append($("<td></td>").append(rating));
            return elem;
        };
        DatabaseRenderer.prototype.make_enemy_action_add_element = function () {
            var elem;
            elem = $("<tr></tr>").addClass("action").addClass("add");
            elem.append($("<td></td>").append(this.make_addable_button_element()));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            return elem;
        };
        DatabaseRenderer.prototype.make_animation_timing_element = function (timing) {
            var color_string, elem, flash, flash_string, flcolor, frame, se;
            if (!timing) {
                timing = {
                    frame: "--",
                    se: {
                        name: "--"
                    },
                    flash_color: new color_1.default(),
                    flash_scope: 0,
                    flash_duration: 0
                };
            }
            flcolor = timing.flash_color;
            color_string = flcolor.red + ", " + flcolor.green + ", " + flcolor.blue + ", " + flcolor.alpha;
            flash_string = timing.flash_scope + " (" + color_string + "), @" + timing.flash_duration;
            frame = $("<input type=\"number\" class=\"clean\"></input>").val(timing.frame);
            se = $("<input class=\"clean\"></input>").val(timing.se.name);
            flash = $("<input type=\"number\" class=\"clean\"></input>").val(flash_string);
            elem = $("<tr></tr>").addClass("timing");
            elem.append($("<td></td>").append(this.make_removable_button_element()));
            elem.append($("<td></td>").append(frame));
            elem.append($("<td></td>").append(se));
            elem.append($("<td></td>").append(flash));
            return elem;
        };
        DatabaseRenderer.prototype.make_animation_timing_add_element = function () {
            var elem;
            elem = $("<tr></tr>").addClass("timing").addClass("add");
            elem.append($("<td></td>").append(this.make_addable_button_element()));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            elem.append($("<td></td>").text(""));
            return elem;
        };
        DatabaseRenderer.prototype.render_select_options = function (target, data) {
            var i, id, item, name, _i, _len, _results;
            _results = [];
            for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
                item = data[i];
                id = i;
                name = "";
                if (item) {
                    if (item.id) {
                        id = item.id;
                    }
                    name = item.name || item;
                }
                _results.push(target.append($("<option></option>").attr("data-id", id).text(id + " : " + name)));
            }
            return _results;
        };
        DatabaseRenderer.prototype.inject_features = function (target, data) {
            var _this = this;
            target.empty();
            data.forEach(function (feature) { return target.append(_this.make_base_item_feature_element(feature)); });
            return target.append(this.make_base_item_feature_add_element());
        };
        DatabaseRenderer.prototype.inject_effects = function (target, data) {
            var _this = this;
            target.empty();
            data.forEach(function (effect) { return target.append(_this.make_usable_item_effect_element(effect)); });
            return target.append(this.make_usable_item_effect_add_element());
        };
        DatabaseRenderer.prototype.inject_enemy_actions = function (target, data) {
            var _this = this;
            target.empty();
            data.forEach(function (action) { return target.append(_this.make_enemy_action_element(action)); });
            return target.append(this.make_enemy_action_element());
        };
        DatabaseRenderer.prototype.inject_class_learnings = function (target, data) {
            var _this = this;
            target.empty();
            data.forEach(function (learning) { return target.append(_this.make_class_learning_element(learning)); });
            return target.append(this.make_class_learning_add_element());
        };
        DatabaseRenderer.prototype.inject_animation_timings = function (target, data) {
            var _this = this;
            target.empty();
            data.forEach(function (timing) { return target.append(_this.make_animation_timing_element(timing)); });
            return target.append(this.make_animation_timing_add_element());
        };
        DatabaseRenderer.prototype.inject_animation_frames = function (target, data) {
            var index, _, _i, _len, _results;
            target.empty();
            _results = [];
            for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
                _ = data[index];
                _results.push(target.append($("<option></option>").attr("data-index", index).text("#" + index)));
            }
            return _results;
        };
        DatabaseRenderer.prototype.render_base_item = function (item) {
            var features, general, notebox;
            if (!item) {
                item = new rpg_1.default.BaseItem();
            }
            general = $("#general");
            features = $("#features");
            notebox = $("#notebox");
            general.find("#id").val(item.id);
            general.find("#name").val(item.name);
            general.find("#icon_index").val(item.icon_index);
            general.find("#description").val(item.description);
            this.inject_features(features.find("tbody"), item.features);
            return notebox.find("#note").text(item.note);
        };
        DatabaseRenderer.prototype.render_usable_item = function (item) {
            var damage, effects, general, invocation;
            if (!item) {
                item = new rpg_1.default.UsableItem();
            }
            general = $("#general");
            invocation = $("#invocation");
            damage = $("#damage");
            effects = $("#effects");
            this.render_base_item(item);
            general.find("#scope").val(item.scope);
            general.find("#occasion").val(item.occasion);
            invocation.find("#speed").val(item.speed);
            invocation.find("#success_rate").val(item.success_rate);
            invocation.find("#repeats").val(item.repeats);
            invocation.find("#tp_gain").val(item.tp_gain);
            invocation.find("#hit_type").val(item.hit_type);
            damage.find("#damage-formula").val(item.damage.formula);
            damage.find("#damage-variance").val(item.damage.variance);
            damage.find("#damage-critical").val(item.damage.critical);
            return this.inject_effects(effects.find("tbody"), item.effects);
        };
        DatabaseRenderer.prototype.render_equip_item = function (item) {
            var general, i, param, parameter_changes, _i, _len, _ref, _results;
            if (!item) {
                item = new rpg_1.default.EquipItem();
            }
            general = $("#general");
            parameter_changes = $("#parameter_changes");
            this.render_base_item(item);
            general.find("#price").val(item.price);
            _ref = item.params;
            _results = [];
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                param = _ref[i];
                _results.push(parameter_changes.find("#params-" + i).val(item.params[i]));
            }
            return _results;
        };
        DatabaseRenderer.prototype.render_actor = function (item) {
            var equipment, features, general, graphic, notebox;
            if (!item) {
                item = new rpg_1.default.Actor();
            }
            console.log("Rendering Actor " + item.id);
            general = $("#general");
            features = $("#features");
            notebox = $("#notebox");
            graphic = $("#graphic");
            equipment = $("#equipment");
            this.render_base_item(item);
            general.find("#class_id").val(item.class_id);
            general.find("#nickname").val(item.nickname);
            general.find("#initial_level").val(item.initial_level);
            general.find("#max_level").val(item.max_level);
            graphic.find("#character_name").val(item.character_name);
            graphic.find("#character_index").val(item.character_index);
            graphic.find("#face_name").val(item.face_name);
            graphic.find("#face_index").val(item.face_index);
            equipment.find("#weapon1").val(item.equips[0]);
            equipment.find("#weapon2").val(item.equips[1]);
            equipment.find("#shield").val(item.equips[1]);
            equipment.find("#head").val(item.equips[2]);
            equipment.find("#body").val(item.equips[3]);
            equipment.find("#accessory").val(item.equips[4]);
        };
        DatabaseRenderer.prototype.render_class = function (item) {
            var features, general, learnings, notebox;
            if (!item) {
                item = new rpg_1.default.Class();
            }
            console.log("Rendering Class " + item.id);
            general = $("#general");
            features = $("#features");
            notebox = $("#notebox");
            learnings = $("#learnings");
            this.render_base_item(item);
            general.find("#exp_params-0").val(item.exp_params[0]);
            general.find("#exp_params-1").val(item.exp_params[1]);
            general.find("#exp_params-2").val(item.exp_params[2]);
            general.find("#exp_params-3").val(item.exp_params[3]);
            this.inject_class_learnings(learnings.find("tbody"), item.learnings);
        };
        DatabaseRenderer.prototype.render_skill = function (item) {
            var general, invocation, required_weapon, using_message;
            if (!item) {
                item = new rpg_1.default.Skill();
            }
            console.log("Rendering Skill " + item.id);
            general = $("#general");
            invocation = $("#invocation");
            using_message = $("#using_message");
            required_weapon = $("#required_weapon");
            this.render_usable_item(item);
            general.find("#stype_id").val(item.stype_id);
            general.find("#mp_cost").val(item.mp_cost);
            general.find("#tp_cost").val(item.tp_cost);
            invocation.find("#animation_id").val(item.animation_id);
            using_message.find("#message1").val(item.message1);
            using_message.find("#message2").val(item.message2);
            required_weapon.find("#required_wtype_id1").val(item.required_wtype_id1);
            required_weapon.find("#required_wtype_id2").val(item.required_wtype_id2);
        };
        DatabaseRenderer.prototype.render_item = function (item) {
            var damage, effects, general, notebox;
            if (!item) {
                item = new rpg_1.default.Item();
            }
            console.log("Rendering Item " + item.id);
            general = $("#general");
            notebox = $("#notebox");
            effects = $("#effects");
            damage = $("#damage");
            this.render_usable_item(item);
            general.find("#price").val(item.price);
            general.find("#consumable").val(item.consumable);
        };
        DatabaseRenderer.prototype.render_weapon = function (item) {
            var general;
            if (!item) {
                item = new rpg_1.default.Weapon();
            }
            console.log("Rendering Weapon " + item.id);
            general = $("#general");
            this.render_equip_item(item);
            general.find("#wtype_id").val(item.wtype_id);
            general.find("#animation_id").val(item.animation_id);
        };
        DatabaseRenderer.prototype.render_armor = function (item) {
            var general;
            if (!item) {
                item = new rpg_1.default.Armor();
            }
            console.log("Rendering Armor " + item.id);
            general = $("#general");
            this.render_equip_item(item);
            general.find("#atype_id").val(item.atype_id);
            general.find("#etype_id").val(item.etype_id);
        };
        DatabaseRenderer.prototype.render_enemy = function (item) {
            var actions, features, general, i, p, rewards, _i, _len, _ref;
            if (!item) {
                item = new rpg_1.default.Enemy();
            }
            console.log("Rendering Enemy " + item.id);
            general = $("#general");
            rewards = $("#rewards");
            features = $("#features");
            actions = $("#actions");
            this.render_base_item(item);
            _ref = item.params;
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                p = _ref[i];
                general.find("#params-" + i).val(item.params[i]);
            }
            rewards.find("#exp").val(item.exp);
            rewards.find("#gold").val(item.gold);
            this.inject_enemy_actions(actions.find("tbody"), item.actions);
        };
        DatabaseRenderer.prototype.render_troop = function (item) {
            var general;
            if (!item) {
                item = new rpg_1.default.Troop();
            }
            console.log("Rendering Troop " + item.id);
            general = $("#general");
            general.find("#name").val(item.name);
        };
        DatabaseRenderer.prototype.render_state = function (item) {
            var general, messages, removal_conditions;
            if (!item) {
                item = new rpg_1.default.State();
            }
            console.log("Rendering State " + item.id);
            general = $("#general");
            removal_conditions = $("#removal_conditions");
            messages = $("#messages");
            this.render_base_item(item);
            general.find("#restriction").val(item.restriction);
            general.find("#priority").val(item.priority);
            removal_conditions.find("#remove_at_battle_end").val(item.remove_at_battle_end);
            removal_conditions.find("#remove_by_restriction").val(item.remove_by_restriction);
            removal_conditions.find("#auto_removal_timing").val(item.auto_removal_timing);
            removal_conditions.find("#min_turns").val(item.min_turns);
            removal_conditions.find("#max_turns").val(item.max_turns);
            removal_conditions.find("#remove_by_damage").val(item.remove_by_damage);
            removal_conditions.find("#chance_by_damage").val(item.chance_by_damage);
            removal_conditions.find("#remove_by_walking").val(item.remove_by_walking);
            removal_conditions.find("#steps_to_remove").val(item.steps_to_remove);
            messages.find("#message1").val(item.message1);
            messages.find("#message2").val(item.message2);
            messages.find("#message3").val(item.message3);
            messages.find("#message4").val(item.message4);
        };
        DatabaseRenderer.prototype.render_animation = function (item) {
            var frames, general, timing;
            if (!item) {
                item = new rpg_1.default.Animation();
            }
            console.log("Rendering Animation " + item.id);
            general = $("#general");
            timing = $("#timing");
            frames = $("#frames");
            general.find("#id").val(item.id);
            general.find("#name").val(item.name);
            general.find("#position").val(item.position);
            general.find("#frame_max").val(item.frame_max);
            general.find("#animation_name1").val(item.animation_name1);
            general.find("#animation_name2").val(item.animation_name2);
            this.inject_animation_timings(timing.find("tbody"), item.timings);
            this.inject_animation_frames(frames, item.frames);
        };
        DatabaseRenderer.prototype.render_system = function (system) {
            if (!system) {
                return system = new rpg_1.default.System();
            }
        };
        DatabaseRenderer.prototype.render_terms = function (system) {
            var atypes, basic, commands, elements, etypes, i, params, stypes, t, terms, wtypes, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _ref3, _results;
            if (!system) {
                system = new rpg_1.default.System();
            }
            terms = system.terms;
            if (!terms) {
                terms = new rpg_1.default.System_Terms();
            }
            elements = $("#elements");
            wtypes = $("#wtypes");
            atypes = $("#atypes");
            stypes = $("#stypes");
            basic = $("#basic");
            params = $("#params");
            etypes = $("#etypes");
            commands = $("#commands");
            this.render_select_options(elements.find("select#list"), system.elements);
            this.render_select_options(wtypes.find("select#list"), system.weapon_types);
            this.render_select_options(atypes.find("select#list"), system.armor_types);
            this.render_select_options(stypes.find("select#list"), system.skill_types);
            _ref = terms.basic;
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                t = _ref[i];
                basic.find("#basic-" + i).val(t);
            }
            _ref1 = terms.params;
            for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
                t = _ref1[i];
                params.find("#params-" + i).val(t);
            }
            _ref2 = terms.etypes;
            for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
                t = _ref2[i];
                etypes.find("#etypes-" + i).val(t);
            }
            _ref3 = terms.commands;
            _results = [];
            for (i = _l = 0, _len3 = _ref3.length; _l < _len3; i = ++_l) {
                t = _ref3[i];
                _results.push(commands.find("#commands-" + i).val(t));
            }
            return _results;
        };
        DatabaseRenderer.prototype.render_actor_by_id = function (id) {
            return this.render_actor(database_editor_1.default.actors.get_item(id));
        };
        DatabaseRenderer.prototype.render_class_by_id = function (id) {
            return this.render_class(database_editor_1.default.classes.get_item(id));
        };
        DatabaseRenderer.prototype.render_skill_by_id = function (id) {
            return this.render_skill(database_editor_1.default.skills.get_item(id));
        };
        DatabaseRenderer.prototype.render_item_by_id = function (id) {
            return this.render_item(database_editor_1.default.items.get_item(id));
        };
        DatabaseRenderer.prototype.render_weapon_by_id = function (id) {
            return this.render_weapon(database_editor_1.default.weapons.get_item(id));
        };
        DatabaseRenderer.prototype.render_armor_by_id = function (id) {
            return this.render_armor(database_editor_1.default.armors.get_item(id));
        };
        DatabaseRenderer.prototype.render_enemy_by_id = function (id) {
            return this.render_enemy(database_editor_1.default.enemies.get_item(id));
        };
        DatabaseRenderer.prototype.render_troop_by_id = function (id) {
            return this.render_troop(database_editor_1.default.troops.get_item(id));
        };
        DatabaseRenderer.prototype.render_state_by_id = function (id) {
            return this.render_state(database_editor_1.default.states.get_item(id));
        };
        DatabaseRenderer.prototype.render_animation_by_id = function (id) {
            return this.render_animation(database_editor_1.default.animations.get_item(id));
        };
        DatabaseRenderer.prototype.render_current_actor = function () {
            var item;
            item = $("#actors select#list").children(":selected"); //actors select#list').children(':selected')
            return this.render_actor_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_class = function () {
            var item;
            item = $("#classes select#list").children(":selected"); //classes select#list').children(':selected')
            return this.render_class_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_skill = function () {
            var item;
            item = $("#skills select#list").children(":selected"); //skills select#list').children(':selected')
            return this.render_skill_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_item = function () {
            var item;
            item = $("#items select#list").children(":selected"); //items select#list').children(':selected')
            return this.render_item_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_weapon = function () {
            var item;
            item = $("#weapons select#list").children(":selected"); //weapons select#list').children(':selected')
            return this.render_weapon_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_armor = function () {
            var item;
            item = $("#armors select#list").children(":selected"); //armors select#list').children(':selected')
            return this.render_armor_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_enemy = function () {
            var item;
            item = $("#enemies select#list").children(":selected"); //enemies select#list').children(':selected')
            return this.render_enemy_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_troop = function () {
            var item;
            item = $("#troops select#list").children(":selected"); //troops select#list').children(':selected')
            return this.render_troop_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_state = function () {
            var item;
            item = $("#states select#list").children(":selected"); //states select#list').children(':selected')
            return this.render_state_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_current_animation = function () {
            var item;
            item = $("#animations select#list").children(":selected"); //animations select#list').children(':selected')
            return this.render_animation_by_id(Number(item.attr("data-id")));
        };
        DatabaseRenderer.prototype.render_actor_list = function () {
            console.log("Rendering Actor List");
            return this.render_select_options($("#actors select#list"), database_editor_1.default.actors.get_list());
        };
        DatabaseRenderer.prototype.render_class_list = function () {
            console.log("Rendering Class List");
            return this.render_select_options($("#classes select#list"), database_editor_1.default.classes.get_list());
        };
        DatabaseRenderer.prototype.render_skill_list = function () {
            console.log("Rendering Skill List");
            return this.render_select_options($("#skills select#list"), database_editor_1.default.skills.get_list());
        };
        DatabaseRenderer.prototype.render_item_list = function () {
            console.log("Rendering Item List");
            return this.render_select_options($("#items select#list"), database_editor_1.default.items.get_list());
        };
        DatabaseRenderer.prototype.render_weapon_list = function () {
            console.log("Rendering Weapon List");
            return this.render_select_options($("#weapons select#list"), database_editor_1.default.weapons.get_list());
        };
        DatabaseRenderer.prototype.render_armor_list = function () {
            console.log("Rendering Armor List");
            return this.render_select_options($("#armors select#list"), database_editor_1.default.armors.get_list());
        };
        DatabaseRenderer.prototype.render_enemy_list = function () {
            console.log("Rendering Enemy List");
            return this.render_select_options($("#enemies select#list"), database_editor_1.default.enemies.get_list());
        };
        DatabaseRenderer.prototype.render_troop_list = function () {
            console.log("Rendering Troop List");
            return this.render_select_options($("#troops select#list"), database_editor_1.default.troops.get_list());
        };
        DatabaseRenderer.prototype.render_state_list = function () {
            console.log("Rendering State List");
            return this.render_select_options($("#states select#list"), database_editor_1.default.states.get_list());
        };
        DatabaseRenderer.prototype.render_animation_list = function () {
            console.log("Rendering Animation List");
            return this.render_select_options($("#animations select#list"), database_editor_1.default.animations.get_list());
        };
        DatabaseRenderer.prototype.mark_active_tab = function () {
            return $("#tab-" + this.page_symbol()).toggleClass("active", true);
        };
        DatabaseRenderer.prototype.render_actor_tab = function () {
            this.render_actor_list();
            return this.render_current_actor();
        };
        DatabaseRenderer.prototype.render_class_tab = function () {
            this.render_class_list();
            return this.render_current_class();
        };
        DatabaseRenderer.prototype.render_skill_tab = function () {
            this.render_skill_list();
            return this.render_current_skill();
        };
        DatabaseRenderer.prototype.render_item_tab = function () {
            this.render_item_list();
            return this.render_current_item();
        };
        DatabaseRenderer.prototype.render_weapon_tab = function () {
            this.render_weapon_list();
            return this.render_current_weapon();
        };
        DatabaseRenderer.prototype.render_armor_tab = function () {
            this.render_armor_list();
            return this.render_current_armor();
        };
        DatabaseRenderer.prototype.render_enemy_tab = function () {
            this.render_enemy_list();
            return this.render_current_enemy();
        };
        DatabaseRenderer.prototype.render_troop_tab = function () {
            this.render_troop_list();
            return this.render_current_troop();
        };
        DatabaseRenderer.prototype.render_state_tab = function () {
            this.render_state_list();
            return this.render_current_state();
        };
        DatabaseRenderer.prototype.render_animation_tab = function () {
            this.render_animation_list();
            return this.render_current_animation();
        };
        DatabaseRenderer.prototype.render_system_tab = function () {
            return this.render_system(database_editor_1.default.system.data);
        };
        DatabaseRenderer.prototype.render_terms_tab = function () {
            return this.render_terms(database_editor_1.default.system.data);
        };
        DatabaseRenderer.prototype.render = function () {
            var _this = this;
            var sym;
            sym = this.page_symbol();
            return setTimeout(function () { return _this["render_" + sym + "_tab"](); }, 1);
        };
        return DatabaseRenderer;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new DatabaseRenderer;
});
