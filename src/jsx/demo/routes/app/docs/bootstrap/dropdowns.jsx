var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var textExtract = require('../../../../common/txtextract.js');
var dropdownbasic = textExtract(require('../snippets/dropdownbasic.txt'));
var dropdownalign = textExtract(require('../snippets/dropdownalign.txt'));

var Body = React.createClass({
  handleSelection: function(itemprops) {
    // access any property attached to MenuItem child component.
    // ex: itemprops.keyaction === 'another-action' if MenuItem
    // with "Another action" is clicked.
    var value = itemprops.children;
    alert(value);
    if(itemprops.keyaction === 'another-action')
      alert('You clicked another-action');
  },
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Dropdowns'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Toggleable, contextual menu for displaying lists of links. The "}<code>Dropdown</code>{" component contains the entire menu with a special "}<code>Button</code>{" subclass "}<code>DropdownButton</code>.{" Whatever property/attribute you can pass to "}<code>Button</code>{" component can also be passed to "}<code>DropdownButton</code>{". However "}<code>DropdownButton</code>{" has two special props: "}<code>container</code>{" and "}<code>menu</code>{". The "}<code>container</code>{" points to the current React class and "}<code>menu</code>{" points to the menu you would like to toggle. "}<code>Dropdown</code>{" component also contains a "}<code>Menu</code>{" component which is a container for all "}<code>MenuItem</code>s. <code>Caret</code>{" component adds a caret to the dropdown button."}
            </p>
            <p>
              {"As you can see it's much shorter than it's Bootstrap counterpart. We'll be covering individual parts (DropdownButton, Menu, MenuItem) later in the documentation."}
            </p>
            <Well>
              <Dropdown>
                <DropdownButton bsStyle='blue' container={this} menu='menu1'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu1' bsStyle='blue' onItemSelect={this.handleSelection}>
                  <MenuItem active href='#'>Action</MenuItem>
                  <MenuItem keyaction='another-action' href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {dropdownbasic}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Alignment</h4>
            <p>
              {"By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add "}<code>alignRight</code>{" to right align the dropdown menu."}
            </p>
            <Well className='text-right'>
              <Dropdown>
                <DropdownButton bsStyle='red' container={this} menu='menu2'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu2' bsStyle='red' onItemSelect={this.handleSelection} alignRight>
                  <MenuItem active href='#'>Action</MenuItem>
                  <MenuItem keyaction='another-action' href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {dropdownalign}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Headers</h4>
            <p>
              {"Add a header to label sections of actions in any dropdown menu."}
            </p>
            <Well>
              <Dropdown>
                <DropdownButton bsStyle='green' container={this} menu='menu3'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='green' ref='menu3'>
                  <MenuItem header>Dropdown header</MenuItem>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem header>Dropdown header</MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Dropdown>\n"}
                  {"  <DropdownButton bsStyle='green' container={this} menu='menu3'>\n"}
                  {"    <span>Dropdown </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='green' ref='menu3'>\n"}
                  {"    <MenuItem header>Dropdown header</MenuItem>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider/>\n"}
                  {"    <MenuItem header>Dropdown header</MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</Dropdown>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Disabled menu item</h4>
            <p>
              {"Add prop "}<code>disabled</code>{" to a "}<code>{"<MenuItem>"}</code>{" in the dropdown to disable it."}
            </p>
            <Well>
              <Dropdown>
                <DropdownButton bsStyle='orange75' container={this} menu='menu4'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu4' bsStyle='orange75'>
                  <MenuItem href='#'>Regular link</MenuItem>
                  <MenuItem href='#' disabled>Disabled link</MenuItem>
                  <MenuItem href='#'>Another link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Dropdown>\n"}
                  {"  <DropdownButton bsStyle='orange75' container={this} menu='menu4'>\n"}
                  {"    <span>Dropdown </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu4' bsStyle='orange75'>\n"}
                  {"    <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"    <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</Dropdown>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Single button dropdowns</h4>
            <p>
              {"Use a DropdownButton to toggle dropdowns."}
            </p>
            <Well>
              <ButtonGroup>
                <DropdownButton container={this} menu='menu12'>
                  <span>Default </span><Caret/>
                </DropdownButton>
                <Menu ref='menu12'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu13' bsStyle='primary'>
                  <span>Primary </span><Caret/>
                </DropdownButton>
                <Menu ref='menu13' bsStyle='primary'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu14' bsStyle='success'>
                  <span>Success </span><Caret/>
                </DropdownButton>
                <Menu ref='menu14' bsStyle='success'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu15' bsStyle='info'>
                  <span>Info </span><Caret/>
                </DropdownButton>
                <Menu ref='menu15' bsStyle='info'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu16' bsStyle='warning'>
                  <span>Warning </span><Caret/>
                </DropdownButton>
                <Menu ref='menu16' bsStyle='warning'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu17' bsStyle='danger'>
                  <span>Danger </span><Caret/>
                </DropdownButton>
                <Menu ref='menu17' bsStyle='danger'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton container={this} menu='menu12'>\n"}
                  {"    <span>Default </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu12'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton container={this} menu='menu13' bsStyle='primary'>\n"}
                  {"    <span>Primary </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu13' bsStyle='primary'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton container={this} menu='menu14' bsStyle='success'>\n"}
                  {"    <span>Success </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu14' bsStyle='success'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton container={this} menu='menu15' bsStyle='info'>\n"}
                  {"    <span>Info </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu15' bsStyle='info'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton container={this} menu='menu16' bsStyle='warning'>\n"}
                  {"    <span>Warning </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu16' bsStyle='warning'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton container={this} menu='menu17' bsStyle='danger'>\n"}
                  {"    <span>Danger </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu17' bsStyle='danger'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Split button dropdowns</h4>
            <p>
              {"Similarly, create split button dropdowns with the same markup changes, only with a separate Button."}
            </p>
            <Well>
              <ButtonGroup>
                <Button>Default</Button>
                <DropdownButton container={this} menu='menu18'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu18'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='primary'>Primary</Button>
                <DropdownButton container={this} menu='menu19' bsStyle='primary'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu19' bsStyle='primary'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='success'>Success</Button>
                <DropdownButton container={this} menu='menu20' bsStyle='success'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu20' bsStyle='success'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='info'>Info</Button>
                <DropdownButton container={this} menu='menu21' bsStyle='info'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu21' bsStyle='info'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='warning'>Warning</Button>
                <DropdownButton container={this} menu='menu22' bsStyle='warning'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu22' bsStyle='warning'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='danger'>Danger</Button>
                <DropdownButton container={this} menu='menu23' bsStyle='danger'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu23' bsStyle='danger'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup>\n"}
                  {"  <Button>Default</Button>\n"}
                  {"  <DropdownButton container={this} menu='menu18'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu18'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='primary'>Primary</Button>\n"}
                  {"  <DropdownButton container={this} menu='menu19' bsStyle='primary'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu19' bsStyle='primary'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='success'>Success</Button>\n"}
                  {"  <DropdownButton container={this} menu='menu20' bsStyle='success'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu20' bsStyle='success'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='info'>Info</Button>\n"}
                  {"  <DropdownButton container={this} menu='menu21' bsStyle='info'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu21' bsStyle='info'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='warning'>Warning</Button>\n"}
                  {"  <DropdownButton container={this} menu='menu22' bsStyle='warning'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu22' bsStyle='warning'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='danger'>Danger</Button>\n"}
                  {"  <DropdownButton container={this} menu='menu23' bsStyle='danger'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu23' bsStyle='danger'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Dropup variation</h4>
            <p>
              {"Trigger dropup menus by adding dropup prop to a ButtonGroup/Dropdown component."}
            </p>
            <Well>
              <ButtonGroup dropup>
                <Button>Dropup </Button>
                <DropdownButton container={this} menu='menu27'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu27'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup dropup>
                <Button bsStyle='primary'>Dropup </Button>
                <DropdownButton container={this} menu='menu28' bsStyle='primary'>
                  <Caret/>
                </DropdownButton>
                <Menu ref='menu28' bsStyle='primary'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup dropup>\n"}
                  {"  <Button>Dropup </Button>\n"}
                  {"  <DropdownButton container={this} menu='menu27'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu27'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup dropup>\n"}
                  {"  <Button bsStyle='primary'>Dropup </Button>\n"}
                  {"  <DropdownButton container={this} menu='menu28' bsStyle='primary'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu ref='menu28' bsStyle='primary'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
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
var DropdownsDoc = React.createClass({
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

module.exports = DropdownsDoc;
