var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var ReactStyle = require('../../react-styles/src/ReactStyle.jsx');

var Body = React.createClass({
  createStep: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var data = $(e.target).serializeObject();
    if(!data.title.length) {
      alert('Title required!');
      return;
    }
    if(!data.content.length) {
      alert('Content required');
      return;
    }
    $('#wizard-3').steps('add', { title: data.title, content: data.content });
    $('#create-step').find('input:visible').eq(0).focus();
  },
  insertStep: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var data = $(e.target).serializeObject();
    if(!data.position.length) {
      alert('Position required!');
      return;
    }
    if(!data.title.length) {
      alert('Title required!');
      return;
    }
    if(!data.content.length) {
      alert('Content required');
      return;
    }
    $('#wizard-3').steps('insert', Number(data.position), { title: data.title, content: data.content });
    $('#insert-step').find('input:visible').eq(0).focus();
  },
  removeStep: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var data = $(e.target).serializeObject();
    if(!data.position.length) {
      alert('Position required!');
      return;
    }
    $('#wizard-3').steps('remove', Number(data.position));
    $('#remove-step').find('input:visible').eq(0).focus();
  },
  componentDidMount: function() {
    var isLtr = $('html').attr('dir') === 'ltr';
    var styles = {};

    if(isLtr) {
      styles['#wizard-2 .form-border'] = {
        borderRight: '1px solid #ddd'
      };
    } else {
      styles['#wizard-2 .form-border'] = {
        borderLeft: '1px solid #ddd'
      };
    }

    ReactStyle.addRules(ReactStyle.create(styles));

    $('#wizard-1').steps({
      autoFocus: true
    });

    $("#form-2").validate({
      rules: {
        confirm_password: {
          equalTo: "#password"
        }
      }
    });

    $('#wizard-2').steps({
      onStepChanging: function (event, currentIndex, newIndex) {
        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
        return $('#form-2').valid();
      },
      onFinishing: function (event, currentIndex) {
        $('#form-2').validate().settings.ignore = ':disabled';
        return $('#form-2').valid();
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
      }
    });

    $('#wizard-3').steps({
      enableAllSteps: true,
      enablePagination: false
    });

    $('#wizard-4').steps({
      stepsOrientation: "vertical"
    });

    $('#create-step').bind('submit', this.createStep);
    $('#insert-step').bind('submit', this.insertStep);
    $('#remove-step').bind('submit', this.removeStep);
  },
  componentWillUnmount: function() {
    $('#create-step').unbind('submit', this.createStep);
    $('#insert-step').unbind('submit', this.insertStep);
    $('#remove-step').unbind('submit', this.removeStep);
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jQuery Steps: Basic example</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div id='wizard-1'>
                      <h1>First Step</h1>
                      <div><LoremIpsum query='5s' /></div>

                      <h1>Second Step</h1>
                      <div><LoremIpsum query='5s' /></div>
                    </div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-pink fg-white'>
                <Panel>
                  <PanelHeader className='bg-pink fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jQuery Steps: Basic form example with Validation</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Form id='form-2'>
                      <div id='wizard-2'>
                        <h1>Account</h1>
                        <div>
                          <Grid>
                            <Row>
                              <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
                                <FormGroup>
                                  <Label htmlFor='username'>User name *</Label>
                                  <Input type='text' id='username' name='username' className='required' />
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor='password'>Password *</Label>
                                  <Input type='password' id='password' name='password' className='required' />
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor='confirm_password'>Confirm password *</Label>
                                  <Input type='password' id='confirm_password' name='confirm_password' className='required' />
                                </FormGroup>
                              </Col>
                              <Col sm={4} xs={6} collapseLeft className='form-border'>
                                <FormGroup>
                                  <Label htmlFor='comment'>Your comment *</Label>
                                  <Textarea rows='4' id='comment' name='comment' className='required' />
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor='username'>E-mail *</Label>
                                  <Input type='email' id='email' name='email' className='required' />
                                </FormGroup>
                              </Col>
                              <Col sm={4} xs={6} collapseRight>
                                <p>
                                  All fields marked (*) are Mandatory.
                                </p>
                              </Col>
                            </Row>
                          </Grid>
                        </div>

                        <h1>Terms and Conditions</h1>
                        <div>
                          <div className='terms'>
                            <h3>Terms and Conditions</h3>
                            <LoremIpsum query='5p' />
                          </div>
                          <Checkbox id='agreetoterms' name='agreetoterms' className='required'>I agree to the Terms and Conditions</Checkbox>
                        </div>
                      </div>
                    </Form>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange75 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jQuery Steps: Dynamic Manipulation Example</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div id='wizard-3'>
                      <h1>Create step</h1>
                      <div>
                        <Form id='create-step'>
                          <FormGroup>
                            <Label htmlFor='add-title'>Tab Title *</Label>
                            <Input type='text' name='title' id='add-title' />
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='add-content'>Tab Content *</Label>
                            <Textarea id='add-content' name='content' rows='5' />
                          </FormGroup>
                          <FormGroup>
                            <Button type='submit' bsStyle='darkgreen45' outlined>create step</Button>
                          </FormGroup>
                        </Form>
                      </div>

                      <h1>Insert step</h1>
                      <div>
                        <Form id='insert-step'>
                          <FormGroup>
                            <Label htmlFor='insert-position'>Position (zero-based) *</Label>
                            <Input type='text' name='position' id='insert-position' />
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='insert-title'>Tab Title *</Label>
                            <Input type='text' name='title' id='insert-title' />
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='insert-content'>Tab Content *</Label>
                            <Textarea id='insert-content' name='content' rows='5' />
                          </FormGroup>
                          <FormGroup>
                            <Button type='submit' bsStyle='darkgreen45' outlined>insert step</Button>
                          </FormGroup>
                        </Form>
                      </div>

                      <h1>Remove step</h1>
                      <div>
                        <Form id='remove-step'>
                          <FormGroup>
                            <Label htmlFor='remove-position'>Position (zero-based) *</Label>
                            <Input type='text' name='position' id='remove-position' />
                          </FormGroup>
                          <FormGroup>
                            <Button type='submit' bsStyle='darkgreen45' outlined>remove step</Button>
                          </FormGroup>
                        </Form>
                      </div>
                    </div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-darkblue fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkblue fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jQuery Steps: Vertical Steps Example</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div id='wizard-4'>
                      <h1>Pane 1</h1>
                      <div>
                        <LoremIpsum query='5s' />
                      </div>

                      <h1>Pane 2</h1>
                      <div>
                        <LoremIpsum query='5s' />
                      </div>

                      <h1>Pane 3</h1>
                      <div>
                        <LoremIpsum query='5s' />
                      </div>
                    </div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        {ReactStyle.renderToComponents()}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Wizard = React.createClass({
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

module.exports = Wizard;
