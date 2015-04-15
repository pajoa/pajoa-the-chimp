var docCookies = require('./cookies.js');

var Brand = React.createClass({
  render: function() {
    return (
      <NavHeader {...this.props}>
        <NavBrand tabIndex='-1'>
          <img src='/imgs/logo.png' alt='rubix' width='111' height='28' />
        </NavBrand>
      </NavHeader>
    );
  }
});

var LocaleMenuItem = React.createClass({
  render: function() {
    return (
      <MenuItem flag={this.props.flag} locale={this.props.locale} parent={this.props.parent} href='#' active={this.props.active}>
        <Grid>
          <Row>
            <Col xs={2}>
              <img src={'/imgs/flags/flags/flat/32/'+this.props.flag+'.png'} width='32' height='32' />
            </Col>
            <Col xs={10}>
              <Entity className='lang-menu-text' entity='languageMenu' data={{lang: this.props.lang}} />
            </Col>
          </Row>
        </Grid>
      </MenuItem>
    );
  }
});

var DirectNavItem = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  render: function() {
    var classes = React.addons.classSet({
      'pressed': (this.getPathname() === this.props.path)
    });
    return (
      <NavItem className={classes.trim()} {...this.props}>
        <Link to={this.props.path}>
          <Icon bundle={this.props.bundle || 'fontello'} glyph={this.props.glyph} />
        </Link>
      </NavItem>
    );
  }
});

var Skins = React.createClass({
  statics: {
    skins: ['default', 'green', 'blue', 'purple', 'brown', 'cyan']
  },
  switchSkin: function(skin, e) {
    e.preventDefault();
    e.stopPropagation();
    for(var i=0; i < Skins.skins.length; i++) {
      $('html').removeClass(Skins.skins[i]);
    }
    $('html').addClass(skin);
    vex.close(this.props.id);
  },
  render: function() {
    return (
      <Grid style={{margin: '-2em'}}>
        <Row>
          <Col xs={12} className='text-center bg-darkgrayishblue75' style={{marginBottom: 25}}>
            <div className='fg-white' style={{fontSize: 24, lineHeight: 1, padding: '25px 10px'}}>
              Choose a theme:
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'default')}>
              <Icon glyph='icon-fontello-stop icon-4x' style={{color: '#E76049'}} />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'green')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkgreen45' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'blue')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-blue' />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'purple')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-purple' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'brown')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-brown' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'cyan')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkcyan' />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
});

var Navigation = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  getInitialState: function() {
    return {
      selectedFlag: 'United-States'
    };
  },
  handleSkinSwitch: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var vexContent;
    vex.dialog.open({
      afterOpen: function($vexContent) {
        vexContent = $vexContent;
        return React.render(<Skins id={$vexContent.data().vex.id} />, $vexContent.get(0));
      },
      afterClose: function() {
        React.unmountComponentAtNode(vexContent);
      }
    });
  },
  handleLayoutRadioChange: function(e) {
    var dir = e.target.value;
    docCookies.setItem('rubix_dir', dir);
    window.location.reload();
  },
  bodyLayoutRadioChange: function(value) {
    if(!value) return;
    if(value === 'fixed-body') {
      $('html').removeClass('static');
      localStorage.setItem('bodyLayout', 'fixed-body');
      ReactBootstrap.Dispatcher.emit('sidebar:reinitialize');
    } else if(value === 'static-body') {
      $('html').addClass('static');
      localStorage.setItem('bodyLayout', 'static-body');
      ReactBootstrap.Dispatcher.emit('sidebar:destroy');
    }
    this.refs[value].setChecked(true);
  },
  handleBodyLayoutRadioChange: function(e) {
    this.bodyLayoutRadioChange(e.target.value);
  },
  changeFlag: function(props) {
    this.setState({
      selectedFlag: props.flag
    }, function() {
      if(props.locale === 'ar')
        $('html').addClass('arabic');
      else
        $('html').removeClass('arabic');
      Preloader.show();
      l20n.changeLocale(props.locale);
    }.bind(this));
  },
  l20nContextReady: function() {
    var selectedFlag = l20n.ctx.getSync('selectedFlag');
    this.state.selectedFlag = selectedFlag;
    this.refs['flag-menu'].selectItem('flag', selectedFlag);
    this.setState(this.state, function() {
      Preloader.hide();
    });
  },
  changeSettingsMenuItemState: function(item) {
    if(item === 'fluid' || item === null || item === undefined) {
      this.refs['settings-menu'].selectItem('data-val', 'fluid');
      $('html').removeClass('boxed');
    } else if(item === 'boxed') {
      this.refs['settings-menu'].selectItem('data-val', 'boxed');
      $('html').addClass('boxed');
    }
    setTimeout(function() {
      $(window).trigger('resize');
    }, 300);
  },
  changeViewport: function(props) {
    switch(props['data-type']) {
      case 'dimension':
        if(props['data-val'] === 'boxed') {
          localStorage.setItem('settingsMenu', 'boxed');
          this.changeSettingsMenuItemState('boxed');
        } else {
          localStorage.setItem('settingsMenu', 'fluid');
          this.changeSettingsMenuItemState('fluid');
        }
      break;
      default:
      break;
    }
  },
  handleLogout: function() {
    $('body').addClass('fade-out');
    setTimeout(function() {
      this.transitionTo('/');
    }.bind(this), 250);
  },
  componentWillMount: function() {
    ReactBootstrap.Dispatcher.on('ctx:ready', this.l20nContextReady);
  },
  componentDidMount: function() {
    (function() {
      var item = localStorage.getItem('settingsMenu');
      this.changeSettingsMenuItemState(item);
      localStorage.setItem('settingsMenu', item || 'fluid');
    }.bind(this))();

    (function() {
      if($('html').attr('dir') === 'ltr') {
        this.refs.ltr.setChecked(true);
      } else {
        this.refs.rtl.setChecked(true);
      }
    }.bind(this))();

    (function() {
      this.bodyLayoutRadioChange(localStorage.getItem('bodyLayout'));
    }.bind(this))();

    (function() {
      var chart = new Rubix('#commit-column-chart', {
          width: '100%',
          height: 100,
          hideAxisAndGrid: true,
          hideLegend: true,
          tooltip: {
            color: '#2EB398'
          },
          margin: {
            top: 25,
            bottom: 25
          }
      });

      var alerts = chart.column_series({
          name: 'Commits',
          color: '#2EB398'
      });

      alerts.addData([
          {x: 10, y: 20},
          {x: 11, y: 50},
          {x: 12, y: 35},
          {x: 13, y: 30},
          {x: 14, y: 20},
          {x: 15, y: 25},
          {x: 16, y: 30},
          {x: 17, y: 50},
          {x: 18, y: 20},
          {x: 19, y: 30},
          {x: 20, y: 50},
          {x: 21, y: 20},
          {x: 22, y: 50},
          {x: 23, y: 35},
          {x: 24, y: 30},
          {x: 25, y: 20},
          {x: 26, y: 30}
      ]);
    })();
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('ctx:ready', this.l20nContextReady);
  },
  render: function() {
    return (
      <NavContent className='pull-right' {...this.props}>
        <Nav className='hidden-xs'>
          <NavItem divider />
          <NavItem className='hidden-sm'>
            <a href='#' onClick={this.handleSkinSwitch}>
              <Icon glyph='icon-fontello-circle' className='fg-theme' style={{lineHeight: 1, fontSize: 24 }} />
            </a>
          </NavItem>
          <NavItem divider />
          <NavItem dropdown>
            <DropdownButton id='flag-menu-btn' nav toggleOnHover container={this} menu='flag-menu'>
              <img src={'/imgs/flags/flags/flat/32/' + this.state.selectedFlag + '.png'} width='32' height='32' />
            </DropdownButton>
            <Menu alignRight noTimer bsStyle='theme' ref='flag-menu' id='flag-menu' className='double-width' onItemSelect={this.changeFlag}  style={{paddingBottom: 0}}>
              <MenuItem header>
                <Entity entity='languageMenuHeading'/>
              </MenuItem>
              <LocaleMenuItem lang='enUS' locale='en-US' flag='United-States'/>
              <LocaleMenuItem lang='fr' locale='fr' flag='France'/>
              <LocaleMenuItem lang='it' locale='it' flag='Italy'/>
              <LocaleMenuItem lang='ge' locale='ge' flag='Germany'/>
              <LocaleMenuItem lang='ar' locale='ar' flag='Saudi-Arabia'/>
              <LocaleMenuItem lang='ch' locale='ch' flag='China'/>
            </Menu>
          </NavItem>
          <NavItem divider />
          <DirectNavItem glyph='user-female' path='/app/social' className='small-font' />
          <NavItem dropdown className='small-font collapse-left'>
            <DropdownButton nav toggleOnHover container={this} menu='settings-menu'>
              <Icon bundle='fontello' glyph='cog-7' />
            </DropdownButton>
            <Menu alignRight noTimer bsStyle='theme' style={{width: 375}} ref='settings-menu' id='settings-menu' onItemSelect={this.changeViewport}>
              <MenuItem header>
                <Entity entity='settingsMenuHeading' />
              </MenuItem>
              <MenuItem data-type='dimension' data-val='fluid' href='#'>
                <Entity entity='settingsMenuFluid' />
              </MenuItem>
              <MenuItem data-type='dimension' data-val='boxed' href='#'>
                <Entity entity='settingsMenuBoxed' />
              </MenuItem>
              <MenuItem header>
                Layout
              </MenuItem>
              <MenuItem noHover>
                <Grid>
                  <Row>
                    <Col xs={6}>
                      <Radio browser ref='ltr' value='ltr' name='switch-layout' defaultChecked onChange={this.handleLayoutRadioChange}>
                        LTR
                      </Radio>
                    </Col>
                    <Col xs={6} className='text-right'>
                      <Radio browser ref='rtl' value='rtl' name='switch-layout' onChange={this.handleLayoutRadioChange}>
                        RTL
                      </Radio>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem header>
                Body Layout
              </MenuItem>
              <MenuItem noHover>
                <Grid>
                  <Row>
                    <Col xs={8}>
                      <Radio browser ref='fixed-body' value='fixed-body' name='switch-body-layout' defaultChecked onChange={this.handleBodyLayoutRadioChange}>
                        Fixed (Header + Sidebar)
                      </Radio>
                    </Col>
                    <Col xs={4} className='text-right'>
                      <Radio browser ref='static-body' value='static-body' name='switch-body-layout' onChange={this.handleBodyLayoutRadioChange}>
                        Static
                      </Radio>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
            </Menu>
          </NavItem>
          <NavItem divider />
          <DirectNavItem glyph='mail-3' path='/app/mailbox/inbox' />
          <NavItem dropdown className='collapse-left'>
            <DropdownButton nav toggleOnHover container={this} menu='bullhorn-menu'>
              <Icon bundle='fontello' glyph='bullhorn' />
              <Badge className='fg-darkbrown bg-orange notification-badge'>3</Badge>
            </DropdownButton>
            <Menu alignRight noTimer id='notifications-menu' ref='bullhorn-menu' className='double-width' alwaysInactive>
              <MenuItem header>
                <Entity entity='notificationsMenuHeading' />
              </MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2} className='avatar-container' collapseRight>
                      <div><img src='/imgs/avatars/avatar22.png' width='40' height='40' alt='sarah_patchett' /></div>
                      <div className='text-center'>
                        <BLabel bsStyle='info'>NEW</BLabel>
                      </div>
                    </Col>
                    <Col xs={10} className='notification-container' collapseLeft collapseRight>
                      <div className='time'>
                        <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='chat-5'/><em><Entity entity='notificationsTimeFirst' /></em></strong>
                      </div>
                      <div className='message-header'>
                        <strong className='fg-darkgreen45'>Sarah Patchett sent you a private message</strong>
                      </div>
                      <div className='message-details fg-text'>
                        <span>{"Hey Anna! Sorry for delayed response. I've just finished reading the mail you sent couple of days ago..."}</span>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2} className='avatar-container' collapseRight>
                      <img src='/imgs/avatars/avatar21.png' width='40' height='40' alt='john_young' />
                    </Col>
                    <Col xs={10} className='notification-container' collapseLeft collapseRight>
                      <div className='time'>
                        <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='user-add'/><em>2 hours ago</em></strong>
                      </div>
                      <div className='message-header'>
                        <strong className='fg-darkgreen45'>John Young added you as a collaborator</strong>
                      </div>
                      <div className='message-details fg-text'>
                        <span>to the repository </span><em className='fg-darkblue'>sketchpixy/rubix</em>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2} className='avatar-container' collapseRight>
                      <div><img src='/imgs/github.png' width='40' height='40' alt='github' /></div>
                      <div className='text-center'>
                        <BLabel bsStyle='danger'>ALERT</BLabel>
                      </div>
                    </Col>
                    <Col xs={10} className='notification-container' collapseLeft collapseRight>
                      <div className='time'>
                        <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='attention-alt-1'/><em>5 days ago</em></strong>
                      </div>
                      <div className='message-header'>
                        <strong className='fg-darkgreen45'>Github sent you a notification</strong>
                      </div>
                      <div className='message-details fg-text'>
                        <span>Your </span><span className='fg-darkblue'>Large Plan</span><span> will expire in one week. Please update your billing details at our Billing center. Thank you!</span>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem noHover>
                <Grid collapse style={{marginBottom: -10}}>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <Button block className='notification-footer-btn left-btn'>MARK ALL READ</Button>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <Button block className='notification-footer-btn right-btn'>VIEW ALL</Button>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
            </Menu>
          </NavItem>
          <NavItem dropdown className='collapse-left'>
            <DropdownButton nav toggleOnHover container={this} menu='rss-menu'>
              <Icon bundle='fontello' glyph='rss-1' />
              <Badge className='fg-darkgreen bg-darkgreen40 notification-badge'>4</Badge>
            </DropdownButton>
            <Menu alignRight noTimer id='rss-menu' ref='rss-menu' className='double-width' alwaysInactive>
              <MenuItem header>Your news feed</MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2}>
                      <Icon className='fg-text' bundle='fontello' glyph='star' />
                    </Col>
                    <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                      <div className='time'>
                        <strong className='fg-darkgray50'><em>an hour ago</em></strong>
                      </div>
                      <div className='message-header fg-darkgray50'>
                        <strong className='fg-darkgreen45'>@johndoe</strong><strong> starred </strong><strong className='fg-darkblue'>joyent/node</strong>
                      </div>
                      <div className='message-details fg-text'>
                        evented I/O for v8 javascript
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2}>
                      <Icon className='fg-text' bundle='fontello' glyph='chat-1' />
                    </Col>
                    <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                      <div className='time'>
                        <strong className='fg-darkgray50'><em>2 hours ago</em></strong>
                      </div>
                      <div className='message-header fg-darkgray50'>
                        <strong className='fg-darkgreen45'>@jackie</strong><strong> commented on issue </strong><strong className='fg-darkblue'>#150</strong>
                      </div>
                      <div className='message-details fg-text'>
                        {"Nice catch! I'll get this fixed soon. Meanwhile..."}
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2}>
                      <Icon className='fg-text' bundle='fontello' glyph='fork' />
                    </Col>
                    <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                      <div className='time'>
                        <strong className='fg-darkgray50'><em>5 hours ago</em></strong>
                      </div>
                      <div className='message-header fg-darkgray50'>
                        <strong className='fg-darkgreen45'>@sketchpixy</strong><strong> forked </strong><strong className='fg-darkblue'>facebook/react</strong>
                      </div>
                      <div className='message-details fg-text'>
                        to sketchpixy/react
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem href='#'>
                <Grid>
                  <Row>
                    <Col xs={2}>
                      <Icon className='fg-text' bundle='fontello' glyph='attention-alt-1' />
                    </Col>
                    <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                      <div className='time'>
                        <strong className='fg-darkgray50'><em>2 days ago</em></strong>
                      </div>
                      <div className='message-header fg-darkgray50'>
                        <strong className='fg-darkgreen45'>@mario</strong><strong> opened issue </strong><strong className='fg-darkblue'>twbs/bootstrap#44</strong>
                      </div>
                      <div className='message-details fg-text'>
                        Request: Support RTL version
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
              <MenuItem header>Your commit activity</MenuItem>
              <MenuItem noHover >
                <Grid style={{marginBottom: -10}}>
                  <Row>
                    <Col xs={12}>
                      <div id='commit-column-chart'></div>
                    </Col>
                  </Row>
                </Grid>
              </MenuItem>
            </Menu>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem className='logout' href='#' onClick={this.handleLogout}>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </NavContent>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <Grid id='navbar' {...this.props}>
        <Row>
          <Col xs={12}>
            <NavBar fixedTop id='rubix-nav-header'>
              <Container fluid>
                <Row>
                  <Col xs={3} visible='xs'>
                    <SidebarBtn />
                  </Col>
                  <Col xs={6} sm={4}>
                    <Brand />
                  </Col>
                  <Col xs={3} sm={8}>
                    <Navigation pressed={this.props.pressed} />
                  </Col>
                </Row>
              </Container>
            </NavBar>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Header;
