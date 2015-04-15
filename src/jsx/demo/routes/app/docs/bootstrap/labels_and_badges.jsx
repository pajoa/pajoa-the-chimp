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
          <DocUnit name='Bootstrap: Labels and Badges'>
            <h4 className='fg-black50'>Labels</h4>
            <p>We use <code>BLabel</code> instead of <code>Label</code> so as to differentiate Bootstrap decorated labels from the native form element of the same name.</p>
            <Well className='text-center'>
              <h1>Example heading <BLabel>New</BLabel></h1>
              <h2>Example heading <BLabel>New</BLabel></h2>
              <h3>Example heading <BLabel>New</BLabel></h3>
              <h4>Example heading <BLabel>New</BLabel></h4>
              <h5>Example heading <BLabel>New</BLabel></h5>
              <h6>Example heading <BLabel>New</BLabel></h6>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<h1>Example heading <BLabel>New</BLabel></h1>\n"}
                  {"<h2>Example heading <BLabel>New</BLabel></h2>\n"}
                  {"<h3>Example heading <BLabel>New</BLabel></h3>\n"}
                  {"<h4>Example heading <BLabel>New</BLabel></h4>\n"}
                  {"<h5>Example heading <BLabel>New</BLabel></h5>\n"}
                  {"<h6>Example heading <BLabel>New</BLabel></h6>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Variations</h4>
            <p>
              For more colors consult the <code>colors.scss</code> file.
            </p>
            <Well className='text-center'>
              <BLabel bsStyle='default'>Default</BLabel>{' '}
              <BLabel bsStyle='primary'>Primary</BLabel>{' '}
              <BLabel bsStyle='success'>Success</BLabel>{' '}
              <BLabel bsStyle='info'>Info</BLabel>{' '}
              <BLabel bsStyle='warning'>Warning</BLabel>{' '}
              <BLabel bsStyle='danger'>Danger</BLabel>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<BLabel bsStyle='default'>Default</BLabel>{' '}\n"}
                  {"<BLabel bsStyle='primary'>Primary</BLabel>{' '}\n"}
                  {"<BLabel bsStyle='success'>Success</BLabel>{' '}\n"}
                  {"<BLabel bsStyle='info'>Info</BLabel>{' '}\n"}
                  {"<BLabel bsStyle='warning'>Warning</BLabel>{' '}\n"}
                  {"<BLabel bsStyle='danger'>Danger</BLabel>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Badges</h4>
            <p>
              {"Easily highlight new or unread items by adding a "}<code>Badge</code>{" to links"}
            </p>
            <Well className='text-center'>
              <a href='#'>Inbox <Badge>42</Badge></a>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<a href='#'>Inbox <Badge>42</Badge></a>\n"}
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
var BLabelsBadgesDocs = React.createClass({
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

module.exports = BLabelsBadgesDocs;
