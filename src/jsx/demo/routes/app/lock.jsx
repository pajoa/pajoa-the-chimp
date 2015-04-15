var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  interval: null,
  getTimeState: function() {
    return {
      time: moment().format('hh:mm:ss'),
      date: moment().format('dddd, MMMM YYYY')
    }
  },
  getInitialState: function() {
    return {
      time: null,
      date: null
    };
  },
  back: function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.history.back();
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
    $('html').removeClass('authentication');
  },
  componentDidMount: function() {
    $('html').addClass('authentication');
    this.interval = setInterval(function() {
      this.setState(this.getTimeState());
    }.bind(this), 500);
  },
  render: function() {
    return (
      <Container id='auth-container' className='lockpage'>
        <Container id='auth-row'>
          <Container id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={12} className='text-center'>
                  <h1 className='fg-white' style={{fontSize: 81, fontWeight: 300}}>{this.state.time}</h1>
                  <h6 className='fg-white'>{this.state.date}</h6>
                </Col>
              </Row>
              <Row style={{marginTop: 50}}>
                <Col sm={12} className='text-center'>
                  <Form onSubmit={this.back}>
                    <Label htmlFor='annasanchez'>Anna Sanchez</Label>
                    <img src='/imgs/avatars/avatar.jpg' width='128' height='128' alt='avatar' />
                    <Input type='password' placeholder='Password' autoFocus />
                    <Button type='submit' className='hidden'>Unlock</Button>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </Container>
        </Container>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var LockPage = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Body/>
      </Container>
    );
  }
});

module.exports = LockPage;
