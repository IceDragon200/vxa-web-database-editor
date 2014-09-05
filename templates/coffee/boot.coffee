$(document).ready ->
  setTimeout ->
    DbEditor.refresh_data ->
      DbData.refresh()
      DbRenderer.mark_active_tab()
      DbRenderer.render()
      DbUpdate.setup_events()
  , 1
