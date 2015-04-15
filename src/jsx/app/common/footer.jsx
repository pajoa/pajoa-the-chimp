var Footer = React.createClass({
  getInitialState: function() {
    return {
      version: 0
    };
  },
  componentDidMount: function() {
    this.setState({
      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
    });
  },
  render: function() {
    return (
      <div id='footer-container'>
        <Grid id='footer' className='text-center'>
          <Row>
            <Col xs={12}>
              <div>© 2014 SketchPixy Creative - v{this.state.version} - Created by Founders &amp; Coders</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Footer;
