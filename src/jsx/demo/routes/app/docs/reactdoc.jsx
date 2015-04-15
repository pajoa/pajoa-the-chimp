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
                          <h3>Facebook React</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"The documentation assumes that you know React or are willing to learn React. If you are new to React you can go through the basic tutorial over "}<a target='_blank' href='http://facebook.github.io/react/'>here</a>{" and a more thorough documentation "}<a target='_blank' href='http://facebook.github.io/react/docs/getting-started.html'>here</a>{". Remember that React is very easy to learn and doesn't have the steep learning curve of AngularJS. You can even mix the two if you already know Angular as React only deals with the View and leaves the rest of the architecture to you to deal with."}
                          </p>
                          <p>
                            {"We have also included "}<a target='_blank' href='http://fluxxor.com'>Fluxxor</a>{", an implementation of Facebook's Flux architecture."}
                          </p>
                          <p>
                            {"We'll update the docs with more extensive list of tutorials on React in future revisions. Stay tuned."}
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
var ReactDoc = React.createClass({
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

module.exports = ReactDoc;
