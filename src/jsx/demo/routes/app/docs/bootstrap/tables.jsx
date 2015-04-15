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
          <DocUnit name='Bootstrap: Tables'>
            <h4 className='fg-black50'>Basic example</h4>
            <p>
              {"For basic styling—light padding and only horizontal dividers use the <Table> component."}
            </p>
            <Well className='bg-white'>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table>\n"}
                  {"  <thead>\n"}
                  {"    <tr>\n"}
                  {"      <th>#</th>\n"}
                  {"      <th>First Name</th>\n"}
                  {"      <th>Last Name</th>\n"}
                  {"      <th>Username</th>\n"}
                  {"    </tr>\n"}
                  {"  </thead>\n"}
                  {"  <tbody>\n"}
                  {"    <tr>\n"}
                  {"      <td>1</td>\n"}
                  {"      <td>Mark</td>\n"}
                  {"      <td>Otto</td>\n"}
                  {"      <td>@mdo</td>\n"}
                  {"    </tr>\n"}
                  {"    <tr>\n"}
                  {"      <td>2</td>\n"}
                  {"      <td>Jacob</td>\n"}
                  {"      <td>Thornton</td>\n"}
                  {"      <td>@fat</td>\n"}
                  {"    </tr>\n"}
                  {"    <tr>\n"}
                  {"      <td>3</td>\n"}
                  {"      <td>Larry</td>\n"}
                  {"      <td>the Bird</td>\n"}
                  {"      <td>@twitter</td>\n"}
                  {"    </tr>\n"}
                  {"  </tbody>\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Striped rows</h4>
            <p>
              {"Use "}<code>{"striped"}</code>{" option to add zebra-striping to any table row within the <tbody>."}
            </p>
            <Well className='bg-white'>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table striped>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Bordered rows</h4>
            <p>
              {"Add "}<code>{"bordered"}</code>{" option for borders on all sides of the table and cells."}
            </p>
            <Well className='bg-white'>
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='2'>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@TwBootstrap</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table bordered>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Hover rows</h4>
            <p>
              {"Add "}<code>{"hover"}</code>{" to enable a hover state on table rows within a <tbody>."}
            </p>
            <Well className='bg-white'>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table hover>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Condensed table</h4>
            <p>
              {"Add "}<code>{"condensed"}</code>{" to make tables more compact by cutting cell padding in half."}
            </p>
            <Well className='bg-white'>
              <Table condensed>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table condensed>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Contextual classes</h4>
            <p>
              {"Use contextual classes to color table rows or individual cells."}
            </p>
            <Well className='bg-white'>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='active'>
                    <td>1</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='success'>
                    <td>3</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='info'>
                    <td>5</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='warning'>
                    <td>7</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='danger'>
                    <td>9</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<!-- On rows -->\n"}
                  {"<tr className='active'>...</tr>\n"}
                  {"<tr className='success'>...</tr>\n"}
                  {"<tr className='warning'>...</tr>\n"}
                  {"<tr className='danger'>...</tr>\n"}
                  {"<tr className='info'>...</tr>\n\n"}
                  {"<!-- On cells (`td` or `th`) -->\n"}
                  {"<tr>\n"}
                  {"  <td className='active'>...</td>\n"}
                  {"  <td className='success'>...</td>\n"}
                  {"  <td className='warning'>...</td>\n"}
                  {"  <td className='danger'>...</td>\n"}
                  {"  <td className='info'>...</td>\n"}
                  {"</tr>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Responsive tables</h4>
            <p>
              {"Create responsive tables by adding responsive option to any <Table> to make them scroll horizontally on small devices."}
            </p>
            <Well className='bg-white'>
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table responsive>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Rubix Enhancements'>
            <h4 className='fg-black50'>Collapsed</h4>
            <p>
              {"<Table> component with zero margins"}
            </p>
            <Well className='bg-white'>
              <Table collapsed>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table collapsed>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Align Top/Middle/Bottom</h4>
            <p>
              {"<Table> alignment (alignTop/alignMiddle/alignBottom)"}
            </p>
            <Well className='bg-white'>
              <Table alignBottom>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td width='20%'><LoremIpsum query='3s'/></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Table alignBottom>\n"}
                  {"  ...\n"}
                  {"</Table>\n"}
                </code>
              </pre>
            </div>
            <hr/>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var TablesDocumentation = React.createClass({
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

module.exports = TablesDocumentation;
