var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PricingTableContainer>
                <PricingTable sm={3}>
                  <PricingTableHeader>
                    <div>starter</div>
                    <PricingTablePrice>$19</PricingTablePrice>
                  </PricingTableHeader>
                  <PricingTableBody>
                    <PricingFeature>
                      <strong>1</strong> domain
                    </PricingFeature>
                    <PricingFeature>
                      <strong>0.25GHz</strong> CPU
                    </PricingFeature>
                    <PricingFeature>
                      <strong>512MB</strong> RAM
                    </PricingFeature>
                    <PricingFeature>
                      <strong>10GB</strong> bandwidth
                    </PricingFeature>
                    <PricingFeature>
                      <strong>10GB</strong> storage space
                    </PricingFeature>
                    <PricingButtonContainer>
                      <Button outlined lg onlyOnHover bsStyle='lightblue50'>choose plan</Button>
                    </PricingButtonContainer>
                  </PricingTableBody>
                </PricingTable>

                <PricingTable sm={3}>
                  <PricingTableHeader>
                    <div>basic</div>
                    <PricingTablePrice>$29</PricingTablePrice>
                  </PricingTableHeader>
                  <PricingTableBody>
                    <PricingFeature>
                      <strong>2</strong> domains
                    </PricingFeature>
                    <PricingFeature>
                      <strong>0.5GHz</strong> CPU
                    </PricingFeature>
                    <PricingFeature>
                      <strong>1GB</strong> RAM
                    </PricingFeature>
                    <PricingFeature>
                      <strong>20GB</strong> bandwidth
                    </PricingFeature>
                    <PricingFeature>
                      <strong>20GB</strong> storage space
                    </PricingFeature>
                    <PricingButtonContainer>
                      <Button outlined lg onlyOnHover bsStyle='lightblue50'>choose plan</Button>
                    </PricingButtonContainer>
                  </PricingTableBody>
                </PricingTable>

                <PricingTable sm={3} preferred className='border-theme'>
                  <PricingTableHeader className='bg-theme fg-white'>
                    <div>pro</div>
                    <PricingTablePrice className='bg-theme'>$49</PricingTablePrice>
                  </PricingTableHeader>
                  <PricingTableBody>
                    <PricingFeature>
                      <strong>5</strong> domains
                    </PricingFeature>
                    <PricingFeature>
                      <strong>1.5GHz</strong> CPU
                    </PricingFeature>
                    <PricingFeature>
                      <strong>2GB</strong> RAM
                    </PricingFeature>
                    <PricingFeature>
                      <strong>100GB</strong> bandwidth
                    </PricingFeature>
                    <PricingFeature>
                      <strong>500GB</strong> storage space
                    </PricingFeature>
                    <PricingButtonContainer>
                      <Button lg bsStyle='theme'>choose plan</Button>
                    </PricingButtonContainer>
                  </PricingTableBody>
                </PricingTable>

                <PricingTable sm={3}>
                  <PricingTableHeader>
                    <div>ultra</div>
                    <PricingTablePrice>$99</PricingTablePrice>
                  </PricingTableHeader>
                  <PricingTableBody>
                    <PricingFeature>
                      <strong>20</strong> domains
                    </PricingFeature>
                    <PricingFeature>
                      <strong>4GHz</strong> CPU
                    </PricingFeature>
                    <PricingFeature>
                      <strong>10GB</strong> RAM
                    </PricingFeature>
                    <PricingFeature>
                      <strong>2TB</strong> bandwidth
                    </PricingFeature>
                    <PricingFeature>
                      <strong>5TB</strong> storage space
                    </PricingFeature>
                    <PricingButtonContainer>
                      <Button outlined lg onlyOnHover bsStyle='lightblue50'>choose plan</Button>
                    </PricingButtonContainer>
                  </PricingTableBody>
                </PricingTable>
              </PricingTableContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var PricingTablesPage = React.createClass({
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

module.exports = PricingTablesPage;
