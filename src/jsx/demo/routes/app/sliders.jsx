var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var ReactStyle = require('../../react-styles/src/ReactStyle.jsx');

var Body = React.createClass({
  getInitialState: function() {
    return {
      logger: 'testing'
    };
  },
  componentWillMount: function() {
    ReactStyle.addRules(ReactStyle.create({
      '#ex1Slider .slider-selection': {
        background: '#55C9A6'
      }
    }));

    ReactStyle.addRules(ReactStyle.create({
      '#RGB': {
        maxWidth: '220px',
        height: '100px',
        background: 'rgb(128, 200, 128)'
      },
      '#RC .slider-selection': {
        background: '#FF8282'
      },
      '#RC .slider-handle': {
        background: 'red'
      },
      '#GC .slider-selection': {
        background: '#428041'
      },
      '#GC .slider-handle': {
        background: 'green'
      },
      '#BC .slider-selection': {
        background: '#8283FF'
      },
      '#BC .slider-handle': {
        borderBottomColor: 'blue'
      },
      '#R, #G, #B': {
        width: '300px'
      }
    }));
  },
  componentDidMount: function() {
    $('#ex1').slider({
      formater: function(value) {
        return 'Current value: ' + value;
      }
    });
    $('#ex2').slider({});

    var RGBChange = function() {
      $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
    }.bind(this);
    var r = $('#R').slider()
        .on('slide', RGBChange)
        .data('slider');
    var g = $('#G').slider()
        .on('slide', RGBChange)
        .data('slider');
    var b = $('#B').slider()
        .on('slide', RGBChange)
        .data('slider');
    $('#ex4').slider({
      reversed : true
    });
    $('#ex6').slider();
    $('#ex6').on('slide', function(slideEvt) {
      $('#ex6SliderVal').text(slideEvt.value);
    });
    $('#ex7').slider();
    $('#ex7-enabled').click(function() {
      if(this.checked) {
        $('#ex7').slider('enable');
      }
      else {
        $('#ex7').slider('disable');
      }
    });
    $('#ex8').slider({
      tooltip: 'always'
    });
    $('#ex9').slider({
      precision: 2,
      value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
    });
    $('#example_1').ionRangeSlider({
      min: 0,
      max: 5000,
      type: 'double',
      prefix: '$',
      maxPostfix: '+',
      prettify: false,
      hasGrid: true,
      gridMargin: 7
    });
    $('#example_2').ionRangeSlider({
      min: 1000,
      max: 100000,
      from: 30000,
      to: 90000,
      type: 'double',
      step: 500,
      postfix: ' €',
      hasGrid: true,
      gridMargin: 15
    });
    $('#example_3').ionRangeSlider({
      min: 0,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: ' carats',
      prettify: false,
      hasGrid: true
    });
    $('#example_4').ionRangeSlider({
      min: -50,
      max: 50,
      from: 0,
      postfix: '°',
      prettify: false,
      hasGrid: true
    });
    $('#example_5').ionRangeSlider({
      values: [
        'January', 'February',
        'March', 'April',
        'May', 'June',
        'July', 'August',
        'September', 'October',
        'November', 'December'
      ],
      type: 'single',
      hasGrid: true
    });
    $('#example_6').ionRangeSlider({
      min: 10000,
      max: 100000,
      step: 1000,
      postfix: ' miles',
      from: 55000,
      hideMinMax: false,
      hideFromTo: true
    });
    $('#example_7').ionRangeSlider({
      min: 10000,
      max: 100000,
      step: 100,
      postfix: ' km',
      from: 55000,
      hideMinMax: true,
      hideFromTo: false
    });
    $('#example_8').ionRangeSlider({
      min: 1000000,
      max: 100000000,
      type: 'double',
      postfix: ' pounds',
      step: 10000,
      from: 25000000,
      to: 35000000,
      onChange: function(obj) {
        delete obj.input;
        delete obj.slider;
        this.setState({logger: JSON.stringify(obj, null, 2)}, function() {
          Prism.highlightAll();
        });
      }.bind(this),
      onLoad: function(obj) {
        delete obj.input;
        delete obj.slider;
        this.setState({logger: JSON.stringify(obj, null, 2)}, function() {
          Prism.highlightAll();
        });
      }.bind(this)
    });
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer controlStyles='bg-green fg-white'>
                <PanelHeader className='bg-green fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Bootstrap Sliders</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col sm={12}>
                        <Input id='ex1' ref='ex1' data-slider-id='ex1Slider' type='text' data-slider-min='0' data-slider-max='20' data-slider-step='1' data-slider-value='14'/>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col sm={12}>
                        <div>Filter by price interval: <b>$ 10</b> <Input id='ex2' ref='ex2' type='text' className='span2' value='' data-slider-min='10' data-slider-max='1000' data-slider-step='5' data-slider-value='[250,450]'/> <b>$ 1000</b></div>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col xs={6} className='text-right'>
                        <p>
                          <b>R</b> <Input type='text' className='span2' value='' data-slider-min='0' data-slider-max='255' data-slider-step='1' data-slider-value='128' data-slider-id='RC' id='R' ref='R' data-slider-tooltip='hide' data-slider-handle='square' />
                        </p>
                        <p>
                          <b>G</b> <Input type='text' className='span2' value='' data-slider-min='0' data-slider-max='255' data-slider-step='1' data-slider-value='200' data-slider-id='GC' id='G' ref='G' data-slider-tooltip='hide' data-slider-handle='round' />
                        </p>
                        <p>
                          <b>B</b> <Input type='text' className='span2' value='' data-slider-min='0' data-slider-max='255' data-slider-step='1' data-slider-value='128' data-slider-id='BC' id='B' ref='B' data-slider-tooltip='hide' data-slider-handle='triangle' />
                        </p>
                      </Col>
                      <Col xs={6} className='text-left'>
                        <div id='RGB'></div>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col sm={4} className='text-center'>
                        <Input id='ex4' ref='ex4' type='text' data-slider-min='-5' data-slider-max='20' data-slider-step='1' data-slider-value='-3' data-slider-orientation='vertical'/>
                      </Col>
                      <Col sm={8} className='text-center'>
                        <div>
                          <div><Label id='ex6CurrentSliderValLabel' ref='ex6CurrentSliderValLabel'>Current Slider Value: <span id='ex6SliderVal'>3</span></Label></div>
                          <Input id='ex6' ref='ex6' type='text' data-slider-min='-5' data-slider-max='20' data-slider-step='1' data-slider-value='3'/>
                        </div>
                        <hr/>
                        <div>
                          <div>
                            <Label style={{marginRight: 10}} htmlFor='ex7-enabled'>Enabled</Label>
                            <Input id='ex7-enabled' ref='ex7-enabled' type='checkbox'/>
                          </div>
                          <Input id='ex7' ref='ex7' type='text' data-slider-min='0' data-slider-max='20' data-slider-step='1' data-slider-value='5' data-slider-enabled='false'/>
                        </div>
                        <hr/>
                        <div>
                          <Input id='ex8' ref='ex8' data-slider-id='ex1Slider' type='text' data-slider-min='0' data-slider-max='20' data-slider-step='1' data-slider-value='14'/>
                        </div>
                        <div>
                          <Input id='ex9' ref='ex9' type='text'/>
                        </div>
                        <br/>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <PanelHeader className='bg-purple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Ion Sliders</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_1' ref='example_1' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_2' ref='example_2' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_3' ref='example_3' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_4' ref='example_4' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_5' ref='example_5' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_6' ref='example_6' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_7' ref='example_7' />
                        </div>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Input type='text' id='example_8' ref='example_8' />
                        </div>
                        <pre>
                          <code className='language-javascript'>
                            {this.state.logger}
                          </code>
                        </pre>
                        <br/>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
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
var Sliders = React.createClass({
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

module.exports = Sliders;
