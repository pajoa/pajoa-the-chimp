var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var package_snippet = JSON.stringify(require('../../../../../../package.json'), null, 2);

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Introduction</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>Rubix only utilizes Node.JS for dependency resolution (CommonJS) and compiling/uglifying assets. You can always plug in any backend in the language of your choice (which includes PHP/ASP.NET etc).</p>
                          <p>Remember that support is always available at : <a target='_blank' href='mailto:support@sketchpixy.com'>support@sketchpixy.com</a></p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Installation - Node.JS + NPM</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>{"To get started, head over to the Node.JS official website and download the installer for the platform of your choice: "}</p>
                          <h3 className='text-center'>
                            <a target='_blank' href='http://nodejs.org/download/'>
                              <Icon glyph='icon-dripicons-download' />{' '}
                              <span>Download</span>
                            </a>
                          </h3>
                          <p>
                            <span>{"NPM is needed for installing the dependencies defined in package.json (found in the root of Rubix folder). It should be bundled by default in the Node.JS installation for Windows (if you downloaded and installed the MSI) / MacOSX (if you downloaded and installed the PKG file) / if you built from source."}</span>
                          </p>
                          <p>
                            {"If it isn't available in your environment for some reason you can try one of the fancy installs suggested in the NPM documentation located here: "}
                            <a target='_blank' href='https://github.com/npm/npm#fancy-install-unix'>{"https://github.com/npm/npm#fancy-install-unix"}</a>
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>package.json</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"Change directory to root of Rubix and run the following command (this launches the 'app' starter project) depending on your OS environment:"}
                          </p>
                          <p>
                            <span><strong>Windows:</strong></span>
                            <pre>
                              <code className='language-bash'>
                                {"> cd path\\to\\rubix\n> npm install .\n> npm install -g gulp\n> gulp"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span>To launch the <strong>demo</strong> run this command instead:</span>
                            <pre>
                              <code className='language-bash'>
                                {"> gulp --rtl --name demo"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span><strong>MacOSX/Linux:</strong></span>
                            <pre>
                              <code className='language-bash'>
                                {"$ cd path/to/rubix\n$ npm install .\n$ npm install -g gulp\n$ gulp"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span>To launch the <strong>demo</strong> run this command instead:</span>
                            <pre>
                              <code className='language-bash'>
                                {"$ gulp --rtl --name demo"}
                              </code>
                            </pre>
                          </p>
                          <div className='text-center'>
                            <p>
                              <Img src='/imgs/shots/gulp-terminal.png' width='100%' height='100%' />
                            </p>
                            <div><strong>Screenshot of gulp output</strong></div>
                          </div>
                          <hr/>
                          <p>
                            <h4 className='text-center'><strong>We are done!</strong> A new browser window should be launched pointing to <a target='_blank' href='http://localhost:8080'>{'http://localhost:8080'}</a>.</h4>
                          </p>
                          <hr/>
                          <p>{"Here is a list of all the modules that ship with Rubix (which you can inspect by looking at the package.json file):"}</p>
                          <pre>
                            <code className='language-javascript'>
                              {package_snippet}
                            </code>
                          </pre>
                          <hr/>
                          <p>
                            <span>{"Here is a rundown of each module's functionality:"}</span>
                          </p>
                          <div>
                            <Table striped bordered style={{tableLayout: 'fixed'}}>
                              <thead>
                                <tr>
                                  <th className='text-center'>Plugin(s)</th>
                                  <th className='text-center'>Functionality</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><strong><a target='_blank' href='https://www.npmjs.org/package/gulp'>gulp</a>, <a target='_blank' href='https://www.npmjs.org/package/gulp-util'>gulp-util</a>, <a target='_blank' href='https://www.npmjs.org/package/run-sequence'>run-sequence</a>, <a target='_blank' href='https://www.npmjs.org/package/yargs'>yargs</a></strong></td>
                                  <td>
                                    <p>The streaming build system.</p>
                                    <div>
                                      <div><strong><em>Why Gulp and not Grunt?</em></strong></div>
                                      <p>{"We evaluated both Grunt and Gulp and decided to go with Gulp for it's use of streams. Grunt is more declarative while Gulp is imperative. This means that the build file (called the gulpfile) follows a code-over-configuration approach. Because of its minimal API surface it doesn't have the steep learning curve that Grunt does."}</p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-util</em></strong></div>
                                      <p>{"Helpers for gulp. Used for formatting dates (copyright banners) and logging to the terminal."}</p>
                                    </div>
                                    <div>
                                      <div><strong><em>run-sequence</em></strong></div>
                                      <p>{"A module to help run tasks in series in gulp. This is a temporary solution which will be removed once gulp 3.0 is released."}</p>
                                    </div>
                                    <div>
                                      <div><strong><em>yargs</em></strong></div>
                                      <p>{"Light-weight option parsing with an argv hash. No optstrings attached."}</p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='https://www.npmjs.org/package/webpack'>webpack</a></strong>, <strong><a target='_blank' href='https://www.npmjs.org/package/webpack-dev-server'>webpack-dev-server</a></strong>, <strong><a target='_blank' href='https://www.npmjs.org/package/gulp-webpack'>gulp-webpack</a></strong>, <strong><a target='_blank' href='https://www.npmjs.org/package/enhanced-require'>enhanced-require</a></strong>, <strong><a target='_blank' href='https://www.npmjs.org/package/json-loader'>json-loader</a></strong></td>
                                  <td>
                                    <div>
                                      <div><strong><em>Webpack:</em></strong></div>
                                      <p>A bundler for CommonJS/AMD modules but can be used to bundle anything. Its fast because of its support for incremental building and smart caching.</p>
                                    </div>
                                    <div>
                                      <div><strong><em>enhanced-require:</em></strong></div>
                                      <p>Enhanced NodeJS Require with Webpack loader support for server side rendering.</p>
                                    </div>
                                    <div>
                                      <div><strong><em>json-loader:</em></strong></div>
                                      <p>JSON loader for webpack.</p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://facebook.github.io/react/'>React</a>, <a target='_blank' href='http://www.npmjs.org/package/react-hot-loader'>react-hot-loader</a>, <a target='_blank' href='http://www.npmjs.org/package/react-router'>react-router</a>, <a target='_blank' href='http://fluxxor.com/'>Fluxxor</a>, <a target='_blank' href='https://www.npmjs.org/package/jsx-loader'>jsx-loader</a></strong></td>
                                  <td>
                                    <div>
                                      <div><strong><em>React:</em></strong></div>
                                      <p>
                                        A Javascript library for building User interfaces open-sourced by Facebook. It uses a virtual DOM diff implementation for ultra-high performance. It also implements a one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>React Hot Loader:</em></strong></div>
                                      <p>
                                        Live edit React components without unmounting or losing their state (a Webpack loader)
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>React Router:</em></strong></div>
                                      <p>
                                        A complete routing solution for React.js
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>Flux and Fluxxor:</em></strong></div>
                                      <p>
                                        {"Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow."}
                                      </p>
                                      <p>
                                        {"Fluxxor is a set of tools to facilitate building Javascript data layers using the Flux architecture by reifying many of the core Flux concepts."}
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>jsx-loader:</em></strong></div>
                                      <p>
                                        {"This is a loader for webpack which loads, compiles and concatenates JSX modules."}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://sass-lang.com/'>Sass</a>, <a target='_blank' href='https://www.npmjs.org/package/gulp-sass'>gulp-sass</a>, <a target='_blank' href='https://www.npmjs.org/package/gulp-minify-css'>gulp-minify-css</a>, <a target='_blank' href='https://www.npmjs.org/package/css-flip'>css-flip</a>, <a target='_blank' href='https://www.npmjs.org/package/gulp-autoprefixer'>gulp-autoprefixer</a>, <a target='_blank' href='https://www.npmjs.org/package/gulp-bless'>gulp-bless</a></strong></td>
                                  <td>
                                    <div>
                                      <div><strong><em>Sass:</em></strong></div>
                                      <p>
                                        Sass (Syntactically Awesome StyleSheets) is the most mature, stable, and poweful professional grade CSS extension language in the world.
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-sass:</em></strong></div>
                                      <p>
                                        We chose gulp-sass because it used node-sass which provides a binding to libsass (C/C++ implementation of Sass compiler) under the hood. This version is ultra-fast in comparison to the original Ruby implementation and reduces dev time by a big margin.
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-minify-css:</em></strong></div>
                                      <p>
                                        A gulp plugin to minify CSS files.
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>css-flip:</em></strong></div>
                                      <p>
                                        A module maintained by Twitter to flip CSS stylesheets from LTR to RTL and vice-versa.
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-autoprefixer:</em></strong></div>
                                      <p>
                                        {"Don't use mixins for generating vendor prefixes for shadows/gradients etc. Write standard code and use gulp-autoprefixer instead to add vendor prefixes."}
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-bless:</em></strong></div>
                                      <p>
                                        {"We use gulp-bless to split up the resulting CSS output from SASS to ensure that the maximum selectors limit bug in IE9 is not hit. See this link: "}<a href='http://blesscss.com/' target='_blank'>blesscss</a>{" for more information on the bug."}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://www.npmjs.org/package/gulp-ttf2woff'>gulp-ttf2woff</a>, <a target='_blank' href='http://www.npmjs.org/package/gulp-cssfont64'>gulp-cssfont64</a></strong></td>
                                  <td>
                                    <div>
                                      <div><strong><em>Why gulp-ttf2woff and gulp-cssfont64?</em></strong></div>
                                      <p>
                                        Instead of serving users with TTF, SVG, EOT and WOFF files with IE specific hacks we decided to use embedded Base64 fonts. This has multiple advantages:
                                        <ul>
                                          <li>Single HTTP request (as all fonts are embedded in a single CSS file)</li>
                                          <li>Better maintainability (only drop the TTF into designated folder rather than maintain 4 different formats with IE specific hacks)</li>
                                          <li>No font flashing</li>
                                          <li>Cross-Browser support</li>
                                        </ul>
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-ttf2woff:</em></strong></div>
                                      <p>
                                        Converts TTF font files to WOFF type.
                                      </p>
                                    </div>
                                    <div>
                                      <div><strong><em>gulp-cssfont64:</em></strong></div>
                                      <p>
                                        Embeds WOFF fonts into CSS files by converting them to Base64 format.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://www.npmjs.org/package/gulp-uglifyjs'>gulp-uglifyjs</a></strong></td>
                                  <td>
                                    <div>
                                      <p>
                                        Uglify static assets.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://www.npmjs.org/package/del'>del</a>, <a target='_blank' href='http://www.npmjs.org/package/gulp-concat'>gulp-concat</a>, <a target='_blank' href='http://www.npmjs.org/package/gulp-insert'>gulp-insert</a>, <a target='_blank' href='http://www.npmjs.org/package/gulp-rename'>gulp-rename</a>, <a target='_blank' href='http://www.npmjs.org/package/gulp-replace'>gulp-replace</a>, <a target='_blank' href='http://www.npmjs.org/package/map-stream'>map-stream</a>, <a target='_blank' href='http://www.npmjs.org/package/through'>through</a>, <a target='_blank' href='http://www.npmjs.org/package/transform-loader'>transform-loader</a>, <a target='_blank' href='http://www.npmjs.org/package/raw-loader'>raw-loader</a>, <a target='_blank' href='http://www.npmjs.org/package/vinyl-transform'>vinyl-transform</a></strong></td>
                                  <td>
                                    <div>
                                      <p>
                                        File manipulation utilities and webpack loaders for performing all the grunt work.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://www.npmjs.org/package/express'>express</a>, <a target='_blank' href='http://www.npmjs.org/package/compression'>compression</a>, <a target='_blank' href='http://www.npmjs.org/package/cookie-parser'>cookie-parser</a>, <a target='_blank' href='http://www.npmjs.org/package/cookie-parser'>express-beautify</a></strong></td>
                                  <td>
                                    <div>
                                      <p>
                                        Express is a web server for Node.JS. Use it for dev environment to test the frontend. Compression library provides for Gzip based compression, cookie-parser for parsing cookies and express-beautify for prettifying server rendered HTML.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong><a target='_blank' href='http://www.npmjs.org/package/eventemitter2'>eventemitter2</a></strong></td>
                                  <td>
                                    <div>
                                      <p>
                                        A nodejs event emitter implementation with namespaces, wildcards, TTL, works in the browser.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
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
var Installation = React.createClass({
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

module.exports = Installation;
