var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var textExtract = require('../../../../common/txtextract.js');
var basictab = textExtract(require('../snippets/basictab.txt'));
var tabselect = textExtract(require('../snippets/tabselect.txt'));

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
    this.refs.tablist.selectTab('pane', 'tab2:mdo');
  },
  handleSelect: function(tabprops) {
    alert(tabprops.pane);
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Tabs'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus."}
            </p>
            <Well className='bg-white'>
              <TabList bsStyle='orange75' onTabSelect={this.handleSelect} listName='tab1'>
                <Tab pane='tab1:home' active>Home</Tab>
                <Tab pane='tab1:profile'>Profile</Tab>
                <Tab>
                  <DropdownButton tab container={this} menu='menu33'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu autoHide ref='menu33' bsStyle='orange75'>
                    <MenuItem href='#'>
                      <Tab dropdown pane='tab1:fat'>
                        @fat
                      </Tab>
                    </MenuItem>
                    <MenuItem href='#'>
                      <Tab dropdown pane='tab1:mdo'>
                        @mdo
                      </Tab>
                    </MenuItem>
                  </Menu>
                </Tab>
              </TabList>
              <TabContent>
                <TabPane tab='tab1:home' active>
                  <LoremIpsum query='5s' />
                </TabPane>
                <TabPane tab='tab1:profile'>
                  <LoremIpsum query='5s' />
                </TabPane>
                <TabPane tab='tab1:fat'>
                  <LoremIpsum query='5s' />
                </TabPane>
                <TabPane tab='tab1:mdo'>
                  <LoremIpsum query='5s' />
                </TabPane>
              </TabContent>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {basictab}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Tabs API' docStyle='bg-red fg-white'>
            <h4 className='fg-black50'><code>selectTab(key, value)</code></h4>
            <p>
              {"Select a tab programmatically by calling selectTab using a props key and value as a constraint."}
            </p>
            <Well className='bg-white'>
              <TabList bsStyle='orange75' ref='tablist' listName='tab2'>
                <Tab pane='tab2:home' active>Home</Tab>
                <Tab pane='tab2:profile'>Profile</Tab>
                <Tab>
                  <DropdownButton tab container={this} menu='menu34'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu autoHide ref='menu34' bsStyle='orange75'>
                    <MenuItem href='#'>
                      <Tab dropdown pane='tab2:fat'>
                        @fat
                      </Tab>
                    </MenuItem>
                    <MenuItem href='#'>
                      <Tab dropdown pane='tab2:mdo'>
                        @mdo
                      </Tab>
                    </MenuItem>
                  </Menu>
                </Tab>
              </TabList>
              <TabContent>
                <TabPane tab='tab2:home' active>
                  <LoremIpsum query='5s' />
                </TabPane>
                <TabPane tab='tab2:profile'>
                  <LoremIpsum query='5s' />
                </TabPane>
                <TabPane tab='tab2:fat'>
                  <LoremIpsum query='5s' />
                </TabPane>
                <TabPane tab='tab2:mdo'>
                  <LoremIpsum query='5s' />
                </TabPane>
              </TabContent>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {tabselect}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Pills'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Similar markup to Tabs as above. Even the API is same as we reuse the same component."}
            </p>
            <Well className='bg-white'>
              <div style={{marginLeft: -12.5, marginRight: -12.5}}>
                <TabList pills bsStyle='orange75' listName='tab3'>
                  <Tab pane='tab3:home' active>Home</Tab>
                  <Tab pane='tab3:profile'>Profile</Tab>
                  <Tab>
                    <DropdownButton tab container={this} menu='menupills1'>
                      <span>Dropdown </span><Caret/>
                    </DropdownButton>
                    <Menu autoHide ref='menupills1' bsStyle='orange75'>
                      <MenuItem href='#'>
                        <Tab dropdown pane='tab3:fat'>
                          @fat
                        </Tab>
                      </MenuItem>
                      <MenuItem href='#'>
                        <Tab dropdown pane='tab3:mdo'>
                          @mdo
                        </Tab>
                      </MenuItem>
                    </Menu>
                  </Tab>
                </TabList>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <TabContent style={{marginTop: 12.5}}>
                        <TabPane tab='tab3:home' active>
                          <LoremIpsum query='5s' />
                        </TabPane>
                        <TabPane tab='tab3:profile'>
                          <LoremIpsum query='5s' />
                        </TabPane>
                        <TabPane tab='tab3:fat'>
                          <LoremIpsum query='5s' />
                        </TabPane>
                        <TabPane tab='tab3:mdo'>
                          <LoremIpsum query='5s' />
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<TabList pills bsStyle='orange75' listName='tab3'>\n"}
                  {"  <Tab pane='tab3:home' active>Home</Tab>\n"}
                  {"  <Tab pane='tab3:profile'>Profile</Tab>\n"}
                  {"  <Tab>\n"}
                  {"    <DropdownButton tab container={this} menu='menupills1'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu autoHide ref='menupills1' bsStyle='orange75'>\n"}
                  {"      <MenuItem href='#'>\n"}
                  {"        <Tab dropdown pane='tab3:fat'>\n"}
                  {"          @fat\n"}
                  {"        </Tab>\n"}
                  {"      </MenuItem>\n"}
                  {"      <MenuItem href='#'>\n"}
                  {"        <Tab dropdown pane='tab3:mdo'>\n"}
                  {"          @mdo\n"}
                  {"        </Tab>\n"}
                  {"      </MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </Tab>\n"}
                  {"</TabList>\n"}
                  {"<Grid>\n"}
                  {"  <Row>\n"}
                  {"    <Col xs={12}>\n"}
                  {"      <TabContent>\n"}
                  {"        <TabPane tab='tab3:home' active>\n"}
                  {"          <p><LoremIpsum query='5s' /></p>\n"}
                  {"        </TabPane>\n"}
                  {"        <TabPane tab='tab3:profile'>\n"}
                  {"          <p><LoremIpsum query='5s' /></p>\n"}
                  {"        </TabPane>\n"}
                  {"        <TabPane tab='tab3:fat'>\n"}
                  {"          <p><LoremIpsum query='5s' /></p>\n"}
                  {"        </TabPane>\n"}
                  {"        <TabPane tab='tab3:mdo'>\n"}
                  {"          <p><LoremIpsum query='5s' /></p>\n"}
                  {"        </TabPane>\n"}
                  {"      </TabContent>\n"}
                  {"    </Col>\n"}
                  {"  </Row>\n"}
                  {"</Grid>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Justified pills</h4>
            <p>
              {"Easily make tabs or pills equal widths of their parent."}
            </p>
            <Well className='bg-white'>
              <div style={{marginLeft: -12.5, marginRight: -12.5}}>
                <TabList pills justified bsStyle='orange75' listName='tab4'>
                  <Tab pane='tab4:home' active>Home</Tab>
                  <Tab pane='tab4:profile'>Profile</Tab>
                  <Tab>
                    <DropdownButton tab container={this} menu='menupills2'>
                      <span>Dropdown </span><Caret/>
                    </DropdownButton>
                    <Menu autoHide ref='menupills2' bsStyle='orange75'>
                      <MenuItem href='#'>
                        <Tab dropdown pane='tab4:fat'>
                          @fat
                        </Tab>
                      </MenuItem>
                      <MenuItem href='#'>
                        <Tab dropdown pane='tab4:mdo'>
                          @mdo
                        </Tab>
                      </MenuItem>
                    </Menu>
                  </Tab>
                </TabList>
                <TabContent style={{marginTop: 12.5}}>
                  <TabPane tab='tab4:home' active>
                    <LoremIpsum query='5s' />
                  </TabPane>
                  <TabPane tab='tab4:profile'>
                    <LoremIpsum query='5s' />
                  </TabPane>
                  <TabPane tab='tab4:fat'>
                    <LoremIpsum query='5s' />
                  </TabPane>
                  <TabPane tab='tab4:mdo'>
                    <LoremIpsum query='5s' />
                  </TabPane>
                </TabContent>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<TabList pills bsStyle='orange75' listName='tab4'>\n"}
                  {"  <Tab pane='tab4:home' active>Home</Tab>\n"}
                  {"  <Tab pane='tab4:profile'>Profile</Tab>\n"}
                  {"  <Tab>\n"}
                  {"    <DropdownButton tab container={this} menu='menupills2'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu autoHide ref='menupills2' bsStyle='orange75'>\n"}
                  {"      <MenuItem href='#'>\n"}
                  {"        <Tab dropdown pane='tab4:fat'>\n"}
                  {"          @fat\n"}
                  {"        </Tab>\n"}
                  {"      </MenuItem>\n"}
                  {"      <MenuItem href='#'>\n"}
                  {"        <Tab dropdown pane='tab4:mdo'>\n"}
                  {"          @mdo\n"}
                  {"        </Tab>\n"}
                  {"      </MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </Tab>\n"}
                  {"</TabList>\n"}
                  {"<TabContent>\n"}
                  {"  <TabPane tab='tab4:home' active>\n"}
                  {"    <p><LoremIpsum query='5s' /></p>\n"}
                  {"  </TabPane>\n"}
                  {"  <TabPane tab='tab4:profile'>\n"}
                  {"    <p><LoremIpsum query='5s' /></p>\n"}
                  {"  </TabPane>\n"}
                  {"  <TabPane tab='tab4:fat'>\n"}
                  {"    <p><LoremIpsum query='5s' /></p>\n"}
                  {"  </TabPane>\n"}
                  {"  <TabPane tab='tab4:mdo'>\n"}
                  {"    <p><LoremIpsum query='5s' /></p>\n"}
                  {"  </TabPane>\n"}
                  {"</TabContent>\n"}
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
var NavDocs = React.createClass({
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

module.exports = NavDocs;
