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
          <DocUnit name='Bootstrap: Breadcrumbs'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Indicate the current page's location within a navigational hierarchy."}
            </p>
            <Well>
              <Breadcrumb>
                <BLink href='#' active>Home </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#' active>Library </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#'>Library </BLink>
                <BLink href='#' active>Data</BLink>
              </Breadcrumb>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Breadcrumb>\n"}
                  {"  <BLink href='#' active>Home </BLink>\n"}
                  {"</Breadcrumb>\n"}
                  {"<Breadcrumb>\n"}
                  {"  <BLink href='#'>Home </BLink>\n"}
                  {"  <BLink href='#' active>Library </BLink>\n"}
                  {"</Breadcrumb>\n"}
                  {"<Breadcrumb>\n"}
                  {"  <BLink href='#'>Home </BLink>\n"}
                  {"  <BLink href='#'>Library </BLink>\n"}
                  {"  <BLink href='#' active>Data</BLink>\n"}
                  {"</Breadcrumb>\n"}
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
var BreadcrumbDocs = React.createClass({
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

module.exports = BreadcrumbDocs;
