var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var MapContainer = React.createClass({
  render: function() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <h4 className='text-center' style={{marginTop: 0}}>{this.props.name}</h4>
            {this.props.children}
            <div id={this.props.id} style={{height: 300}}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  geocode: null,
  routingmap: null,
  getInitialState: function() {
    return {
      routeslist: []
    };
  },
  geoCode: function(address) {
    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          this.geocode.setCenter(latlng.lat(), latlng.lng());
          this.geocode.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            infoWindow: {
              content: '<div><strong>Address:</strong> '+results[0].formatted_address+'</div>'
            }
          });
        }
      }.bind(this)
    });
  },
  componentDidMount: function() {
    (function() {
      new GMaps({
        scrollwheel: false,
        div: '#basic-map',
        lat: -12.043333,
        lng: -77.028333
      });
    })();

    (function() {
      new GMaps({
        scrollwheel: false,
        div: '#map-events',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333,
        click: function(e) {
          alert('click');
        },
        dragend: function(e) {
          alert('dragend');
        }
      });
    })();

    (function() {
      var map = new GMaps({
        scrollwheel: false,
        div: '#markers',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });

      map.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        title: 'Lima',
        click: function(e) {
          alert('You clicked in this marker');
        }
      });

      map.addMarker({
        lat: -12.043333,
        lng: -77.029333,
        title: 'Lima',
        infoWindow: {
          content: '<p>Some content here!</p>'
        }
      });
    })();

    (function() {
      this.geocode = new GMaps({
        scrollwheel: false,
        div: '#geocode',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      this.geoCode('New York, NY, USA');
    }.bind(this))();

    (function() {
      var map = new GMaps({
        scrollwheel: false,
        div: '#polyline',
        zoom: 12,
        lat: -12.043333,
        lng: -77.028333
      });

      var path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

      map.drawPolyline({
        path: path,
        strokeColor: '#FF0080',
        strokeOpacity: 0.75,
        strokeWeight: 8
      });
    })();

    (function() {
      var map = new GMaps({
        scrollwheel: false,
        div: '#overlays',
        zoom: 18,
        lat: 40.7638435,
        lng: -73.9729691
      });

      map.drawOverlay({
        lat: 40.7640135,
        lng: -73.9729691,
        content: '<div class="overlay">Apple Store, NY, USA<div class="overlay_arrow above"></div></div>'
      });
    })();

    (function() {
      var map = new GMaps({
        scrollwheel: false,
        div: '#polygon',
        lat: -12.043333,
        lng: -77.028333
      });

      var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511], [-12.044804866577001,-77.02154422636042]];

      polygon = map.drawPolygon({
        paths: path, // pre-defined polygon shape
        strokeColor: '#D71F4B',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#D71F4B',
        fillOpacity: 0.6
      });
    })();

    (function() {
      var map = new GMaps({
        scrollwheel: false,
        div: '#geojson',
        lat: 39.743296277167325,
        lng: -105.00517845153809
      });

      var paths = [
                [
                  [
                    [-105.00432014465332, 39.74732195489861],
                    [-105.00715255737305, 39.74620006835170],
                    [-105.00921249389647, 39.74468219277038],
                    [-105.01067161560059, 39.74362625960105],
                    [-105.01195907592773, 39.74290029616054],
                    [-105.00989913940431, 39.74078835902781],
                    [-105.00758171081543, 39.74059036160317],
                    [-105.00346183776855, 39.74059036160317],
                    [-105.00097274780272, 39.74059036160317],
                    [-105.00062942504881, 39.74072235994946],
                    [-105.00020027160645, 39.74191033368865],
                    [-105.00071525573731, 39.74276830198601],
                    [-105.00097274780272, 39.74369225589818],
                    [-105.00097274780272, 39.74461619742136],
                    [-105.00123023986816, 39.74534214278395],
                    [-105.00183105468751, 39.74613407445653],
                    [-105.00432014465332, 39.74732195489861]
                  ],[
                    [-105.00361204147337, 39.74354376414072],
                    [-105.00301122665405, 39.74278480127163],
                    [-105.00221729278564, 39.74316428375108],
                    [-105.00283956527711, 39.74390674342741],
                    [-105.00361204147337, 39.74354376414072]
                  ]
                ],[
                  [
                    [-105.00942707061768, 39.73989736613708],
                    [-105.00942707061768, 39.73910536278566],
                    [-105.00685214996338, 39.73923736397631],
                    [-105.00384807586671, 39.73910536278566],
                    [-105.00174522399902, 39.73903936209552],
                    [-105.00041484832764, 39.73910536278566],
                    [-105.00041484832764, 39.73979836621592],
                    [-105.00535011291504, 39.73986436617916],
                    [-105.00942707061768, 39.73989736613708]
                  ]
                ]
              ];

      var polygon = map.drawPolygon({
        paths: paths,
        useGeoJSON: true,
        strokeColor: '#2EB398',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#2EB398',
        fillOpacity: 0.6
      });
    })();

    (function() {
      this.routingmap = new GMaps({
        scrollwheel: false,
        div: '#routingmap',
        lat: -12.043333,
        lng: -77.028333
      });
    }.bind(this))();
  },
  handleSubmit: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.geoCode($('#address').val());
  },
  startRouting: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      routeslist: []
    }, function() {
      var map = this.routingmap;
      var list = [];
      map.travelRoute({
        origin: [-12.044012922866312, -77.02470665341184],
        destination: [-12.090814532191756, -77.02271108990476],
        travelMode: 'driving',
        step: function(e){
          list.push({
            instructions: e.instructions,
            lat: e.end_location.lat(),
            lng: e.end_location.lng(),
            path: e.path
          });
        }.bind(this),
        end: function(e) {
          var lat, lng, path;
          var processList = function(i) {
            if(list.length === i) return;
            lat = list[i].lat;
            lng = list[i].lng;
            path = list[i].path;
            setTimeout(function() {
              this.setState({
                routeslist: list.slice(0, i+1)
              });
              map.setCenter(lat, lng);
              map.drawPolyline({
                path: path,
                strokeColor: '#FF6FCF',
                strokeWeight: 8
              });
              processList(i+1);
            }.bind(this), 500);
          }.bind(this);
          processList(0);
        }.bind(this)
      });
    }.bind(this));
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <MapContainer id='basic-map' name='Basic Map' />
              <MapContainer id='markers' name='Map Markers' />
              <MapContainer id='polyline' name='Polylines' />
              <MapContainer id='polygon' name='Polygon' />
            </Col>
            <Col sm={6}>
              <MapContainer id='map-events' name='Map Events' />
              <MapContainer id='geocode' name='Geocoding'>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <InputGroup>
                      <Input type='text' id='address' placeholder='Address' defaultValue='New York, NY, USA' />
                      <InputGroupAddon className='plain'>
                        <Button outlined onlyOnHover type='submit' bsStyle='darkgreen45'>search</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </MapContainer>
              <MapContainer id='overlays' name='Overlays' />
              <MapContainer id='geojson' name='GeoJSON Polygon' />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody style={{padding: 25}}>
                    <Grid>
                      <Row>
                        <Col xs={12} sm={6} collapseLeft>
                          <div id='routingmap' style={{height: 300}}></div>
                        </Col>
                        <Col xs={12} sm={6} collapseRight>
                          <hr className='visible-xs' />
                          <div className='text-center' style={{paddingBottom: 25}}>
                            <Button outlined onlyOnHover type='button' bsStyle='darkgreen45' onClick={this.startRouting}>Start routing</Button>
                          </div>
                          <div>
                            <ul>
                              {this.state.routeslist.map(function(route, i) {
                                return (<li key={i} dangerouslySetInnerHTML={{__html: route.instructions}}></li>);
                              })}
                            </ul>
                          </div>
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
var MorrisJSPage = React.createClass({
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

module.exports = MorrisJSPage;
