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
          <DocUnit name='Bootstrap: Buttons'>
            <h4 className='fg-black50'>Colors</h4>
            <p>
              {"To style a button use the "}<code>bsStyle</code>{" attribute. More colors are available (Check the colors.scss file for more)."}
            </p>
            <Well>
              <Button>Default</Button>{' '}
              <Button bsStyle='primary'>Primary</Button>{' '}
              <Button bsStyle='success'>Success</Button>{' '}
              <Button bsStyle='info'>Info</Button>{' '}
              <Button bsStyle='warning'>Warning</Button>{' '}
              <Button bsStyle='danger'>Danger</Button>{' '}
              <Button bsStyle='link'>Link</Button>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Button>Default</Button>\n"}
                  {"<Button bsStyle='primary'>Primary</Button>\n"}
                  {"<Button bsStyle='success'>Success</Button>\n"}
                  {"<Button bsStyle='info'>Info</Button>\n"}
                  {"<Button bsStyle='warning'>Warning</Button>\n"}
                  {"<Button bsStyle='danger'>Danger</Button>\n"}
                  {"<Button bsStyle='link'>Link</Button>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Sizes</h4>
            <p>
              {"Fancy larger or smaller buttons? Add "}<code>lg</code>, <code>sm</code> or <code>xs</code>{" attribute for additional sizes."}
            </p>
            <Well>
              <p>
                <Button lg bsStyle='primary'>Large Button</Button>
              </p>
              <p>
                <Button bsStyle='primary'>Default Button</Button>
              </p>
              <p>
                <Button sm bsStyle='primary'>Small Button</Button>
              </p>
              <p>
                <Button xs bsStyle='primary'>Extra small Button</Button>
              </p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p>\n"}
                  {"  <Button lg bsStyle='primary'>Large Button</Button>\n"}
                  {"</p>\n"}
                  {"<p>\n"}
                  {"  <Button bsStyle='primary'>Default Button</Button>\n"}
                  {"</p>\n"}
                  {"<p>\n"}
                  {"  <Button sm bsStyle='primary'>Small Button</Button>\n"}
                  {"</p>\n"}
                  {"<p>\n"}
                  {"  <Button xs bsStyle='primary'>Extra small Button</Button>\n"}
                  {"</p>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Blocks</h4>
            <p>
              {"Create block level buttons—those that span the full width of a parent— by adding "}<code>block</code>
            </p>
            <Well>
              <p>
                <Button lg block bsStyle='primary'>Large Block Level Button</Button>
              </p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p>\n"}
                  {"  <Button lg block bsStyle='primary'>Large Block Level Button</Button>\n"}
                  {"</p>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Active State</h4>
            <p>
              {"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active"}
            </p>
            <Well>
              <p>
                <Button lg bsStyle='primary'>Normal Button</Button>{' '}
                <Button lg bsStyle='primary' active>Active Button</Button>
              </p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p>\n"}
                  {"  <Button lg bsStyle='primary'>Normal Button</Button>{' '}\n"}
                  {"  <Button lg bsStyle='primary' active>Active Button</Button>\n"}
                  {"</p>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Disabled State</h4>
            <p>
              {"Make buttons look unclickable by fading them back 50%."}
            </p>
            <Well>
              <p>
                <Button lg bsStyle='primary'>Normal Button</Button>{' '}
                <Button lg bsStyle='primary' disabled>Disabled Button</Button>
              </p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p>\n"}
                  {"  <Button lg bsStyle='primary'>Normal Button</Button>{' '}\n"}
                  {"  <Button lg bsStyle='primary' disabled>Disabled Button</Button>\n"}
                  {"</p>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Rubix Enhancements' docStyle='bg-red fg-white'>
            <h4 className='fg-black50'>Outlined</h4>
            <p>
              {"Outlined button."}
            </p>
            <Well className='bg-desaturateddarkblue75'>
              <Button bsStyle='darkgreen45' outlined>45% Dark Green Button</Button>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Button bsStyle='darkgreen45' outlined>45% Dark Green Button</Button>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Inverse</h4>
            <p>
              {"Inverse foreground/background colors."}
            </p>
            <Well className='bg-desaturateddarkblue75'>
              <Button bsStyle='desaturateddarkblue75' inverse>75% Desaturated Dark Blue</Button>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Button bsStyle='desaturateddarkblue75' inverse>75% Desaturated Dark Blue</Button>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Rounded</h4>
            <p>
              {"Rounded button."}
            </p>
            <Well className='bg-desaturateddarkblue75'>
              <Button bsStyle='green' rounded><Icon glyph='icon-fontello-mail' /></Button>{' '}
              <Button bsStyle='blue' rounded><Icon glyph='icon-fontello-rss-1' /></Button>{' '}
              <Button bsStyle='red' rounded><Icon glyph='icon-fontello-cog' /></Button>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Button bsStyle='green' rounded><Icon glyph='icon-fontello-mail' /></Button>{' '}\n"}
                  {"<Button bsStyle='blue' rounded><Icon glyph='icon-fontello-rss-1' /></Button>{' '}\n"}
                  {"<Button bsStyle='red' rounded><Icon glyph='icon-fontello-cog' /></Button>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Only Activate styles on Hover/Focus</h4>
            <p>
              {"Add styles only on button hover/focus."}
            </p>
            <Well className='bg-white'>
              <Button bsStyle='pink' onlyOnHover>Pink Button (only on hover)</Button>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Button bsStyle='pink' onlyOnHover>Pink Button (only on hover)</Button>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Retain Background</h4>
            <p>
              {"Outlined white border and color in the default state but behaves like non-outlined, colored background + border and white foreground on hover/focused state."}
            </p>
            <Well className='bg-desaturateddarkblue75'>
              <Button bsStyle='darkcyan' retainBackground>Dark Cyan Button</Button>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Button bsStyle='darkcyan' retainBackground>Dark Cyan Button</Button>\n"}
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
var ButtonsDocs = React.createClass({
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

module.exports = ButtonsDocs;
