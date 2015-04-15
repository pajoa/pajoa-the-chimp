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
              <PanelContainer controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Buttons - Outlined</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Large</h4>
                          <p>
                            <Button lg outlined style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button lg outlined style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button lg outlined style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button lg outlined style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button lg outlined style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button lg outlined style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                          <hr/>
                          <h4>Default</h4>
                          <p>
                            <Button outlined style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button outlined style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button outlined style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button outlined style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button outlined style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button outlined style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                          <hr/>
                          <h4>Small</h4>
                          <p>
                            <Button sm outlined style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button sm outlined style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button sm outlined style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button sm outlined style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button sm outlined style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button sm outlined style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                          <hr/>
                          <h4>Extra Small</h4>
                          <p>
                            <Button xs outlined style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button xs outlined style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button xs outlined style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button xs outlined style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-green fg-white' containerClasses='bg-green fg-white'>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Buttons - Outlined (Inverse)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <Button inverse outlined style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button inverse outlined style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button inverse outlined style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button inverse outlined style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button inverse outlined style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button inverse outlined style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-paleorange fg-white'>
                <Panel>
                  <PanelHeader className='bg-paleorange fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Basic:</h4>
                          <h5>Single color</h5>
                          <div className='text-center'>
                            <ButtonGroup>
                              <Button bsStyle='orange75'>Left</Button>
                              <Button bsStyle='orange75'>Middle</Button>
                              <Button bsStyle='orange75'>Right</Button>
                            </ButtonGroup>
                          </div>
                          <h5>Multi-colored</h5>
                          <div className='text-center'>
                            <ButtonGroup>
                              <Button bsStyle='paleyellow'>Left</Button>
                              <Button bsStyle='pink'>Middle</Button>
                              <Button bsStyle='paleblue'>Right</Button>
                            </ButtonGroup>
                          </div>
                          <hr/>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <h4>Outlined:</h4>
                          <h5>Single color</h5>
                          <div className='text-center'>
                            <ButtonGroup>
                              <Button outlined bsStyle='darkblue'>Left</Button>
                              <Button outlined bsStyle='darkblue'>Middle</Button>
                              <Button outlined bsStyle='darkblue'>Right</Button>
                            </ButtonGroup>
                          </div>
                          <h5>Multi-colored</h5>
                          <div className='text-center'>
                            <ButtonGroup>
                              <Button outlined bsStyle='red'>Left</Button>
                              <Button outlined bsStyle='deepred'>Middle</Button>
                              <Button outlined bsStyle='lightred'>Right</Button>
                            </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-darkcyan fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkcyan fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups : Sizing (Normal)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup lg>
                                <Button bsStyle='red'>Left</Button>
                                <Button bsStyle='red'>Middle</Button>
                                <Button bsStyle='red'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup>
                                <Button bsStyle='green'>Left</Button>
                                <Button bsStyle='green'>Middle</Button>
                                <Button bsStyle='green'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup sm>
                                <Button bsStyle='blue'>Left</Button>
                                <Button bsStyle='blue'>Middle</Button>
                                <Button bsStyle='blue'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup xs>
                                <Button bsStyle='orange'>Left</Button>
                                <Button bsStyle='orange'>Middle</Button>
                                <Button bsStyle='orange'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-grayishcyan fg-white'>
                <Panel>
                  <PanelHeader className='bg-grayishcyan fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups : Sizing (Outlined)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup lg>
                                <Button outlined bsStyle='red'>Left</Button>
                                <Button outlined bsStyle='red'>Middle</Button>
                                <Button outlined bsStyle='red'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup>
                                <Button outlined bsStyle='green'>Left</Button>
                                <Button outlined bsStyle='green'>Middle</Button>
                                <Button outlined bsStyle='green'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup sm>
                                <Button outlined bsStyle='blue'>Left</Button>
                                <Button outlined bsStyle='blue'>Middle</Button>
                                <Button outlined bsStyle='blue'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <div>
                            <ButtonToolbar style={{marginBottom: 10, display: 'inline-block'}}>
                              <ButtonGroup xs>
                                <Button outlined bsStyle='orange'>Left</Button>
                                <Button outlined bsStyle='orange'>Middle</Button>
                                <Button outlined bsStyle='orange'>Right</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Buttons - Outlined (Colors)</h3>
                          <hr/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {colors.map(function(color) {
                              return (
                                <Button key={color} outlined style={{marginBottom: 5, marginRight: 5}} bsStyle={color}>{color}</Button>
                              );
                            })}
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer controlStyles='bg-darkblue fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Buttons - Normal</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Large</h4>
                          <p>
                            <Button lg style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button lg style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button lg style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button lg style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button lg style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button lg style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                          <hr/>
                          <h4>Default</h4>
                          <p>
                            <Button style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                          <hr/>
                          <h4>Small</h4>
                          <p>
                            <Button sm style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button sm style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button sm style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button sm style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button sm style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button sm style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                          <hr/>
                          <h4>Extra Small</h4>
                          <p>
                            <Button xs style={{marginBottom: 5}} bsStyle='default'>Default</Button>{' '}
                            <Button xs style={{marginBottom: 5}} bsStyle='primary'>Primary</Button>{' '}
                            <Button xs style={{marginBottom: 5}} bsStyle='success'>Success</Button>{' '}
                            <Button xs style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}
                            <Button xs style={{marginBottom: 5}} bsStyle='warning'>Warning</Button>{' '}
                            <Button xs style={{marginBottom: 5}} bsStyle='danger'>Danger</Button>{' '}
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups: Button toolbar</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Basic:</h4>
                          <h5>Single color</h5>
                          <div className='text-center'>
                            <ButtonToolbar style={{display: 'inline-block'}}>
                              <ButtonGroup>
                                <Button bsStyle='darkgreen45'>1</Button>
                                <Button bsStyle='darkgreen45'>2</Button>
                                <Button bsStyle='darkgreen45'>3</Button>
                                <Button bsStyle='darkgreen45'>4</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button bsStyle='darkgreen45'>5</Button>
                                <Button bsStyle='darkgreen45'>6</Button>
                                <Button bsStyle='darkgreen45'>7</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button bsStyle='darkgreen45'>8</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <h5>Multi-colored</h5>
                          <div className='text-center'>
                            <ButtonToolbar style={{display: 'inline-block'}}>
                              <ButtonGroup>
                                <Button bsStyle='deepred'>1</Button>
                                <Button bsStyle='red'>2</Button>
                                <Button bsStyle='lightred'>3</Button>
                                <Button bsStyle='brightblue'>4</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button bsStyle='blue'>5</Button>
                                <Button bsStyle='darkblue'>6</Button>
                                <Button bsStyle='purple'>7</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button bsStyle='lightpurple'>8</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <hr/>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <h4>Outlined:</h4>
                          <h5>Single color</h5>
                          <div className='text-center'>
                            <ButtonToolbar style={{display: 'inline-block'}}>
                              <ButtonGroup>
                                <Button outlined bsStyle='purple'>1</Button>
                                <Button outlined bsStyle='purple'>2</Button>
                                <Button outlined bsStyle='purple'>3</Button>
                                <Button outlined bsStyle='purple'>4</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button outlined bsStyle='purple'>5</Button>
                                <Button outlined bsStyle='purple'>6</Button>
                                <Button outlined bsStyle='purple'>7</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button outlined bsStyle='purple'>8</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <h5>Multi-colored</h5>
                          <div className='text-center'>
                            <ButtonToolbar style={{display: 'inline-block'}}>
                              <ButtonGroup>
                                <Button outlined bsStyle='desaturateddarkblue'>1</Button>
                                <Button outlined bsStyle='darkcyan'>2</Button>
                                <Button outlined bsStyle='grayishcyan'>3</Button>
                                <Button outlined bsStyle='brown'>4</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button outlined bsStyle='darkgreen40'>5</Button>
                                <Button outlined bsStyle='darkorange'>6</Button>
                                <Button outlined bsStyle='pinkishred'>7</Button>
                              </ButtonGroup>
                              <ButtonGroup>
                                <Button outlined bsStyle='brownishgreen'>8</Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-pink fg-white'>
                <Panel>
                  <PanelHeader className='bg-pink fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups : Nesting (Normal)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <div>
                            <ButtonGroup>
                              <Button bsStyle='pink'>1</Button>
                              <Button bsStyle='pink'>2</Button>
                              <ButtonGroup>
                                <DropdownButton bsStyle='pink' container={this} menu='nested-menu1'>
                                  <span>Dropdown </span><Caret/>
                                </DropdownButton>
                                <Menu ref='nested-menu1' bsStyle='pink'>
                                  <MenuItem href='#'>Regular link</MenuItem>
                                  <MenuItem href='#' disabled>Disabled link</MenuItem>
                                  <MenuItem href='#'>Another link</MenuItem>
                                </Menu>
                              </ButtonGroup>
                            </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-paleblue fg-white'>
                <Panel>
                  <PanelHeader className='bg-paleblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups : Nesting (Outlined)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <div>
                            <ButtonGroup>
                              <Button outlined bsStyle='paleblue'>1</Button>
                              <Button outlined bsStyle='paleblue'>2</Button>
                              <ButtonGroup>
                                <DropdownButton outlined bsStyle='paleblue' container={this} menu='nested-menu2'>
                                  <span>Dropdown </span><Caret/>
                                </DropdownButton>
                                <Menu ref='nested-menu2' bsStyle='paleblue'>
                                  <MenuItem href='#'>Regular link</MenuItem>
                                  <MenuItem href='#' disabled>Disabled link</MenuItem>
                                  <MenuItem href='#'>Another link</MenuItem>
                                </Menu>
                              </ButtonGroup>
                            </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-darkorange fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkorange fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups : Vertical variation</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={6} className='text-center'>
                          <div>
                          <ButtonGroup vertical>
                            <Button bsStyle='darkorange'>Button</Button>
                            <Button bsStyle='darkorange'>Button</Button>
                            <ButtonGroup>
                              <DropdownButton bsStyle='darkorange' container={this} menu='vertical-menu1'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu bsStyle='darkorange' ref='vertical-menu1'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                            <Button bsStyle='darkorange'>Button</Button>
                            <Button bsStyle='darkorange'>Button</Button>
                            <ButtonGroup>
                              <DropdownButton bsStyle='darkorange' container={this} menu='vertical-menu2'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu bsStyle='darkorange' ref='vertical-menu2'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                            <ButtonGroup>
                              <DropdownButton bsStyle='darkorange' container={this} menu='vertical-menu3'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu bsStyle='darkorange' ref='vertical-menu3'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                            <ButtonGroup>
                              <DropdownButton bsStyle='darkorange' container={this} menu='vertical-menu4'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu bsStyle='darkorange' ref='vertical-menu4'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-center'>
                          <div>
                          <ButtonGroup vertical>
                            <Button outlined bsStyle='pinkishred'>Button</Button>
                            <Button outlined bsStyle='pinkishred'>Button</Button>
                            <ButtonGroup>
                              <DropdownButton outlined bsStyle='pinkishred' container={this} menu='vertical-outline-menu1'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu alignRight bsStyle='pinkishred' ref='vertical-outline-menu1'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                            <Button outlined bsStyle='pinkishred'>Button</Button>
                            <Button outlined bsStyle='pinkishred'>Button</Button>
                            <ButtonGroup>
                              <DropdownButton outlined bsStyle='pinkishred' container={this} menu='vertical-outline-menu2'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu alignRight bsStyle='pinkishred' ref='vertical-outline-menu2'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                            <ButtonGroup>
                              <DropdownButton outlined bsStyle='pinkishred' container={this} menu='vertical-outline-menu3'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu alignRight bsStyle='pinkishred' ref='vertical-outline-menu3'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                            <ButtonGroup>
                              <DropdownButton outlined bsStyle='pinkishred' container={this} menu='vertical-outline-menu4'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu alignRight bsStyle='pinkishred' ref='vertical-outline-menu4'>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-paleyellow fg-white'>
                <Panel>
                  <PanelHeader className='bg-paleyellow fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Button groups : Justified button groups</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <div>
                          <ButtonGroup justified>
                            <Button bsStyle='brown50' componentClass='a'>Left</Button>
                            <Button bsStyle='darkblue' componentClass='a'>Middle</Button>
                            <Button bsStyle='darkgreen45' componentClass='a'>Right</Button>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup justified>
                            <Button bsStyle='darkcyan' componentClass='a'>Left</Button>
                            <Button bsStyle='darkbrown' componentClass='a'>Middle</Button>
                            <ButtonGroup>
                              <DropdownButton bsStyle='brightyellow' container={this} menu='justified-menu-1'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu bsStyle='brightyellow' ref='justified-menu-1' alignRight>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup justified>
                            <Button outlined bsStyle='darkgreen45' componentClass='a'>Left</Button>
                            <Button outlined bsStyle='darkgreen45' componentClass='a'>Middle</Button>
                            <Button outlined bsStyle='darkgreen45' componentClass='a'>Right</Button>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup justified>
                            <Button outlined bsStyle='brightyellow' componentClass='a'>Left</Button>
                            <Button outlined bsStyle='brightyellow' componentClass='a'>Middle</Button>
                            <ButtonGroup>
                              <DropdownButton outlined bsStyle='brightyellow' container={this} menu='justified-menu-2'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu bsStyle='brightyellow' ref='justified-menu-2' alignRight>
                                <MenuItem href='#'>Regular link</MenuItem>
                                <MenuItem href='#' disabled>Disabled link</MenuItem>
                                <MenuItem href='#'>Another link</MenuItem>
                              </Menu>
                            </ButtonGroup>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Buttons - Normal (Colors)</h3>
                          <hr/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {colors.map(function(color) {
                              return (
                                <Button key={color} style={{marginBottom: 5, marginRight: 5}} bsStyle={color}>{color}</Button>
                              );
                            })}
                          </p>
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
var Buttons = React.createClass({
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

module.exports = Buttons;
