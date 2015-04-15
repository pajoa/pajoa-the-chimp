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
                          <h3>Gulpfile: WebFonts</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"The JSX section in the Gulpfile is delimited by a "}<code>BEGIN Base64 CSS</code> and <code>END Base64 CSS</code> and consists of 3 tasks. Of the 3 the most important is the first task <code>base64-css:convert</code>.
                          </p>
                          <p>
                            Assuming that your project name is <strong><em>app</em></strong> your webfont folder should be located at <code>public/fonts/dropbox/app</code>. We have simplified the process of including webfonts in your project. All you have to do is drop a TTF file of your favorite font into the above folder and let gulp take care of the rest.
                          </p>
                          <p>
                            Behind the scenes gulp converts the TTF file to WOFF format and then base64 encodes the binary output and concatenates it with the other fonts and writes it to <code>public/css/fonts/app/fonts.css</code>{". This is the preferred way of including web fonts in your project. You'll notice performance improvements immediately and you needn't worry about maintaining and serving 5 different font types."}
                          </p>
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
var GulpfileWebFont = React.createClass({
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

module.exports = GulpfileWebFont;
