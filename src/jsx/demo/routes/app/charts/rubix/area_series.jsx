var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Chart = React.createClass({
  render: function() {
    return (
      <PanelContainer>
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
    var t = 0,
        v = 100;

    var next = function() {
      return {
        x: ++t,
        y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
      };
    };

    (function() {
      var chart = new Rubix('#slcnm', {
        width: '100%',
        height: 200,
        title: 'Single area chart',
        subtitle: 'no markers',
        titleColor: '#0054A9',
        subtitleColor: '#0054A9',
        tooltip: {
          color: '#0054A9',
          format: {
            x: '.0f',
            y: '.0f'
          }
        }
      });

      var line = chart.area_series({
        name: 'Series A',
        color: '#0054A9'
      });

      var data = d3.range(100).map(next);
      line.addData(data);
    })();

    (function() {
      var chart = new Rubix('#stacked-area-offset-zero', {
        height: 200,
        title: 'Stacked Area',
        subtitle: 'Offset: Zero',
        tooltip: {
          color: 'white',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        stacked: true,
        offset: 'zero'
      });

      var area = chart.area_series({
        name: 'Series A',
        color: '#804000',
        marker: 'circle'
      });

      var t = 0,
          v = 20,
          data = d3.range(10).map(next);

      area.addData(data);

      var area2 = chart.area_series({
        name: 'Series B',
        color: 'cornflowerblue',
        marker: 'square'
      });

      var t = 0,
          v = 20,
          data2 = d3.range(10).map(next);

      area2.addData(data2);

      var area3 = chart.area_series({
        name: 'Series C',
        color: 'brown',
        marker: 'cross'
      });

      var t = 0,
          v = 20,
          data3 = d3.range(10).map(next);

      function next() {
        return {
          x: ++t,
          y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
        };
      }

      area3.addData(data3);
    })();

    (function() {
      var chart = new Rubix('#stacked-area-offset-wiggle', {
        height: 200,
        title: 'Stacked Area',
        subtitle: 'Offset: Wiggle',
        tooltip: {
          color: 'white',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        stacked: true,
        offset: 'wiggle'
      });

      var area = chart.area_series({
        name: 'Series A',
        color: 'purple',
        marker: 'circle'
      });

      var t = 0,
          v = 50,
          data = d3.range(10).map(next);

      area.addData(data);

      var area2 = chart.area_series({
        name: 'Series B',
        color: 'cornflowerblue',
        marker: 'square'
      });

      var t = 0,
          v = 50,
          data2 = d3.range(10).map(next);

      area2.addData(data2);

      var area3 = chart.area_series({
        name: 'Series C',
        color: 'green',
        marker: 'cross'
      });

      var t = 0,
          v = 50,
          data3 = d3.range(10).map(next);

      function next() {
          return {
              x: ++t,
              y: v = ~~Math.max(20, Math.min(90, v + 10 * (Math.random() - .5)))
          };
      }

      area3.addData(data3);
    })();

    (function() {
      var chart = new Rubix('#stacked-area-offset-silhouette', {
        height: 200,
        title: 'Stacked Area',
        subtitle: 'Offset: Silhouette',
        tooltip: {
          color: 'white',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        stacked: true,
        offset: 'silhouette'
      });

      var area = chart.area_series({
        name: 'Series A',
        color: 'orange',
        marker: 'circle'
      });

      var t = 0,
          v = 20,
          data = d3.range(10).map(next);

      area.addData(data);

      var area2 = chart.area_series({
        name: 'Series B',
        color: '#858400',
        marker: 'square'
      });

      var t = 0,
          v = 20,
          data2 = d3.range(10).map(next);

      area2.addData(data2);

      var area3 = chart.area_series({
        name: 'Series C',
        color: 'lime',
        marker: 'cross'
      });

      var t = 0,
          v = 20,
          data3 = d3.range(10).map(next);

      area3.addData(data3);
    })();

    (function() {
      var chart = new Rubix('#stacked-area-offset-expand', {
        height: 200,
        title: 'Stacked area',
        subtitle: 'Offset: Expand',
        tooltip: {
          color: 'white',
          format: {
            x: '.0f',
            y: '%'
          }
        },
        axis: {
          y: {
            tickFormat: '%'
          }
        },
        stacked: true,
        offset: 'expand'
      });

      var area = chart.area_series({
        name: 'Series A',
        color: 'silver',
        marker: 'circle'
      });

      var t = 0,
          v = 20,
          data = d3.range(10).map(next);

      area.addData(data);

      var area2 = chart.area_series({
        name: 'Series B',
        color: 'gray',
        marker: 'square'
      });

      var t = 0,
          v = 20,
          data2 = d3.range(10).map(next);

      area2.addData(data2);

      var area3 = chart.area_series({
        name: 'Series C',
        color: '#666',
        marker: 'cross'
      });

      var t = 0,
          v = 20,
          data3 = d3.range(10).map(next);

      function next() {
        return {
          x: ++t,
          y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
        };
      }

      area3.addData(data3);
    })();

    (function() {
      var chart = new Rubix('#realtime-stacked-chart', {
        width: '100%',
        height: 200,
        title: 'Realtime Streamgraph (Silhouette + Monotone Interpolation)',
        subtitle: 'Interval-based, immediate shift',
        tooltip: {
          color: 'cornflowerblue',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        stacked: true,
        offset: 'silhouette',
        interpolate: 'monotone'
      });

      var area = chart.area_series({
        name: 'Series A',
        color: '#0054A9'
      });

      var t = 0,
          v = 10,
          data = d3.range(100).map(realtime_stacked_intvl);

      function realtime_stacked_intvl() {
        return {
          x: ++t,
          y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
        };
      }

      area.addData(data);

      var area2 = chart.area_series({
        name: 'Series B',
        color: 'cornflowerblue',
        marker: 'square'
      });

      var t = 0,
          v = 44,
          data2 = d3.range(100).map(realtime_stacked_intvl);

      area2.addData(data2);

      this.interval = setInterval(function() {
        area.addPoint(realtime_stacked_intvl(), true);
        --t;
        area2.addPoint(realtime_stacked_intvl(), true);
      }, 2500);
    }.bind(this))();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <Chart id='slcnm' />
            </Col>
          </Row>
          <Row>
            <Col sm={6} collapseRight>
              <Chart id='stacked-area-offset-zero' />
              <Chart id='stacked-area-offset-silhouette' />
            </Col>
            <Col sm={6}>
              <Chart id='stacked-area-offset-wiggle' />
              <Chart id='stacked-area-offset-expand' />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Chart id='realtime-stacked-chart' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var RubixAreaSeries = React.createClass({
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

module.exports = RubixAreaSeries;
