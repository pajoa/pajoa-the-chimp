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
          <DocUnit name='Bootstrap: Code'>
            <h4 className='fg-black50'>Inline</h4>
            <p>
              {"Wrap inline snippets of code with <code>."}
            </p>
            <Well>
              For example, <code>{"<section>"}</code> should be wrapped as inline.
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {'For example, <code>{"<section>"}</code> should be wrapped as inline.\n'}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>User input</h4>
            <p>
              {"Use the <kbd> to indicate input that is typically entered via keyboard."}
            </p>
            <Well>
              <div>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.</div>
              <div>To edit settings, press <kbd>ctrl + ,</kbd></div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<div>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.</div>\n"}
                  {"<div>To edit settings, press <kbd>ctrl + ,</kbd></div>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Basic block</h4>
            <p>
              {"Use <pre> for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering."}
            </p>
            <Well>
              <pre>{"<p>Sample text here...</p>"}</pre>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {'<pre>{"<p>Sample text here...</p>"}</pre>\n'}
                </code>
              </pre>
            </div>
            <p>
              {"You may optionally add the .pre-scrollable class, "}
              {"which will set a max-height of 350px and provide a y-axis scrollbar."}
            </p>
            <hr/>
            <h4 className='fg-black50'>Variables</h4>
            <p>
              {"For indicating variables use the <var> tag."}
            </p>
            <Well>
              <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<var>y</var> = <var>m</var><var>x</var> + <var>b</var>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Sample output</h4>
            <p>
              {"For indicating blocks sample output from a program use the <samp> tag."}
            </p>
            <Well>
              <samp>This text is meant to be treated as sample output from a computer program.</samp>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<samp>This text is meant to be treated as sample output from a computer program.</samp>"}
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
var Code = React.createClass({
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

module.exports = Code;
