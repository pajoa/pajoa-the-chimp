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
          <DocUnit name='Bootstrap: NavBar'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Navbars are responsive meta components that serve as navigation headers for your application or site."}
            </p>
            <Well>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle container={this} nav='navcontainer1'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent ref='navcontainer1' collapse>
                    <Nav>
                      <NavItem active href='#'>Link 1</NavItem>
                      <NavItem href='#'>Link 2</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav container={this} menu='navmenu1'>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu ref='navmenu1'>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                    <Nav right>
                      <NavItem href='#'>Link 3</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav container={this} menu='navmenu2'>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu ref='navmenu2'>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<NavBar>\n"}
                  {"  <Container fluid>\n"}
                  {"    <NavHeader>\n"}
                  {"      <NavToggle container={this} nav='navcontainer1'>Toggle navigation</NavToggle>\n"}
                  {"      <NavBrand>Brand</NavBrand>\n"}
                  {"    </NavHeader>\n"}
                  {"    <NavContent ref='navcontainer1' collapse>\n"}
                  {"      <Nav>\n"}
                  {"        <NavItem active href='#'>Link 1</NavItem>\n"}
                  {"        <NavItem href='#'>CSS</NavItem>\n"}
                  {"        <NavItem dropdown>\n"}
                  {"          <DropdownButton nav container={this} menu='navmenu1'>\n"}
                  {"            <span>Dropdown </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu ref='navmenu1'>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </NavItem>\n"}
                  {"      </Nav>\n"}
                  {"      <Nav right>\n"}
                  {"        <NavItem href='#'>Link 3</NavItem>\n"}
                  {"        <NavItem dropdown>\n"}
                  {"          <DropdownButton nav container={this} menu='navmenu2'>\n"}
                  {"            <span>Dropdown </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu ref='navmenu2'>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </NavItem>\n"}
                  {"      </Nav>\n"}
                  {"    </NavContent>\n"}
                  {"  </Container>\n"}
                  {"</NavBar>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Forms</h4>
            <p>
              {"Place form content within NavForm for proper vertical alignment and collapsed behavior in narrow viewports."}
            </p>
            <Well>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle container={this} nav='navcontainer'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent ref='navcontainer' collapse>
                    <NavForm left role='search'>
                      <FormGroup>
                        <Input placeholder='Search' />
                      </FormGroup>{' '}
                      <Button outlined onlyOnHover bsStyle='darkgreen45'>Submit</Button>
                    </NavForm>
                    <Nav right>
                      <NavItem href='#'>Link 3</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav container={this} menu='menu39'>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu ref='menu39'>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<NavBar>\n"}
                  {"  <Container fluid>\n"}
                  {"    <NavHeader>\n"}
                  {"      <NavToggle container={this} nav='navcontainer'>Toggle navigation</NavToggle>\n"}
                  {"      <NavBrand>Brand</NavBrand>\n"}
                  {"    </NavHeader>\n"}
                  {"    <NavContent ref='navcontainer' collapse>\n"}
                  {"      <NavForm left role='search'>\n"}
                  {"        <FormGroup>\n"}
                  {"          <Input placeholder='Search' />\n"}
                  {"        </FormGroup>{' '}\n"}
                  {"        <Button outlined onlyOnHover bsStyle='darkgreen45'>Submit</Button>\n"}
                  {"      </NavForm>\n"}
                  {"      <Nav right>\n"}
                  {"        <NavItem href='#'>Link 3</NavItem>\n"}
                  {"        <NavItem dropdown>\n"}
                  {"          <DropdownButton nav container={this} menu='menu39'>\n"}
                  {"            <span>Dropdown </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu ref='menu39'>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </NavItem>\n"}
                  {"      </Nav>\n"}
                  {"    </NavContent>\n"}
                  {"  </Container>\n"}
                  {"</NavBar>\n"}
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
var NavBarDocs = React.createClass({
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

module.exports = NavBarDocs;
