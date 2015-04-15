var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var colors = require('./colors/colors.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Dropdowns and Dropups</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <Dropdown>
                            <DropdownButton bsStyle='green' container={this} menu='menu1'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green' ref='menu1'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined container={this} bsStyle='lightblue' menu='menu2'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu ref='menu2' bsStyle='lightblue'>
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
                        <Col xs={6} className='text-right'>
                          <Dropdown>
                            <DropdownButton outlined container={this} menu='menu3' bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='menu3' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined container={this} menu='menu4' bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='menu4' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                      <hr/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton bsStyle='green' container={this} menu='menu6'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green' ref='menu6'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined container={this} bsStyle='lightblue' menu='menu7'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu ref='menu7' bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined container={this} menu='menu8' bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='menu8' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined container={this} menu='menu9' bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='menu9' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white' containerClasses='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Dropdowns and Dropups (inverse)</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <Dropdown>
                            <DropdownButton outlined inverse bsStyle='green' container={this} menu='inverse-menu1'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green' ref='inverse-menu1'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined inverse container={this} bsStyle='lightblue' menu='inverse-menu2'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu ref='inverse-menu2' bsStyle='lightblue'>
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
                        <Col xs={6} className='text-right'>
                          <Dropdown>
                            <DropdownButton outlined inverse container={this} menu='inverse-menu3' bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-menu3' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined inverse container={this} menu='inverse-menu4' bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-menu4' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                      <hr className='border-lightgreen'/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse bsStyle='green' container={this} menu='inverse-menu6'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green' ref='inverse-menu6'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse container={this} bsStyle='lightblue' menu='inverse-menu7'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu ref='inverse-menu7' bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse container={this} menu='inverse-menu8' bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-menu8' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse container={this} menu='inverse-menu9' bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-menu9' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer noOverflow controlStyles='bg-pinkishred fg-white'>
                <Panel>
                  <PanelHeader className='bg-pinkishred fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Split Button Dropdowns and Dropups</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup>
                            <Button bsStyle='lightred'>Basic </Button>
                            <DropdownButton bsStyle='lightred' container={this} menu='split-menu1'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightred' ref='split-menu1'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined container={this} bsStyle='lightblue' menu='split-menu2'>
                              <Caret/>
                            </DropdownButton>
                            <Menu ref='split-menu2' bsStyle='lightblue'>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup>
                            <Button outlined bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined container={this} menu='split-menu3' bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='split-menu3' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined container={this} menu='split-menu4' bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='split-menu4' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <Button bsStyle='lightred'>Basic </Button>
                            <DropdownButton bsStyle='lightred' container={this} menu='split-menu6'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightred' ref='split-menu6'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined container={this} bsStyle='lightblue' menu='split-menu7'>
                              <Caret/>
                            </DropdownButton>
                            <Menu ref='split-menu7' bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined container={this} menu='split-menu8' bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='split-menu8' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined container={this} menu='split-menu9' bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='split-menu9' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-pinkishred fg-white' containerClasses='bg-pinkishred fg-white'>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Split Button Dropdowns and Dropups (inverse)</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='pink'>Basic </Button>
                            <DropdownButton outlined inverse bsStyle='pink' container={this} menu='inverse-split-menu1'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='pink' ref='inverse-split-menu1'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined inverse container={this} bsStyle='lightblue' menu='inverse-split-menu2'>
                              <Caret/>
                            </DropdownButton>
                            <Menu ref='inverse-split-menu2' bsStyle='lightblue'>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined inverse container={this} menu='inverse-split-menu3' bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-split-menu3' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined inverse container={this} menu='inverse-split-menu4' bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-split-menu4' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                      </Row>
                      <hr className='border-lightred'/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='pink'>Basic </Button>
                            <DropdownButton outlined inverse bsStyle='pink' container={this} menu='inverse-split-menu6'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='pink' ref='inverse-split-menu6'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined inverse container={this} bsStyle='lightblue' menu='inverse-split-menu7'>
                              <Caret/>
                            </DropdownButton>
                            <Menu ref='inverse-split-menu7' bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined inverse container={this} menu='inverse-split-menu8' bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-split-menu8' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined inverse container={this} menu='inverse-split-menu9' bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='inverse-split-menu9' bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Dropdowns = React.createClass({
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

module.exports = Dropdowns;
