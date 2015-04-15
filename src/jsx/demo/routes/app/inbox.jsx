var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var classSet = React.addons.classSet;
var InboxNavItem = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={8} collapseLeft collapseRight>
            <Icon glyph={this.props.glyph} className='inbox-item-icon'/>
            <span>{this.props.title}</span>
          </Col>
          <Col xs={4} className='text-right' collapseLeft collapseRight>
            <div style={{marginTop: 5}}><BLabel className={this.props.labelClass}>{this.props.labelValue}</BLabel></div>
          </Col>
        </Row>
      </Grid>
    );
  }
});

var InboxNavTag = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12} collapseLeft collapseRight>
            <Badge className={this.props.badgeClass}>{' '}</Badge>
            <span>{this.props.title}</span>
          </Col>
        </Row>
      </Grid>
    );
  }
});

var InboxItem = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  statics: {
    ID: 0,
    resetID: function() {
      InboxItem.ID = 0;
    },
    getID: function() {
      return ++InboxItem.ID;
    }
  },
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/mailbox/mail');
  },
  render: function() {
    var classes = React.addons.classSet({
      'inbox-item': true,
      'unread': this.props.unread
    });

    var props = React.mergeProps({
      className: classes,
      href: '/app/mailbox/mail',
      onClick: this.handleClick
    }, this.props);

    return (
      <a {...props}>
        <div className='inbox-avatar'>
          <img src={this.props.src} width='40' height='40' className={this.props.imgClass + ' hidden-xs'} />
          <div className='inbox-avatar-name'>
            <div className='fg-darkgrayishblue75'>{this.props.name}</div>
            <div><small><Badge className={this.props.labelClass} style={{marginRight: 5, display: this.props.labelValue ? 'inline':'none'}}>{this.props.labelValue}</Badge><span>{this.props.description}</span></small></div>
          </div>
          <div className='inbox-date hidden-sm hidden-xs fg-darkgray40 text-right'>
            <div style={{position: 'relative', top: 5}}>{this.props.date}</div>
            <div style={{position: 'relative', top: -5}}><small>#{InboxItem.getID()}</small></div>
          </div>
        </div>
      </a>
    );
  }
});

var Body = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  handleClick: function() {
    this.transitionTo('/app/mailbox/compose');
  },
  render: function() {
    InboxItem.resetID();
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer className='inbox' collapseBottom>
                <Panel>
                  <PanelBody style={{paddingTop: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={8} style={{paddingTop: 12.5}}>
                          <ButtonToolbar className='inbox-toolbar'>
                            <ButtonGroup>
                              <Button bsStyle='blue' onClick={this.handleClick}>
                                <Icon glyph='icon-fontello-edit-1'/>
                              </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                              <Button outlined onlyOnHover bsStyle='darkgreen45'><Icon glyph='icon-fontello-reply'/></Button>
                              <Button outlined onlyOnHover bsStyle='darkgreen45' className='hidden-xs'><Icon glyph='icon-fontello-reply-all-1'/></Button>
                              <Button outlined onlyOnHover bsStyle='darkgreen45'><Icon glyph='icon-fontello-forward'/></Button>
                            </ButtonGroup>
                            <ButtonGroup className='hidden-xs'>
                              <Button outlined onlyOnHover bsStyle='danger' className='text-center'><Icon glyph='icon-fontello-attention-alt'/></Button>
                              <Button outlined onlyOnHover bsStyle='danger'><Icon glyph='icon-fontello-trash-1'/></Button>
                            </ButtonGroup>
                          </ButtonToolbar>
                        </Col>
                        <Col xs={4} className='text-right'>
                          <div className='inbox-avatar'>
                            <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
                            <div className='inbox-avatar-name hidden-xs hidden-sm'>
                              <div>Anna Sanchez</div>
                              <div><small>Mailbox</small></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                    <hr style={{margin: 0}}/>
                    <Panel horizontal>
                      <PanelLeft className='panel-sm-3 inbox-nav hidden-xs'>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <h6><small className='fg-darkgray'>MAILBOXES</small></h6>
                              <ListGroup className='list-bg-blue'>
                                <ListGroupItem active>
                                  <InboxNavItem glyph='icon-feather-mail' title='Inbox' labelClass='bg-white fg-blue' labelValue={58} />
                                </ListGroupItem>
                                <ListGroupItem>
                                  <InboxNavItem glyph='icon-simple-line-icons-star' title='Starred' />
                                </ListGroupItem>
                                <ListGroupItem>
                                  <InboxNavItem glyph='icon-dripicons-return' title='Sent' />
                                </ListGroupItem>
                                <ListGroupItem>
                                  <InboxNavItem glyph='icon-feather-archive' title='Drafts' />
                                </ListGroupItem>
                                <ListGroupItem>
                                  <InboxNavItem glyph='icon-dripicons-attachment' title='Attachments' />
                                </ListGroupItem>
                              </ListGroup>
                              <hr/>
                              <h6><small className='fg-darkgray'>OTHERS</small></h6>
                              <ListGroup>
                                <ListGroupItem>
                                  <InboxNavItem glyph='icon-fontello-attention-alt' title='Spam' labelClass='bg-red fg-white' labelValue={10} />
                                </ListGroupItem>
                                <ListGroupItem>
                                  <InboxNavItem glyph='icon-fontello-trash-1' title='Trash' />
                                </ListGroupItem>
                              </ListGroup>
                              <hr/>
                              <h6><small className='fg-darkgray'>TAGS</small></h6>
                              <ListGroup>
                                <ListGroupItem>
                                  <InboxNavTag title='#sometag' badgeClass='bg-green fg-white' />
                                </ListGroupItem>
                                <ListGroupItem>
                                  <InboxNavTag title='#anothertag' badgeClass='bg-red fg-white' />
                                </ListGroupItem>
                              </ListGroup>
                            </Col>
                          </Row>
                        </Grid>
                      </PanelLeft>
                      <PanelBody className='panel-sm-9 panel-xs-12'>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <InboxItem unread src='/imgs/avatars/avatar5.png' imgClass='border-green' name='Jordyn Ouellet (8)' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>Early access: </strong><span><LoremIpsum query='1s'/></span></span>} date='Aug 20th' />
                              <InboxItem unread src='/imgs/avatars/avatar7.png' imgClass='border-orange' name='Toby King (4)' labelValue='SOME LABEL' labelClass='bg-orange fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 19th' />
                              <InboxItem unread src='/imgs/avatars/avatar9.png' imgClass='border-blue' name='Ava Parry' labelValue='SOME LABEL' labelClass='bg-blue fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 18th' />
                              <InboxItem unread src='/imgs/avatars/avatar10.png' imgClass='border-red' name='Angelina Mills' labelValue='SOME LABEL' labelClass='bg-red fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 17rd' />
                              <InboxItem src='/imgs/avatars/avatar11.png' imgClass='border-purple' name='Crystal Ford' labelValue='SOME LABEL' labelClass='bg-purple fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 16th' />
                              <InboxItem src='/imgs/avatars/avatar13.png' imgClass='border-brown' name='Ju Lan' labelValue='SOME LABEL' labelClass='bg-brown fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 15th' />
                              <InboxItem src='/imgs/avatars/avatar14.png' imgClass='border-pink' name='Lana Collin' labelValue='SOME LABEL' labelClass='bg-pink fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 14th' />
                              <InboxItem src='/imgs/avatars/avatar15.png' imgClass='border-darkcyan' name='Ricardo Ibarra' labelValue='SOME LABEL' labelClass='bg-darkcyan fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 13th' />
                              <InboxItem src='/imgs/avatars/avatar16.png' imgClass='border-orange75' name='The Unknown' labelValue='SOME LABEL' labelClass='bg-orange75 fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 12th' />
                              <InboxItem src='/imgs/avatars/avatar8.png' imgClass='border-yellow' name='Antelope Inc.' labelValue='SOME LABEL' labelClass='bg-yellow fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 11th' />
                            </Col>
                          </Row>
                        </Grid>
                      </PanelBody>
                    </Panel>
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

var Inbox = React.createClass({
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

module.exports = Inbox;
