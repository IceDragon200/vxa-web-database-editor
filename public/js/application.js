define(["require", "exports", "database_editor", "data", "renderer", "events"], function (require, exports, database_editor_1, data_1, renderer_1, events_1) {
    $(function () {
        database_editor_1.default.refresh_data(function () {
            data_1.default.refresh();
            renderer_1.default.mark_active_tab();
            renderer_1.default.render();
            events_1.default.setup_events();
        });
    });
});
