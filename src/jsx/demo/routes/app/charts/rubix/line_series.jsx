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
        title: 'Single Line Chart',
        subtitle: 'No markers',
        width: '100%',
        height: 200,
        tooltip: {
          color: '#0054A9',
          format: {
            x: '.0f',
            y: '.0f'
          }
        }
      });

      var line = chart.line_series({
        name: 'Series A',
        color: '#0054A9'
      });

      var data = d3.range(100).map(next);
      line.addData(data);
    })();

    (function() {
      var chart = new Rubix('#mslc', {
        height: 300,
        title: 'Multi-Line Series Chart',
        subtitle: 'With Markers',
        tooltip: {
          color: '#ECC279',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        show_markers: true
      });

      var line = chart.line_series({
        name: 'Series A',
        color: '#79B0EC',
        marker: 'circle'
      });

      var data = [
        {x: 1, y: 10},
        {x: 2, y: 15},
        {x: 3, y: 5},
        {x: 4, y: 12},
        {x: 5, y: 7},
        {x: 6, y: 9},
        {x: 7, y: 2},
        {x: 8, y: 5},
        {x: 9, y: 10},
        {x: 10, y: 12}
      ];

      line.addData(data);

      var line2 = chart.line_series({
        name: 'Series B',
        color: '#426F9F',
        marker: 'square'
      });

      var data2 = [];

      for(var i=0; i < data.length; i++) {
        data2.push({
          x: data[i].x,
          y: data[i].y+5
        });
      }

      line2.addData(data2);

      var line3 = chart.line_series({
        name: 'Series C',
        color: '#9F7832',
        marker: 'cross'
      });

      var data3 = [];

      for(var i=0; i < data2.length; i++) {
        data3.push({
          x: data2[i].x,
          y: data2[i].y+5
        });
      }

      line3.addData(data3);

      var line4 = chart.line_series({
        name: 'Series D',
        color: '#ECC279',
        marker: 'triangle-up'
      });

      var data4 = [];

      for(var i=0; i < data3.length; i++) {
        data4.push({
          x: data3[i].x,
          y: data3[i].y+Math.round((Math.random() * 10) + 2.5)
        });
      }

      line4.addData(data4);
    })();

    (function() {
      var genChart = function(id, symbol, color, subtitle) {
        var chart = new Rubix(id, {
          height: 200,
          title: 'Markers',
          titleColor: color,
          subtitle: subtitle,
          subtitleColor: color,
          axis: {
            x: {
              tickCount: 4
            }
          },
          tooltip: {
            color: color,
            format: {
              x: '.0f',
              y: '.0f'
            }
          },
          show_markers: true
        });

        var line = chart.line_series({
          name: symbol,
          color: color,
          marker: symbol
        });

        var data = d3.range(20).map(next);

        line.addData(data);
      };

      genChart('#cirm', 'circle' , 'green', 'Circular');
      genChart('#crom', 'cross'  , '#9F00A7', 'Cross shaped');
      genChart('#sqm' , 'square' , '#DA532C', 'Square shaped');
      genChart('#diam' , 'diamond' , '#00ABA9', 'Diamond shaped');
      genChart('#tmu' , 'triangle-up' , '#b91d47', 'Triangle Up');
      genChart('#tmd' , 'triangle-down' , '#2d89ef' ,'Triangle Down');
    })();

    (function() {
      var chart = new Rubix('#scatter-plot', {
        title: 'Scatter plot',
        subtitle: 'Rendering 1,000 points',
        titleColor: 'steelblue',
        subtitleColor: 'steelblue',
        height: 300,
        tooltip: {
          color: 'steelblue',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        show_markers: true
      });

      var scatter = chart.line_series({
        name: 'Scatter',
        color: 'steelblue',
        marker: 'circle',
        scatter: true
      });

      var t = 1,
          v = 100,
          data = d3.range(333).map(function() {
            return {
              x: ++t,
              y: Math.round(Math.random() * 300)
            }
          });
          data = d3.merge([data, d3.range(333).map(function() {
            return {
              x: ++t,
              y: Math.round(Math.random() * 300) + 300
            }
          })]);
          data = d3.merge([data, d3.range(333).map(function() {
            return {
              x: ++t,
              y: Math.round(Math.random() * 400) + 600
            }
          })]);
      data[0] = {x:0, y: 0};
      data.push({x: 1000, y: 1000});

      scatter.addData(data);
    })();

    (function() {
      var genChart = function(id, symbol, color, interpolation) {
        var chart = new Rubix(id, {
          height: 200,
          title: interpolation + ' Interpolation',
          titleColor: color,
          tooltip: {
            color: color,
            format: {
              x: '.0f',
              y: '.0f'
            }
          },
          interpolate: interpolation.toLowerCase()
        });

        var line = chart.line_series({
          name: interpolation,
          color: color,
          marker: symbol
        });

        var data = d3.range(50).map(next);

        line.addData(data);
      };

      genChart('#slcwis', 'cross', '#800040', 'Sankey');
      genChart('#slcwim', 'diamond', 'cornflowerblue', 'Monotone');
      genChart('#slcwisb', 'square', '#0080FF', 'Step-Before');
      genChart('#slcwisa', 'triangle-up', '#FF0000', 'Step-After');
      genChart('#slcwic', 'triangle-down', '#8000FF', 'Cardinal');
      genChart('#slcwil', 'circle', '#804000', 'Linear');
    })();
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
              <Chart id='cirm'/>
              <Chart id='sqm'/>
              <Chart id='tmu'/>
            </Col>
            <Col sm={6}>
              <Chart id='crom'/>
              <Chart id='diam'/>
              <Chart id='tmd'/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Chart id='scatter-plot' />
            </Col>
          </Row>
          <Row>
            <Col sm={6} collapseRight>
              <Chart id='slcwis'/>
              <Chart id='slcwim'/>
              <Chart id='slcwisb'/>
            </Col>
            <Col sm={6}>
              <Chart id='slcwisa'/>
              <Chart id='slcwic'/>
              <Chart id='slcwil'/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Chart id='mslc' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var RubixLineSeries = React.createClass({
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

module.exports = RubixLineSeries;
