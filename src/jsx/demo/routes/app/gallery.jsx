var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var GalleryItem = React.createClass({
  getInitialState: function() {
    return {
      active: this.props.active || false,
      counts: (Math.round(Math.random() * 20) + 4)
    };
  },
  handleIncrement: function(e) {
    if(this.state.active) return;
    this.setState({
      active: true,
      counts: this.state.counts+1
    });
  },
  render: function() {
    return (
      <PanelContainer>
        <Panel>
          <PanelHeader>
            <Grid className='gallery-item'>
              <Row>
                <Col xs={12} style={{padding: 12.5}}>
                  <a className='gallery-1 gallery-item-link' href={'/imgs/gallery/'+this.props.image+'.jpg'} title={this.props.title}>
                    <Img responsive src={'/imgs/gallery/'+this.props.image+'-thumb.jpg'} alt={this.props.title} width='200' height='150'/>
                    <div className='black-wrapper text-center'>
                      <Table style={{height: '100%', width: '100%'}}>
                        <tbody>
                          <tr>
                            <td>
                              <Icon glyph='icon-outlined-magnifier-plus icon-3x' />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </a>
                  <div className='text-center'>
                    <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.title}</h4>
                    <h6 className='fg-darkgrayishblue75 visible-xs' style={{textTransform: 'uppercase'}}>{this.props.title}</h6>
                    <h5 className='fg-darkgray50 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.subtitle}</h5>
                    <h6 className='visible-xs' style={{textTransform: 'uppercase'}}><small className='fg-darkgray50'>{this.props.subtitle}</small></h6>
                      <Button outlined onlyOnHover bsStyle='red' className='fav-btn' active={this.state.active} onClick={this.handleIncrement}>
                        <Icon glyph='icon-flatline-heart' />
                        <span className='counts'>{this.state.counts}</span>
                      </Button>
                  </div>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {
    var links = document.getElementsByClassName('gallery-1');
    $('.gallery-1').unbind('click').bind('click', function(event) {
      blueimp.Gallery(links, {
        index: $(this).get(0),
        event: event
      });
    });
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row className='gallery-view'>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n6es0tRk5w1st5lhmo1_1280' title='skyline' subtitle='10th Dec - 12th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem active image='tumblr_n6eszmeQMR1st5lhmo1_1280' title='me at ny' subtitle='11th Dec - 12th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n6rzkfxeOR1st5lhmo1_1280' title='vintage cameras' subtitle='13th Dec - 14th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n6rztipoQy1st5lhmo1_1280' title='columns' subtitle='13th Dec - 14th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n7fg2vYZ741st5lhmo1_1280' title='peak' subtitle='14th Dec - 15th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n7fgnop0bz1st5lhmo1_1280' title='Mac' subtitle='14th Dec - 15th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n7yhe1sTa41st5lhmo1_1280' title='Taxi cabs' subtitle='14th Dec - 15th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n8gxs0oWZ21st5lhmo1_1280' title='Golden gate' subtitle='14th Dec - 15th Dec' />
            </Col>
            <Col xs={6} sm={4} collapseRight>
              <GalleryItem image='tumblr_n9hyqfJavs1st5lhmo1_1280' title='Empire state' subtitle='14th Dec - 15th Dec' />
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var GalleryPage = React.createClass({
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

module.exports = GalleryPage;
