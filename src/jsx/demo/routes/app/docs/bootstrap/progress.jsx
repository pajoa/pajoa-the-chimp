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
          <DocUnit name='Bootstrap: Progress bars'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."}
            </p>
            <Well className='bg-white'>
              <Progress collapseBottom value={60} min={0} max={100} />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Progress value={60} min={0} max={100} />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>With label</h4>
            <Well className='bg-white'>
              <Progress withLabel collapseBottom value={60} min={0} max={100} />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Progress withLabel value={60} min={0} max={100} />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Contextual alternatives</h4>
            <p>{"Progress bars use some of the same button and alert classes for consistent styles."}</p>
            <Well className='bg-white'>
              <Progress success value={40} min={0} max={100} />
              <Progress info value={20} min={0} max={100} />
              <Progress warning value={60} min={0} max={100} />
              <Progress danger collapseBottom value={80} min={0} max={100} />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Progress success value={40} min={0} max={100} />\n"}
                  {"<Progress info value={20} min={0} max={100} />\n"}
                  {"<Progress warning value={60} min={0} max={100} />\n"}
                  {"<Progress danger value={80} min={0} max={100} />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Striped</h4>
            <p>{"Uses a gradient to create a striped effect."}</p>
            <Well className='bg-white'>
              <Progress striped success value={40} min={0} max={100} />
              <Progress striped info value={20} min={0} max={100} />
              <Progress striped warning value={60} min={0} max={100} />
              <Progress striped danger collapseBottom value={80} min={0} max={100} />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Progress striped success value={40} min={0} max={100} />\n"}
                  {"<Progress striped info value={20} min={0} max={100} />\n"}
                  {"<Progress striped warning value={60} min={0} max={100} />\n"}
                  {"<Progress striped danger value={80} min={0} max={100} />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Animated</h4>
            <p>{"Add active to animate the stripes right to left."}</p>
            <Well className='bg-white'>
              <Progress striped active success value={40} min={0} max={100} />
              <Progress striped active info value={20} min={0} max={100} />
              <Progress striped active warning value={60} min={0} max={100} />
              <Progress striped active danger collapseBottom value={80} min={0} max={100} />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Progress striped active success value={40} min={0} max={100} />\n"}
                  {"<Progress striped active info value={20} min={0} max={100} />\n"}
                  {"<Progress striped active warning value={60} min={0} max={100} />\n"}
                  {"<Progress striped active danger value={80} min={0} max={100} />\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Stacked</h4>
            <p>{"Place multiple progress bars by stacking them in a ProgressGroup."}</p>
            <Well className='bg-white'>
              <ProgressGroup collapseBottom>
                <Progress active striped info withLabel value={35} min={0} max={100} />
                <Progress active striped danger withLabel value={20} min={0} max={100} />
                <Progress active striped warning withLabel value={20} min={0} max={100} />
                <Progress active striped success withLabel value={10} min={0} max={100} />
              </ProgressGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ProgressGroup collapseBottom>\n"}
                  {"  <Progress active striped info withLabel value={35} min={0} max={100} />\n"}
                  {"  <Progress active striped danger withLabel value={20} min={0} max={100} />\n"}
                  {"  <Progress active striped warning withLabel value={20} min={0} max={100} />\n"}
                  {"  <Progress active striped success withLabel value={10} min={0} max={100} />\n"}
                  {"</ProgressGroup>\n"}
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
var ProgressDocs = React.createClass({
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

module.exports = ProgressDocs;
