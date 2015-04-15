var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Gulpfile: Sass to CSS</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"The Sass section in the Gulpfile is delimited by a "}<code>BEGIN APP:SASS</code> and <code>END APP:SASS</code> and consists of 6 tasks. Lets begin by understanding the flow of each task. While describing the following tasks we assume the project name to be <strong><em>app</em></strong>.
                          </p>
                          <Table bordered striped responsive>
                            <thead>
                              <tr>
                                <th>Tasks</th>
                                <th>Flow</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{width: '15%'}}>
                                  <div>Task 1 (sass:app)</div>
                                </td>
                                <td>
                                  <p>
                                    The first sass gulp task called "sass:app" compiles all the <code>scss</code> files located in <code>src/sass/app</code> by piping the files through the <strong>sass</strong> gulp plugin, whose result is inturn piped through <strong>autoprefixer</strong>, whose result is piped through <strong>insert</strong> plugin (which inserts a banner and a charset statement) and the final modified output is written to the destination folder <code>public/css/app/raw/ltr</code>
                                  </p>
                                  <p>
                                    {"We have included autoprefixer so that you can keep your sass files clean by not using mixins or specific browser/vendor prefixes. Autoprefixer takes care of that for you and you should generally avoid hardcoding prefixes which are bound to get deprecated in the future."}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Task 2 (sass:app:rtl)</div>
                                  <div><small><em>Depends on Task (1)</em></small></div>
                                </td>
                                <td>
                                  <p>
                                    {"The second gulp task called \"sass:app:rtl\" depends on \"sass:app\". This task is only called if the argument "}<strong>--rtl</strong>{" is passed to gulp command (See: "}<Link to='/app/docs/gulpfile/basics'><strong>{"Gulpfile.js > Basics"}</strong></Link>{" for more info). This task collects all the files generated from Task 1 above and flips them to RTL format and the final modified output is written to the destination folder "}<code>public/css/app/raw/rtl</code>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Task 3 (minifycss:app) and Task 4 (minifycss:app:rtl)</div>
                                </td>
                                <td>
                                  <p>
                                    {"The third and fourth gulp task are run during production (if argument "}<strong>--production</strong>{" is passed to gulp command). The fourth task also depends on "}<strong>--rtl</strong>{" argument being passed to gulp command. These tasks minify the CSS generated from Task 1 and Task 2."}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Task 5 (bless:app) and Task 6 (bless:app:rtl)</div>
                                </td>
                                <td>
                                  <p>
                                    {"The fifth and sixth gulp task are run during production (if argument "}<strong>--production</strong>{" is passed to gulp command). The sixth task also depends on "}<strong>--rtl</strong>{" argument being passed to gulp command. These tasks take care of a very specific and lesser known IE9 related stylesheet bug. IE9 has hard limits on the number of selectors allowed in a CSS file. Once the limit is reached, IE silently fails and just ignores any further CSS leaving parts of your site totally unstyled. To fix this issue we use the awesome "}<a target='_blank' href='http://blesscss.com/'>blesscss</a> library.
                                  </p>
                                  <p>
                                    {"The blessed files are written to "}<code>public/css/app/blessed/ltr</code>{" and <"}<code>public/css/app/blessed/rtl</code>.
                                  </p>
                                  <p>
                                    {"The blessed files are ordered (ex: main-blessed1.css, main.css). These stylesheets should be placed, in a descending order, before the closing of the "}<code>{"<head>"}</code>{" tag. Here is an example snippet:"}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <pre>
                            <code className='language-markup'>
                            {"  <link rel='stylesheet' type='text/css' media='screen,print' href='/css/app/blessed/ltr/main-blessed1.css' />\n"}
                            {"  <link rel='stylesheet' type='text/css' media='screen,print' href='/css/app/blessed/ltr/main.css' />\n"}
                            {"  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/theme.css' />\n"}
                            {"  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/colors-blessed1.css' />\n"}
                            {"  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/colors.css' />\n"}
                            {"  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/font-faces.css' />\n"}
                            </code>
                          </pre>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var GulpfileSass = React.createClass({
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

module.exports = GulpfileSass;
