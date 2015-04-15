/** @jsx React.DOM */

var Navigation = React.createClass({
  propTypes: {
    activeLink: React.PropTypes.string.isRequired
  },
  renderLi: function(name, path) {
    return (
      <li className={(this.props.activeLink === name) ? 'active' : ''}>
        <Link href={path}>{name}</Link>
      </li>
    );
  },
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <nav className="navbar navbar-default" role="navigation">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Rubix</a>
                </div>

                <div>
                  <ul className="nav navbar-nav">
                    {this.renderLi('CSS', '/app/docs/css')}
                    {this.renderLi('Components', '/app/docs/components')}
                  </ul>
                </div>
              </div>
            </nav>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Navigation;
