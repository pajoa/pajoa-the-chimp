var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var Doc = require('./bootstrap/doc_container.jsx');
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
          <DocUnit name='Rubix Documentation: L20n'>
            <Alert info>
              {"Mozilla L20n is a new localization framework developed by Mozilla for the Web. It allows localizers to put small bits of logic into localization resources to codify the grammar of the language. If you are unfamiliar with Mozilla's awesome framework we suggest you go through the learning material provided here: "}<AlertLink href='http://l20n.org/learn/' target='_blank'>L20n By Example</AlertLink>
            </Alert>
            <div>
              Of all the concepts there are three main concepts that are required to be understood by developers using L20n:
              <ul>
                <li><strong>Entity: </strong>{"Entities are containers for information. You use entities to identify, store, and recall information to be used in the software's UI."}</li>
                <li><strong>Context: </strong>{"Each context stores information about languages available to it, downloaded resource files and all entities in these resource files. Software developers can create contexts and query them for values of specific entities."}</li>
                <li><strong>Context data: </strong>{"Context data is how entities defined in L20n resources can interact with non-localizable variables provided by the developer. Context data is generally unknown at the time of writing the L20n code. By assigning values to it, the developer makes it known at runtime."}</li>
              </ul>
            </div>
            <p>
              {"To use L20n you need to get localizers to write language specific files following the conventions set by the L20n framework. These files (should be named strings.l20n) should then be stored in the "}<strong>public/locales/app</strong>{" folder with names reflecting language codes (preferably ISO 639-1 format). We have also provided a handy flags icon set (courtesy "}<a href='http://gosquared.com' target='_blank'>GoSquared</a>{") for your use. You can use currenly only use 1 file per language and should follow this format: "}<strong>{"public/locales/app/<two-letter-lang-code>/strings.l20n"}</strong>{". If in doubt, refer to the file structure in "}<strong>{"public/locales/demo"}</strong>.
            </p>
            <p>
              {"The markup for invoking L20n entities is as follows:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Entity entity='some-entity-here' data={{a: 'some context data', b: 'some other context data'}} />\n"}
                </code>
              </pre>
            </div>
            <p>
              {"The Entity component defined above requires you to have 'entity' property defined alongwith an optional 'data' property. React takes care of keeping the rendered data in sync and the resultant output is actually a span element (so it can be used within Buttons or any other block element without compromising the interface)."}
            </p>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var L20nDocs = React.createClass({
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

module.exports = L20nDocs;
