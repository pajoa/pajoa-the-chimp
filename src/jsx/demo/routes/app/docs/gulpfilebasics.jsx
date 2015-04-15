var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var Body = React.createClass({
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
                          <h3>Gulpfile: The Basics</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"The Gulpfile is divided into 4 main sections: One that handles SASS to CSS compilation, JSX to JS compilation, WebFont compilation and the Development server for quick testing and debugging."}
                          </p>
                          <p>
                            {"We'll handle each section in its own individual doc pages later. However, before we get to that lets discuss the environment options provided:"}
                          </p>
                          <Table bordered striped responsive>
                            <thead>
                              <tr>
                                <th>Option</th>
                                <th>Functionality</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{width: '35%'}}>
                                  <div><strong>--name</strong></div>
                                  <div>
                                    <em>(Optional, defaults to <strong>app</strong>)</em>
                                  </div>
                                  <div>
                                    <small><em><strong>Usage: </strong><span></span>gulp --name somenamehere</em></small>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p>{"A name for your project/app. The necessary file structures need to exist before you can call this command. Consult the documentation on how to scaffold one if you're starting a blank project."}</p>
                                    <p>{"By default we ship a "}<strong>demo</strong> project and a <strong>app</strong> starter project.</p>
                                    <p>{"Use the demo project as a reference while creating your own project"}</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div><strong>--rtl</strong></div>
                                  <div>
                                    <em>(Optional, defaults to <strong>false</strong>)</em>
                                  </div>
                                  <div>
                                    <small><em><strong>Usage: </strong><span></span>gulp --rtl</em></small>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p>{"A switch that automatically generates an RTL equivalent of the compiled CSS files using Twitter's css-flip. This is turned off by default. To access the RTL resource point your browser to http://localhost:8080/rtl/#/"}</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div><strong>--port</strong></div>
                                  <div>
                                    <em>(Optional, defaults to <strong>8080</strong>)</em>
                                  </div>
                                  <div>
                                    <small><em><strong>Usage: </strong><span></span>gulp --port 5000</em></small>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p>{"Development server port."}</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div><strong>--whost</strong></div>
                                  <div>
                                    <em>(Optional, defaults to <strong>localhost</strong>)</em>
                                  </div>
                                  <div>
                                    <small><em><strong>Usage: </strong><span></span>gulp --whost virtual.hostname</em></small>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p>{"Webpack dev server hostname."}</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div><strong>--wport</strong></div>
                                  <div>
                                    <em>(Optional, defaults to <strong>8079</strong>)</em>
                                  </div>
                                  <div>
                                    <small><em><strong>Usage: </strong><span></span>gulp --wport 4999</em></small>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p>{"Webpack dev server port."}</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div><strong>--production</strong></div>
                                  <div>
                                    <em>(Optional, defaults to <strong>false</strong>)</em>
                                  </div>
                                  <div>
                                    <small><em><strong>Usage: </strong><span></span>gulp --production</em></small>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p>{"A boolean flag like "}<strong>{"--rtl"}</strong>{". Run this when you are done with development as it compiles, minifies and bundles all the source CSS and JS files. For bundling external plugins please consult "}<strong><Link to='/app/docs/gulpfile/externalplugins'>{"Gulpfile.js > External Plugins"}</Link></strong>{" doc page."}</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <p>
                            Here is an image of the gulp command (run with above options) executed in a terminal:
                          </p>
                          <div>
                            <Img responsive src='/imgs/shots/gulp-options-terminal.png' />
                          </div>
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
var GulpfileBasics = React.createClass({
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

module.exports = GulpfileBasics;
