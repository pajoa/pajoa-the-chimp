var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var SocialBanner = React.createClass({
  getInitialState: function() {
    return {
      follow: 'follow me',
      followActive: false,
      likeCount: 999,
      likeActive: false,
      likeTextStyle: 'fg-white'
    };
  },
  handleFollow: function() {
    this.setState({
      follow: 'followed',
      followActive: true
    });
  },
  handleLike: function() {
    this.setState({
      likeCount: 1000,
      likeActive: true,
      likeTextStyle: 'fg-orange75'
    });
  },
  render: function() {
    return (
      <div style={{height: 350, marginTop: -25, backgroundImage: 'url(/imgs/shots/Blick_auf_Manhattan.JPG)', backgroundSize: 'cover', position: 'relative', marginBottom: 25, backgroundPosition: 'center'}}>
        <div className='social-cover' style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        </div>
        <div className='social-desc'>
          <div>
            <h1 className='fg-white'>Empire State, NY, USA</h1>
            <h5 className='fg-white' style={{opacity: 0.8}}>- Aug 20th, 2014</h5>
            <div style={{marginTop: 50}}>
              <div style={{display: 'inline-block'}}>
                <Button id='likeCount' retainBackground rounded bsStyle='orange75' active={this.state.likeActive} onClick={this.handleLike}>
                  <Icon glyph='icon-fontello-heart-1' />
                </Button>
                <Label className='social-like-count' htmlFor='likeCount'><span className={this.state.likeTextStyle}>{this.state.likeCount} likes</span></Label>
              </div>
            </div>
          </div>
        </div>
        <div className='social-avatar'>
          <Img src='/imgs/avatars/avatar.jpg' height='100' width='100' style={{display: 'block', borderRadius: 100, border: '2px solid #fff', margin: 'auto', marginTop: 50}} />
          <h4 className='fg-white text-center'>Anna Sanchez</h4>
          <h5 className='fg-white text-center' style={{opacity: 0.8}}>DevOps Engineer, NY</h5>
          <hr className='border-black75' style={{borderWidth: 2}}/>
          <div className='text-center'>
            <Button outlined inverse retainBackground active={this.state.followActive} bsStyle='brightblue' onClick={this.handleFollow}>
              <span>{this.state.follow}</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {
    $('html').addClass('social');
    (function() {
      // create a map in the "map" div, set the view to a given place and zoom
      var map = L.map('map', {
        scrollWheelZoom: false
      }).setView([40.7127, -74.0059], 16);

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // add a marker in the given location, attach some popup content to it and open the popup
      L.marker([40.7127, -74.0059]).addTo(map)
          .openPopup();
    })();
  },
  componentWillUnmount: function() {
    $('html').removeClass('social');
  },
  render: function() {
    return (
      <Container id='body' className='social'>
        <SocialBanner />
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer>
                <PanelBody style={{padding: 12.5}}>
                  <Textarea rows='3' placeholder="What's on your mind?" style={{border: 'none'}} />
                </PanelBody>
                <PanelFooter className='fg-black75 bg-gray' style={{padding: '12.5px 25px'}}>
                  <Grid>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-location icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-camera icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-calendar icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                      </Col>
                      <Col xs={6} className='text-right' collapseLeft collapseRight>
                        <Button bsStyle='darkgreen45'>send</Button>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
              </PanelContainer>
              <PanelContainer>
                <PanelBody style={{padding: 25, paddingTop: 12.5}}>
                  <div className='inbox-avatar'>
                    <img src='/imgs/avatars/avatar7.png' width='40' height='40' />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Toby King</div>
                      <div className='fg-text'><small>Wisconsin, USA</small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div style={{position: 'relative', top: 0}}><Icon glyph='icon-fontello-anchor icon-1-and-quarter-x'/></div>
                      <div style={{position: 'relative', top: -10}}><small><strong>2 hours ago</strong></small></div>
                    </div>
                  </div>
                  <div>
                    <div className='fg-text'>
                      {"I'll be out of my mind and you'll be out of ideas pretty soon. So let's spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I can't wait to kiss the ground wherever we touch back down."}
                    </div>
                  </div>
                  <div style={{margin: -25, marginTop: 25}}>
                    <Img responsive src='/imgs/gallery/tumblr_n8zm8ndGiY1st5lhmo1_1280.jpg' />
                  </div>
                </PanelBody>
                <PanelFooter noRadius className='fg-black75 bg-gray' style={{padding: '12.5px 25px', margin: 0}}>
                  <Grid className='fg-text'>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <a href='#' className='fg-text' style={{border: 'none', marginRight: 25}}><Icon glyph='icon-dripicons-thumbs-up icon-1-and-quarter-x' /><span style={{position: 'relative', top: -2, left: 3}}>Like</span></a>
                      </Col>
                      <Col xs={6} className='text-right' collapseLeft collapseRight>
                        <span style={{top: 5, position: 'relative'}}><strong>523</strong> people like this</span>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
                <PanelFooter style={{padding: 25, paddingTop: 0, paddingBottom: 0}}>
                  <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                    <img src='/imgs/avatars/avatar0.png' width='30' height='30' style={{verticalAlign: 'top', top: 10, position: 'relative'}} />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Anna Sanchez</div>
                      <div className='fg-text'><small>Nice!</small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div><small><strong>22 minutes ago</strong></small></div>
                    </div>
                  </div>
                  <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                    <img src='/imgs/avatars/avatar9.png' width='30' height='30' style={{verticalAlign: 'top', top: 10, position: 'relative'}} />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Ava Parry</div>
                      <div className='fg-text'><small>Woah! Beautiful pic and beautiful quote! Whats the source?</small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div><small><strong>2 minutes ago</strong></small></div>
                    </div>
                  </div>
                  <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                    <img src='/imgs/avatars/avatar7.png' width='30' height='30' style={{verticalAlign: 'top', top: 10, position: 'relative'}} />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Ava Parry</div>
                      <div className='fg-text'><small>Thanks guys! Appreciate! :)</small></div>
                      <div className='fg-text'><small>Source: <em>Owl City, Ocean Eyes</em></small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div><small><strong>few seconds ago</strong></small></div>
                    </div>
                  </div>
                </PanelFooter>
                <PanelFooter style={{padding: 12.5}}>
                  <Textarea rows='1' placeholder='Write a comment...' style={{border: 'none'}} />
                </PanelFooter>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer>
                <PanelBody style={{padding: 25, paddingTop: 12.5}}>
                  <div className='inbox-avatar'>
                    <img src='/imgs/avatars/avatar5.png' width='40' height='40' />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Jordyn Ouellet created an event</div>
                      <div className='fg-text'><small>Austin, USA</small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div style={{position: 'relative', top: 0}}><Icon glyph='icon-ikons-calendar icon-1-and-quarter-x'/></div>
                      <div style={{position: 'relative', top: -10}}><small><strong>3 hours ago</strong></small></div>
                    </div>
                  </div>
                  <div>
                    <div className='fg-darkgreen45'><strong>Birthday party on my Yacht in New York.</strong></div>
                    <div className='fg-text'>July 10 at 10:00pm</div>
                    <div className='fg-text'>New York, USA</div>
                  </div>
                  <div style={{margin: -25, marginTop: 25}}>
                    <div>
                      <div id='map' className='map leaflet-container leaflet-fade-anim' style={{height: 300}}></div>
                    </div>
                  </div>
                </PanelBody>
                <PanelFooter noRadius className='fg-black75 bg-gray' style={{padding: '12.5px 25px', margin: 0}}>
                  <Grid className='fg-text'>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <a href='#' className='fg-text' style={{border: 'none', marginRight: 25}}><Icon glyph='icon-dripicons-thumbs-up icon-1-and-quarter-x' /><span style={{position: 'relative', top: -2, left: 3}}>Like</span></a>
                      </Col>
                      <Col xs={6} className='text-right' collapseLeft collapseRight>
                        <span style={{top: 5, position: 'relative'}}><strong>600</strong> people like this</span>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
                <PanelFooter style={{padding: 12.5}}>
                  <Textarea rows='1' placeholder='Write a comment...' style={{border: 'none'}} />
                </PanelFooter>
              </PanelContainer>
              <PanelContainer>
                <PanelBody style={{padding: 25, paddingTop: 12.5}}>
                  <div className='inbox-avatar'>
                    <img src='/imgs/avatars/avatar9.png' width='40' height='40' />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Ava Parry</div>
                      <div className='fg-text'><small>Massachusetts, USA</small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div style={{position: 'relative', top: 0}}><Icon glyph='icon-feather-video icon-1-and-quarter-x'/></div>
                      <div style={{position: 'relative', top: -10}}><small><strong>4 hours ago</strong></small></div>
                    </div>
                  </div>
                  <div>
                    <div className='fg-darkgreen45'>
                      <strong>1983 Historic Apple Keynote by Steve Jobs</strong>
                    </div>
                  </div>
                  <div style={{margin: -25, marginTop: 25}}>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src='//www.youtube.com/embed/lSiQA6KKyJo?rel=0' allowFullScreen></iframe>
                    </div>
                  </div>
                </PanelBody>
                <PanelFooter noRadius className='fg-black75 bg-gray' style={{padding: '12.5px 25px', margin: 0}}>
                  <Grid className='fg-text'>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <a href='#' className='fg-text' style={{border: 'none', marginRight: 25}}><Icon glyph='icon-dripicons-thumbs-up icon-1-and-quarter-x' /><span style={{position: 'relative', top: -2, left: 3}}>Like</span></a>
                      </Col>
                      <Col xs={6} className='text-right' collapseLeft collapseRight>
                        <span style={{top: 5, position: 'relative'}}><strong>4,350</strong> people like this</span>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
                <PanelFooter style={{padding: 25, paddingTop: 0, paddingBottom: 0}}>
                  <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                    <img src='/imgs/avatars/avatar0.png' width='30' height='30' style={{verticalAlign: 'top', top: 10, position: 'relative'}} />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Anna Sanchez</div>
                      <div className='fg-text'><small>Love this! It also features the Superbowl ad</small></div>
                      <div className='fg-text' style={{marginTop: -5}}><small>which is considered the greatest ad of all time!</small></div>
                      <div className='fg-text'><small>Thanks for sharing!</small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div><small><strong>4 hours ago</strong></small></div>
                    </div>
                  </div>
                  <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                    <img src='/imgs/avatars/avatar9.png' width='30' height='30' style={{verticalAlign: 'top', top: 10, position: 'relative'}} />
                    <div className='inbox-avatar-name'>
                      <div className='fg-darkgrayishblue75'>Ava Parry</div>
                      <div className='fg-text'><small><strong>Welcome! :)</strong></small></div>
                    </div>
                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                      <div><small><strong>4 hours ago</strong></small></div>
                    </div>
                  </div>
                </PanelFooter>
                <PanelFooter style={{padding: 12.5}}>
                  <Textarea rows='1' placeholder='Write a comment...' style={{border: 'none'}} />
                </PanelFooter>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Social = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header pressed />
        <Body/>
        <Footer />
      </Container>
    );
  }
});

module.exports = Social;
