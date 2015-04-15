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
    var v, t, next = function() {
      return {
        x: ++t,
        y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
      };
    };

    (function() {
      var chart = new Rubix('#line-scatter-chart', {
        title: 'Line + Scatter Plot (Step-After Interpolation)',
        width: '100%',
        height: 300,
        tooltip: {
          color: 'white',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        show_markers: true,
        interpolate: 'step-after'
      });

      var scatter = chart.line_series({
        name: 'Scatter Plot',
        color: '#4572a7',
        scatter: true
      });

      t = 0, v = 100, scatter_data = d3.range(100).map(next);

      scatter.addData(scatter_data);

      var line = chart.line_series({
        name: 'Line Series',
        color: '#D71F4B',
        show_markers: false
      });

      t = 0, v = 100, data = d3.range(100).map(next);

      line.addData(data);
    })();

    (function() {
      var chart = new Rubix('#line-column-chart', {
        title: 'Line + Column Series (Monotone Interpolation)',
        titleColor: '#2EB398',
        width: '100%',
        height: 300,
        tooltip: {
          color: '#2EB398',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        show_markers: true,
        interpolate: 'monotone'
      });

      var data = [
        {x: 1, y: 10},
        {x: 2, y: 15},
        {x: 3, y: 5},
        {x: 4, y: 25},
        {x: 5, y: 5},
      ];

      var column = chart.column_series({
        name: 'Column Series',
        color: '#7CD5BA',
        marker: 'square'
      });

      column.addData(data);

      var line = chart.line_series({
        name: 'Line Series',
        color: '#2EB398',
        show_markers: false
      });

      line.addData(data);
    })();

    (function() {
      var chart = new Rubix('#line-bar-chart', {
        title: 'Line + Bar Series',
        titleColor: '#D71F4B',
        width: '100%',
        height: 400,
        tooltip: {
          color: '#D71F4B',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        show_markers: true
      });

      var line = chart.line_series({
        name: 'Line Series',
        color: '#D71F4B'
      });

      var data = [
        {x: 1, y: 10},
        {x: 2, y: 15},
        {x: 3, y: 5},
        {x: 4, y: 25},
        {x: 5, y: 5},
      ];

      line.addData(data);

      var bar = chart.bar_series({
        name: 'Bar Series',
        color: '#F09FA6',
        marker: 'square'
      });

      bar.addData(data);
    })();

    (function() {
      var chart = new Rubix('#line-area-chart', {
        title: 'Line + Area (Sankey Interpolation)',
        titleColor: 'steelblue',
        height: 200,
        tooltip: {
          color: 'steelblue',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        interpolate: 'sankey',
        show_markers: true
      });

      var area = chart.area_series({
        name: 'Area Series',
        color: '#A0C7F2'
      });

      var data2 = [
        {x: 1, y: 1},
        {x: 2, y: 3},
        {x: 3, y: 5},
        {x: 4, y: 8},
        {x: 5, y: 9},
        {x: 6, y: 4},
        {x: 7, y: 2},
        {x: 8, y: 5},
        {x: 9, y: 4},
        {x: 10, y: 7},
      ];

      area.addData(data2);

      var line = chart.line_series({
        name: 'Line Series',
        color: 'steelblue'
      });

      var data = [
        {x: 1, y: 11},
        {x: 2, y: 3},
        {x: 3, y: 15},
        {x: 4, y: 4},
        {x: 5, y: 9},
        {x: 6, y: 3},
        {x: 7, y: 1},
        {x: 8, y: 7},
        {x: 9, y: 14},
        {x: 10, y: 10},
      ];

      line.addData(data);
    })();


    (function() {
      var chart = new Rubix('#line-stackedarea-chart', {
        title: 'Line + Stacked Area (Cardinal Interpolation)',
        height: 300,
        tooltip: {
          color: 'white',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        stacked: true,
        show_markers: false,
        interpolate: 'cardinal'
      });

      var line = chart.line_series({
        name: 'Line Series',
        color: '#B4A1DD',
        show_markers: true
      });

      var data = [
        {x: 1, y: 11},
        {x: 2, y: 14},
        {x: 3, y: 25},
        {x: 4, y: 24},
        {x: 5, y: 16},
        {x: 6, y: 23},
        {x: 7, y: 21},
        {x: 8, y: 27},
        {x: 9, y: 14},
        {x: 10, y: 20},
      ];

      line.addData(data);

      var area = chart.area_series({
        name: 'Area Series',
        color: '#aa4643'
      });

      var data2 = [
        {x: 1, y: 3},
        {x: 2, y: 4},
        {x: 3, y: 7},
        {x: 4, y: 2},
        {x: 5, y: 6},
        {x: 6, y: 4},
        {x: 7, y: 5},
        {x: 8, y: 2},
        {x: 9, y: 6},
        {x: 10, y: 2},
      ];

      area.addData(data2);

      var area2 = chart.area_series({
        name: 'Area Series 2',
        color: '#4572a7'
      });

      var data3 = [
        {x: 1, y: 1},
        {x: 2, y: 4},
        {x: 3, y: 2},
        {x: 4, y: 1},
        {x: 5, y: 6},
        {x: 6, y: 7},
        {x: 7, y: 8},
        {x: 8, y: 5},
        {x: 9, y: 4},
        {x: 10, y: 7},
      ];

      area2.addData(data3);
    })();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <Chart id='line-scatter-chart' />
              <Chart id='line-column-chart' />
              <Chart id='line-bar-chart' />
              <Chart id='line-area-chart' />
              <Chart id='line-stackedarea-chart' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var RubixMixedSeries = React.createClass({
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

module.exports = RubixMixedSeries;
