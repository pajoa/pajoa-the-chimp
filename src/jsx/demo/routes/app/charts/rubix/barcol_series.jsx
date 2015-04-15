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
    (function() {
        var chart = new Rubix('#single-series-column-chart', {
          height: 300,
          title: 'Single Series Column Chart',
          subtitle: 'Fruits',
          titleColor: '#D71F4B',
          subtitleColor: '#D71F4B',
          axis: {
            x: {
              type: 'ordinal',
            },
            y: {
              type: 'linear',
              tickFormat: 'd'
            }
          },
          tooltip: {
            color: '#D71F4B',
            format: {
              y: '.0f'
            }
          },
          margin: {
            left: 50
          },
          grouped: false,
          show_markers: true
        });

        var fruits = chart.column_series({
          name: 'Fruits',
          color: '#D71F4B'
        });

        fruits.addData([
          {x: 'Apples', y: 5},
          {x: 'Oranges', y: 3},
          {x: 'Pears', y: 4},
          {x: 'Grapes', y: 7},
          {x: 'Bananas', y: 2},
          {x: 'Strawberry', y: 15}
        ]);
    })();

    (function() {
        var chart = new Rubix('#single-series-bar-chart', {
          height: 300,
          title: 'Single series bar chart',
          titleColor: '#E299B7',
          subtitle: 'Fruits',
          subtitleColor: '#E299B7',
          axis: {
            x: {
              type: 'ordinal',
            },
            y:  {
              type: 'linear',
              tickFormat: 'd'
            }
          },
          tooltip: {
            color: '#E299B7',
            format: {
              y: '.0f'
            }
          },
          grouped: false,
          show_markers: true
        });

        var fruits = chart.bar_series({
          name: 'Fruits',
          color: '#E299B7',
          marker: 'square'
        });

        fruits.addData([
          {x: 'Apples1', y: 5},
          {x: 'Oranges1', y: 3},
          {x: 'Pears1', y: 4},
          {x: 'Grapes1', y: 7},
          {x: 'Bananas1', y: 2},
          {x: 'Strawberry1', y: 15}
        ]);
    })();

    (function() {
      var chart = new Rubix('#grouped-multi-series-column-chart', {
        title: 'Grouped multi series column chart',
        subtitle: 'Sales by Sales Persons [2006 - 2007]',
        titleColor: '#2EB398',
        subtitleColor: '#2EB398',
        height: 300,
        axis: {
          x: {
            type: 'ordinal',
          },
          y:  {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#2EB398',
          format: {
            y: '.0f'
          }
        },
        grouped: true,
        show_markers: true
      });

      var year2006 = chart.column_series({
        name: '2006',
        color: '#2EB398'
      });

      year2006.addData([
        {x: 'Amy Alberts', y: 1000},
        {x: 'David Campbell', y: 1170},
        {x: 'Garret Young', y: 660},
        {x: 'Jae Pak', y: 1030}
      ]);

      var year2007 = chart.column_series({
        name: '2007',
        color: '#7CD5BA'
      });

      year2007.addData([
        {x: 'Amy Alberts', y: 2000},
        {x: 'David Campbell', y: 5170},
        {x: 'Garret Young', y: 160},
        {x: 'Jae Pak', y: 2030}
      ]);
    })();

    (function() {
      var chart = new Rubix('#grouped-multi-series-bar-chart', {
        title: 'Grouped multi series bar chart',
        subtitle: 'Company Performance [2004 - 2007]',
        titleColor: '#EE682F',
        subtitleColor: '#EE682F',
        height: 300,
        axis: {
          x: {
            type: 'ordinal',
          },
          y:  {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#EE682F',
          format: {
            y: '.0f'
          }
        },
        grouped: true,
        show_markers: true
      });

      var sales = chart.bar_series({
        name: 'Sales',
        color: '#FFC9A0'
      });

      sales.addData([
        {x: 2004, y: 1000},
        {x: 2005, y: 1170},
        {x: 2006, y: 660},
        {x: 2007, y: 1030}
      ]);

      var expenses = chart.bar_series({
        name: 'Expenses',
        color: '#EE682F'
      });

      expenses.addData([
        {x: 2004, y: 400},
        {x: 2005, y: 460},
        {x: 2006, y: 1120},
        {x: 2007, y: 540}
      ]);
    })();

    (function() {
      var chart = new Rubix('#stacked-multi-series-column-chart', {
        title: 'Stacked Multi Series Column chart',
        subtitle: 'Total fruit consumption',
        titleColor: '#EA7882',
        subtitleColor: '#EA7882',
        height: 300,
        axis: {
          x: {
            type: 'ordinal'
          },
          y:  {
            type: 'linear',
            tickFormat: 'd',
            label: 'Total fruit consumption'
          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: '.0f'
          }
        },
        show_markers: true
      });

      var john = chart.column_series({
        name: 'John',
        color: '#EA7882'
      });

      john.addData([
        {x: 'Apples', y: 5},
        {x: 'Oranges', y: 3},
        {x: 'Pears', y: 4},
        {x: 'Grapes', y: 7},
        {x: 'Bananas', y: 2}
      ]);

      var jane = chart.column_series({
        name: 'Jane',
        color: '#79B0EC',
        marker: 'square'
      });

      jane.addData([
        {x: 'Apples', y: 2},
        {x: 'Oranges', y: 2},
        {x: 'Pears', y: 3},
        {x: 'Grapes', y: 2},
        {x: 'Bananas', y: 1}
      ]);

      var joe = chart.column_series({
        name: 'Joe',
        color: '#55C9A6',
        marker: 'diamond'
      });

      joe.addData([
        {x: 'Apples', y: 3},
        {x: 'Oranges', y: 4},
        {x: 'Pears', y: 4},
        {x: 'Grapes', y: 2},
        {x: 'Bananas', y: 5}
      ]);
    })();

    (function() {
      var chart = new Rubix('#stacked-multi-series-bar-chart', {
        title: 'Stacked Multi series bar chart',
        subtitle: 'Total fruit consumption',
        titleColor: '#C36849',
        subtitleColor: '#C36849',
        height: 500,
        axis: {
          x: {
            type: 'ordinal'
          },
          y:  {
            type: 'linear',
            tickFormat: 'd',
            label: 'Total fruit consumption'
          }
        },
        tooltip: {
          color: '#C36849',
          format: {
            y: '.0f'
          }
        },
        show_markers: true
      });

      var john = chart.bar_series({
        name: 'John',
        color: '#3E5F90'
      });

      john.addData([
        {x: 'Apples', y: 5},
        {x: 'Oranges', y: 3},
        {x: 'Pears', y: 4},
        {x: 'Grapes', y: 7},
        {x: 'Bananas', y: 2}
      ]);

      var jane = chart.bar_series({
        name: 'Jane',
        color: '#C67055',
        marker: 'square'
      });

      jane.addData([
        {x: 'Apples', y: 2},
        {x: 'Oranges', y: 2},
        {x: 'Pears', y: 3},
        {x: 'Grapes', y: 2},
        {x: 'Bananas', y: 1}
      ]);

      var joe = chart.bar_series({
        name: 'Joe',
        color: '#E69E8F',
        marker: 'diamond'
      });

      joe.addData([
        {x: 'Apples', y: 3},
        {x: 'Oranges', y: 4},
        {x: 'Pears', y: 4},
        {x: 'Grapes', y: 2},
        {x: 'Bananas', y: 5}
      ]);
    })();

    (function() {
      var chart = new Rubix('#stacked-multi-series-column-chart-negative', {
        title: 'Stacked column chart with negative values',
        subtitle: 'Profit/Expense chart',
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 300,
        axis: {
          x: {
            type: 'ordinal'
          },
          y:  {
            type: 'linear',
            tickFormat: ',.0f',
            label: 'Revenue'
          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: ',.0f'
          }
        },
        show_markers: true
      });

      var profit = chart.column_series({
        name: 'Profit',
        color: '#0080FF'
      });

      profit.addData([
        {x: 'Jan', y: 30000},
        {x: 'Feb', y: 25000},
        {x: 'Mar', y: 25000},
        {x: 'Apr', y: 30000},
        {x: 'May', y: 35000},
        {x: 'Jun', y: 15000}
      ]);

      var expenses = chart.column_series({
        name: 'Expense',
        color: '#FF6666',
        marker: 'square'
      });

      expenses.addData([
        {x: 'Jan', y: -25000},
        {x: 'Feb', y: -10000},
        {x: 'Mar', y: -10000},
        {x: 'Apr', y: -15000},
        {x: 'May', y: -15000},
        {x: 'Jun', y: -5000}
      ]);
    })();


    (function() {
      var chart = new Rubix('#stacked-multi-series-bar-chart-negative', {
        title: 'Stacked bar chart with negative values',
        subtitle: 'Profit/Expense chart',
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 300,
        axis: {
          x: {
            type: 'ordinal'
          },
          y:  {
            type: 'linear',
            tickFormat: ',.0f',
            label: 'Revenue',
            tickCount: 5
          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: ',.0f'
          }
        },
        show_markers: true
      });

      var profit = chart.bar_series({
        name: 'Profit',
        color: '#0080FF'
      });

      profit.addData([
        {x: 'Jan', y: 30000},
        {x: 'Feb', y: 25000},
        {x: 'Mar', y: 25000},
        {x: 'Apr', y: 30000},
        {x: 'May', y: 65000},
        {x: 'Jun', y: 15000}
      ]);

      var expenses = chart.bar_series({
          name: 'Expense',
          color: '#FF6666',
          marker: 'square'
      });

      expenses.addData([
        {x: 'Jan', y: -35000},
        {x: 'Feb', y: -10000},
        {x: 'Mar', y: -10000},
        {x: 'Apr', y: -15000},
        {x: 'May', y: -15000},
        {x: 'Jun', y: -5000}
      ]);
    })();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <Chart id='single-series-column-chart' />
              <Chart id='single-series-bar-chart' />
              <Chart id='grouped-multi-series-column-chart' />
              <Chart id='grouped-multi-series-bar-chart' />
              <Chart id='stacked-multi-series-column-chart' />
              <Chart id='stacked-multi-series-bar-chart' />
              <Chart id='stacked-multi-series-column-chart-negative' />
              <Chart id='stacked-multi-series-bar-chart-negative' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var RubixBarColSeries = React.createClass({
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

module.exports = RubixBarColSeries;
