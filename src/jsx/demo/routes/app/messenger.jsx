var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    // configuring default options for Messenger
    Messenger.options = {
      theme: 'flat'
    };
  },
  basicNotification: function() {
    Messenger().post('Absolutely basic notification');
  },
  errorNotification: function() {
    Messenger().post({
      id: 'error',
      type: 'error',
      singleton: true,
      message: 'Whoops! we encountered an error!',
      showCloseButton: true
    });
  },
  infoNotification: function() {
    Messenger().post({
      id: 'info',
      type: 'info',
      singleton: true,
      message: 'Just send us a mail at <a href="mailto:support@sketchpixy.com">support@sketchpixy.com</a> if you have any queries!',
      showCloseButton: true
    });
  },
  successNotification: function() {
    Messenger().post({
      id: 'success',
      type: 'success',
      singleton: false,
      message: 'Congratulations! You are now a registered Rubixian!',
      showCloseButton: true
    });
  },
  updatingNotification: function() {
    var msg = Messenger().post({
      id: 'info2',
      type: 'info',
      singleton: false,
      message: 'Please wait while we process your request',
      showCloseButton: true
    });

    setTimeout(function() {
      msg.update({
        type: 'error',
        message: 'Whoops! we encountered an error!'
      });
    }, 5000);
  },
  actionNotification: function() {
    var msg;
    msg = Messenger().post({
      message: 'Launching thermonuclear war...',
      type: 'info',
      actions: {
        cancel: {
          label: 'cancel launch',
          action: function() {
            return msg.update({
              message: 'Thermonuclear war averted',
              type: 'success',
              actions: false
            });
          }
        }
      }
    });
  },
  actionRetryNotification: function() {
    var msg;
    msg = Messenger().post({
      message: "This is your last chance. After this, there is no turning back. You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I'm offering is the truth—nothing more.",
      singleton: false,
      id: 'neo',
      hideAfter: 10000000000,
      actions: {
        blue: {
          label: 'take blue pill',
          action: function() {
            return msg.update({
              message: 'Welcome to the Matrix!',
              type: 'success',
              hideAfter: 5,
              actions: false
            });
          }
        },
        red: {
          label: 'take red pill',
          action: function() {
            return msg.update({
              message: 'We will wait for a newer and better version of yourself! Until then goodbye and good luck Neo!',
              type: 'error',
              hideAfter: 5,
              actions: false
            });
          }
        }
      }
    });
  },
  notificationDirection: function(dir1, dir2) {
    var classes = 'messenger-fixed';
    if(typeof dir1 === 'string') classes += ' messenger-on-'+dir1+' ';
    if(typeof dir2 === 'string') classes += ' messenger-on-'+dir2+' ';
    classes = classes.trim();

    Messenger({
      extraClasses: classes
    }).post({
      singleton: false,
      showCloseButton: true,
      id: 'messenger-layout',
      message: classes
    });
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
                        <h3>HubSpot Messenger : Powerful Growl-like notification system</h3>
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
                                <div>Basic notification</div>
                                <ul>
                                  <li>Timeout after 10 seconds (default)</li>
                                  <li>Fixed at bottom-right (default)</li>
                                </ul>
                              </td>
                              <td className='text-right'>
                                <Button outlined onClick={this.basicNotification}>
                                  Trigger basic
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>Info and Error notification</div>
                                <ul>
                                  <li>Includes a close button</li>
                                  <li>Singleton (triggered only once)</li>
                                </ul>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='info' outlined onClick={this.infoNotification}>
                                  Trigger info
                                </Button>{' '}
                                <Button bsStyle='danger' outlined onClick={this.errorNotification}>
                                  Trigger error
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>Success notification</div>
                                <ul>
                                  <li>Includes a close button</li>
                                  <li>Triggers only 1 notification at a time</li>
                                </ul>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='success' outlined onClick={this.successNotification}>
                                  Trigger success
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>Updating notification</div>
                                <ul>
                                  <li>Changes notification message after specified duration (5 seconds)</li>
                                  <li>Changes state from info to error</li>
                                  <li>Triggers only 1 notification at a time</li>
                                </ul>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='darkgreen45' outlined onClick={this.updatingNotification}>
                                  Trigger notification
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>Taking actions</div>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='purple' outlined onClick={this.actionNotification}>
                                  Trigger launch
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>Taking actions [custom buttons]</div>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='desaturateddarkblue' outlined onClick={this.actionRetryNotification}>
                                  Make a choice Neo!
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
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <PanelHeader className='bg-darkgreen45 fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Notification layout</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <Table bordered>
                          <tbody>
                            <tr>
                              <td>
                                <Button bsStyle='green' outlined onClick={this.notificationDirection.bind(this, 'top', 'left')}>
                                  Top Left
                                </Button>
                              </td>
                              <td className='text-center'>
                                <Button bsStyle='green' outlined onClick={this.notificationDirection.bind(this, 'top')}>
                                  Top
                                </Button>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='green' outlined onClick={this.notificationDirection.bind(this, 'top', 'right')}>
                                  Top Right
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Button bsStyle='green' outlined onClick={this.notificationDirection.bind(this, 'bottom', 'left')}>
                                  Bottom Left
                                </Button>
                              </td>
                              <td className='text-center'>
                                <Button bsStyle='green' outlined onClick={this.notificationDirection.bind(this, 'bottom')}>
                                  Bottom
                                </Button>
                              </td>
                              <td className='text-right'>
                                <Button bsStyle='green' outlined onClick={this.notificationDirection.bind(this, 'bottom', 'right')}>
                                  Bottom Right
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
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var MessengerPage = React.createClass({
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

module.exports = MessengerPage;
