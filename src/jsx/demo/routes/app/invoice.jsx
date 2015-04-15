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
              <PanelContainer>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={6} style={{paddingTop: 25}}>
                          <div><img src='/imgs/shots/liontechlogo.jpg' /></div><br/>
                          <address>
                            <strong className='fg-black50'>LionTech Dummy Corp.</strong><br/>
                            123 Folsom Ave, Suite 600<br/>
                            San Francisco, CA 94107<br/>
                            <abbr title='Phone'>P:</abbr> (123) 456-7890<br/>
                            <div className='hidden-print'><abbr title='Email'>E:</abbr>{' '}<a href='mailto:support@sketchpixy.com'>support@sketchpixy.com</a></div>
                          </address>
                        </Col>
                        <Col xs={6} className='text-right' style={{paddingTop: 25}}>
                          <h2 className='fg-black' style={{margin: 0, marginBottom: 12.5}}>Invoice #006699</h2>
                          <div>Issued April 24th, 2014</div>
                          <div className='fg-red hidden-print'>Payment due September 25th, 2014</div><br/>
                          <address>
                            <strong className='fg-black50'>SuperTech Client.</strong><br/>
                            795 Folsom Ave, Suite 300<br/>
                            San Francisco, CA 12345<br/>
                            <abbr title='Phone'>P:</abbr> (098) 765-4321
                          </address>
                        </Col>
                      </Row>
                    </Grid>
                    <hr className='hidden-print' style={{marginTop: 0}}/>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table striped>
                            <thead className='bg-darkgrayishblue75 fg-white'>
                              <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Sub-total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Website wireframe for 5 pages</td>
                                <td>10 hours</td>
                                <td>$75</td>
                                <td>$750</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Design and layout of 5 pages in Photoshop</td>
                                <td>20 hours</td>
                                <td>$75</td>
                                <td>$1,500</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Logo design</td>
                                <td>1</td>
                                <td>$500</td>
                                <td>$500</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>PSD to HTML coding</td>
                                <td>25 hours</td>
                                <td>$100</td>
                                <td>$2,500</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>E-Commerce development</td>
                                <td>10 hours</td>
                                <td>$100</td>
                                <td>$1,000</td>
                              </tr>
                            </tbody>
                            <tfoot className='bg-darkgrayishblue75 fg-white'>
                              <tr>
                                <th colSpan='3'></th>
                                <th>Total</th>
                                <th>$6,250</th>
                              </tr>
                            </tfoot>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                    <hr className='hidden-print' style={{marginTop: 0}}/>
                    <Grid>
                      <Row>
                        <Col xs={8}>
                          <p>
                            <LoremIpsum query='6s' />
                          </p>
                          <p>
                            <strong>Thank you very much for choosing us. It was a pleasure to have worked with you.</strong>
                          </p>
                          <p>
                            <img src='/imgs/shots/paypal.jpg' style={{marginLeft: -8, marginRight: -8}} />
                          </p>
                        </Col>
                        <Col xs={4}>
                          <div className='bg-darkgrayishblue75 text-uppercase text-centered'>
                              <h5 className='subheader fg-white' style={{margin: 0, padding: 12.5}}>amount due</h5>
                          </div>
                          <div>
                              <Table>
                                <tbody>
                                  <tr>
                                    <td>Subtotal</td>
                                    <td>$6,250</td>
                                  </tr>
                                  <tr>
                                    <td>Tax (2%)</td>
                                    <td>$125</td>
                                  </tr>
                                  <tr>
                                    <td>Total</td>
                                    <td>$6,375</td>
                                  </tr>
                                </tbody>
                              </Table>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                    <hr className='hidden-print' style={{marginTop: 0}}/>
                    <Grid className='hidden-print'>
                      <Row>
                        <Col xs={12} className='text-right'>
                          <div><Button outlined lg bsStyle='darkgrayishblue75' onClick={window.print}>print invoice</Button></div><br/>
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
var Invoice = React.createClass({
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

module.exports = Invoice;
