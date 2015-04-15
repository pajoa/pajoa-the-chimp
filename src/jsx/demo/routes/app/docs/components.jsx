/** @jsx React.DOM */

'use strict';

var Navigation = require('./common/navigation.jsx');

var Components = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  handleSelection: function() {
    alert('handleSelection called!');
  },
  closeDemoModal1: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.refs.modal1.close();
  },
  launchDemoModal1: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.refs.modal1.open();
  },
  componentDidMount: function() {
    $('[data-toggle=tooltip]').tooltip({
      container: 'body'
    });
  },
  render: function() {
    return (
      <Container id='body'>
        <Navigation activeLink='Components'/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Dropdowns: Basic</h3>
              <Dropdown>
                <DropdownButton container={this} menu='menu1'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu1' onItemSelect={this.handleSelection}>
                  <MenuItem active href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem href='#'>Separated link</MenuItem>
                  <MenuItem divider/>
                  <MenuItem noHover style={{width: 350}}>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          Not registered?
                        </Col>
                        <Col xs={6} className='text-right'>
                          <Button bsStyle='success'>Sign Up</Button>
                        </Col>
                      </Row>
                    </Grid>
                  </MenuItem>
                </Menu>
              </Dropdown>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12} className='text-right'>
              <h3>Dropdowns: Alignment</h3>
              <Dropdown>
                <DropdownButton container={this} menu='menu2'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu2' alignRight>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Dropdowns: Headers</h3>
              <Dropdown>
                <DropdownButton container={this} menu='menu3'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu3'>
                  <MenuItem header>Dropdown header</MenuItem>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem header>Dropdown header</MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Dropdowns: Disabled menu items</h3>
              <Dropdown>
                <DropdownButton container={this} menu='menu4'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu ref='menu4'>
                  <MenuItem href='#'>Regular link</MenuItem>
                  <MenuItem href='#' disabled>Disabled link</MenuItem>
                  <MenuItem href='#'>Another link</MenuItem>
                </Menu>
              </Dropdown>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Basic example</h3>
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Button toolbar</h3>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Sizing</h3>
              <ButtonToolbar style={{marginBottom: 10}}>
                <ButtonGroup lg>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </ButtonToolbar>
              <ButtonToolbar style={{marginBottom: 10}}>
                <ButtonGroup>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </ButtonToolbar>
              <ButtonToolbar style={{marginBottom: 10}}>
                <ButtonGroup sm>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </ButtonToolbar>
              <ButtonToolbar style={{marginBottom: 10}}>
                <ButtonGroup xs>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Nesting</h3>
              <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu5'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu5'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Vertical variation</h3>
              <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu6'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu6'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
                <Button>Button</Button>
                <Button>Button</Button>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu7'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu7'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu8'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu8'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu9'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu9'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Justified button groups</h3>
              <ButtonGroup justified style={{marginBottom: 20}}>
                <Button componentClass={React.DOM.a}>Left</Button>
                <Button componentClass={React.DOM.a}>Middle</Button>
                <Button componentClass={React.DOM.a}>Right</Button>
              </ButtonGroup>
              <ButtonGroup justified>
                <Button componentClass={React.DOM.a}>Left</Button>
                <Button componentClass={React.DOM.a}>Middle</Button>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu10'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu10' alignRight>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button groups: Justified button groups <h4>[With <code>&lt;button&gt;</code> elements]</h4></h3>
              <ButtonGroup justified style={{marginBottom: 20}}>
                <ButtonGroup><Button>Left</Button></ButtonGroup>
                <ButtonGroup><Button>Middle</Button></ButtonGroup>
                <ButtonGroup><Button>Right</Button></ButtonGroup>
              </ButtonGroup>
              <ButtonGroup justified>
                <ButtonGroup><Button>Left</Button></ButtonGroup>
                <ButtonGroup><Button>Middle</Button></ButtonGroup>
                <ButtonGroup>
                  <DropdownButton container={this} menu='menu11'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu11' alignRight>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button dropdowns: Single button dropdowns</h3>
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
                <Menu ref='menu13'>
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
                <Menu ref='menu14'>
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
                <Menu ref='menu15'>
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
                <Menu ref='menu16'>
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
                <Menu ref='menu17'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button dropdowns: Split button dropdowns</h3>
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
                <Menu ref='menu19'>
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
                <Menu ref='menu20'>
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
                <Menu ref='menu21'>
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
                <Menu ref='menu22'>
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
                <Menu ref='menu23'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button dropdowns: Sizing</h3>
              <ButtonGroup>
                <DropdownButton container={this} menu='menu24' lg>
                  <span>Large button </span><Caret/>
                </DropdownButton>
                <Menu ref='menu24'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu25' sm>
                  <span>Small button </span><Caret/>
                </DropdownButton>
                <Menu ref='menu25'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton container={this} menu='menu26' xs>
                  <span>Extra small button </span><Caret/>
                </DropdownButton>
                <Menu ref='menu26'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Button dropdowns: Dropup variation</h3>
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
                <Menu ref='menu28'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Input groups: Basic example</h3>
              <InputGroup style={{marginBottom: 25}}>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
              <InputGroup style={{marginBottom: 25}}>
                <Input type='text'/>
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <Input type='text'/>
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Input groups: Sizing</h3>
              <InputGroup style={{marginBottom: 25}} lg>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
              <InputGroup style={{marginBottom: 25}}>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
              <InputGroup sm>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Input groups: Checkboxes and radio addons</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <InputGroup>
                <InputGroupAddon><Checkbox browser native/></InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <InputGroup>
                <InputGroupAddon><Radio browser native/></InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Input groups: Button addons</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <InputGroup>
                <InputGroupButton><Button>Go!</Button></InputGroupButton>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <InputGroup>
                <Input type='text' placeholder='Username'/>
                <InputGroupButton><Button>Go!</Button></InputGroupButton>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Input groups: Button with dropdowns</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <InputGroup>
                <InputGroupButton>
                  <DropdownButton container={this} menu='menu29'>
                    <span>Action </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu29'>
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another Action</MenuItem>
                    <MenuItem href='#'>Something else here</MenuItem>
                    <MenuItem divider></MenuItem>
                    <MenuItem href='#'>Separated link</MenuItem>
                  </Menu>
                </InputGroupButton>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <InputGroup>
                <Input type='text' placeholder='Username'/>
                <InputGroupButton>
                  <DropdownButton container={this} menu='menu30'>
                    <span>Action </span><Caret/>
                  </DropdownButton>
                  <Menu ref='menu30' alignRight>
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another Action</MenuItem>
                    <MenuItem href='#'>Something else here</MenuItem>
                    <MenuItem divider></MenuItem>
                    <MenuItem href='#'>Separated link</MenuItem>
                  </Menu>
                </InputGroupButton>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Input groups: Segmented button dropdowns</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <InputGroup>
                <InputGroupButton>
                  <Button>Action </Button>
                  <DropdownButton container={this} menu='menu31'>
                    <Caret/>
                  </DropdownButton>
                  <Menu ref='menu31'>
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another Action</MenuItem>
                    <MenuItem href='#'>Something else here</MenuItem>
                    <MenuItem divider></MenuItem>
                    <MenuItem href='#'>Separated link</MenuItem>
                  </Menu>
                </InputGroupButton>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <InputGroup>
                <Input type='text' placeholder='Username'/>
                <InputGroupButton>
                  <Button>Action </Button>
                  <DropdownButton container={this} menu='menu32'>
                    <Caret/>
                  </DropdownButton>
                  <Menu ref='menu32' alignRight>
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another Action</MenuItem>
                    <MenuItem href='#'>Something else here</MenuItem>
                    <MenuItem divider></MenuItem>
                    <MenuItem href='#'>Separated link</MenuItem>
                  </Menu>
                </InputGroupButton>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Tabs</h3>
              <TabList>
                <Tab pane='tab1:home' active>Home</Tab>
                <Tab pane='tab1:profile'>Profile</Tab>
                <Tab>
                  <DropdownButton tab container={this} menu='menu33'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu autoHide ref='menu33'>
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
                  {"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."}
                </TabPane>
                <TabPane tab='tab1:profile'>
                  {"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."}
                </TabPane>
                <TabPane tab='tab1:fat'>
                  {"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."}
                </TabPane>
                <TabPane tab='tab1:mdo'>
                  {"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."}
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Pills</h3>
              <TabList pills>
                <Tab pane='pills1:home' active>Home</Tab>
                <Tab pane='pills1:profile'>Profile</Tab>
                <Tab>
                  <DropdownButton tab container={this} menu='menu34'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu autoHide ref='menu34'>
                    <MenuItem href='#'>
                      <Tab dropdown pane='pills1:fat'>
                        @fat
                      </Tab>
                    </MenuItem>
                    <MenuItem href='#'>
                      <Tab dropdown pane='pills1:mdo'>
                        @mdo
                      </Tab>
                    </MenuItem>
                  </Menu>
                </Tab>
              </TabList>
              <TabContent>
                <TabPane tab='pills1:home' active>
                  {"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."}
                </TabPane>
                <TabPane tab='pills1:profile'>
                  {"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."}
                </TabPane>
                <TabPane tab='pills1:fat'>
                  {"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."}
                </TabPane>
                <TabPane tab='pills1:mdo'>
                  {"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."}
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Pills: Stacked</h3>
              <Table style={{marginBottom: 0}}>
                <tbody>
                  <tr>
                    <td style={{width: 150}}>
                      <TabList pills stacked>
                        <Tab pane='pills2:home' active>Home</Tab>
                        <Tab pane='pills2:profile'>Profile</Tab>
                        <Tab>
                          <DropdownButton tab container={this} menu='menu35'>
                            <span>Dropdown </span><Caret/>
                          </DropdownButton>
                          <Menu autoHide ref='menu35'>
                            <MenuItem href='#'>
                              <Tab dropdown pane='pills2:fat'>
                                @fat
                              </Tab>
                            </MenuItem>
                            <MenuItem href='#'>
                              <Tab dropdown pane='pills2:mdo'>
                                @mdo
                              </Tab>
                            </MenuItem>
                          </Menu>
                        </Tab>
                      </TabList>
                    </td>
                    <td>
                      <TabContent>
                        <TabPane tab='pills2:home' active>
                          {"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."}
                        </TabPane>
                        <TabPane tab='pills2:profile'>
                          {"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."}
                        </TabPane>
                        <TabPane tab='pills2:fat'>
                          {"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."}
                        </TabPane>
                        <TabPane tab='pills2:mdo'>
                          {"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."}
                        </TabPane>
                      </TabContent>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Tabs: Justified</h3>
              <TabList justified>
                <Tab pane='tab2:home' active>Home</Tab>
                <Tab pane='tab2:profile'>Profile</Tab>
                <Tab>
                  <DropdownButton tab container={this} menu='menu36'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu autoHide ref='menu36'>
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
                  {"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."}
                </TabPane>
                <TabPane tab='tab2:profile'>
                  {"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."}
                </TabPane>
                <TabPane tab='tab2:fat'>
                  {"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."}
                </TabPane>
                <TabPane tab='tab2:mdo'>
                  {"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."}
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Pills: Justified</h3>
              <TabList pills justified>
                <Tab pane='pills3:home' active>Home</Tab>
                <Tab pane='pills3:profile' disabled>Profile</Tab>
                <Tab>
                  <DropdownButton tab container={this} menu='menu37'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu autoHide ref='menu37'>
                    <MenuItem href='#'>
                      <Tab dropdown pane='pills3:fat'>
                        @fat
                      </Tab>
                    </MenuItem>
                    <MenuItem href='#'>
                      <Tab dropdown pane='pills3:mdo'>
                        @mdo
                      </Tab>
                    </MenuItem>
                  </Menu>
                </Tab>
              </TabList>
              <TabContent>
                <TabPane tab='pills3:home' active>
                  {"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."}
                </TabPane>
                <TabPane tab='pills3:profile'>
                  {"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."}
                </TabPane>
                <TabPane tab='pills3:fat'>
                  {"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."}
                </TabPane>
                <TabPane tab='pills3:mdo'>
                  {"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."}
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle container={this} nav='navcontainer'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent ref='navcontainer' collapse>
                    <Nav>
                      <NavItem active href='#'>Link 1</NavItem>
                      <NavItem link='/docs/css'>CSS</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav container={this} menu='menu38'>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu ref='menu38'>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                    <NavForm left role='search'>
                      <FormGroup>
                        <Input placeholder='Search' />
                      </FormGroup>{' '}
                      <Button>Submit</Button>
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
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <NavText>Signed in as Mark Otto</NavText>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <NavText right>
                      <span>Signed in as </span>
                      <NavLink href='#'>
                        Mark Otto
                      </NavLink>
                    </NavText>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar staticTop>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <Nav>
                      <NavItem href='#' active>Home</NavItem>
                      <NavItem href='#'>Link</NavItem>
                      <NavItem right href='#'>Link</NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <Nav>
                      <NavItem href='#' active>Home</NavItem>
                      <NavItem href='#'>Link</NavItem>
                      <NavItem right href='#'>Link</NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar inverse>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <Nav>
                      <NavItem href='#' active>Home</NavItem>
                      <NavItem href='#'>Link</NavItem>
                      <NavItem right href='#'>Link</NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#'>Library </BLink>
                <BLink href='#' active>Data</BLink>
              </Breadcrumb>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Pagination>
                <Page begin disabled />
                <Page active href='#'>
                  <span>1</span>
                  <span className='sr-only'>(current)</span>
                </Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Pagination lg>
                <Page begin disabled />
                <Page active href='#'>
                  <span>1</span>
                  <span className='sr-only'>(current)</span>
                </Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Pagination sm>
                <Page begin disabled />
                <Page active href='#'>
                  <span>1</span>
                  <span className='sr-only'>(current)</span>
                </Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Pager>
                <Page href='#'>Previous</Page>{' '}
                <Page href='#'>Next</Page>
              </Pager>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Pager>
                <Page previous disabled href='#'>Previous</Page>{' '}
                <Page next href='#'>Next</Page>
              </Pager>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Example heading <BLabel bsStyle='default'>New</BLabel></h1>
              <h2>Example heading <BLabel bsStyle='default'>New</BLabel></h2>
              <h3>Example heading <BLabel bsStyle='default'>New</BLabel></h3>
              <h4>Example heading <BLabel bsStyle='default'>New</BLabel></h4>
              <h5>Example heading <BLabel bsStyle='default'>New</BLabel></h5>
              <h6>Example heading <BLabel bsStyle='default'>New</BLabel></h6>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <BLabel bsStyle='default'>Default</BLabel>{' '}
              <BLabel bsStyle='primary'>Primary</BLabel>{' '}
              <BLabel bsStyle='success'>Success</BLabel>{' '}
              <BLabel bsStyle='info'>Info</BLabel>{' '}
              <BLabel bsStyle='warning'>Warning</BLabel>{' '}
              <BLabel bsStyle='danger'>Danger</BLabel>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Badge bsStyle='default'>Default</Badge>{' '}
              <Badge bsStyle='primary'>Primary</Badge>{' '}
              <Badge bsStyle='success'>Success</Badge>{' '}
              <Badge bsStyle='info'>Info</Badge>{' '}
              <Badge bsStyle='warning'>Warning</Badge>{' '}
              <Badge bsStyle='danger'>Danger</Badge>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Progress value={60} min={0} max={100} />
              <Progress withLabel value={60} min={0} max={100} />
              <Progress withLabel value={0} min={0} max={100} />
              <Progress withLabel value={2} min={0} max={100} />
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Progress info withLabel value={60} min={0} max={100} />
              <Progress danger withLabel value={60} min={0} max={100} />
              <Progress success withLabel value={60} min={0} max={100} />
              <Progress warning withLabel value={60} min={0} max={100} />
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Progress striped info withLabel value={60} min={0} max={100} />
              <Progress striped danger withLabel value={60} min={0} max={100} />
              <Progress striped success withLabel value={60} min={0} max={100} />
              <Progress striped warning withLabel value={60} min={0} max={100} />
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Progress active striped info withLabel value={60} min={0} max={100} />
              <Progress active striped danger withLabel value={60} min={0} max={100} />
              <Progress active striped success withLabel value={60} min={0} max={100} />
              <Progress active striped warning withLabel value={60} min={0} max={100} />
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <ProgressGroup>
                <Progress stack active striped info withLabel value={35} min={0} max={100} />
                <Progress stack active striped danger withLabel value={20} min={0} max={100} />
                <Progress stack active striped warning withLabel value={20} min={0} max={100} />
                <Progress stack active striped success withLabel value={10} min={0} max={100} />
              </ProgressGroup>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Modal style={{position: 'relative', display: 'block'}}>
                <ModalHeader>
                  <Button close />
                  <h4 className='modal-title'>Modal title</h4>
                </ModalHeader>
                <ModalBody>
                  <p>One fine body&hellip;</p>
                </ModalBody>
                <ModalFooter>
                  <Button>Close</Button>
                  <Button bsStyle='primary'>Save changes</Button>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Modal ref='modal1'>
                <ModalHeader>
                  <Button onClick={this.closeDemoModal1} onTouchEnd={this.closeDemoModal1} close />
                  <h4 className='modal-title'>Modal title</h4>
                </ModalHeader>
                <ModalBody>
                  <p>One fine body&hellip;</p>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={this.closeDemoModal1} onTouchEnd={this.closeDemoModal1}>Close</Button>
                  <Button bsStyle='primary'>Save changes</Button>
                </ModalFooter>
              </Modal>
              <Button lg bsStyle='primary' onClick={this.launchDemoModal1} onTouchEnd={this.launchDemoModal1}>Launch demo modal</Button>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Modal ref='modal2'>
                <ModalHeader>
                  <Button onClick={function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.refs.modal2.close();
                  }.bind(this)} onTouchEnd={function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.refs.modal2.close();
                  }.bind(this)} close />
                  <h4 className='modal-title'>Modal title</h4>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                    Yeah whatever&hellip;
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.refs.modal2.close();
                  }.bind(this)} onTouchEnd={function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.refs.modal2.close();
                  }.bind(this)}>Close</Button>
                  <Button bsStyle='primary'>Save changes</Button>
                </ModalFooter>
              </Modal>
              <Button lg bsStyle='primary' onClick={function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.refs.modal2.open();
                  }.bind(this)} onTouchEnd={function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.refs.modal2.open();
                  }.bind(this)}>Launch demo modal</Button>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <Button title='tooltip on top' data-toggle='tooltip' data-placement='top'>Tooltip on top</Button>
            </Col>
          </Row>
        </Grid>
        <hr/>
      </Container>
    );
  }
});

module.exports = Components;
