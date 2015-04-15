/* ERROR PAGES */
var notfound = require('./routes/notfound.jsx');

/* HOMEPAGE */
var homepage = require('./routes/app/homepage.jsx');

/* APP PAGES */
var dashboard = require('./routes/app/dashboard.jsx');
var inbox = require('./routes/app/inbox.jsx');
var compose = require('./routes/app/compose.jsx');
var mail = require('./routes/app/mail.jsx');
var gallery = require('./routes/app/gallery.jsx');
var social = require('./routes/app/social.jsx');
var posts = require('./routes/app/blog/posts.jsx');
var single_post = require('./routes/app/blog/single_post.jsx');

/* COMPONENT PAGES */
var panels = require('./routes/app/panels.jsx');

var rubix_line = require('./routes/app/charts/rubix/line_series.jsx');
var rubix_area = require('./routes/app/charts/rubix/area_series.jsx');
var rubix_barcol = require('./routes/app/charts/rubix/barcol_series.jsx');
var rubix_mixed = require('./routes/app/charts/rubix/mixed_series.jsx');
var rubix_piedonut = require('./routes/app/charts/rubix/piedonut_series.jsx');
var chartjs = require('./routes/app/charts/chartjs.jsx');
var c3js = require('./routes/app/charts/c3.jsx');
var morrisjs = require('./routes/app/charts/morris.jsx');

var timeline = require('./routes/app/timeline.jsx');
var interactivetimeline = require('./routes/app/interactive-timeline.jsx');
var codemirror = require('./routes/app/codemirror.jsx');
var maps = require('./routes/app/maps.jsx');
var editor = require('./routes/app/editor.jsx');
var fonts = require('./routes/app/fonts.jsx');
var buttons = require('./routes/app/buttons.jsx');
var dropdowns = require('./routes/app/dropdowns.jsx');
var tabs_and_navs = require('./routes/app/tabs_and_navs.jsx');
var sliders = require('./routes/app/sliders.jsx');
var knobs = require('./routes/app/knobs.jsx');
var modals = require('./routes/app/modals.jsx');
var messenger = require('./routes/app/messenger.jsx');
var form_controls = require('./routes/app/form_controls.jsx');
var xeditable = require('./routes/app/xeditable.jsx');
var wizard = require('./routes/app/wizard.jsx');
var bootstraptables = require('./routes/app/bootstrap-tables.jsx');
var datatables = require('./routes/app/datatables.jsx');
var tablesaw = require('./routes/app/tablesaw.jsx');
var grid = require('./routes/app/grid.jsx');
var calendar = require('./routes/app/calendar.jsx');
var lists = require('./routes/app/lists.jsx');
var dropzone = require('./routes/app/dropzone.jsx');
var crop = require('./routes/app/crop.jsx');

/* EXTRA PAGES */
var login = require('./routes/app/login.jsx');
var signup = require('./routes/app/signup.jsx');
var lock = require('./routes/app/lock.jsx');
var pricing = require('./routes/app/pricing.jsx');
var invoice = require('./routes/app/invoice.jsx');

/* DOCUMENTATION PAGES */
var installation = require('./routes/app/docs/installation.jsx');
var gulpfilebasics = require('./routes/app/docs/gulpfilebasics.jsx');
var gulpfilesass = require('./routes/app/docs/gulpfilesass.jsx');
var gulpfilejsx = require('./routes/app/docs/gulpfilejsx.jsx');
var gulpfilewebfont = require('./routes/app/docs/gulpfilewebfont.jsx');
var gulpfilescaffolding = require('./routes/app/docs/gulpfilescaffolding.jsx');
var gulpfileexternalplugins = require('./routes/app/docs/gulpfileexternalplugins.jsx');
var reactdoc = require('./routes/app/docs/reactdoc.jsx');
var rubixdoc = require('./routes/app/docs/rubix.jsx');
var rubixsassdoc = require('./routes/app/docs/rubixsass.jsx');
var bootstrapgrid = require('./routes/app/docs/bootstrap/grid.jsx');
var typography = require('./routes/app/docs/bootstrap/typography.jsx');
var code = require('./routes/app/docs/bootstrap/code.jsx');
var tables = require('./routes/app/docs/bootstrap/tables.jsx');
var forms = require('./routes/app/docs/bootstrap/forms.jsx');
var inputsdocs = require('./routes/app/docs/bootstrap/inputsdocs.jsx');
var textareadocs = require('./routes/app/docs/bootstrap/textareadocs.jsx');
var checkradio = require('./routes/app/docs/bootstrap/checkradio.jsx');
var selectdocs = require('./routes/app/docs/bootstrap/select.jsx');
var buttondocs = require('./routes/app/docs/bootstrap/buttons.jsx');
var dropdowndocs = require('./routes/app/docs/bootstrap/dropdowns.jsx');
var buttongroupdocs = require('./routes/app/docs/bootstrap/button_groups.jsx');
var css = require('./routes/app/docs/css.jsx');
var inputgroupdocs = require('./routes/app/docs/bootstrap/input_groups.jsx');
var navdocs = require('./routes/app/docs/bootstrap/navs.jsx');
var navbardocs = require('./routes/app/docs/bootstrap/navbar.jsx');
var breadcrumbdocs = require('./routes/app/docs/bootstrap/breadcrumbs.jsx');
var paginationdocs = require('./routes/app/docs/bootstrap/pagination.jsx');
var labelsbadgesdocs = require('./routes/app/docs/bootstrap/labels_and_badges.jsx');
var jumbodocs = require('./routes/app/docs/bootstrap/jumbotron.jsx');
var alertdocs = require('./routes/app/docs/bootstrap/alerts.jsx');
var progressdocs = require('./routes/app/docs/bootstrap/progress.jsx');
var mediadocs = require('./routes/app/docs/bootstrap/media.jsx');
var listgroupdocs = require('./routes/app/docs/bootstrap/list_group.jsx');
var l20ndocs = require('./routes/app/docs/l20ndocs.jsx');

/* ROUTES */
module.exports = (
  <Route handler={ReactRouter.RouteHandler}>
    <DefaultRoute handler={homepage} />

    <Route path='/' handler={homepage} />

    <Route path='/app/dashboard' handler={dashboard} />

    <Route path='/app/mailbox/inbox' handler={inbox} />
    <Route path='/app/mailbox/compose' handler={compose} />
    <Route path='/app/mailbox/mail' handler={mail} />

    <Route path='/app/gallery' handler={gallery} />
    <Route path='/app/social' handler={social} />

    <Route path='/app/blog/posts' handler={posts} />
    <Route path='/app/blog/post' handler={single_post} />

    <Route path='/app/panels' handler={panels} />

    <Route path='/app/charts/rubix/line' handler={rubix_line} />
    <Route path='/app/charts/rubix/area' handler={rubix_area} />
    <Route path='/app/charts/rubix/barcol' handler={rubix_barcol} />
    <Route path='/app/charts/rubix/mixed' handler={rubix_mixed} />
    <Route path='/app/charts/rubix/piedonut' handler={rubix_piedonut} />

    <Route path='/app/charts/chartjs' handler={chartjs} />
    <Route path='/app/charts/c3js' handler={c3js} />
    <Route path='/app/charts/morrisjs' handler={morrisjs} />

    <Route path='/app/fonts' handler={fonts} />
    <Route path='/app/timeline' handler={timeline} />
    <Route path='/app/interactive-timeline' handler={interactivetimeline} />
    <Route path='/app/codemirror' handler={codemirror} />
    <Route path='/app/maps' handler={maps} />
    <Route path='/app/editor' handler={editor} />

    <Route path='/app/ui-elements/buttons' handler={buttons} />
    <Route path='/app/ui-elements/dropdowns' handler={dropdowns} />
    <Route path='/app/ui-elements/tabs-and-navs' handler={tabs_and_navs} />
    <Route path='/app/ui-elements/sliders' handler={sliders} />
    <Route path='/app/ui-elements/knobs' handler={knobs} />
    <Route path='/app/ui-elements/modals' handler={modals} />
    <Route path='/app/ui-elements/messenger' handler={messenger} />

    <Route path='/app/forms/controls' handler={form_controls} />
    <Route path='/app/forms/xeditable' handler={xeditable} />
    <Route path='/app/forms/wizard' handler={wizard} />

    <Route path='/app/tables/bootstrap-tables' handler={bootstraptables} />
    <Route path='/app/tables/datatables' handler={datatables} />
    <Route path='/app/tables/tablesaw' handler={tablesaw} />

    <Route path='/app/grid' handler={grid} />
    <Route path='/app/calendar' handler={calendar} />
    <Route path='/app/lists' handler={lists} />

    <Route path='/app/file-utilities/dropzone' handler={dropzone} />
    <Route path='/app/file-utilities/crop' handler={crop} />

    <Route path='/app/login' handler={login} />
    <Route path='/app/signup' handler={signup} />
    <Route path='/app/lock' handler={lock} />
    <Route path='/app/pricing' handler={pricing} />
    <Route path='/app/invoice' handler={invoice} />

    <Route path='/app/docs/css' handler={css} />
    <Route path='/app/docs/installation' handler={installation} />
    <Route path='/app/docs/gulpfile/basics' handler={gulpfilebasics} />
    <Route path='/app/docs/gulpfile/sass' handler={gulpfilesass} />
    <Route path='/app/docs/gulpfile/jsx' handler={gulpfilejsx} />
    <Route path='/app/docs/gulpfile/webfonts' handler={gulpfilewebfont} />
    <Route path='/app/docs/gulpfile/scaffolding' handler={gulpfilescaffolding} />
    <Route path='/app/docs/gulpfile/externalplugins' handler={gulpfileexternalplugins} />
    <Route path='/app/docs/rubix/react' handler={reactdoc} />
    <Route path='/app/docs/rubix/rubix-jsx' handler={rubixdoc} />
    <Route path='/app/docs/rubix/rubix-sass' handler={rubixsassdoc} />
    <Route path='/app/docs/bootstrap/grid' handler={bootstrapgrid} />
    <Route path='/app/docs/bootstrap/typography' handler={typography} />
    <Route path='/app/docs/bootstrap/code' handler={code} />
    <Route path='/app/docs/bootstrap/tables' handler={tables} />
    <Route path='/app/docs/bootstrap/forms' handler={forms} />
    <Route path='/app/docs/bootstrap/form_controls/inputs' handler={inputsdocs} />
    <Route path='/app/docs/bootstrap/form_controls/textarea' handler={textareadocs} />
    <Route path='/app/docs/bootstrap/form_controls/checkradio' handler={checkradio} />
    <Route path='/app/docs/bootstrap/form_controls/select' handler={selectdocs} />
    <Route path='/app/docs/bootstrap/form_controls/buttons' handler={buttondocs} />
    <Route path='/app/docs/bootstrap/components/dropdowns' handler={dropdowndocs} />
    <Route path='/app/docs/bootstrap/components/button_groups' handler={buttongroupdocs} />
    <Route path='/app/docs/bootstrap/components/input_groups' handler={inputgroupdocs} />
    <Route path='/app/docs/bootstrap/components/navs' handler={navdocs} />
    <Route path='/app/docs/bootstrap/components/navbar' handler={navbardocs} />
    <Route path='/app/docs/bootstrap/components/breadcrumbs' handler={breadcrumbdocs} />
    <Route path='/app/docs/bootstrap/components/pagination' handler={paginationdocs} />
    <Route path='/app/docs/bootstrap/components/labels_and_badges' handler={labelsbadgesdocs} />
    <Route path='/app/docs/bootstrap/components/jumbotron' handler={jumbodocs} />
    <Route path='/app/docs/bootstrap/components/alerts' handler={alertdocs} />
    <Route path='/app/docs/bootstrap/components/progress-bars' handler={progressdocs} />
    <Route path='/app/docs/bootstrap/components/media' handler={mediadocs} />
    <Route path='/app/docs/bootstrap/components/list-group' handler={listgroupdocs} />
    <Route path='/app/docs/l20n' handler={l20ndocs} />

    <NotFoundRoute handler={notfound} />
  </Route>
);
