var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    $('#trumbowyg-demo').trumbowyg({
      mobile: false,
      tablet: false,
      autogrow: true,
      dir: $('html').attr('dir')
    }).trumbowyg('html', '<p>Steve Jobs became the greatest business executive of our era, the one most certain to be remembered a century from now. History will place him in the pantheon right next to Edison and Ford. More than anyone else of his time, he made products that were completely innovative, combining the power of poetry and processors.</p><blockquote><p style="margin-bottom: 12.5px;"><span style="font-size: 11pt; line-height: 1.78571;">Some people say, “Give the customers what they want.” But that’s not my approach. Our job is to figure out what they’re going to want before they do. I think Henry Ford once said, <b>“If I’d asked customers what they wanted, they would have told me, ‘A faster horse!’”</b> People don’t know what they want until you show it to them. That’s why I never rely on market research. Our task is to read things that are not yet on the page.&nbsp;</span><br></p><div><span style="font-size: 11pt; line-height: 1.78571;">- Steve Jobs in <i>Steve Jobs by Walter Isaacson</i></span></div></blockquote><p>Was he smart? No, not exceptionally. Instead, he was a <b><i>genius</i></b>. His imaginative leaps were instinctive, unexpected, and at times <b><i>magical</i></b>. He was, indeed, an example of what the mathematician Mark Kac called a magician genius, someone whose insights come out of the blue and require intuition more than mere mental processing power. Like a pathfinder, he could absorb information, sniff the winds, and sense what lay ahead.</p>');
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3 className='text-center'>Trumbowyg Editor</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div id='trumbowyg-demo'></div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var MorrisJSPage = React.createClass({
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

module.exports = MorrisJSPage;
