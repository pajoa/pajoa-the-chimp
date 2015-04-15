var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var textExtract = require('../../../../common/txtextract.js');
var textareadomnode = textExtract(require('../snippets/textareadomnode.txt'));
var textareagetvalue = textExtract(require('../snippets/textareagetvalue.txt'));

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Textarea'>
            <p>
              {"Form control which supports multiple lines of text. Change "}<code>rows</code>{" attribute as necessary."}
            </p>
            <Well>
              <Textarea rows='3' />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Textarea rows='3' />\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Rubix Enhancements [API]' docStyle='bg-red fg-white'>
            <h4 className='fg-black50'><code>getInputDOMNode()</code></h4>
            <p>
              {"Access the raw DOM Node. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {textareadomnode}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>getValue()</code></h4>
            <p>
              {"Convenience function to get the value of the raw input dom element. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {textareagetvalue}
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
var TextareaDocs = React.createClass({
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

module.exports = TextareaDocs;
