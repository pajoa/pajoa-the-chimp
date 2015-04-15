var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var fonts = [{
  name: 'climacon',
  color: 'brown',
  fonts: require('./fonts/climacons.jsx')
}, {
  name: 'mfizz',
  color: 'darkblue',
  fonts: require('./fonts/mfizz.jsx')
}, {
  name: 'devicon',
  color: 'darkgreen45',
  fonts: require('./fonts/devicon.jsx')
}, {
  name: 'stroke-gap-icons',
  color: 'pink',
  fonts: require('./fonts/stroke-gap-icons.jsx')
}, {
  name: 'simple-line-icons',
  color: 'brown',
  fonts: require('./fonts/simple-line-icons.jsx')
}, {
  name: 'pixelvicon',
  color: 'purple',
  fonts: require('./fonts/pixelvicon.jsx')
}, {
  name: 'nargela',
  color: 'paleblue',
  fonts: require('./fonts/nargela.jsx')
}, {
  name: 'flatline',
  color: 'desaturateddarkblue',
  fonts: require('./fonts/flatline.jsx')
}, {
  name: 'feather',
  color: 'darkcyan',
  fonts: require('./fonts/feather.jsx')
}, {
  name: 'dripicons',
  color: 'deepred',
  fonts: require('./fonts/dripicons.jsx')
}, {
  name: 'outlined',
  color: 'blue',
  fonts: require('./fonts/outlined.jsx')
},{
  name: 'ikons',
  color: 'paleorange',
  fonts: require('./fonts/ikons.jsx')
}, {
  name: 'fontello',
  color: 'green',
  fonts: require('./fonts/fontello.jsx')
}];

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              {fonts.map(function(font) {
                return (
                  <PanelContainer key={font.name} controlStyles={'fg-white bg-'+font.color}>
                    <Panel>
                      <PanelHeader className={'fg-white bg-'+font.color}>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <h3 className='text-center'>{font.name} [Total fonts: {font.fonts.length}]</h3>
                            </Col>
                          </Row>
                        </Grid>
                      </PanelHeader>
                      <PanelBody>
                        <Grid>
                          <Row>
                              {font.fonts.map(function(fontname) {
                                return (
                                  <Col key={fontname} xs={4} className='text-center'>
                                    <div>
                                      <Icon className={'fg-'+font.color} style={{fontSize: 48}} glyph={fontname} />
                                    </div>
                                    <div>
                                      {fontname}
                                    </div>
                                  </Col>
                                );
                              }.bind(this))}
                          </Row>
                        </Grid>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                );
              }.bind(this))}
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Fonts = React.createClass({
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

module.exports = Fonts;
