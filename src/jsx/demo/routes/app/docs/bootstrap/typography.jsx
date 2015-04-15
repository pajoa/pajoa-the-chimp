var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Headings'>
            <p>
              {"All HTML headings, "}<code>{"<h1>"}</code>{" through "}<code>{"<h6>"}</code>{", are available. "}<code>{".h1"}</code>{" through "}<code>{".h6"}</code>{" classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline."}
            </p>
            <Well>
              <h1>h1. Bootstrap heading <small>Secondary text</small></h1><hr/>
              <h2>h2. Bootstrap heading <small>Secondary text</small></h2><hr/>
              <h3>h3. Bootstrap heading <small>Secondary text</small></h3><hr/>
              <h4>h4. Bootstrap heading <small>Secondary text</small></h4><hr/>
              <h5>h5. Bootstrap heading <small>Secondary text</small></h5><hr/>
              <h6>h6. Bootstrap heading <small>Secondary text</small></h6>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<h1>h1. Bootstrap heading <small>Secondary text</small></h1>\n"}
                  {"<h2>h2. Bootstrap heading <small>Secondary text</small></h2>\n"}
                  {"<h3>h3. Bootstrap heading <small>Secondary text</small></h3>\n"}
                  {"<h4>h4. Bootstrap heading <small>Secondary text</small></h4>\n"}
                  {"<h5>h5. Bootstrap heading <small>Secondary text</small></h5>\n"}
                  {"<h6>h6. Bootstrap heading <small>Secondary text</small></h6>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Body Copy'>
            <p>
              {"A sample of default body copy. Note the handy lorem ipsum generator :)"}
            </p>
            <Well>
              <p>
                <LoremIpsum query='2s' />
              </p>
              <p>
                <LoremIpsum query='3s' />
              </p>
              <p>
                <LoremIpsum query='2s' />
              </p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p>\n"}
                  {"  <LoremIpsum query='2s' />\n"}
                  {"</p>\n"}
                  {"<p>\n"}
                  {"  <LoremIpsum query='3s' />\n"}
                  {"</p>\n"}
                  {"<p>\n"}
                  {"  <LoremIpsum query='2s' />\n"}
                  {"</p>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Lead Body Copy'>
            <p>
              {"Make a paragraph stand out by using the Lead component."}
            </p>
            <Well>
              <Lead>
                <LoremIpsum query='2s' />
              </Lead>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Lead>\n"}
                  {"  <LoremIpsum query='2s' />\n"}
                  {"</Lead>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Inline text elements'>
            <h4 className='fg-black50'>Marked text</h4>
            <p>
              {"For highlighting a run of text due to its relevance in another context, use the "}<code>{"<mark>"}</code>{" tag."}
            </p>
            <Well>
              You can use the mark tag to <mark>highlight</mark> text.
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"You can use the mark tag to <mark>highlight</mark> text.\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Deleted text</h4>
            <p>
              {"For indicating blocks of text that have been deleted use the "}<code>{"<del>"}</code>{" tag."}
            </p>
            <Well>
              <del>This line of text is meant to be treated as deleted text.</del>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<del>This line of text is meant to be treated as deleted text.</del>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Strikethrough text</h4>
            <p>
              {"For indicating blocks of text that are no longer relevant use the "}<code>{"<s>"}</code>{" tag."}
            </p>
            <Well>
              <s>This line of text is meant to be treated as no longer accurate.</s>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<s>This line of text is meant to be treated as no longer accurate.</s>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Inserted text</h4>
            <p>
              {"For indicating additions to the document use the "}<code>{"<ins>"}</code>{" tag."}
            </p>
            <Well>
              <ins>This line of text is meant to be treated as an addition to the document.</ins>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ins>This line of text is meant to be treated as an addition to the document.</ins>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Underlined text</h4>
            <p>
              {"To underline text use the "}<code>{"<u>"}</code>{" tag."}
            </p>
            <Well>
              <u>This line of text will render as underlined</u>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<u>This line of text will render as underlined</u>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Small text</h4>
            <p>
              {"For de-emphasizing inline or blocks of text, use the "}<code>{"<small>"}</code>{" tag to set text at 85% the size of the parent. Heading elements receive their own font-size for nested "}<code>{"<small>"}</code>{" elements."}
            </p>
            <p>
              {"You may alternatively use an inline element with "}<code>.small</code>{" in place of any "}<code>{"<small>"}</code>.
            </p>
            <Well>
              <small>This line of text is meant to be treated as fine print.</small>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<small>This line of text is meant to be treated as fine print.</small>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Bold text</h4>
            <p>
              {"For emphasizing a snippet of text with a heavier font-weight."}
            </p>
            <Well>
              The following snippet of text is <strong>rendered as bold text</strong>.
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"The following snippet of text is <strong>rendered as bold text</strong>.\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Italics</h4>
            <p>
              {"For emphasizing a snippet of text with italics."}
            </p>
            <Well>
              The following snippet of text is <em>rendered as italicized text</em>.
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"The following snippet of text is <em>rendered as italicized text</em>.\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Alignment classes'>
            <p>
              {"Easily realign text to components with text alignment classes. NOTE: React uses className instead of class."}
            </p>
            <Well>
              <p className='text-left'>Left aligned text.</p>
              <p className='text-center'>Center aligned text.</p>
              <p className='text-right'>Right aligned text.</p>
              <p className='text-justify'>Justified text.</p>
              <p className='text-nowrap'>No wrap text.</p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p className='text-left'>Left aligned text.</p>\n"}
                  {"<p className='text-center'>Center aligned text.</p>\n"}
                  {"<p className='text-right'>Right aligned text.</p>\n"}
                  {"<p className='text-justify'>Justified text.</p>\n"}
                  {"<p className='text-nowrap'>No wrap text.</p>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Transformation classes'>
            <p>
              {"Transform text in components with text capitalization classes. NOTE: React uses className instead of class."}
            </p>
            <Well>
              <p className='text-lowercase'>Lowercased text.</p>
              <p className='text-uppercase'>Uppercased text.</p>
              <p className='text-capitalize'>capitalized text.</p>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<p className='text-lowercase'>Lowercased text.</p>\n"}
                  {"<p className='text-uppercase'>Uppercased text.</p>\n"}
                  {"<p className='text-capitalize'>capitalized text.</p>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Abbreviations'>
            <p>
              {"Stylized implementation of HTML's "}<code>{"<abbr>"}</code>{" element for abbreviations and acronyms to show the expanded version on hover."}
            </p>
            <Well>
              An abbreviation of the word attribute is <abbr title='attribute'>attr</abbr>.
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<abbr title='attribute'>attr</abbr>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Initialism</h4>
            <p>
              {"Add "}<code>{".initialism"}</code>{" to an abbreviation for a slightly smaller font-size."}
            </p>
            <Well>
              <abbr title='HyperText Markup Language' className='initialism'>HTML</abbr> is the best thing since sliced bread.
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<abbr title='HyperText Markup Language' className='initialism'>HTML</abbr>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Addresses'>
            <p>
              {"Present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with "}<code>{"<br/>"}</code>.
            </p>
            <Well>
              <address>
                <strong>Twitter, Inc.</strong><br/>
                795 Folsom Ave, Suite 600<br/>
                San Francisco, CA 94107<br/>
                <abbr title='Phone'>P:</abbr> (123) 456-7890
              </address>

              <address>
                <strong>Full Name</strong><br/>
                <a href='mailto:support@sketchpixy.com'>support@sketchpixy.com</a>
              </address>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<address>\n"}
                  {"  <strong>Twitter, Inc.</strong><br/>\n"}
                  {"  795 Folsom Ave, Suite 600<br/>\n"}
                  {"  San Francisco, CA 94107<br/>\n"}
                  {"  <abbr title='Phone'>P:</abbr> (123) 456-7890\n"}
                  {"</address>\n"}

                  {"<address>\n"}
                  {"  <strong>Full Name</strong><br/>\n"}
                  {"  <a href='mailto:support@sketchpixy.com'>support@sketchpixy.com</a>\n"}
                  {"</address>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Blockquotes'>
            <h4 className='fg-black50'>Default blockquote</h4>
            <p>
              {"Wrap "}<code>{"<blockquote>"}</code>{" around any HTML as the quote. For straight quotes, we recommend a "}<code>{"<br/>"}</code>.
            </p>
            <Well>
              <blockquote>
                <p><LoremIpsum query='1s' /></p>
              </blockquote>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<blockquote>\n"}
                  {"  <p><LoremIpsum query='1s' /></p> \n"}
                  {"</blockquote>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Naming a source</h4>
            <p>
              {"Add a "}<code>{"<footer>"}</code>{" for identifying the source. Wrap the name of the source work in "}<code>{"<cite>"}</code>.
            </p>
            <Well>
              <blockquote>
                <p><LoremIpsum query='1s' /></p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<blockquote>\n"}
                  {"  <p><LoremIpsum query='1s' /></p> \n"}
                  {"  <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>\n"}
                  {"</blockquote>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Alternate displays</h4>
            <p>
              {"Add "}<code>{".blockquote-reverse"}</code>{" for a blockquote with right-aligned content. NOTE: React uses className instead of the class property."}
            </p>
            <Well>
              <blockquote className='blockquote-reverse'>
                <p><LoremIpsum query='1s' /></p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<blockquote className='blockquote-reverse'>\n"}
                  {"  <p><LoremIpsum query='1s' /></p> \n"}
                  {"  <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>\n"}
                  {"</blockquote>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Lists'>
            <h4 className='fg-black50'>Unordered</h4>
            <p>
              {"A list of items in which the order does not explicitly matter."}
            </p>
            <Well>
              <ul>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li>
                  <LoremIpsum query='1s' />
                  <ul>
                    <li><LoremIpsum query='1s' /></li>
                    <li><LoremIpsum query='1s' /></li>
                    <li><LoremIpsum query='1s' /></li>
                    <li><LoremIpsum query='1s' /></li>
                  </ul>
                </li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
              </ul>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ul>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li>\n"}
                  {"    <LoremIpsum query='1s' />\n"}
                  {"    <ul>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"    </ul>\n"}
                  {"  </li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"</ul>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Ordered</h4>
            <p>
              {"A list of items in which the order does explicitly matter."}
            </p>
            <Well>
              <ol>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
              </ol>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ol>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"</ol>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Unstyled</h4>
            <p>
              {"Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well."}
            </p>
            <Well>
              <ul className='list-unstyled'>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li>
                  <LoremIpsum query='1s' />
                  <ul>
                    <li><LoremIpsum query='1s' /></li>
                    <li><LoremIpsum query='1s' /></li>
                    <li><LoremIpsum query='1s' /></li>
                    <li><LoremIpsum query='1s' /></li>
                  </ul>
                </li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
                <li><LoremIpsum query='1s' /></li>
              </ul>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ul className='list-unstyled'>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li>\n"}
                  {"    <LoremIpsum query='1s' />\n"}
                  {"    <ul>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"      <li><LoremIpsum query='1s' /></li>\n"}
                  {"    </ul>\n"}
                  {"  </li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"  <li><LoremIpsum query='1s' /></li>\n"}
                  {"</ul>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Inline</h4>
            <p>
              {"Place all list items on a single line with display: inline-block; and some light padding."}
            </p>
            <Well>
              <ul className='list-inline'>
                <li><LoremIpsum query='2w' /></li>
                <li><LoremIpsum query='2w' /></li>
                <li><LoremIpsum query='2w' /></li>
              </ul>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ul className='list-inline'>\n"}
                  {"  <li><LoremIpsum query='2w' /></li>\n"}
                  {"  <li><LoremIpsum query='2w' /></li>\n"}
                  {"  <li><LoremIpsum query='2w' /></li>\n"}
                  {"</ul>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Description</h4>
            <p>
              {"A list of terms with their associated descriptions."}
            </p>
            <Well>
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Euismod</dt>
                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                <dt>Malesuada porta</dt>
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
              </dl>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<dl>\n"}
                  {"  <dt>Description lists</dt>\n"}
                  {"  <dd>A description list is perfect for defining terms.</dd>\n"}
                  {"  <dt>Euismod</dt>\n"}
                  {"  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n"}
                  {"  <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n"}
                  {"  <dt>Malesuada porta</dt>\n"}
                  {"  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n"}
                  {"</dl>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Horizontal description</h4>
            <p>
              {"Make terms and descriptions in <dl> line up side-by-side. Starts off stacked like default <dl>s, but when the navbar expands, so do these."}
            </p>
            <Well>
              <dl className='dl-horizontal'>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Euismod</dt>
                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                <dt>Malesuada porta</dt>
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                <dt>Felis euismod semper eget lacinia</dt>
                <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
              </dl>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<dl className='dl-horizontal'>\n"}
                  {"  <dt>Description lists</dt>\n"}
                  {"  <dd>A description list is perfect for defining terms.</dd>\n"}
                  {"  <dt>Euismod</dt>\n"}
                  {"  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n"}
                  {"  <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n"}
                  {"  <dt>Malesuada porta</dt>\n"}
                  {"  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n"}
                  {"  <dt>Felis euismod semper eget lacinia</dt>\n"}
                  {"  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n"}
                  {"</dl>\n"}
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
var Typography = React.createClass({
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

module.exports = Typography;
