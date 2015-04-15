var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer noOverflow controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Default form</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup>
                              <Label htmlFor='emailaddress'>Email address</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-mail' />
                                </InputGroupAddon>
                                <Input autoFocus type='email' id='emailaddress' placeholder='Email address' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='password'>Password</Label>
                              <InputGroup>
                                <Input type='password' id='password' placeholder='Password' />
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-key' />
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup feedback>
                              <Label htmlFor='withicon' control>With icon</Label>
                              <Input type='text' id='withicon' placeholder='Search' />
                              <Icon bundle='fontello' glyph='search' feedback/>
                            </FormGroup>
                            <FormGroup feedback>
                              <Label htmlFor='inputwithicon' control>Input with icon</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-alert' />
                                </InputGroupAddon>
                                <Input type='text' id='inputwithicon' placeholder='Search' />
                                <Icon bundle='fontello' glyph='search' feedback/>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='disabled'>Disabled</Label>
                              <Input disabled type='text' id='disabled' placeholder='Disabled' />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='readonly'>Read only</Label>
                              <Input readOnly type='text' id='readonly' placeholder='Read only' />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='dropdownselect'>Dropdown Select</Label>
                              <Select id='dropdownselect' defaultValue='1'>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                                <option value='4'>Option 4</option>
                                <option value='5'>Option 5</option>
                              </Select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='multiselect'>Multiple Select</Label>
                              <Select id='multiselect' multiple>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                                <option value='4'>Option 4</option>
                                <option value='5'>Option 5</option>
                              </Select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='textarea'>Textarea</Label>
                              <Textarea id='textarea' rows='3' placeholder='Some text here...' />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='fileinput'>File input</Label>
                              <Input id='fileinput' type='file' />
                              <HelpBlock>some help text here.</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                              <Label>Checkboxes</Label>
                              <Checkbox value='option1' name='checkbox-options'>
                                Option one is great
                              </Checkbox>
                              <Checkbox value='option2' defaultChecked name='checkbox-options'>
                                Option two is checked
                              </Checkbox>
                              <Checkbox value='option3' disabled name='checkbox-options'>
                                Option three is disabled
                              </Checkbox>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label>Inline checkboxes</Label>
                              <div>
                                <Checkbox inline value='option1' name='inline-checkbox-options'>
                                  Option one
                                </Checkbox>
                                <Checkbox inline value='option2' defaultChecked name='inline-checkbox-options'>
                                  Option two
                                </Checkbox>
                                <Checkbox inline value='option3' disabled name='inline-checkbox-options'>
                                  Option disabled
                                </Checkbox>
                              </div>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label>Radios</Label>
                              <Radio value='option1' defaultChecked name='radio-options'>
                                Option 1
                              </Radio>
                              <Radio value='option2' name='radio-options'>
                                Option 2
                              </Radio>
                              <Radio value='option3' disabled name='radio-options'>
                                Option disabled
                              </Radio>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label>Inline radios</Label>
                              <div>
                                <Radio inline value='option1' name='inline-radio-options'>
                                  Option one
                                </Radio>
                                <Radio inline value='option2' defaultChecked name='inline-radio-options'>
                                  Option two
                                </Radio>
                                <Radio inline value='option3' disabled name='inline-radio-options'>
                                  Option disabled
                                </Radio>
                              </div>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-darkgreen45 text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button outlined bsStyle='lightgreen'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightgreen'>submit</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Input groups</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup>
                              <Label>Checkbox addons</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupAddon><Checkbox native/></InputGroupAddon>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupAddon><Checkbox native/></InputGroupAddon>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Radio addons</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupAddon><Radio name='radioaddon' native/></InputGroupAddon>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupAddon><Radio name='radioaddon' native/></InputGroupAddon>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button addons</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton><Button bsStyle='red'>Go!</Button></InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton><Button bsStyle='green'>Go!</Button></InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button addons: Dual</Label>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton><Button bsStyle='red'>Go!</Button></InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton><Button bsStyle='green'>Go!</Button></InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button with dropdowns</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseRight collapseLeft>
                                    <InputGroup>
                                      <InputGroupButton>
                                        <DropdownButton container={this} menu='btnwithdropdown1'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown1'>
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
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton>
                                        <DropdownButton container={this} menu='btnwithdropdown2'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown2' alignRight>
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
                            </FormGroup>
                            <FormGroup>
                              <Label>Button with dropdowns: Dual</Label>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton>
                                        <DropdownButton bsStyle='green' container={this} menu='btnwithdropdown3'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown3' bsStyle='green'>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton>
                                        <DropdownButton bsStyle='orange' container={this} menu='btnwithdropdown4'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown4' bsStyle='orange' alignRight>
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
                            </FormGroup>
                            <FormGroup>
                              <Label>Segmented dropdowns: Dual</Label>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton>
                                        <Button bsStyle='green'>Action</Button>
                                        <DropdownButton bsStyle='green' container={this} menu='btnwithdropdown5'>
                                          <Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown5' bsStyle='green'>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton>
                                        <Button bsStyle='orange'>Action</Button>
                                        <DropdownButton bsStyle='orange' container={this} menu='btnwithdropdown6'>
                                          <Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown6' bsStyle='orange' alignRight>
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
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-red text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button outlined bsStyle='lightred'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightred'>submit</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer noOverflow controlStyles='bg-darkblue fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Horizontal form</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form horizontal>
                            <FormGroup>
                              <Label control sm={3} htmlFor='blockhelp'>Block help</Label>
                              <Col sm={9}>
                                <Input type='text' id='blockhelp' placeholder='Enter text' />
                                <HelpBlock>A block of help text.</HelpBlock>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='inlinehelp'>Inline help</Label>
                              <Col sm={9}>
                                <Input type='text' id='inlinehelp' placeholder='Enter text' className='inline' />
                                <HelpBlock className='inline'>Inline help.</HelpBlock>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='inlineinputgroup'>Input group</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroupAddon>
                                  <Input type='email' id='inlineinputgroup' placeholder='Username' className='inline' />
                                  <HelpBlock className='inline'>Inline help.</HelpBlock>
                                </InputGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='inlineinputgroupmail'>Email address</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroupAddon>
                                  <Input type='email' id='inlineinputgroupmail' placeholder='Email address' />
                                </InputGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='horizontalpassword'>Password</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <Input type='password' id='horizontalpassword' placeholder='Password' />
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroupAddon>
                                </InputGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup feedback>
                              <Label htmlFor='withicon' control sm={3}>With icon</Label>
                              <Col sm={9}>
                                <Input type='text' id='withicon' placeholder='Search' />
                                <Icon bundle='fontello' glyph='search' feedback/>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='searchbtnicon' control sm={3}>Input group with button</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <Input type='text' id='searchbtnicon' placeholder='Enter keywords here ...' />
                                  <InputGroupAddon className='plain'>
                                    <Button>
                                      <span>Search </span>
                                      <Icon bundle='fontello' glyph='search' />
                                    </Button>
                                  </InputGroupAddon>
                                </InputGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3}>Email</Label>
                              <Col sm={9}>
                                <Static>support@sketchpixy.com</Static>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='disabledhorizontal'>Disabled</Label>
                              <Col sm={9}>
                                <Input id='disabledhorizontal' disabled type='text' placeholder='Disabled' />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='readonlyhorizontal'>Read only</Label>
                              <Col sm={9}>
                                <Input id='readonlyhorizontal' readOnly type='text' placeholder='Read only' />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='dropdownselecthorizontal'>Dropdown Select</Label>
                              <Col sm={9}>
                                <Select id='dropdownselecthorizontal' defaultValue='1'>
                                  <option value='1'>Option 1</option>
                                  <option value='2'>Option 2</option>
                                  <option value='3'>Option 3</option>
                                  <option value='4'>Option 4</option>
                                  <option value='5'>Option 5</option>
                                </Select>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='multiselecthorizontal'>Multiple Select</Label>
                              <Col sm={9}>
                                <Select id='multiselecthorizontal' multiple>
                                  <option value='1'>Option 1</option>
                                  <option value='2'>Option 2</option>
                                  <option value='3'>Option 3</option>
                                  <option value='4'>Option 4</option>
                                  <option value='5'>Option 5</option>
                                </Select>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='textareahorizontal'>Textarea</Label>
                              <Col sm={9}>
                                <Textarea id='textareahorizontal' rows='3' placeholder='Some text here...' />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='fileinputhorizontal'>File input</Label>
                              <Col sm={9}>
                                <Input id='fileinputhorizontal' type='file' />
                                <HelpBlock>some help text here.</HelpBlock>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3}>Checkboxes</Label>
                              <Col sm={9}>
                                <Checkbox value='option1' name='horizontal-checkbox-options'>
                                  Option one is great
                                </Checkbox>
                                <Checkbox value='option2' defaultChecked name='horizontal-checkbox-options'>
                                  Option two is checked
                                </Checkbox>
                                <Checkbox value='option3' disabled name='horizontal-checkbox-options'>
                                  Option three is disabled
                                </Checkbox>
                              </Col>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3}>Inline checkboxes</Label>
                              <Col sm={9}>
                                <div>
                                  <Checkbox inline value='option1' name='horizontal-inline-checkbox-options'>
                                    Option 1
                                  </Checkbox>
                                  <Checkbox inline value='option2' defaultChecked name='horizontal-inline-checkbox-options'>
                                    Option 2
                                  </Checkbox>
                                  <Checkbox inline value='option3' disabled name='horizontal-inline-checkbox-options'>
                                    Disabled
                                  </Checkbox>
                                </div>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3}>Radios</Label>
                              <Col sm={9}>
                                <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                                  Option 1
                                </Radio>
                                <Radio value='option2' name='horizontal-radio-options'>
                                  Option 2
                                </Radio>
                                <Radio value='option3' disabled name='horizontal-radio-options'>
                                  Option disabled
                                </Radio>
                              </Col>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3}>Inline radios</Label>
                              <Col sm={9}>
                                <div>
                                  <Radio inline value='option1' name='horizontal-inline-radio-options'>
                                    Option 1
                                  </Radio>
                                  <Radio inline value='option2' defaultChecked name='horizontal-inline-radio-options'>
                                    Option 2
                                  </Radio>
                                  <Radio inline value='option3' disabled name='horizontal-inline-radio-options'>
                                    Disabled
                                  </Radio>
                                </div>
                              </Col>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-blue text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightblue'>submit</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-purple fg-white'>
                <PanelHeader className='bg-purple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Horizontal form: Sizing</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <Form horizontal>
                          <FormGroup>
                            <Label htmlFor='largeinput' sm={3} control>Large input</Label>
                            <Col sm={9}>
                              <Input id='largeinput' placeholder='Large input' lg />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='defaultinput' sm={3} control>Default input</Label>
                            <Col sm={9}>
                              <Input id='defaultinput' placeholder='Default input' />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='smallinput' sm={3} control>Small input</Label>
                            <Col sm={9}>
                              <Input id='smallinput' placeholder='Small input' sm />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='largeselect' sm={3} control>Large select</Label>
                            <Col sm={9}>
                              <Select id='largeselect' lg>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Select>
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='defaultselect' sm={3} control>Default select</Label>
                            <Col sm={9}>
                              <Select id='defaultselect'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Select>
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='smallselect' sm={3} control>Small input</Label>
                            <Col sm={9}>
                              <Select id='smallselect' sm>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Select>
                            </Col>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
                <PanelFooter className='bg-purple text-right'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <br/>
                        <div>
                          <Button outlined bsStyle='lightpurple'>cancel</Button>{' '}
                          <Button outlined bsStyle='lightpurple'>submit</Button>
                        </div>
                        <br/>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Forms = React.createClass({
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

module.exports = Forms;
