var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Jumbotron'>
            <p>A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.</p>
            <Well className='bg-white'>
              <Jumbotron>
                <h1 className='fg-black50'>Hello, world</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                </p>
                <p>
                  <Button lg bsStyle='primary'>Learn more</Button>
                </p>
              </Jumbotron>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Jumbotron>\n"}
                  {"  <h1 className='fg-black50'>Hello, world</h1>\n"}
                  {"  <p>\n"}
                  {"    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n"}
                  {"  </p>\n"}
                  {"  <p>\n"}
                  {"    <Button lg bsStyle='primary'>Learn more</Button>\n"}
                  {"  </p>\n"}
                  {"</Jumbotron>\n"}
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
var JumboDocs = React.createClass({
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

module.exports = JumboDocs;
