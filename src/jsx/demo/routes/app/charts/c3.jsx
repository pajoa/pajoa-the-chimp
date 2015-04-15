var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var ChartContainer = React.createClass({
  render: function() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelBody style={{padding: 25}} className='text-center'>
            <h4>{this.props.name}</h4>
            <div ><div id={this.props.id}></div></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {
    (function() {
      var chart = c3.generate({
        bindto: '#line-chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
            ]
          }
      });

      setTimeout(function () {
        chart.load({
          columns: [
            ['data1', 230, 190, 300, 500, 300, 400]
          ]
        });
      }, 1000);

      setTimeout(function () {
        chart.load({
          columns: [
            ['data3', 130, 150, 200, 300, 200, 100]
          ]
        });
      }, 1500);

      setTimeout(function () {
        chart.unload({
          ids: 'data1'
        });
      }, 2000);
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#timeseries-chart',
        data: {
          x: "x",
          columns: ["x 2013-01-01 2013-01-02 2013-01-03 2013-01-04 2013-01-05 2013-01-06".split(" "), ["data1", 30, 200, 100, 400, 150, 250],
              ["data2", 130, 340, 200, 500, 250, 350]
          ]
        },
        axis: {
          x: {
            type: "timeseries",
            tick: {
              format: "%Y-%m-%d"
            }
          }
        }
      });
      setTimeout(function() {
        chart.load({
          columns: [
            ["data3", 400, 500, 450, 700, 600, 500]
          ]
        });
      }, 2000);
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#spline-chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'spline'
        }
      });
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#step-chart',
        data: {
          columns: [
            ['data1', 300, 350, 300, 0, 0, 100],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          types: {
            data1: 'step',
            data2: 'area-step'
          }
        }
      });
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#area-chart',
        data: {
          columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          types: {
            data1: 'area',
            data2: 'area-spline'
          }
        }
      });
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#bar-chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50],
            ['data3', 130, -150, 200, 300, -200, 100]
          ],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.5
          }
        }
      });
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#stackedbar-chart',
        data: {
          columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
          ],
          type: 'bar',
          groups: [
            ['data1', 'data2']
          ]
        },
        grid: {
          y: {
            lines: [{value:0}]
          }
        }
      });

      setTimeout(function () {
        chart.groups([['data1', 'data2', 'data3']])
      }, 1000);

      setTimeout(function () {
        chart.load({
          columns: [['data4', 100, -50, 150, 200, -300, -100]]
        });
      }, 1500);

      setTimeout(function () {
        chart.groups([['data1', 'data2', 'data3', 'data4']])
      }, 2000);
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#scatter-chart',
        data: {
          xs: {
              setosa: 'setosa_x',
              versicolor: 'versicolor_x',
          },
          // iris data from R
          columns: [
            ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
            ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
          ],
          type: 'scatter'
        },
        axis: {
          x: {
            label: 'Sepal.Width',
            tick: {
              fit: false
            }
          },
          y: {
            label: 'Petal.Width'
          }
        }
      });

      setTimeout(function () {
        chart.load({
          xs: {
            virginica: 'virginica_x'
          },
          columns: [
            ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
          ]
        });
      }, 5000);

      setTimeout(function () {
        chart.unload({
          ids: 'setosa'
        });
      }, 7000);

      setTimeout(function () {
        chart.load({
          columns: [
            ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ]
        });
      }, 9000);
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#gauge-chart',
        data: {
          columns: [
            ['data', 91.4]
          ],
          type: 'gauge'
        },
        color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
          threshold: {
            values: [30, 60, 90, 100]
          }
        }
      });

      setTimeout(function () {
        chart.load({
          columns: [['data', 10]]
        });
      }, 10000);

      setTimeout(function () {
        chart.load({
          columns: [['data', 50]]
        });
      }, 12000);

      setTimeout(function () {
        chart.load({
          columns: [['data', 70]]
        });
      }, 13000);

      setTimeout(function () {
        chart.load({
          columns: [['data', 0]]
        });
      }, 14000);

      setTimeout(function () {
        chart.load({
          columns: [['data', 100]]
        });
      }, 15000);
    })();

    (function() {
      var chart = c3.generate({
        bindto: '#pie-chart',
        data: {
          columns: [
            ['data1', 30],
            ['data2', 120],
          ],
          type : 'pie'
        }
      });
    })();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
            <ChartContainer id='stackedbar-chart' name='Stacked Bar Chart' />
            <ChartContainer id='bar-chart' name='Bar Chart' />
            <ChartContainer id='line-chart' name='Line Chart' />
            <ChartContainer id='timeseries-chart' name='Timeseries Chart' />
            <ChartContainer id='spline-chart' name='Spline Chart' />
            <ChartContainer id='scatter-chart' name='Scatter Chart' />
            <ChartContainer id='step-chart' name='Step Chart' />
            <ChartContainer id='area-chart' name='Area Chart' />
            <ChartContainer id='pie-chart' name='Pie Chart' />
            <ChartContainer id='gauge-chart' name='Gauge' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var C3JSPage = React.createClass({
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

module.exports = C3JSPage;
