var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    $('.tablesaw').table();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Tablesaw: Stack Table (Basic)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>The Stack Table stacks the table headers to a two column layout with headers on the left. Resize your viewport to across the 40em (640px) breakpoint to see the change.</p>
                          <Table bordered striped className='tablesaw' data-mode='stack'>
                            <thead>
                              <tr>
                                <th>Skill</th>
                                <th>Last Entry</th>
                                <th>Alphabet</th>
                                <th>More Alphabet</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Bartender</td>
                                <td>May 2, 1:34p John K.</td>
                                <td>A, B, C, D</td>
                                <td>E, F, G, H</td>
                              </tr>
                              <tr>
                                <td>Host</td>
                                <td>May 11, 12:45a</td>
                                <td>A, B, C, D</td>
                                <td>E, F, G, H</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange75 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Tablesaw: Swipe Table (Basic)</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>Resize to see it in action</p>
                          <Table bordered striped className='tablesaw' data-mode='swipe'>
                            <thead>
                              <tr>
                                <th data-priority='persist'>Name</th>
                                <th>Rank</th>
                                <th>Money</th>
                                <th>Money</th>
                                <th>A (1&ndash;5)</th>
                                <th>B (1&ndash;5)</th>
                                <th>C (%)</th>
                                <th>D (1&ndash;5)</th>
                                <th>E (1&ndash;5)</th>
                                <th>F (1&ndash;5)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th className='ranked-name'><a href='#'>Amanda</a></th>
                                <td className='current-ranking'>1</td>
                                <td>19.45</td>
                                <td>18.72</td>
                                <td>5</td>
                                <td>5</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'><a href='#'>Dave</a></th>
                                <td>2</td>
                                <td>36.32</td>
                                <td>20.52</td>
                                <td>4</td>
                                <td>3</td>
                                <td>87</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'><a href='#'>Kristen</a></th>
                                <td>3</td>
                                <td>35.23</td>
                                <td>21.36</td>
                                <td>2</td>
                                <td>5</td>
                                <td>89</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'><a href='#'>Kenny</a></th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Tablesaw: Column Toggle</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>The Column Toggle Table allows the user to select the columns they want to be visible.</p>
                          <Table bordered striped className='tablesaw' data-mode='columntoggle' data-minimap>
                            <thead>
                              <tr>
                                <th data-priority='persist'>Name</th>
                                <th data-priority='1'>Rank</th>
                                <th data-priority='2'>Money</th>
                                <th data-priority='3'>Money</th>
                                <th data-priority='4'>A (1&ndash;5)</th>
                                <th data-priority='5'>B (1&ndash;5)</th>
                                <th data-priority='6'>C (%)</th>
                                <th data-priority='1'>D (1&ndash;5)</th>
                                <th data-priority='2'>E (1&ndash;5)</th>
                                <th data-priority='3'>F (1&ndash;5)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Amanda </a>
                                </th>
                                <td className='current-ranking'>1</td>
                                <td>19.45</td>
                                <td>18.72</td>
                                <td>5</td>
                                <td>5</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Dave </a>
                                </th>
                                <td>2</td>
                                <td>36.32</td>
                                <td>20.52</td>
                                <td>4</td>
                                <td>3</td>
                                <td>87</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kristen </a>
                                </th>
                                <td>3</td>
                                <td>35.23</td>
                                <td>21.36</td>
                                <td>2</td>
                                <td>5</td>
                                <td>89</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <th className='ranked-name'>
                                  <a href='#'>Kenny </a>
                                </th>
                                <td>4</td>
                                <td>34.65</td>
                                <td>27.15</td>
                                <td>4</td>
                                <td>4</td>
                                <td>98</td>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-brown50 fg-white'>
                <Panel>
                  <PanelHeader className='bg-brown50 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Tablesaw: Sortable</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            Default appearance (with optional sortable-switch &lt;select&gt;)
                          </p>
                          <Table striped bordered className='tablesaw' data-sortable data-sortable-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-sortable-default-col>Rank</th>
                                <th data-sortable-col>Movie Title</th>
                                <th id='third' data-sortable-col>Year</th>
                                <th data-sortable-col><abbr title='Rotten Tomato Rating'>Rating</abbr></th>
                                <th>Reviews</th>
                                <th data-sortable-col data-sortable-numeric>Box Office</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td><a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>Citizen Kane</a></td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                                <td>$2M</td>
                              </tr>
                              <tr>
                                <th>1</th>
                                <td><a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>citizen kane</a></td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>1.2</th>
                                <td><a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>citizen blane</a></td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                                <td>$12M</td>
                              </tr>
                              <tr>
                                <th>1.3</th>
                                <td><a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>citizen Lane</a></td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                                <td>$4.2M</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td><a href='http://en.wikipedia.org/wiki/Casablanca_(film)' data-rel='external'>Casablanca</a></td>
                                <td>1942</td>
                                <td>97%</td>
                                <td>64</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <td><a href='http://en.wikipedia.org/wiki/The_Godfather' data-rel='external'>The Godfather</a></td>
                                <td>1972</td>
                                <td>97%</td>
                                <td>87</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>4</th>
                                <td><a href='http://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)' data-rel='external'>Gone with the Wind</a></td>
                                <td>1939</td>
                                <td>96%</td>
                                <td>87</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>5</th>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>6</th>
                                <td><a href='http://en.wikipedia.org/wiki/Dr._Strangelove' data-rel='external'>Dr. Strangelove ...</a></td>
                                <td>1964</td>
                                <td>92%</td>
                                <td>74</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>7</th>
                                <td><a href='http://en.wikipedia.org/wiki/The_Graduate' data-rel='external'>The Graduate</a></td>
                                <td>1967</td>
                                <td>91%</td>
                                <td>122</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>8</th>
                                <td><a href='http://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)' data-rel='external'>The Wizard of Oz</a></td>
                                <td>1939</td>
                                <td>90%</td>
                                <td>72</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>9</th>
                                <td><a href='http://en.wikipedia.org/wiki/Singin%27_in_the_Rain' data-rel='external'>Singin in the Rain</a></td>
                                <td>1952</td>
                                <td>89%</td>
                                <td>85</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>10</th><td className='title'><a href='http://en.wikipedia.org/wiki/Inception' data-rel='external'>Inception</a></td>
                                <td>2010</td>
                                <td>84%</td>
                                <td>78</td>
                                <td>$1M</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Tablesaw: Mode Switch</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table striped bordered className='tablesaw' data-mode-switch data-mode='columntoggle'>
                            <thead>
                              <tr>
                                <th data-priority='3'>Rank</th>
                                <th data-priority='persist'>Movie Title</th>
                                <th data-priority='2'>Year</th>
                                <th data-priority='1'>
                                  <abbr title='Rotten Tomato Rating'>Rating</abbr>
                                </th>
                                <th data-priority='4'>Reviews</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>
                                  <a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>Citizen Kane</a>
                                </td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td>
                                  <a href='http://en.wikipedia.org/wiki/Casablanca_(film)' data-rel='external'>Casablanca</a>
                                </td>
                                <td>1942</td>
                                <td>97%</td>
                                <td>64</td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <td>
                                  <a href='http://en.wikipedia.org/wiki/The_Godfather' data-rel='external'>The Godfather</a>
                                </td>
                                <td>1972</td>
                                <td>97%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <th>4</th>
                                <td>
                                  <a href='http://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)' data-rel='external'>Gone with the Wind</a>
                                </td>
                                <td>1939</td>
                                <td>96%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <th>5</th>
                                <td>
                                  <a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a>
                                </td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-purple fg-white'>
                <Panel>
                  <PanelHeader className='bg-purple fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Tablesaw: Kitchen Sink</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>Swipe Mode, ModeSwitch, Sortable, SortableSwitch</p>
                          <Table striped bordered className='tablesaw' data-mode="swipe" data-sortable data-sortable-switch data-mode-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-sortable-default-col data-priority='persist'>Movie Title</th>
                                <th data-sortable-col data-priority='3'>Rank</th>
                                <th data-sortable-col data-priority='2'>Year</th>
                                <th data-sortable-col data-priority='1'><abbr title='Rotten Tomato Rating'>Rating</abbr></th>
                                <th data-sortable-col data-priority='4'>Reviews</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>Citizen Kane</a></td><td className='har'>1</td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Casablanca_(film)' data-rel='external'>Casablanca</a></td>
                                <td>2</td>
                                <td>1942</td>
                                <td>97%</td>
                                <td>64</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/The_Godfather' data-rel='external'>The Godfather</a></td>
                                <td>3</td>
                                <td>1972</td>
                                <td>97%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)' data-rel='external'>Gone with the Wind</a></td>
                                <td>4</td>
                                <td>1939</td>
                                <td>96%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                              <tr>
                                <td><a href='http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)' data-rel='external'>Lawrence of Arabia</a></td>
                                <td>5</td>
                                <td>1962</td>
                                <td>94%</td>
                                <td>87</td>
                              </tr>
                            </tbody>
                          </Table>
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
var Tablesaw = React.createClass({
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

module.exports = Tablesaw;
