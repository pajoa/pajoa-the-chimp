var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    $('.dial').knob();
    $('.knob').knob({
      draw : function () {
        // 'tron' case
        if(this.$.data('skin') == 'tron') {
          var a = this.angle(this.cv)  // Angle
              , sa = this.startAngle          // Previous start angle
              , sat = this.startAngle         // Start angle
              , ea                            // Previous end angle
              , eat = sat + a                 // End angle
              , r = true;

          this.g.lineWidth = this.lineWidth;

          this.o.cursor
              && (sat = eat - 0.3)
              && (eat = eat + 0.3);

          if(this.o.displayPrevious) {
            ea = this.startAngle + this.angle(this.value);
            this.o.cursor
                && (sa = ea - 0.3)
                && (ea = ea + 0.3);
            this.g.beginPath();
            this.g.strokeStyle = this.previousColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
            this.g.stroke();
          }

          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
          this.g.stroke();

          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();

          return false;
        }
      }
    });

    function clock() {
      var $s = $('.second'),
          $m = $('.minute'),
          $h = $('.hour');
          d = new Date(),
          s = d.getSeconds(),
          m = d.getMinutes(),
          h = d.getHours();
      $s.val(s).trigger('change');
      $m.val(m).trigger('change');
      $h.val(h).trigger('change');
      setTimeout(clock, 1000);
    }
    clock();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <PanelHeader className='bg-purple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>jQuery Knobs</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <br/>
                    <Row>
                      <Col xs={4} className='text-center'>
                        <input type='text' defaultValue='75' className='dial autosize' data-width='100%' data-fgcolor='#F09FA6' />
                      </Col>
                      <Col xs={4} className='text-center'>
                        <input type='text' defaultValue='29' className='dial autosize' data-width='100%' data-cursor='true' data-thickness='.3' data-fgcolor='#4A90E2' />
                      </Col>
                      <Col xs={4} className='text-center'>
                        <input type='text' defaultValue='50' className='dial autosize' data-width='100%' data-displayprevious='true' data-fgcolor='#B4A1DD' />
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col xs={4} className='text-center'>
                        <input type='text' defaultValue='35' className='dial autosize' data-angleoffset='90' data-linecap='round' data-width='100%' data-fgcolor='#A8553A' />
                      </Col>
                      <Col xs={4} className='text-center'>
                        <input type='text' defaultValue='35' className='dial autosize' data-angleoffset='-125' data-anglearc='250' data-width='100%' data-fgcolor='#FFC497' />
                      </Col>
                      <Col xs={4} className='text-center'>
                        <input type='text' defaultValue='-11000' className='dial autosize' data-width='100%' data-step='1000' data-min='-15000' data-max='15000' data-displayprevious='true' data-fgcolor='#306C67' />
                      </Col>
                    </Row>
                    <br/>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={4} collapseRight>
              <PanelContainer controlStyles='bg-orange fg-white'>
                <PanelBody className='bg-orange fg-white' style={{padding: 0}}>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>jQuery Knobs: Alternate</h3>
                        <hr className='border-darkorange'/>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col xs={12} className='text-center'>
                        <input type='text' defaultValue='75' className='dial autosize' data-width='100%' data-thickness='0.2' data-fgcolor='#EBA068' />
                      </Col>
                    </Row>
                    <br/>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
            <Col sm={8}>
              <PanelContainer controlStyles='bg-black75 fg-white'>
                <PanelBody className='bg-black75 fg-white' style={{padding: 0}}>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>jQuery Knobs: Superpose</h3>
                        <hr className='border-black'/>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col xs={12} className='text-center'>
                        <div style={{height:365, width:'100%'}}>
                          <div style={{position:'relative',width:350,margin:'auto'}}>
                            <div style={{position:'absolute',left:10,top:10}}>
                              <input className='knob hour autosize' data-min='0' data-max='24' data-bgcolor='#333' data-fgcolor='#ffec03' data-displayinput='false' data-width='300' data-height='300' data-thickness='.3' />
                            </div>
                            <div style={{position:'absolute',left:60,top:60}}>
                              <input className='knob minute autosize' data-min='0' data-max='60' data-bgcolor='#333' data-displayinput='false' data-width='200' data-height='200' data-thickness='.45' />
                            </div>
                            <div style={{position:'absolute',left:110,top:110}}>
                              <input className='knob second autosize' data-min='0' data-max='60' data-bgcolor='#333' data-fgcolor='rgb(127, 255, 0)' data-displayinput='false' data-width='100' data-height='100' data-thickness='.3' />
                            </div>
                          </div>
                        </div>
                        <div style={{clear:'both'}}></div>
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
var Knobs = React.createClass({
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

module.exports = Knobs;
