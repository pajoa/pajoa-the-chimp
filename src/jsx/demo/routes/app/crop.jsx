var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    (function() {
      $(this.refs.target.getDOMNode()).Jcrop({
        setSelect: [ 60, 50, 540, 300 ]
      });
    }.bind(this))();

    (function() {
      var jcrop_api;

      // Simple event handler, called from onChange and onSelect
      // event handlers, as per the Jcrop invocation above
      var showCoords = function(c) {
        $('#x1').val(c.x);
        $('#y1').val(c.y);
        $('#x2').val(c.x2);
        $('#y2').val(c.y2);
        $('#w').val(c.w);
        $('#h').val(c.h);
      };

      var clearCoords = function() {
        $('#coords input').val('');
      };

      $(this.refs.eventtarget.getDOMNode()).Jcrop({
        onChange : showCoords,
        onSelect : showCoords,
        onRelease: clearCoords,
        setSelect: [ 60, 50, 540, 300 ]
      },function(){
        jcrop_api = this;
      });

      $('#coords').on('change','input',function(e){
        var x1 = $('#x1').val(),
            x2 = $('#x2').val(),
            y1 = $('#y1').val(),
            y2 = $('#y2').val();
        jcrop_api.setSelect([x1,y1,x2,y2]);
      });
    }.bind(this))();

    (function() {
      // Create variables (in this scope) to hold the API and image size
      var jcrop_api,
          boundx,
          boundy,

          // Grab some information about the preview pane
          $preview = $('#preview-pane'),
          $pcnt = $('#preview-pane .preview-container'),
          $pimg = $('#preview-pane .preview-container img'),

          xsize = $pcnt.width(),
          ysize = $pcnt.height();

      var updatePreview = function(c) {
        if (parseInt(c.w) > 0) {
          var rx = xsize / c.w;
          var ry = ysize / c.h;

          $pimg.css({
            width: Math.round(rx * boundx) + 'px',
            height: Math.round(ry * boundy) + 'px',
            marginLeft: '-' + Math.round(rx * c.x) + 'px',
            marginTop: '-' + Math.round(ry * c.y) + 'px'
          });
        }
      };

      $(this.refs.aspectwithpreview.getDOMNode()).Jcrop({
        onChange: updatePreview,
        onSelect: updatePreview,
        aspectRatio: xsize / ysize,
        setSelect: [ 60, 50, 540, 300 ]
      },function(){
        // Use the API to get the real image size
        var bounds = this.getBounds();
        boundx = bounds[0];
        boundy = bounds[1];
        // Store the API in the jcrop_api variable
        jcrop_api = this;

        // Move the preview into the jcrop container for css positioning
        $preview.appendTo(jcrop_api.ui.holder);
      });
    }.bind(this))();

    (function() {
      var jcrop_api;

      $(this.refs.animationstransitions.getDOMNode()).Jcrop({
        bgFade:     true,
        bgOpacity: .2,
        setSelect: [ 60, 50, 540, 300 ]
      },function(){
        jcrop_api = this;
      });

      $('#fadetog').change(function(){
        jcrop_api.setOptions({
          bgFade: this.checked
        });
      }).attr('checked','checked');

      $('#shadetog').change(function(){
        if (this.checked) $('#shadetxt').slideDown();
          else $('#shadetxt').slideUp();
        jcrop_api.setOptions({
          shade: this.checked
        });
      }).attr('checked',false);

      // Define page sections
      var sections = {
        bgc_buttons: 'Change bgColor',
        bgo_buttons: 'Change bgOpacity',
        anim_buttons: 'Animate Selection'
      };
      // Define animation buttons
      var ac = {
        anim1: [217,122,382,284],
        anim2: [20,20,580,380],
        anim3: [24,24,176,376],
        anim4: [347,165,550,355],
        anim5: [136,55,472,183]
      };
      // Define bgOpacity buttons
      var bgo = {
        Low: .2,
        Mid: .5,
        High: .8,
        Full: 1
      };
      // Define bgColor buttons
      var bgc = {
        R: '#900',
        B: '#4BB6F0',
        Y: '#F0B207',
        G: '#46B81C',
        W: 'white',
        K: 'black'
      };
      // Create fieldset targets for buttons
      for(i in sections)
        insertSection(i,sections[i]);

      function create_btn(c) {
        var $o = $('<button />').addClass('btn btn-small btn-outlined btn-primary');
        if (c) $o.append(c);
        return $o;
      }

      var a_count = 1;
      // Create animation buttons
      for(i in ac) {
        $('#anim_buttons .btn-group')
          .append(
            create_btn(a_count++).click(animHandler(ac[i])),
            ' '
          );
      }

      $('#anim_buttons .btn-group').append(
        create_btn('Bye!').click(function(e){
          $(e.target).addClass('active');
          jcrop_api.animateTo(
            [300,200,300,200],
            function(){
              this.release();
              $(e.target).closest('.btn-group').find('.active').removeClass('active');
            }
          );
          return false;
        })
      );

      // Create bgOpacity buttons
      for(i in bgo) {
        $('#bgo_buttons .btn-group').append(
          create_btn(i).click(setoptHandler('bgOpacity',bgo[i])),
          ' '
        );
      }
      // Create bgColor buttons
      for(i in bgc) {
        $('#bgc_buttons .btn-group').append(
          create_btn(i).css({
            background: bgc[i],
            color: ((i == 'K') || (i == 'R'))?'white':'black'
          }).click(setoptHandler('bgColor',bgc[i])), ' '
        );
      }
      // Function to insert named sections into interface
      function insertSection(k,v) {
        $('#interface').prepend(
          $('<fieldset></fieldset>').attr('id',k).append(
            $('<legend></legend>').append(v),
            '<div class="btn-toolbar"><div class="btn-group"></div></div>'
          )
        );
      };
      // Handler for option-setting buttons
      function setoptHandler(k,v) {
        return function(e) {
          $(e.target).closest('.btn-group').find('.active').removeClass('active');
          $(e.target).addClass('active');
          var opt = { };
          opt[k] = v;
          jcrop_api.setOptions(opt);
          return false;
        };
      };
      // Handler for animation buttons
      function animHandler(v) {
        return function(e) {
          $(e.target).addClass('active');
          jcrop_api.animateTo(v,function(){
            $(e.target).closest('.btn-group').find('.active').removeClass('active');
          });
          return false;
        };
      };

      $('#bgo_buttons .btn:first,#bgc_buttons .btn:last').addClass('active');
      $('#interface').show();
    }.bind(this))();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-orange75 fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange75 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jCrop : Basic</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div><img src='/imgs/wefunction/020.jpg' ref='target' alt='[Jcrop example]' width='100%' height='350' /></div>
                          <br/>
                          <p>
                            <strong>
                              This example demonstrates the default behavior of Jcrop.
                            </strong><br/>
                            <span>Since no event handlers have been attached it only performs the cropping behavior.</span>
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jCrop : Handler</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div><img src='/imgs/unsplash/parie.jpg' ref='eventtarget' alt='[Jcrop example]' width='100%' height='350' /></div>
                          <br/>
                          <Form id="coords"
                            className="coords">
                            <div className="inline-labels">
                              <Label inline>X1 <Input defaultValue={0} className='form-control' type="text" size="4" id="x1" name="x1" /></Label>
                              <Label inline>Y1 <Input defaultValue={0} className='form-control' type="text" size="4" id="y1" name="y1" /></Label>
                              <Label inline>X2 <Input defaultValue={0} className='form-control' type="text" size="4" id="x2" name="x2" /></Label>
                              <Label inline>Y2 <Input defaultValue={0} className='form-control' type="text" size="4" id="y2" name="y2" /></Label>
                              <Label inline>W <Input defaultValue={0} className='form-control' type="text" size="4" id="w" name="w" /></Label>
                              <Label inline>H <Input defaultValue={0} className='form-control' type="text" size="4" id="h" name="h" /></Label>
                            </div>
                          </Form>

                          <div className="description">
                            <p>
                              <b>{"An example with a basic event handler."}</b>{"Here we've tied several form values together with a simple event handler invocation. The result is that the form values are updated in real-time as the selection is changed using Jcrop's "}<em>onChange</em> handler.
                            </p>

                            <p>
                              {"That's how easily Jcrop can be integrated into a traditional web form!"}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jCrop : Aspect Ratio with Preview Pane</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <Grid>
                            <Row>
                              <Col sm={8} collapseLeft collapseRight>
                                <img src='/imgs/unsplash/hot-air-baloon.jpg' ref='aspectwithpreview' alt='[Jcrop example]' width='100%' height='350' />
                              </Col>
                              <Col sm={4} collapseLeft collapseRight>
                                <div id='preview-pane' style={{display: 'block', position: 'absolute', zIndex: 2000, top: 10, right: '-250px', padding: 6, border: '1px rgba(0,0,0,.4) solid', background: 'white', borderRadius: 6}}>
                                  <div className='preview-container' style={{width: 225, height: 170, overflow: 'hidden'}}>
                                    <img src='/imgs/unsplash/hot-air-baloon.jpg' alt='[Jcrop example]' className='jcrop-preview' alt='Preview' width='100%' />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Grid>
                          <br/>
                          <div className='description'>
                            <p>
                              <b>An example implementing a preview pane.</b>
                                Obviously the most visual demo, the preview pane is accomplished
                                entirely outside of Jcrop with a simple jQuery-flavored callback.
                                This type of interface could be useful for creating a thumbnail
                                or avatar. The onChange event handler is used to update the
                                view in the preview pane.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <Panel>
                  <PanelHeader className='bg-purple fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>jCrop : Animations + Transitions</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <Grid>
                            <Row>
                              <Col sm={7} collapseLeft collapseRight>
                                <div><img src='/imgs/wefunction/020.jpg' ref='animationstransitions' alt='[Jcrop example]' width='100%' height='350' /></div>
                                <br/>
                                <div className="description">
                                  <p id="shadetxt" style={{display:'none', color:'#900;'}}>
                                    <b>Experimental shader active.</b>
                                    <span>{"Jcrop now includes a shading mode that facilitates building better transparent Jcrop instances. The experimental shader is less robust than Jcrop's default shading method and should only be used if you require this functionality."}</span>
                                  </p>
                                  <p>
                                    <b>Animation/Transitions.</b>
                                    <span>{"Demonstration of animateTo API method and transitions for bgColor and bgOpacity options. Color fading requires inclusion of John Resig's jQuery"}</span><a href="http://plugins.jquery.com/project/color">Color  Animations</a>{" plugin. If it is not included, colors will not fade."}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={5} id='interface'>
                                <Checkbox id='fadetog'>
                                  Enable fading (bgFade: true)
                                </Checkbox>
                                <Checkbox id='shadetog'>
                                  Use experimental shader (shade: true)
                                </Checkbox>
                              </Col>
                            </Row>
                          </Grid>
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
var Crop = React.createClass({
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

module.exports = Crop;
