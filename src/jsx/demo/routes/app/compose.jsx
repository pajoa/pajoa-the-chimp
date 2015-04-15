/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var classSet = React.addons.classSet;
var Body = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  handleClick: function() {
    this.transitionTo('/app/mailbox/inbox');
  },
  componentDidMount: function() {
    $('#trumbowyg-demo').trumbowyg({
      mobile: false,
      tablet: false,
      autogrow: true,
      dir: $('html').attr('dir')
    }).trumbowyg('html', '<p>Steve Jobs became the greatest business executive of our era, the one most certain to be remembered a century from now. History will place him in the pantheon right next to Edison and Ford. More than anyone else of his time, he made products that were completely innovative, combining the power of poetry and processors.</p><blockquote><p style="margin-bottom: 12.5px;"><span style="font-size: 11pt; line-height: 1.78571;">Some people say, “Give the customers what they want.” But that’s not my approach. Our job is to figure out what they’re going to want before they do. I think Henry Ford once said, <b>“If I’d asked customers what they wanted, they would have told me, ‘A faster horse!’”</b> People don’t know what they want until you show it to them. That’s why I never rely on market research. Our task is to read things that are not yet on the page.&nbsp;</span><br></p><div><span style="font-size: 11pt; line-height: 1.78571;">- Steve Jobs in <i>Steve Jobs by Walter Isaacson</i></span></div></blockquote><p>Was he smart? No, not exceptionally. Instead, he was a <b><i>genius</i></b>. His imaginative leaps were instinctive, unexpected, and at times <b><i>magical</i></b>. He was, indeed, an example of what the mathematician Mark Kac called a magician genius, someone whose insights come out of the blue and require intuition more than mere mental processing power. Like a pathfinder, he could absorb information, sniff the winds, and sense what lay ahead.</p>');
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer className='inbox'>
                <Panel>
                  <PanelBody style={{paddingTop: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={8} style={{paddingTop: 12.5}}>
                          <ButtonToolbar className='inbox-toolbar'>
                            <ButtonGroup>
                              <Button outlined onlyOnHover bsStyle='darkgreen45' onClick={this.handleClick}><Icon glyph='icon-dripicons-return'/></Button>
                              <Button outlined onlyOnHover bsStyle='danger' onClick={this.handleClick}><Icon glyph='icon-feather-cross'/></Button>
                            </ButtonGroup>
                          </ButtonToolbar>
                        </Col>
                        <Col xs={4} className='text-right'>
                          <div className='inbox-avatar'>
                            <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
                            <div className='inbox-avatar-name hidden-xs hidden-sm'>
                              <div>Anna Sanchez</div>
                              <div><small>Compose</small></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                    <hr style={{margin: 0, marginBottom: 25}}/>
                    <Panel horizontal>
                      <PanelBody className='panel-sm-9 panel-xs-12'>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <Form horizontal style={{marginBottom: 25}}>
                                <FormGroup>
                                  <Label control sm={1} htmlFor='email-to'>To</Label>
                                  <Col sm={11}>
                                    <Input type='email' id='email-to' placeholder='Ex: sender@example.com' autoFocus />
                                  </Col>
                                </FormGroup>
                                <FormGroup>
                                  <Label control sm={1} htmlFor='email-cc'>CC</Label>
                                  <Col sm={11}>
                                    <Input type='email' id='email-cc' />
                                  </Col>
                                </FormGroup>
                                <FormGroup>
                                  <Label control sm={1} htmlFor='email-bcc'>BCC</Label>
                                  <Col sm={11}>
                                    <Input type='email' id='email-bcc' />
                                  </Col>
                                </FormGroup>
                                <FormGroup>
                                  <Label control sm={1} htmlFor='email-subject'>Subject</Label>
                                  <Col sm={11}>
                                    <Input type='text' id='email-subject' placeholder='Enter a subject title here' />
                                  </Col>
                                </FormGroup>
                              </Form>
                            </Col>
                          </Row>
                          <Row>
                            <Col id='trumbowyg-demo-container' xs={12} collapseLeft collapseRight>
                              <div id='trumbowyg-demo'></div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} className='text-right' style={{marginBottom: 16}}>
                              <ButtonToolbar style={{display: 'inline-block'}}>
                                <ButtonGroup>
                                  <Button outlined onlyOnHover bsStyle='danger'>discard</Button>
                                  <Button outlined onlyOnHover bsStyle='green'>save</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                  <Button outlined bsStyle='blue'>send</Button>
                                </ButtonGroup>
                              </ButtonToolbar>
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

var Compose = React.createClass({
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

module.exports = Compose;
