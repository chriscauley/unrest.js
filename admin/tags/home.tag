import uR from '../../index'

<ur-admin-home>
  <div class={ theme.outer }>
    <div class={ theme.header }>
      <div class={ theme.header_title }>Admin Home</div>
    </div>
    <div class={ theme.content }>
      <ur-table></ur-table>
    </div>
  </div>

<script>
this.mixin(uR.css.ThemeMixin)
this.on("mount",function() {
  this.thead = ["App Label"]
  this.tbody = []
  uR.db.apps.map(app => {
    this.tbody.push([`<a href="#!/admin/${app.name}/">${app.verbose_name}</a>`])
  });
  this.tbody.push([""]);
});
</script>
</ur-admin-home>