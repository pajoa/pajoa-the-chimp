var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var textExtract = require('../../../../common/txtextract.js');
var inputgetdomnode = textExtract(require('../snippets/inputgetdomnode.txt'));
var inputgetchecked = textExtract(require('../snippets/inputgetchecked.txt'));
var inputsetchecked = textExtract(require('../snippets/inputsetchecked.txt'));
var inputgetvalue = textExtract(require('../snippets/inputgetvalue.txt'));

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Basic Inputs'>
            <h4 className='fg-black50'>Default</h4>
            <p>
              {"Most common form control, text-based Input fields. Includes support for all HTML5 types: "}<code>{"text"}</code>{", "}<code>{"password"}</code>{", "}<code>{"datetime"}</code>{", "}<code>{"datetime-local"}</code>{", "}<code>{"date"}</code>{", "}<code>{"month"}</code>{", "}<code>{"time"}</code>{", "}<code>{"week"}</code>{", "}<code>{"number"}</code>{", "}<code>{"email"}</code>{", "}<code>{"url"}</code>{", "}<code>{"search"}</code>{", "}<code>{"tel"}</code>{", and "}<code>{"color"}</code>{"."}
            </p>
            <p>
              {"NOTE: The Input component defined here is case sensitive. We have provided this component so that it saves you time by having to write less. The classname "}<code>form-control</code>{" is added by default to all types defined above."}
            </p>
            <Well>
              <Input type='password' placeholder='Password' />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Input type='password' placeholder='Password' />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Disabled input</h4>
            <p>
              {"Add the "}<code>disabled</code>{" boolean attribute on an input to prevent user input and trigger a slightly different look."}
            </p>
            <Well>
              <Input disabled type='password' placeholder='Password' />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Input disabled type='password' placeholder='Password' />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Readonly input</h4>
            <p>
              {"Add the "}<code>readOnly</code>{" boolean attribute on an input to prevent user input and style the input as disabled."}
            </p>
            <Well>
              <Input readOnly type='password' placeholder='Password' />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Input readOnly type='password' placeholder='Password' />\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Control Sizing'>
            <p>
              {"Set heights using properties like: "}<code>{"lg"}</code>{" and "}<code>{"sm"}</code>
            </p>
            <Well>
              <Input lg type='text' placeholder='Large Input' /><br/>
              <Input sm type='text' placeholder='Small Input' />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Input lg type='text' placeholder='Large Input' />\n"}
                  {"<Input sm type='text' placeholder='Small Input' />\n"}
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
                  {inputgetdomnode}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>getChecked()</code></h4>
            <p>
              {"Access the checked state of a checkbox or radio primitive. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {inputgetchecked}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>setChecked(true|false)</code></h4>
            <p>
              {"Set the checked state of a checkbox or radio primitive. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {inputsetchecked}
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
                  {inputgetvalue}
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
var InputsDocs = React.createClass({
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

module.exports = InputsDocs;
