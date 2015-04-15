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
                          <h3>Gulpfile: JSX to JS</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"The JSX section in the Gulpfile is delimited by a "}<code>BEGIN REACT</code> and <code>END APP:JS</code> and consists of 10 tasks. Lets begin by understanding the flow of each task. While describing the following tasks we assume the project name to be <strong><em>app</em></strong>.
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
                                  <div>Task 1 (react:react), Task 2 (uglify:react) and Task 3 (clean:react)</div>
                                </td>
                                <td>
                                  <p>
                                    The first task compiles the React core library (<code>react.js</code>). The second task minifies the core library (<code>react.min.js</code>) and finally the third task cleans up any temporary files that were created during this process. All output is written to <code>public/js/common/react</code>
                                  </p>
                                  <p>
                                    The first and third task is run only on startup. The second task is run only when a <strong>--production</strong> flag is passed to gulp command.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Task 4 (react:react-l20n) and Task 5 (uglify:react-l20n)</div>
                                </td>
                                <td>
                                  <p>
                                    The fourth task is run once during startup and everytime there is a change to respective files. These files should not be modified as any modification might conflict with future updates. It compiles L20n react bindings (<code>react-l20n.js</code>). The fifth task is run only when a <strong>--production</strong> flag is passed to gulp command. It minifies the compiled file from previous task (<code>react-l20n.min.js</code>). All output is written to <code>public/js/common/react-l20n</code>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Task 6 (react:react-bootstrap) and Task 7 (uglify:react-bootstrap)</div>
                                </td>
                                <td>
                                  <p>
                                    The sixth task is run once during startup and everytime there is a change to respective files. These files should not be modified as any modification might conflict with future updates. It compiles Bootstrap react bindings (<code>react-bootstrap.js</code>). The seventh task is run only when a <strong>--production</strong> flag is passed to gulp command. It minifies the compiled file from previous task (<code>react-bootstrap.min.js</code>). All output is written to <code>public/js/common/react-bootstrap</code>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Task 8 (react:app), Task 9 (react:concat) and Task 10 (uglify:app)</div>
                                </td>
                                <td>
                                  <p>
                                    The eighth and ninth tasks look for changes to <code>src/jsx/app</code> directory and compiles the JSX files to JS (<code>app.js</code>). NOTE: The starting point of your project is located at <code>src/jsx/app/main.jsx</code> (assuming <code>app</code> is your project name). All output is written to <code>public/js/app</code>
                                  </p>
                                  <p>
                                    The final task is run only when a <strong>--production</strong> flag is passed to gulp command. It minifies the compiled file from previous task (<code>app.min.js</code>). All output is written to <code>public/js/app</code>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
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
var GulpfileJSX = React.createClass({
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

module.exports = GulpfileJSX;
