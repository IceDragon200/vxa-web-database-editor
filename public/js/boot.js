$(function () {
    DbEditor.refresh_data(function () {
        DbData.refresh();
        DbRenderer.mark_active_tab();
        DbRenderer.render();
        DbUpdate.setup_events();
    });
});
