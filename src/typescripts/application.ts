import DbEditor from "database_editor";
import DbData from "data";
import DbRenderer from "renderer";
import DbUpdate from "events";

$(function() {
	DbEditor.refresh_data(function() {
		DbData.refresh();
		DbRenderer.mark_active_tab();
		DbRenderer.render();
		DbUpdate.setup_events();
	});
});
