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
          <DocUnit name='Bootstrap: Selects'>
            <p>
              {"Use the default option, or add "}<code>multiple</code>{" to show multiple options at once."}
            </p>
            <Well>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
              <br/>
              <Select multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Select>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>\n"}
                  {"<Select multiple>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Control Sizing'>
            <p>
              {"Set heights using properties like: "}<code>{"lg"}</code>{" and "}<code>{"sm"}</code>
            </p>
            <Well>
              <Select sm>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
              <br/>
              <Select lg>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Select sm>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>\n"}
                  {"<Select lg>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>"}
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
var SelectDocs = React.createClass({
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

module.exports = SelectDocs;
