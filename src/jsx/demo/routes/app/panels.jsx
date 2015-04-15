var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={4} smCollapseRight>
              <PanelContainer>
                <Panel>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Basic Panel</h3>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Panel Header</h3>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightblue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Panel Footer</h3>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-red fg-white'>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-red fg-white tabs'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Header + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='ptpc_hf:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='ptpc_hf:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='ptpc_hf:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane tab='ptpc_hf:home' active>
                              <h4>Top Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='ptpc_hf:profile'>
                              <h4>Top Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='ptpc_hf:settings'>
                              <h4>Top Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='ptpc_hf:table'>
                              <h4>Bottom Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='ptpc_hf:archive'>
                              <h4>Bottom Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='ptpc_hf:landscape'>
                              <h4>Bottom Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-purple fg-white tabs'>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='ptpc_hf:table'>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab pane='ptpc_hf:archive'>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab pane='ptpc_hf:landscape'>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Footer + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4} smCollapseRight>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-red'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Body + Footer without Panel Header</h4>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <Panel>
                  <PanelHeader className='bg-purple fg-white tabs'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Header + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='panel_tab_header:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_header:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_header:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <Tab>
                          <DropdownButton tab container={this} menu='panel_tab_header_menu'>
                            <Icon bundle='fontello' glyph='angle-down'/>
                          </DropdownButton>
                          <Menu alignRight ref='panel_tab_header_menu'>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_header:fat'>
                                @fat
                              </Tab>
                            </MenuItem>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_header:mdo'>
                                @mdo
                              </Tab>
                            </MenuItem>
                          </Menu>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane tab='panel_tab_header:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_header:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_header:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_header:fat'>
                              <p>
                                <h3>FAT</h3>
                              </p>
                            </TabPane>
                            <TabPane tab='panel_tab_header:mdo'>
                              <p>
                                <h3>MDO</h3>
                              </p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightpurple'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Footer</h4>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-palegreen fg-white'>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-palegreen fg-white tabs'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='tpc_hft:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='tpc_hft:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='tpc_hft:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane tab='tpc_hft:home' active>
                              <h4>Top Panel 1</h4>
                              <p><LoremIpsum query='7s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hft:profile'>
                              <h4>Top Panel 2</h4>
                              <p><LoremIpsum query='7s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hft:settings'>
                              <h4>Top Panel 3</h4>
                              <p><LoremIpsum query='7s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4}>
              <PanelContainer controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Body + Header without Panel Footer</h4>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-palepink fg-white'>
                <Panel>
                  <PanelHeader className='bg-palepink'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Header</h4>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane tab='panel_tab_footer:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_footer:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_footer:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_footer:fat'>
                              <p>
                                <h3>FAT</h3>
                              </p>
                            </TabPane>
                            <TabPane tab='panel_tab_footer:mdo'>
                              <p>
                                <h3>MDO</h3>
                              </p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-palepink fg-white tabs'>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='panel_tab_footer:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_footer:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_footer:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <Tab className='dropup'>
                          <DropdownButton tab container={this} menu='panel_tab_footer_menu'>
                            <Icon bundle='fontello' glyph='angle-up'/>
                          </DropdownButton>
                          <Menu alignRight ref='panel_tab_footer_menu'>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_footer:fat'>
                                @fat
                              </Tab>
                            </MenuItem>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_footer:mdo'>
                                @mdo
                              </Tab>
                            </MenuItem>
                          </Menu>
                        </Tab>
                      </TabList>
                    </TabContainer>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Footer + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightorange fg-white'>
                <Panel className='force-collapse'>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane active tab='tpc_hff:table'>
                              <h4>Bottom Panel 1</h4>
                              <p><LoremIpsum query='6s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hff:archive'>
                              <h4>Bottom Panel 2</h4>
                              <p><LoremIpsum query='6s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hff:landscape'>
                              <h4>Bottom Panel 3</h4>
                              <p><LoremIpsum query='6s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightorange fg-white tabs'>
                    <TabContainer>
                      <TabList>
                        <Tab active pane='tpc_hff:table'>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab pane='tpc_hff:archive'>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab pane='tpc_hff:landscape'>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer controlStyles='bg-grayishcyan fg-white'>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-grayishcyan fg-white tabs'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='tpc_hf:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='tpc_hf:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='tpc_hf:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane tab='tpc_hf:home' active>
                              <h4>Top Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hf:profile'>
                              <h4>Top Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hf:settings'>
                              <h4>Top Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hf:table'>
                              <h4>Bottom Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hf:archive'>
                              <h4>Bottom Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hf:landscape'>
                              <h4>Bottom Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-darkcyan fg-white tabs'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='tpc_hf:table'>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab pane='tpc_hf:archive'>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab pane='tpc_hf:landscape'>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} smCollapseRight>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-2'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_left:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_left:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_left:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent style={{paddingTop: 12.5}}>
                            <TabPane tab='panel_tab_panel_left:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_left:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_left:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent style={{paddingTop: 12.5}}>
                            <TabPane tab='panel_tab_panel_right:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_right:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_right:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-orange fg-darkorange tabs panel-sm-2'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_right:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_right:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_right:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-1'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_combined:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent style={{paddingTop: 12.5}}>
                            <TabPane tab='panel_tab_panel_combined:home' active>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_combined:profile'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_combined:settings'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_combined:table'>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_combined:archive'>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='panel_tab_panel_combined:landscape'>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-purple fg-white tabs panel-sm-1'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_combined:table'>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:archive'>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:landscape'>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
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
var Panels = React.createClass({
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

module.exports = Panels;
