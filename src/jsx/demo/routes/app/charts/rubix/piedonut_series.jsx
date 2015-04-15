var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Chart = React.createClass({
  render: function() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  interval: null,
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  componentDidMount: function() {
    setTimeout(function() {
      (function() {
        var pie = Rubix.Pie('#pie-chart', {
          title: 'Pie chart',
          subtitle: 'Browser Share',
          height: 300
        });

        pie.addData([
          {
            name: 'Firefox',
            value: 45.0,
            color: '#4572a7'
          },
          {
            name: 'IE',
            value: 26.8,
            color: '#aa4643'
          },
          {
            name: 'Chrome',
            value: 12.8,
            color: '#89a54e'
          },
          {
            name: 'Safari',
            value: 8.5,
            color: '#80699b'
          },
          {
            name: 'Opera',
            value: 6.2,
            color: '#3d96ae'
          },
          {
            name: 'Others',
            value: 0.7,
            color: '#db843d'
          }
        ]);
      })();

      (function() {
        var donut = Rubix.Donut('#donut-chart', {
          title: 'Realtime Donut chart',
          subtitle: 'Browser Share',
          height: 300
        });

        donut.addData([
          {
            name: 'Firefox',
            value: 45.0,
            color: '#4572a7'
          },
          {
            name: 'IE',
            value: 26.8,
            color: '#aa4643'
          },
          {
            name: 'Chrome',
            value: 12.8,
            color: '#89a54e'
          },
          {
            name: 'Safari',
            value: 8.5,
            color: '#80699b'
          },
          {
            name: 'Opera',
            value: 6.2,
            color: '#3d96ae'
          },
          {
            name: 'Others',
            value: 0.7,
            color: '#db843d'
          }
        ]);

        var browsers = ['Firefox', 'IE', 'Chrome', 'Safari', 'Opera', 'Others'], name;

        var redrawDonut = function() {
          name = browsers.shift();
          browsers.push(name);
          return {
            name: name,
            value: Math.random() * 100
          };
        };

        this.interval = setInterval(function() {
          donut.updatePoint(redrawDonut());
        }, 1000);
      }.bind(this))();
    }.bind(this), 15);
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <Chart id='pie-chart' />
            </Col>
            <Col sm={6}>
              <Chart id='donut-chart' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var PieDonutSeries = React.createClass({
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

module.exports = PieDonutSeries;
