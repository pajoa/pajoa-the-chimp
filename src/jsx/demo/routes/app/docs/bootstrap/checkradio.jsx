var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var textExtract = require('../../../../common/txtextract.js');
var rccheckedstate = textExtract(require('../snippets/rccheckedstate.txt'));
var setrccheckedstate = textExtract(require('../snippets/setrccheckedstate.txt'));
var isrccheckedstate = textExtract(require('../snippets/isrccheckedstate.txt'));
var rcgetvalue = textExtract(require('../snippets/rcgetvalue.txt'));

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Checkboxes and radios'>
            <h4 className='fg-black50'>Default (Stacked)</h4>
            <p>
              {"Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many."}
            </p>
            <p>
              {"We provide "}<code>Checkbox</code> and <code>Radio</code>{" component that reduces a lot of redundant code. This is preferred to using native Input checkbox/radio elements."}
            </p>
            <Well>
              <Checkbox>{"Option one is this and that"}&mdash;{"be sure to include why it's great"}</Checkbox>
              <Checkbox disabled>{"Option two is disabled"}</Checkbox>
              <Radio name='optionsRadios' value='option1'>{"Option one is this and that"}&mdash;{"be sure to include why it's great"}</Radio>
              <Radio name='optionsRadios' value='option2'>{"Option two can be something else and selecting it will deselect option one"}</Radio>
              <Radio disabled name='optionsRadios' value='option3'>{"Option three is disabled"}</Radio>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Checkbox>\n  Option one is this and that&mdash;be sure to include why it's great\n</Checkbox>\n"}
                  {"<Checkbox disabled>\n  Option two is disabled\n</Checkbox>\n"}
                  {"<Radio name='optionsRadios' value='option1'>\n  Option one is this and that&mdash;be sure to include why it's great\n</Radio>\n"}
                  {"<Radio name='optionsRadios' value='option2'>\n  Option two can be something else and selecting it will deselect option one\n</Radio>\n"}
                  {"<Radio disabled name='optionsRadios' value='option3'>\n  Option three is disabled\n</Radio>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Inline checkboxes and radios</h4>
            <p>
              {"Use the attribute "}<code>inline</code>{" on a series of checkboxes or radios for controls that appear on the same line."}
            </p>
            <Well>
              <div>
                <Checkbox inline defaultChecked>1</Checkbox>
                <Checkbox inline>2</Checkbox>
                <Checkbox inline>3</Checkbox>
                <Checkbox inline disabled>4</Checkbox>
              </div>
              <div>
                <Radio inline name='inline' value='option1'>1</Radio>
                <Radio inline defaultChecked name='inline' value='option2'>2</Radio>
                <Radio inline name='inline' value='option3'>3</Radio>
                <Radio inline disabled name='inline' value='option4'>4</Radio>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<div>\n"}
                  {"  <Checkbox inline defaultChecked>1</Checkbox>\n"}
                  {"  <Checkbox inline>2</Checkbox>\n"}
                  {"  <Checkbox inline>3</Checkbox>\n"}
                  {"  <Checkbox inline disabled>4</Checkbox>\n"}
                  {"</div>\n"}
                  {"<div>\n"}
                  {" <Radio inline name='inline' value='option1'>1</Radio>\n"}
                  {" <Radio inline defaultChecked name='inline' value='option2'>2</Radio>\n"}
                  {" <Radio inline name='inline' value='option3'>3</Radio>\n"}
                  {" <Radio inline disabled name='inline' value='option4'>4</Radio>\n"}
                  {"</div>"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Rubix Enhancements [API]' docStyle='bg-red fg-white'>
            <h4 className='fg-black50'><code>getChecked()</code></h4>
            <p>
              {"Access checked state of checkbox/radio. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {rccheckedstate}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>setChecked(true|false)</code></h4>
            <p>
              {"Set checked state of checkbox/radio. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {setrccheckedstate}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>isChecked()</code></h4>
            <p>
              {"Test if checked. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {isrccheckedstate}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>getValue()</code></h4>
            <p>
              {"Convenience function to get the value of the inner span element. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {rcgetvalue}
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
var CheckRadioDocs = React.createClass({
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

module.exports = CheckRadioDocs;
