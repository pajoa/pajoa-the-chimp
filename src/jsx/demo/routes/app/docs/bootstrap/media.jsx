var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
    Holder.run();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Media'>
            <h4 className='fg-black50'>Media Object</h4>
            <p>
              {"Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content."}
            </p>
            <Well className='bg-white'>
              <MediaList>
                <Media>
                  <a className='pull-left' href='#'>
                    <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                  </a>
                  <MediaBody>
                    <MediaHeading>Media Heading</MediaHeading>
                    <LoremIpsum query='4s' />
                    <MediaDiv>
                      <a className='pull-left' href='#'>
                        <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                      </a>
                      <MediaBody>
                        <MediaHeading>Nested Media Heading</MediaHeading>
                        <LoremIpsum query='4s' />
                        <MediaDiv>
                          <a className='pull-left' href='#'>
                            <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                          </a>
                          <MediaBody>
                            <MediaHeading>Nested Media Heading</MediaHeading>
                            <LoremIpsum query='4s' />
                          </MediaBody>
                        </MediaDiv>
                      </MediaBody>
                      <MediaDiv>
                        <a className='pull-left' href='#'>
                          <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                        </a>
                        <MediaBody>
                          <MediaHeading>Nested Media Heading</MediaHeading>
                          <LoremIpsum query='4s' />
                        </MediaBody>
                      </MediaDiv>
                    </MediaDiv>
                  </MediaBody>
                </Media>
                <Media>
                  <a className='pull-left' href='#'>
                    <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                  </a>
                  <MediaBody>
                    <MediaHeading>Media Heading</MediaHeading>
                    <LoremIpsum query='4s' />
                  </MediaBody>
                </Media>
              </MediaList>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<MediaList>\n"}
                  {"  <Media>\n"}
                  {"    <a className='pull-left' href='#'>\n"}
                  {"      <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n"}
                  {"    </a>\n"}
                  {"    <MediaBody>\n"}
                  {"      <MediaHeading>Media Heading</MediaHeading>\n"}
                  {"      <LoremIpsum query='4s' />\n"}
                  {"      <MediaDiv>\n"}
                  {"        <a className='pull-left' href='#'>\n"}
                  {"          <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n"}
                  {"        </a>\n"}
                  {"        <MediaBody>\n"}
                  {"          <MediaHeading>Nested Media Heading</MediaHeading>\n"}
                  {"          <LoremIpsum query='4s' />\n"}
                  {"          <MediaDiv>\n"}
                  {"            <a className='pull-left' href='#'>\n"}
                  {"              <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n"}
                  {"            </a>\n"}
                  {"            <MediaBody>\n"}
                  {"              <MediaHeading>Nested Media Heading</MediaHeading>\n"}
                  {"              <LoremIpsum query='4s' />\n"}
                  {"            </MediaBody>\n"}
                  {"          </MediaDiv>\n"}
                  {"        </MediaBody>\n"}
                  {"        <MediaDiv>\n"}
                  {"          <a className='pull-left' href='#'>\n"}
                  {"            <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n"}
                  {"          </a>\n"}
                  {"          <MediaBody>\n"}
                  {"            <MediaHeading>Nested Media Heading</MediaHeading>\n"}
                  {"            <LoremIpsum query='4s' />\n"}
                  {"          </MediaBody>\n"}
                  {"        </MediaDiv>\n"}
                  {"      </MediaDiv>\n"}
                  {"    </MediaBody>\n"}
                  {"  </Media>\n"}
                  {"  <Media>\n"}
                  {"    <a className='pull-left' href='#'>\n"}
                  {"      <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n"}
                  {"    </a>\n"}
                  {"    <MediaBody>\n"}
                  {"      <MediaHeading>Media Heading</MediaHeading>\n"}
                  {"      <LoremIpsum query='4s' />\n"}
                  {"    </MediaBody>\n"}
                  {"  </Media>\n"}
                  {"</MediaList>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var MediaDocs = React.createClass({
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

module.exports = MediaDocs;
