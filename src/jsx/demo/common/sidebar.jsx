var ChatComponent = require('./chat.jsx')

var ApplicationSidebar = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href='/app/dashboard' />
                  <SidebarNavItem glyph='icon-feather-mail' name={<span>Mailbox <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href='/app/mailbox/inbox' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href='/app/mailbox/mail' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href='/app/mailbox/compose' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-pixelvicon-photo-gallery' name='Gallery' href='/app/gallery' />
                  <SidebarNavItem glyph='icon-feather-share' name='Social' href='/app/social' />
                  <SidebarNavItem glyph='icon-stroke-gap-icons-Blog' name={<span>Blog <BLabel className='bg-darkcyan fg-white'>2</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-layout' name='Posts' href='/app/blog/posts' />
                      <SidebarNavItem glyph='icon-feather-paper' name='Single Post' href='/app/blog/post' />
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr style={{borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}} />
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>COMPONENTS</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-simple-line-icons-layers float-right-rtl' name='Panels' href='/app/panels' />
                  <SidebarNavItem glyph='icon-ikons-bar-chart-2 float-right-rtl' name={<span>Charts <BLabel className='bg-brown50 fg-white'>4</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-chart-area' name='Rubix Charts'>
                        <SidebarNav>
                          <SidebarNavItem name='Line Series' href='/app/charts/rubix/line' />
                          <SidebarNavItem name='Area Series' href='/app/charts/rubix/area' />
                          <SidebarNavItem name='Bar + Column Series' href='/app/charts/rubix/barcol' />
                          <SidebarNavItem name='Mixed Series' href='/app/charts/rubix/mixed' />
                          <SidebarNavItem name='Pie + Donut Series' href='/app/charts/rubix/piedonut' />
                        </SidebarNav>
                      </SidebarNavItem>
                      <SidebarNavItem glyph='icon-simple-line-icons-graph' name='Chart.JS' href='/app/charts/chartjs' />
                      <SidebarNavItem glyph='icon-dripicons-graph-line' name='C3.JS' href='/app/charts/c3js' />
                      <SidebarNavItem glyph='icon-feather-pie-graph' name='Morris.JS' href='/app/charts/morrisjs' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href='/app/timeline' glyph='icon-ikons-time' name='Static Timeline' />
                  <SidebarNavItem href='/app/interactive-timeline' glyph='icon-fontello-back-in-time' name='Interactive Timeline' />
                  <SidebarNavItem href='/app/codemirror' glyph='icon-dripicons-code' name='Codemirror' />
                  <SidebarNavItem href='/app/maps' glyph='icon-ikons-pin-2' name='Maps' />
                  <SidebarNavItem href='/app/editor' glyph='icon-simple-line-icons-note' name='Editor' />
                  <SidebarNavItem glyph='icon-feather-toggle' name={<span>UI Elements <BLabel className='bg-deepred fg-white'>7</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/ui-elements/buttons' glyph='icon-mfizz-oracle' name='Buttons' />
                      <SidebarNavItem href='/app/ui-elements/dropdowns' glyph='icon-outlined-arrow-down' name='Dropdowns' />
                      <SidebarNavItem href='/app/ui-elements/tabs-and-navs' glyph='icon-nargela-navigation' name='Tabs &amp; Navs' />
                      <SidebarNavItem href='/app/ui-elements/sliders' glyph='icon-outlined-three-stripes-horiz' name='Sliders' />
                      <SidebarNavItem href='/app/ui-elements/knobs' glyph='icon-ikons-chart-3-8' name='Knobs' />
                      <SidebarNavItem href='/app/ui-elements/modals' glyph='icon-pixelvicon-browser-1' name='Modals' />
                      <SidebarNavItem href='/app/ui-elements/messenger' glyph='icon-dripicons-message' name='Messenger' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-stroke-gap-icons-Files float-right-rtl' name={<span>Forms <BLabel className='bg-danger fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-mfizz-fire-alt' href='/app/forms/controls' name='Controls' />
                      <SidebarNavItem glyph='icon-stroke-gap-icons-Edit' href='/app/forms/xeditable' name='X-Editable' />
                      <SidebarNavItem glyph='icon-simple-line-icons-magic-wand' href='/app/forms/wizard' name='Wizard' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-table' name={<span>Tables <BLabel className='bg-blue fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/tables/bootstrap-tables' glyph='icon-fontello-th-thumb' name='Bootstrap Tables' />
                      <SidebarNavItem href='/app/tables/datatables' glyph='icon-fontello-th-2' name='Datatables' />
                      <SidebarNavItem href='/app/tables/tablesaw' glyph='icon-fontello-view-mode' name='Tablesaw' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href='/app/grid' glyph='icon-ikons-grid-1 float-right-rtl' name='Grid' />
                  <SidebarNavItem href='/app/calendar' glyph='icon-fontello-calendar-alt' name='Calendar' />
                  <SidebarNavItem href='/app/lists' glyph='icon-fontello-flow-cascade' name='Lists' />
                  <SidebarNavItem glyph='icon-fontello-folder-open-empty' name={<span>File Utilities <BLabel className='bg-orange fg-darkbrown'>2</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/file-utilities/dropzone' glyph='icon-stroke-gap-icons-Download' name='Dropzone' />
                      <SidebarNavItem href='/app/file-utilities/crop' glyph='icon-ikons-crop' name='Image Cropping' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href='/app/fonts' glyph='icon-fontello-fontsize' name='Fonts' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr style={{borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}} />
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>EXTRAS</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href='/app/login' />
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href='/app/signup' />
                  <SidebarNavItem glyph='icon-ikons-lock' name='Lock Page' href='/app/lock' />
                  <SidebarNavItem glyph='icon-dripicons-document' name='Invoice' href='/app/invoice' />
                  <SidebarNavItem glyph='icon-feather-tag icon-rotate-135' name='Pricing Tables' href='/app/pricing' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr style={{borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}} />
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>DOCUMENTATION</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-install' name='Installation' href='/app/docs/installation' />
                  <SidebarNavItem glyph='devicon-gulp-plain' name={<span>Gulpfile.js <BLabel className='bg-red fg-white'>6</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem name='Basics' href='/app/docs/gulpfile/basics' />
                      <SidebarNavItem name='Sass to CSS' href='/app/docs/gulpfile/sass' />
                      <SidebarNavItem name='JSX to JS' href='/app/docs/gulpfile/jsx' />
                      <SidebarNavItem name='WebFonts' href='/app/docs/gulpfile/webfonts' />
                      <SidebarNavItem name='Scaffolding' href='/app/docs/gulpfile/scaffolding' />
                      <SidebarNavItem name='External Plugins' href='/app/docs/gulpfile/externalplugins' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-looped-square-interest' name={<span>Rubix <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem name='React' href='/app/docs/rubix/react' />
                      <SidebarNavItem name='Rubix - JSX' href='/app/docs/rubix/rubix-jsx' />
                      <SidebarNavItem name='Rubix - SASS' href='/app/docs/rubix/rubix-sass' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='devicon-bootstrap-plain' name={<span>Bootstrap <BLabel className='bg-darkblue fg-white'>7</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem name='Grid' href='/app/docs/bootstrap/grid' />
                      <SidebarNavItem name='Typography' href='/app/docs/bootstrap/typography' />
                      <SidebarNavItem name='Code' href='/app/docs/bootstrap/code' />
                      <SidebarNavItem name='Tables' href='/app/docs/bootstrap/tables' />
                      <SidebarNavItem name='Forms' href='/app/docs/bootstrap/forms' />
                      <SidebarNavItem name='Form Controls'>
                        <SidebarNav>
                          <SidebarNavItem name='Inputs' href='/app/docs/bootstrap/form_controls/inputs' />
                          <SidebarNavItem name='Textarea' href='/app/docs/bootstrap/form_controls/textarea' />
                          <SidebarNavItem name='Checkbox &amp; Radio' href='/app/docs/bootstrap/form_controls/checkradio' />
                          <SidebarNavItem name='Select' href='/app/docs/bootstrap/form_controls/select' />
                          <SidebarNavItem name='Buttons' href='/app/docs/bootstrap/form_controls/buttons' />
                        </SidebarNav>
                      </SidebarNavItem>
                      <SidebarNavItem name='Components'>
                        <SidebarNav>
                          <SidebarNavItem name='Dropdowns' href='/app/docs/bootstrap/components/dropdowns' />
                          <SidebarNavItem name='Button Groups' href='/app/docs/bootstrap/components/button_groups' />
                          <SidebarNavItem name='Input Groups' href='/app/docs/bootstrap/components/input_groups' />
                          <SidebarNavItem name='Navs' href='/app/docs/bootstrap/components/navs' />
                          <SidebarNavItem name='Navbar' href='/app/docs/bootstrap/components/navbar' />
                          <SidebarNavItem name='Breadcrumbs' href='/app/docs/bootstrap/components/breadcrumbs' />
                          <SidebarNavItem name='Pagination' href='/app/docs/bootstrap/components/pagination' />
                          <SidebarNavItem name='Labels &amp; Badges' href='/app/docs/bootstrap/components/labels_and_badges' />
                          <SidebarNavItem name='Jumbotron' href='/app/docs/bootstrap/components/jumbotron' />
                          <SidebarNavItem name='Alerts' href='/app/docs/bootstrap/components/alerts' />
                          <SidebarNavItem name='Progress bars' href='/app/docs/bootstrap/components/progress-bars' />
                          <SidebarNavItem name='Media' href='/app/docs/bootstrap/components/media' />
                          <SidebarNavItem name='List Group' href='/app/docs/bootstrap/components/list-group' />
                        </SidebarNav>
                      </SidebarNavItem>
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-outlined-geolocalizator' name='Mozilla L20n.js' href='/app/docs/l20n' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var StatisticsComponent = React.createClass({
  componentDidMount: function() {
    (function() {
      var data = [
        {
          value: 200,
          color:'#F7464A',
          highlight: '#FF5A5E',
          label: 'Red'
        },
        {
          value: 100,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Green'
        },
        {
          value: 110,
          color: '#FDB45C',
          highlight: '#FFC870',
          label: 'Yellow'
        },
        {
          value: 130,
          color: '#949FB1',
          highlight: '#A8B3C5',
          label: 'Grey'
        },
        {
          value: 120,
          color: '#4D5360',
          highlight: '#616774',
          label: 'Dark Grey'
        }
      ];
      var ctx = this.refs.myChart.getDOMNode().getContext('2d');
      new Chart(ctx).PolarArea(data, {
        maintainAspectRatio: true,
        scaleLineColor: 'rgba(255,255,255,0.1)'
      });
    }.bind(this))();

    (function() {
      $(this.refs.sparklineOne.getDOMNode()).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,17,19,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23,2,3,1,5,6,7,3,2,8,14,12,4,7,14,19,18,22,3,14], {
          type: 'line',
          width: '200',
          height: '40',
          lineColor: '#FADD7F',
          fillColor: 'rgba(250, 221, 127, 0.5)'});

      $(this.refs.sparklineTwo.getDOMNode()).sparkline([0,1,2,1,2,-0.25,-4,-2,-2,-0.6,-2,-0.5,-0.25], {
          type: 'bar',
          height: '30',
          barWidth: 6,
          zeroAxis: false,
          barColor: '#ff5a5e',
          negBarColor: '#52b27e',
          stackedBarColor: []});

      var dynamic_data = {
        nasdaq_prices: [4415.49,4440.42,4416.39,4425.97,4363.45,4432.15,4424.70,4456.02,4473.70,4472.11,4449.56,4444.91,4442.70,4462.90,4369.77,4352.64,4383.89,4352.84,4355.05,4334.97,4370.90,4401.33,4389.25,4434.13,4453.00,4464.93,4508.31,4527.51,4526.48,4532.10],
        nasdaq_volume: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        dow_prices: [16943.81,17055.42,17060.68,17138.20,16976.81,17100.18,17051.73,17113.54,17086.63,17083.80,16960.57,16982.59,16912.11,16880.36,16563.30,16493.37,16569.28,16429.47,16443.34,16368.27,16553.93,16569.98,16560.54,16651.80,16713.58,16662.91,16838.74,16919.59,16979.13,17039.49],
        dow_volume: [60599405,60569705,101734854,111503036,99238723,112530379,67590253,77958670,73444902,66387656,67289449,66187279,75984025,77746377,101667914,84856015,76255891,76627473,78599736,80426811,82415249,65558636,62768164,66015422,62370832,109183219,75671468,67221266,61963156,65160621]
      };
      $(this.refs.dow.getDOMNode()).sparkline(dynamic_data.dow_volume, {height: '1.3em', type: 'bar', barSpacing: 0, barWidth: 3, barColor: '#374B55', tooltipPrefix: 'Volume: '});
      $(this.refs.dow.getDOMNode()).sparkline(dynamic_data.dow_prices, {composite: true, height: '1.3em', fillColor:false, lineColor:'#EE682F', tooltipPrefix: 'Index: '});
      $(this.refs.nasdaq.getDOMNode()).sparkline(dynamic_data.nasdaq_prices, {composite: false, height: '1.3em', fillColor:false, lineColor:'#7CD5BA', tooltipPrefix: 'Index: '});
      $(this.refs.malefemale.getDOMNode()).sparkline('html', {
          type: 'bar',
          height: '30',
          barWidth: 5,
          barColor: '#79b0ec',
          stackedBarColor: ['#79b0ec','#EA7882']});
    }.bind(this))();
  },
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header text-center'>STATISTICS</div>
              <div style={{marginLeft: -25, marginRight: -25, marginTop: 12.5, marginBottom: 12.5}}><canvas width='250' height='150' ref='myChart'></canvas></div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 12.5, width: 200}} />
              <div>
                <div ref='sparklineOne'></div>
              </div>
              <div>
                <Grid>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header'>AAPL</div>
                      <div ref='sparklineTwo'></div>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header text-left' style={{marginRight: 5, marginLeft: 5}}>Yearly Change</div>
                      <div>
                        <h5 className='bg-darkgreen45 fg-white text-center' style={{margin: 0, height: 30, paddingTop: 7, marginLeft: 5, marginRight: 5}}>+127.01</h5>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 25, marginBottom: 12.5, width: 200}} />
              <div>
                <Grid>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header'>NASDAQ</div>
                      <div ref='nasdaq'></div>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header'>DOW</div>
                      <div ref='dow'></div>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <div>
                        <span className='fg-yellow'>USD </span>
                        <span className='fg-green'>0.43% <Icon glyph='icon-fontello-up-dir'/></span>
                      </div>
                      <div className='fg-white'>
                        <h4 style={{marginTop: 0}}>$518.47</h4>
                      </div>
                      <p>
                        <span className='fg-yellow'>EUR </span>
                        <span className='fg-white'>€391.85</span>
                      </p>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <div>
                        <span className='fg-yellow'>CNY </span>
                        <span className='fg-red'>0.24% <Icon glyph='icon-fontello-down-dir'/></span>
                      </div>
                      <div className='fg-white'>
                        <h4 style={{marginTop: 0}}>¥3,170.65</h4>
                      </div>
                      <p>
                        <span className='fg-yellow'>GBP </span>
                        <span className='fg-white'>£312.89</span>
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 25, width: 200}} />
              <div>
                <Grid>
                  <Row>
                    <Col xs={12} collapseLeft collapseRight>
                      <div ref='malefemale'>1:1,1:2,1:3,2:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3,1:0.25,2:0.02,1:3,3:0.5,2:4,4:1,1:1,1:2,1:4,2:1,2:3,2:1.5,2:0.5,2:0.25,1:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3</div>
                      <br/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} collapseLeft collapseRight>
                      <span className='sidebar-header'>MALE</span>
                    </Col>
                    <Col xs={8} collapseLeft collapseRight>
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} collapseLeft collapseRight>
                      <span className='sidebar-header'>FEMALE</span>
                    </Col>
                    <Col xs={8} collapseLeft collapseRight>
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                    </Col>
                  </Row>
                </Grid>
              </div>
              <br/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var TimelineComponent = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} collapseLeft collapseRight>
              <TimelineView className='border-black50 tl-blue'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineAvatar src='/imgs/avatars/avatar5.png' className='border-blue' />
                    <TimelineTitle>
                      Jordyn Ouellet
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 10, 2014</strong></small></div>
                          <div><small>Sent you a friend request!</small></div>
                        </div>
                        <br/>
                        <div className='text-center'>
                          <Button xs outlined bsStyle='darkgreen45'>
                            Accept
                          </Button>{' '}
                          <Button xs outlined bsStyle='red'>
                            Reject
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
              <TimelineView className='border-black50 tl-green'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineAvatar src='/imgs/avatars/avatar7.png' className='border-green' />
                    <TimelineTitle>
                      Toby King
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div className='fg-lightgray'><small><strong>Aug 9, 2014</strong></small></div>
                        <div>
                          <small>Visiting <strong className='fg-darkgreen45'>The Museum of Modern Art</strong> at <strong><em>11 W 53rd St, New York, NY 10019</em></strong></small>
                        </div>
                        <br/>
                        <img border='0' src='/imgs/staticmap.png' alt='Points of Interest in Lower Manhattan' />
                      </li>
                      <li>
                        <div className='fg-lightgray'><small><strong>Aug 8, 2014</strong></small></div>
                        <div>
                          <small>Driving through! :)</small>
                        </div>
                        <br/>
                        <img border='0' width='155' src='/imgs/gallery/tumblr_n7yhe1sTa41st5lhmo1_1280-thumb.jpg' alt='the taxi' />
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
              <TimelineView className='border-black50 tl-yellow'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineAvatar src='/imgs/avatars/avatar10.png' className='border-yellow' />
                    <TimelineTitle>
                      Angelina Mills
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div className='fg-lightgray'><small><strong>Aug 8, 2014</strong></small></div>
                        <div>
                          <small>Hey you free tomorrow? Lets go shopping!</small>
                        </div>
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var NotificationComponent = React.createClass({
  componentDidMount: function() {
    (function() {
      $(this.refs.sparklineOne.getDOMNode()).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,10,12,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23], {
          type: 'bar',
          barWidth: 2,
          height: '40',
          barSpacing: 1,
          barColor: '#D71F4B'});
      $(this.refs.sparklineTwo.getDOMNode()).sparkline([10,40,20,30,20,20,40,20,25,35,44,55,66,20,20,30,50,60,30,40,50,60,50,30,20,90,100,100,100,100,100,100], {
          type: 'bar',
          barWidth: 4,
          height: '40',
          barSpacing: 1,
          barColor: '#FADD7F'});
      $(this.refs.pieOne.getDOMNode()).sparkline([1,0.2], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#FADD7F','#D71F4B']});
      $(this.refs.pieTwo.getDOMNode()).sparkline([0.2,1], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#ff9900','#109618']});
      $(this.refs.pieThree.getDOMNode()).sparkline([1,0.2,0.3,0.2], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#ff9900','#109618','#66aa00','#dd4477']});
      $(this.refs.pieFour.getDOMNode()).sparkline([0.2,0.3,0.4,0.1,1,0.2], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#dd4477','#0099c6','#990099','#ff9900','#B4A1DD','#66aa00']});
    }.bind(this))();
  },
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} collapseLeft collapseRight>
              <TimelineView className='border-black50 tl-deepred'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon glyph='icon-fontello-attention-3 bg-deepred fg-white' />
                    <TimelineTitle>
                      SYSTEM-WIDE ALERTS
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 12, 2014</strong></small></div>
                          <div><small>Spike in network traffic detected.</small></div>
                          <div><div ref='sparklineOne'></div></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 10, 2014</strong></small></div>
                          <div><small>Node 1 down for 30 minutes! Take action!</small></div>
                        </div>
                        <br/>
                        <div className='text-center'>
                          <Button xs outlined bsStyle='darkgreen45'>
                            Restore
                          </Button>{' '}
                          <Button xs outlined bsStyle='red'>
                            Destroy
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
              <TimelineView className='border-black50 tl-yellow'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon glyph='icon-fontello-attention-3 bg-yellow fg-red' />
                    <TimelineTitle>
                      NODE ALERTS
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 12, 2014</strong></small></div>
                          <div><small>CPU running at 100% on Node 1.</small></div>
                          <div><div ref='sparklineTwo'></div></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 10, 2014</strong></small></div>
                          <div><small>Running out of disk space on <strong className='fg-yellow'>Node 2</strong>, <strong className='fg-yellow'>Node 3</strong>, <strong className='fg-yellow'>Node 5</strong> and <strong className='fg-yellow'>Node 7</strong></small></div>
                        </div>
                        <br/>
                        <div className='text-center'>
                          <span ref='pieOne' style={{marginLeft: 5}}></span>
                          <span ref='pieTwo' style={{marginLeft: 5}}></span>
                          <span ref='pieThree' style={{marginLeft: 5}}></span>
                          <span ref='pieFour' style={{marginLeft: 5}}></span>
                        </div>
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var SidebarSection = React.createClass({
  render: function() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link to='/app/lock'><Icon id='demo-icon' bundle='fontello' glyph='lock-5' /></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <ChatComponent />
          </Sidebar>
          <Sidebar sidebar={2}>
            <StatisticsComponent />
          </Sidebar>
          <Sidebar sidebar={3}>
            <TimelineComponent />
          </Sidebar>
          <Sidebar sidebar={4}>
            <NotificationComponent />
          </Sidebar>
        </div>
      </div>
    );
  }
});

module.exports = SidebarSection;
