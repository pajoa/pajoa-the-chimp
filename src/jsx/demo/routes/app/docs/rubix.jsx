var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var Doc = require('./bootstrap/doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var textExtract = require('../../../common/txtextract.js');
var treesnippet = textExtract(require('./snippets/treesnippet.txt'));

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Rubix Documentation'>
            <h4 className='fg-black50'>Basics</h4>
            <p>
              {"Once you have everything setup (if you haven't go back to the "}<Link to='/app/docs/installation'>Installation</Link>{" page and finish the installation) you'll notice a file structure similar to this:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {treesnippet}
                </code>
              </pre>
            </div>
            <div>
              The <strong>src</strong> directory is where your source files are located and it contains three folders:
              <ul>
                <li><strong>global</strong>: This directory contains files shared by all projects. Do not alter these files unless you know what you are doing.</li>
                <li><strong>jsx</strong>: This directory contains project sources (JSX files). By default there are two projects that ship with your purchase:
                  <ul>
                    <li><strong>app</strong>: this is a blank starter project</li>
                    <li><strong>demo</strong>: this is the demo project which can be used for reference</li>
                  </ul>
                </li>
                <li><strong>sass</strong>: This directory contains project sources (SASS files) and has two folders:
                  <ul>
                    <li><strong>app</strong>: this is a blank starter project</li>
                    <li><strong>demo</strong>: this is the demo project which can be used for reference</li>
                  </ul>
                </li>
              </ul>
            </div>
          </DocUnit>
          <DocUnit name='Rubix Documentation: main.jsx'>
            <p>
              {"This file is the starting point of your app. Look for it in the "}<code>src/jsx/app</code>{" folder."}
            </p>
            <p>
              {"The first few lines of the file contain a snippet of code that initializes Mozilla L20n. The first parameter passed to the locale is your project name (in this case it is simply 'app'). All your locales are stored in "}<code>public/locales/app</code>{" (For reference see the locales stored in "}<code>public/locales/demo</code>{"). You can pass your locales to the "}<code>locales</code>{" option and also set the "}<code>default</code>{" locale."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"l20n.initializeLocales('app', {\n"}
                  {"  'locales': ['en-US'],\n"}
                  {"  'default': 'en-US'\n"}
                  {"}});\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Store all your routes in "}<code>src/jsx/app/routes</code>{" folder and require them in routes.jsx. An example route pointing to a blank page is show in the routes.jsx file:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"/* APP PAGES */\n"}
                  {"var blank = require('./routes/app/blank.jsx');\n"}
                </code>
              </pre>
            </div>
            <Alert info>
              {"For routing we make use of the excellent "}<AlertLink href='https://github.com/rackt/react-router/blob/master/docs/guides/overview.md' target='_blank'>react-router</AlertLink>{" library. Its advised that you go through the documentation for react-router before reading this section"}
            </Alert>
            <p>
              {"Now, we define routes to the blank page. You can also nest routes. Refer to the demo's main.jsx for a complex route nesting example. You can see from this snippet that we have referenced the variable to the blank page we required earlier."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"/* ROUTES */\n"}
                  {"module.exports = (\n"}
                  {"  <Route handler={ReactRouter.RouteHandler}>\n"}
                  {"    <DefaultRoute handler={blank} />\n"}
                  {"    <Route path='/' handler={blank} />\n"}
                  {"    <NotFoundRoute handler={notfound} />\n"}
                  {"  </Route>\n"}
                  {");\n"}
                </code>
              </pre>
              <p>
                {"Now we initialize our Router. If the browser supports HTML5 history then we use History based routing else we fallback to Hash based routing to support IE9. The key points to note here is that before every page is rendered we perform a cleanup by removing any attached listeners while using Rubix charts. Pace preloader is restarted (this is optional and can be removed). If you're going to use Google Analytics to track your pages then we have also included a snippet that helps you do the same (this snippet is necessary as Google Analytics does not support pageview reporting on hash-based page navigation by default)."}
              </p>
              <p>
                {"Mozilla L20n is activated only once the entire page is rendered. If you inspect the index.html file within your src/jsx/app folder you'll notice that we have added a fade-out class to the body element to add a nice fade effect on page load. This can also be removed."}
              </p>
              <p>
                {"The page itself is rendered within the "}<strong>div#app-container</strong>{" element."}
              </p>
              <pre>
                <code className='language-javascript'>
                  {"var InitializeRouter = function(View) {\n"}
                  {"  // cleanup\n"}
                  {"  if(window.Rubix) window.Rubix.Cleanup();\n"}
                  {"  Pace.restart();\n"}
                  {"  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {\n"}
                  {"    window.ga('send', 'pageview', {\n"}
                  {"     'page': window.location.pathname + window.location.search  + window.location.hash\n"}
                  {"    });\n"}
                  {"  }\n\n"}

                  {"  React.render(<View />, document.getElementById('app-container'), function() {\n"}
                  {"    // l20n initialized only after everything is rendered/updated\n\n"}

                  {"    l20n.ready();\n"}
                  {"    setTimeout(function() {\n"}
                  {"      $('body').removeClass('fade-out');\n"}
                  {"    }, 500);\n"}
                  {"  });\n"}
                  {"};\n\n"}

                  {"if(Modernizr.history)\n"}
                  {"  ReactRouter.run(routes, ReactRouter.HistoryLocation, InitializeRouter);\n"}
                  {"else\n"}
                  {"  ReactRouter.run(routes, InitializeRouter);\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Rubix Documentation: blank.jsx'>
            <p>
              {"This is an example file and should serve as a starting point for creating various routes in your app. When you open the file you'll immediately notice that there are 3 files required:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"var Header = require('../../common/header.jsx');\n"}
                  {"var Sidebar = require('../../common/sidebar.jsx');\n"}
                  {"var Footer = require('../../common/footer.jsx');\n"}
                </code>
              </pre>
            </div>
            <p>
              {"The above 3 files (header.jsx, sidebar.jsx and footer.jsx) are stored in a "}<strong>common</strong>{" folder for the app. All of the above files are optional and are only required if you want a full blown dashboard layout. For instance, when designing a homepage you wouldn't need any of the above files."}
            </p>
            <p>
              {"Then we have a Body component which contains a Container#body component. All your main application code should be written within this component."}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {"var Body = \R\e\a\ct.createClass({\n"}
                  {"  render: function() {\n"}
                  {"    return (\n"}
                  {"      <Container id='body'>\n"}
                  {"        {this.props.children}\n"}
                  {"      </Container>\n"}
                  {"    );\n"}
                  {"  }\n"}
                  {"});\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Finally we have a Page component which renders the entire page. It contains a Container#container component which has Sidebar, Header, Body and Footer components."}
            </p>
            <p>
              {"It is important to note that we also include a SidebarMixin which takes care of all the boilerplate code required to show/hide the sidebar on smaller viewport. The variable 'classes' stores the state of the Sidebar and is used for toggling the Sidebar."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"var Page = \R\e\a\ct.createClass({\n"}
                  {"  mixins: [SidebarMixin],\n"}
                  {"  render: function() {\n"}
                  {"    var classes = React.addons.classSet({\n"}
                  {"      'container-open': this.state.open\n"}
                  {"    });\n"}
                  {"    return (\n"}
                  {"      <Container id='container' className={classes}>\n"}
                  {"        <Sidebar />\n"}
                  {"        <Header />\n"}
                  {"        <Body />\n"}
                  {"        <Footer />\n"}
                  {"      </Container>\n"}
                  {"    );\n"}
                  {"  }\n"}
                  {"});\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Rubix Documentation: sidebar.jsx'>
            <p>
              {"sidebar.jsx file contains the Sidebar section of the page. The sidebar section consits of a div#avatar container, SidebarControls component and the div#sidebar-container."}
            </p>
            <p>
              {"The SidebarControls component is optional (if you're going to have only 1 sidebar) and can be removed. If you are going to be removing it, you need to also make a small change in "}<strong>src/global/sass/rubix/overrides/_variables.scss</strong>{" by making sure the variable "}<code>$sidebar-controls-visibility</code>{" is set to "}<code>hidden</code>{". If you don't want a global setting that affects all your projects you can add it to the top of your "}<strong>src/sass/app/main.scss</strong>{" file which restricts the setting to the specific project."}
            </p>
            <p>
              {"The sidebar props passed to each SidebarControlBtn controls the relevant Sidebar component."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"var SidebarSection = \R\e\a\ct.createClass({\n"}
                  {"  render: function() {\n"}
                  {"    return (\n"}
                  {"      <div id='sidebar' {...props}>\n"}
                  {"        <div id='avatar'>\n"}
                  {"          ...\n"}
                  {"        </div>\n"}
                  {"        <SidebarControls>\n"}
                  {"          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />\n"}
                  {"        </SidebarControls>\n"}
                  {"        <div id='sidebar-container'>\n"}
                  {"          <Sidebar sidebar={0} active>\n"}
                  {"            <ApplicationSidebar />\n"}
                  {"          </Sidebar>\n"}
                  {"        </div>\n"}
                  {"      </div>\n"}
                  {"    );\n"}
                  {"  }\n"}
                  {"});\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Here is an example of a Sidebar navigation component defined in ApplicationSidebar component. You can nest multiple SidebarNav's to have multiple menu levels."}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<SidebarNav>\n"}
                  {"  <SidebarNavItem glyph='icon-fontello-gauge' name='Blank' href='/' />\n"}
                  {"  <SidebarNavItem glyph='icon-feather-mail' name={<span>Menu <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>\n"}
                  {"    <SidebarNav>\n"}
                  {"      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href='#' />\n"}
                  {"      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href='#' />\n"}
                  {"      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href='#' />\n"}
                  {"    </SidebarNav>\n"}
                  {"  </SidebarNavItem>\n"}
                  {"</SidebarNav>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var RubixDocs = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
});

module.exports = RubixDocs;
