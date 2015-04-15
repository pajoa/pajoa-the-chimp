var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer controlStyles='bg-lightred fg-white'>
                <PanelHeader className='bg-lightred fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Accordian</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody style={{margin: 12.5, marginTop: 0}}>
                  <Accordian>
                    <AccordianPane active>
                      <AccordianTitle>Collapsible Item 1 (active)</AccordianTitle>
                      <AccordianContent>
                        <LoremIpsum query='5s' />
                      </AccordianContent>
                    </AccordianPane>
                    <AccordianPane>
                      <AccordianTitle>Collapsible Item 2</AccordianTitle>
                      <AccordianContent>
                        <LoremIpsum query='5s' />
                      </AccordianContent>
                    </AccordianPane>
                    <AccordianPane>
                      <AccordianTitle>Collapsible Item 3</AccordianTitle>
                      <AccordianContent>
                        <LoremIpsum query='5s' />
                      </AccordianContent>
                    </AccordianPane>
                  </Accordian>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer controlStyles='bg-brown50 fg-white'>
                <PanelHeader className='bg-brown50 fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Ion Tabs</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody style={{margin: 12.5, marginTop: 0}}>
                  <IonTabContainer id='tabs_1' ref='ion_tab'>
                    <IonTabHead>
                      <IonTab><span>Tab 1 name </span><Icon glyph='icon-fontello-cog'/></IonTab>
                      <IonTab>Tab 2 name</IonTab>
                      <IonTab>Tab 3 name</IonTab>
                    </IonTabHead>
                    <IonTabBody>
                      <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                      <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                      <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                    </IonTabBody>
                  </IonTabContainer>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer controlStyles='bg-lightgreen fg-white'>
                <PanelHeader className='bg-lightgreen fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Tabs: Basic</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <TabList bsStyle='green'>
                    <Tab pane='tab1:home' active>Home</Tab>
                    <Tab pane='tab1:profile'>Profile</Tab>
                    <Tab>
                      <DropdownButton tab container={this} menu='tabmenu1'>
                        <span>Dropdown </span><Caret/>
                      </DropdownButton>
                      <Menu autoHide bsStyle='lightgreen' ref='tabmenu1'>
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
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent>
                          <TabPane tab='tab1:home' active>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab1:profile'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab1:fat'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab1:mdo'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightpurple fg-white'>
                <PanelHeader className='bg-lightpurple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Tabs: Inline</h3>
                      </Col>
                    </Row>
                  </Grid>
                  <TabList bsStyle='purple'>
                    <Tab pane='tab2:home' active>Home</Tab>
                    <Tab pane='tab2:profile'>Profile</Tab>
                    <Tab>
                      <DropdownButton tab container={this} menu='tabmenu2'>
                        <span>Dropdown </span><Caret/>
                      </DropdownButton>
                      <Menu autoHide bsStyle='lightpurple' ref='tabmenu2'>
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
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent>
                          <TabPane tab='tab2:home' active>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab2:profile'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab2:fat'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab2:mdo'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightred fg-white'>
                <PanelHeader className='bg-lightred fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Tabs: Inline Justified</h3>
                        <TabList justified bsStyle='red'>
                          <Tab pane='tab3:home' active>Home</Tab>
                          <Tab pane='tab3:profile'>Profile</Tab>
                          <Tab>
                            <DropdownButton tab container={this} menu='tabmenu3'>
                              <span>Dropdown </span><Caret/>
                            </DropdownButton>
                            <Menu autoHide bsStyle='red' ref='tabmenu3'>
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
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent>
                          <TabPane tab='tab3:home' active>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab3:profile'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab3:fat'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='tab3:mdo'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer controlStyles='bg-orange fg-white'>
                <PanelHeader className='bg-orange fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Pills: Basic</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <TabList pills bsStyle='orange'>
                    <Tab pane='pills1:home' active>Home</Tab>
                    <Tab pane='pills1:profile'>Profile</Tab>
                    <Tab>
                      <DropdownButton tab container={this} menu='pillsmenu1'>
                        <span>Dropdown </span><Caret/>
                      </DropdownButton>
                      <Menu autoHide bsStyle='orange' ref='pillsmenu1'>
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
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent>
                          <TabPane tab='pills1:home' active>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='pills1:profile'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='pills1:fat'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='pills1:mdo'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-lightblue fg-white'>
                <PanelHeader className='bg-lightblue fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Pills: Stacked</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody style={{padding: '12.5px 25px 25px 25px'}}>
                  <Table className='tablist' style={{margin: 0}}>
                    <tbody>
                      <tr>
                        <td style={{width: 175, borderTop: 'none', verticalAlign: 'top'}}>
                          <TabList pills stacked bsStyle='lightblue'>
                            <Tab pane='pills2:home' active>Home</Tab>
                            <Tab pane='pills2:profile'>Profile</Tab>
                            <Tab>
                              <DropdownButton tab container={this} menu='pillsmenu2'>
                                <span>Dropdown </span><Caret/>
                              </DropdownButton>
                              <Menu autoHide ref='pillsmenu2' bsStyle='lightblue'>
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
                        <td style={{borderTop: 'none', verticalAlign: 'top'}}>
                          <TabContent>
                            <TabPane tab='pills2:home' active>
                              <p><LoremIpsum query='3s' /></p>
                            </TabPane>
                            <TabPane tab='pills2:profile'>
                              <p><LoremIpsum query='3s' /></p>
                            </TabPane>
                            <TabPane tab='pills2:fat'>
                              <p><LoremIpsum query='3s' /></p>
                            </TabPane>
                            <TabPane tab='pills2:mdo'>
                              <p><LoremIpsum query='3s' /></p>
                            </TabPane>
                          </TabContent>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightpink fg-white'>
                <PanelHeader className='bg-lightpink fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Pills: Justified</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <TabList pills justified bsStyle='lightpink'>
                          <Tab pane='pill3:home' active>Home</Tab>
                          <Tab pane='pill3:profile'>Profile</Tab>
                          <Tab>
                            <DropdownButton tab container={this} menu='pillmenu3'>
                              <span>Dropdown </span><Caret/>
                            </DropdownButton>
                            <Menu autoHide alignRight bsStyle='lightpink' ref='pillmenu3'>
                              <MenuItem href='#'>
                                <Tab dropdown pane='pill3:fat'>
                                  @fat
                                </Tab>
                              </MenuItem>
                              <MenuItem href='#'>
                                <Tab dropdown pane='pill3:mdo'>
                                  @mdo
                                </Tab>
                              </MenuItem>
                            </Menu>
                          </Tab>
                        </TabList>
                      </Col>
                    </Row>
                  </Grid>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent>
                          <TabPane tab='pill3:home' active>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='pill3:profile'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='pill3:fat'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                          <TabPane tab='pill3:mdo'>
                            <p><LoremIpsum query='3s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>NavBars</h3>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle container={this} nav='navcontainer1'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent ref='navcontainer1' collapse>
                    <Nav>
                      <NavItem active href='#'>Link 1</NavItem>
                      <NavItem href='#'>CSS</NavItem>
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
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle container={this} nav='navcontainer2'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent ref='navcontainer2' collapse>
                    <NavText>Signed in as Anna Sanchez</NavText>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
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
                        Anna Sanchez
                      </NavLink>
                    </NavText>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
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
                      <NavItem right href='#'>Link</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav container={this} menu='inversenavmenu1'>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu ref='inversenavmenu1'>
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
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Breadcrumbs</h3>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#' active>Library </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#'>Library </BLink>
                <BLink href='#' active>Data</BLink>
              </Breadcrumb>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12} className='text-center'>
              <h3>Pagination</h3>
              <Pagination>
                <Page begin disabled />
                <Page active href='#'>1</Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={6}>
              <h3>Pagination (small)</h3>
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
            <Col xs={6} className='text-right'>
              <h3>Pagination (Large)</h3>
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
        </Grid>
        <Grid>
          <Row>
            <Col xs={12} className='text-center'>
              <h3>Pager</h3>
              <Pager>
                <Page href='#'>Previous</Page>{' '}
                <Page href='#'>Next</Page>
              </Pager>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Pager (previous disabled)</h3>
              <Pager>
                <Page previous disabled href='#'>Previous</Page>{' '}
                <Page next href='#'>Next</Page>
              </Pager>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var TabsAndNavs = React.createClass({
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

module.exports = TabsAndNavs;
