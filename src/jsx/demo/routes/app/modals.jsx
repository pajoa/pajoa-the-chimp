var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  destroyPlanet: function() {
    vex.dialog.confirm({
      message: 'Are you absolutely sure you want to destroy the alien planet?',
      callback: function(value) {
        vex.dialog.alert(value ? 'Successfully destroyed the planet.' : 'Chicken.');
      }
    });
  },
  login: function() {
    vex.dialog.open({
      message: 'Enter your username and password:',
      input: '' +
          '<input name="username" type="text" placeholder="Username" required />' +
          '<input name="password" type="password" placeholder="Password" required />' +
      '',
      buttons: [
          $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
          $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
      ],
      callback: function (data) {
        vex.dialog.alert('User: ' + data.username + ' Password: ' + data.password);
      }
    });
  },
  alert: function() {
    vex.dialog.alert('Thanks for checking out Vex!');
  },
  prompt: function() {
    vex.dialog.prompt({
      message: 'What planet did the aliens come from?',
      placeholder: 'Planet name',
      callback: function(value) {
        vex.dialog.alert('Callback value: <b>'+value+'</b>');
      }
    });
  },
  dtcpd: function() {
    var todayDateString;

    todayDateString = new Date().toJSON().slice(0, 10);

    vex.dialog.open({
      message: 'Select a date and color.',
      input: "<style>\n    .vex-custom-field-wrapper {\n        margin: 1em 0;\n    }\n    .vex-custom-field-wrapper > label {\n        display: inline-block;\n        margin-bottom: .2em;\n    }\n</style>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"date\">Date</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"date\" type=\"date\" value=\"" + todayDateString + "\" />\n    </div>\n</div>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"color\">Color</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"color\" type=\"color\" value=\"#ff00cc\" />\n    </div>\n</div>",
      callback: function(data) {
        vex.dialog.alert("<h4>Result</h4>\n<p>\n    Date: <b>" + data.date + "</b><br/>\n    Color: <span style='position:absolute;width:20px;height:20px;background:"+data.color+";margin:5px;'></span>\n</p>");
      }
    });
  },
  handleClick: function() {
    vex.dialog.alert('Woah!! This is mixed with Vex :D');
  },
  getModal: function() {
    return (
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Modal title</h4>
        </ModalHeader>
        <ModalBody>
          <p>One fine body&hellip;</p>
        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  },
  getSmallModal: function() {
    return (
      <Modal sm>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Modal title</h4>
        </ModalHeader>
        <ModalBody>
          <p><LoremIpsum query='2s' /></p>
        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  },
  getLargeModal: function() {
    return (
      <Modal lg>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Modal title</h4>
        </ModalHeader>
        <ModalBody>
          <p><LoremIpsum query='2s' /></p>
        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  },
  getLongModal: function() {
    return (
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Really Long Modal</h4>
        </ModalHeader>
        <ModalBody>
          <p>
            <img src='/imgs/longmodal.jpg' />
          </p>
        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  },
  getModalWithTooltipsAndPopovers: function() {
    var modalVisible = function() {
      $('[data-toggle=tooltip]').tooltip();
    };

    return (
      <Modal onShown={modalVisible}>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Modal title</h4>
        </ModalHeader>
        <ModalBody>
          <h4>Text in a modal</h4>
          <p>
            <LoremIpsum query='1s' />
          </p>
          <h4>Popover in a modal</h4>
          <p>
            This <Button>button</Button> should trigger a popover on click.
          </p>
          <h4>Tooltips in a modal</h4>
          <p>
            <a href='#' title='Tooltip' data-toggle='tooltip' data-placement='top'>This link</a> and <a href='#' title='Tooltip' data-toggle='tooltip' data-placement='top'>that link</a> should have tooltips on hover.
          </p>
          <h4>Overflowing text to show scroll behavior</h4>
          <p>
            <LoremIpsum query='2-4p' />
          </p>
        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>HubSpot Vex Modals</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <Table bordered striped>
                          <thead>
                            <tr>
                              <th>Type</th>
                              <th className='text-right'>Call to action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                Alert demo
                              </td>
                              <td className='text-right'>
                                <Button outlined onClick={this.alert}>
                                  Open an alert
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Confirm demo
                              </td>
                              <td className='text-right'>
                                <Button outlined onClick={this.destroyPlanet}>
                                  Destroy the Planet!
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Prompt demo
                              </td>
                              <td className='text-right'>
                                <Button outlined onClick={this.prompt}>
                                  Open a prompt
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Login demo
                              </td>
                              <td className='text-right'>
                                <Button outlined onClick={this.login}>
                                  Login
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Date/time + Color picker demo
                              </td>
                              <td className='text-right'>
                                <Button outlined onClick={this.dtcpd}>
                                  Click me
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <PanelHeader className='bg-purple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Bootstrap Modals</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <Table bordered striped>
                          <thead>
                            <tr>
                              <th>Type</th>
                              <th className='text-right'>Call to action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                Basic demo
                              </td>
                              <td className='text-right'>
                                <Button outlined bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())}>Launch basic demo</Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Small modal demo
                              </td>
                              <td className='text-right'>
                                <Button outlined bsStyle='primary' onClick={ModalManager.create.bind(this, this.getSmallModal())} onTouchEnd={ModalManager.create.bind(this, this.getSmallModal())}>Launch small modal</Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Large modal demo
                              </td>
                              <td className='text-right'>
                                <Button outlined bsStyle='primary' onClick={ModalManager.create.bind(this, this.getLargeModal())} onTouchEnd={ModalManager.create.bind(this, this.getLargeModal())}>Launch large modal</Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Long modal demo
                              </td>
                              <td className='text-right'>
                                <Button outlined bsStyle='primary' onClick={ModalManager.create.bind(this, this.getLongModal())} onTouchEnd={ModalManager.create.bind(this, this.getLongModal())}>Launch long modal</Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Special Modal: Tooltips and Popovers
                              </td>
                              <td className='text-right'>
                                <Button outlined bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())} onTouchEnd={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())}>Launch special modal</Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Modals = React.createClass({
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

module.exports = Modals;
