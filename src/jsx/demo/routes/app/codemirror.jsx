var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var textExtract = require('../../common/txtextract.js');
var codesnippet = textExtract(require('./codesnippet.txt'));

var Body = React.createClass({
  componentDidMount: function() {
    var editor = CodeMirror.fromTextArea($('#code').get(0), {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'ambiance'
    });
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <PanelHeader className='bg-blue fg-white' style={{margin: 0}}>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Codemirror</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{padding: 25}}>
                        <Textarea id='code' name='code'>
                          {codesnippet}
                        </Textarea>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var CodeMirrorPage = React.createClass({
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

module.exports = CodeMirrorPage;
