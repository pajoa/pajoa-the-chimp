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
          <DocUnit name='Bootstrap: List Groups'>
            <h4 className='fg-black50'>Basic example</h4>
            <p>
              {"List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."}
            </p>
            <Well className='bg-white'>
              <ListGroup>
                <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>
              </ListGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ListGroup>\n"}
                  {"  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"</ListGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Badges</h4>
            <p>
              {"Add the badges component to any list group item and it will automatically be positioned on the right."}
            </p>
            <Well className='bg-white'>
              <ListGroup>
                <ListGroupItem><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>
              </ListGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ListGroup>\n"}
                  {"  <ListGroupItem><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"</ListGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Linked items</h4>
            <p>
              {"Linkify list group items."}
            </p>
            <Well className='bg-white'>
              <ListGroup>
                <ListGroupItem active><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>
              </ListGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ListGroup>\n"}
                  {"  <ListGroupItem active><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"</ListGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Disabled items</h4>
            <p>
              {"Add disabled to a ListGroupItem to gray it out to appear disabled."}
            </p>
            <Well className='bg-white'>
              <ListGroup>
                <ListGroupItem disabled><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>
              </ListGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ListGroup>\n"}
                  {"  <ListGroupItem disabled><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"</ListGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Contextual items</h4>
            <p>
              {"Use contextual classes to style list items, default or linked. Also includes active state."}
            </p>
            <Well className='bg-white'>
              <ListGroup>
                <ListGroupItem success><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem info><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem warning><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>
                <ListGroupItem danger><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>
              </ListGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ListGroup>\n"}
                  {"  <ListGroupItem success><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem info><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem warning><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"  <ListGroupItem danger><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n"}
                  {"</ListGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Custom content</h4>
            <p>
              {"Add nearly any HTML within, even for linked list groups like the one below."}
            </p>
            <Well className='bg-white'>
              <ListGroup>
                <ListGroupItem active>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    <LoremIpsum query='2s'/>
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    <LoremIpsum query='2s'/>
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    <LoremIpsum query='2s'/>
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    <LoremIpsum query='2s'/>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ListGroup>\n"}
                  {"  <ListGroupItem active>\n"}
                  {"    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n"}
                  {"    <ListGroupItemText>\n"}
                  {"      <LoremIpsum query='2s'/>\n"}
                  {"    </ListGroupItemText>\n"}
                  {"  </ListGroupItem>\n"}
                  {"  <ListGroupItem>\n"}
                  {"    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n"}
                  {"    <ListGroupItemText>\n"}
                  {"      <LoremIpsum query='2s'/>\n"}
                  {"    </ListGroupItemText>\n"}
                  {"  </ListGroupItem>\n"}
                  {"  <ListGroupItem>\n"}
                  {"    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n"}
                  {"    <ListGroupItemText>\n"}
                  {"      <LoremIpsum query='2s'/>\n"}
                  {"    </ListGroupItemText>\n"}
                  {"  </ListGroupItem>\n"}
                  {"  <ListGroupItem>\n"}
                  {"    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n"}
                  {"    <ListGroupItemText>\n"}
                  {"      <LoremIpsum query='2s'/>\n"}
                  {"    </ListGroupItemText>\n"}
                  {"  </ListGroupItem>\n"}
                  {"</ListGroup>\n"}
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
var ListGroupDocs = React.createClass({
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

module.exports = ListGroupDocs;
