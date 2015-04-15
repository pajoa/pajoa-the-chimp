var CSS = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} md={6} lg={6} xsOnlyGutterBottom smCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:6)</div>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:6)</div>
            </Col>
          </Row>
        </Grid>
        <Grid gutterTop>
          <Row>
            <Col sm={4} md={4} lg={4} xsOnlyGutterBottom smCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:4)</div>
            </Col>
            <Col sm={4} md={4} lg={4} xsOnlyGutterBottom smCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:4)</div>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:4)</div>
            </Col>
          </Row>
        </Grid>
        <Grid gutterTop>
          <Row>
            <Col sm={3} md={3} lg={3} xsOnlyGutterBottom smCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:3)</div>
            </Col>
            <Col sm={3} md={3} lg={3} xsOnlyGutterBottom smCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:3)</div>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:6)</div>
            </Col>
          </Row>
        </Grid>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col md={2} lg={2} xsOnlyGutterBottom smOnlyGutterBottom mdCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:2)</div>
            </Col>
            <Col md={4} lg={4} xsOnlyGutterBottom smOnlyGutterBottom mdCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:4)</div>
            </Col>
            <Col md={6} lg={6}>
              <div style={{padding: 25, background: '#EAEDF1'}}>Col(lg:6)</div>
            </Col>
          </Row>
        </Grid>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={6} sm={3} xsCollapseRight xsOnlyGutterBottom>
              <div style={{padding: 25, background: '#EAEDF1'}}>
                .col-xs-6 .col-sm-3
                Resize your viewport or check it out on your phone for an example.
              </div>
            </Col>
            <Col xs={6} sm={3} smCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>
                .col-xs-6 .col-sm-3
              </div>
            </Col>
            <Col clearfix visible='xs-block, sm-block' hidden='md-block' />
            <Col xs={6} sm={3} xsCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>
                .col-xs-6 .col-sm-3
              </div>
            </Col>
            <Col xs={6} sm={3}>
              <div style={{padding: 25, background: '#EAEDF1'}}>
                .col-xs-6 .col-sm-3
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col md={9} mdPush={3} smOnlyGutterBottom xsOnlyGutterBottom>
              <div style={{padding: 25, background: '#EAEDF1'}}>
                .col-md-9 .col-md-push-3
              </div>
            </Col>
            <Col md={3} mdPull={9} mdCollapseRight>
              <div style={{padding: 25, background: '#EAEDF1'}}>
                .col-md-3 .col-md-pull-9
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

                Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </p>
              <Lead>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Lead>
              <div><strong>The above texts show examples of <em>body copy</em> and <em>lead body copy</em></strong></div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                You can use the mark tag to <mark>highlight</mark> text.
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <del>This line of text is meant to be treated as deleted text.</del>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <s>This line of text is meant to be treated as no longer accurate.</s>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <ins>This line of text is meant to be treated as an addition to the document.</ins>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <u>This line of text will render as underlined</u>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <small>This line of text is meant to be treated as fine print.</small>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <strong>rendered as bold text</strong>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                <em>rendered as italicized text</em>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <p className='text-left'>Left aligned text.</p>
              <p className='text-center'>Center aligned text.</p>
              <p className='text-right'>Right aligned text.</p>
              <p className='text-justify'>Justified text.</p>
              <p className='text-nowrap'>No wrap text.</p>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <p className='text-lowercase'>Lowercased text.</p>
              <p className='text-uppercase'>Uppercased text.</p>
              <p className='text-capitalize'>Capitalized text.</p>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              An abbreviation of the word attribute is <abbr title='attribute'>attr</abbr>.
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <abbr title='HyperText Markup Language' className='initialism'>HTML</abbr> is the best thing since sliced bread.
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <address>
                <strong>Twitter, Inc.</strong><br/>
                795 Folsom Ave, Suite 600<br/>
                San Francisco, CA 94107<br/>
                <abbr title='Phone'>P:</abbr> (123) 456-7890
              </address>

              <address>
                <strong>Full Name</strong><br/>
                <a href='mailto:#'>first.last@example.com</a>
              </address>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <blockquote className='blockquote-reverse'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <ul className='list-unstyled'>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <ul className='list-inline'>
                <li>Lorem ipsum</li>
                <li>Phasellus iaculis</li>
                <li>Nulla volutpat</li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Euismod</dt>
                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                <dt>Malesuada porta</dt>
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
              </dl>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
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
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              For example, <code>&lt;section&gt;</code> should be wrapped as inline.
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <div>
                To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <samp>This text is meant to be treated as sample output from a computer program.</samp>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='2'>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@TwBootstrap</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table condensed>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='active'>
                    <td>1</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='success'>
                    <td>3</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='info'>
                    <td>5</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='warning'>
                    <td>7</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className='danger'>
                    <td>9</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Basic form</h3>
              <Form>
                <FormGroup>
                  <Label htmlFor='exampleInputEmail1'>Email address</Label>
                  <Input type='email' id='exampleInputEmail1' placeholder='Enter email'/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='exampleInputPassword1'>Password</Label>
                  <Input type='password' id='exampleInputPassword1' placeholder='Password'/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='exampleInputFile'>File input</Label>
                  <Input type='file' id='exampleInputFile'/>
                  <HelpBlock>Example block-level help text here.</HelpBlock>
                </FormGroup>
                <Checkbox browser>Check me out</Checkbox>
                <Button type='submit'>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Inline form</h3>
              <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className='sr-only' htmlFor='exampleInputEmail2'>
                    Email address
                  </Label>
                  <Input type='email' id='exampleInputEmail2' placeholder='Enter email'/>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type='email' placeholder='Enter email'/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label className='sr-only' htmlFor='exampleInputPassword2'>
                    Password
                  </Label>
                  <Input type='password' id='exampleInputPassword2' placeholder='Password'/>
                </FormGroup>
                <Checkbox browser>Remember me</Checkbox>
                <Button type='submit'>Sign in</Button>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Horizontal form</h3>
              <Form horizontal>
                <FormGroup>
                  <Label htmlFor='inputEmail3' sm={2} control>Email</Label>
                  <Col sm={10}>
                    <Input type='email' id='inputEmail3' placeholder='Email'/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='inputPassword3' sm={2} control>Password</Label>
                  <Col sm={10}>
                    <Input type='password' id='inputPassword3' placeholder='Password'/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='inputWeek3' sm={2} control>Week</Label>
                  <Col sm={10}>
                    <Input type='week' id='inputWeek3'/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={10} smOffset={2}>
                    <Checkbox browser>Remember me</Checkbox>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={10} smOffset={2}>
                    <Button type='submit'>Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <Textarea rows='3' placeholder='Hello, World' />
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Checkboxes and radios</h3>
              <Checkbox browser value='option1'>
                Option one is this and that&mdash;be sure to include why its great
              </Checkbox>
              <Checkbox browser value='option2' defaultChecked>
                Option two is checked
              </Checkbox>
              <Checkbox browser value='option3' disabled>
                Option three is disabled
              </Checkbox>
              <hr/>
              <Radio browser value='option1' name='inlineoptions' defaultChecked>
                Option one is this and that&mdash;be sure to include why its great
              </Radio>
              <Radio browser value='option2' name='inlineoptions'>
                Option two can be something else and selecting it will deselect option one
              </Radio>
              <Radio browser value='option3' name='inlineoptions' disabled>
                Option three is disabled
              </Radio>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Inline checkboxes and radios</h3>
              <Checkbox browser inline value='option1'>
                1
              </Checkbox>
              <Checkbox browser inline value='option2' defaultChecked>
                2
              </Checkbox>
              <Checkbox browser inline value='option3' disabled>
                3
              </Checkbox>
              <hr/>
              <Radio browser inline value='option1' name='options' defaultChecked>
                1
              </Radio>
              <Radio browser inline value='option2' name='options'>
                2
              </Radio>
              <Radio browser inline value='option3' name='options' disabled>
                3
              </Radio>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Selects</h3>
              <Select defaultValue='3'>
                <option ref='option1' value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </Select>
              <hr/>
              <Select defaultValue={[1,3,5]} multiple>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </Select>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Static control</h3>
              <Form horizontal>
                <FormGroup>
                  <Label control sm={2}>Email</Label>
                  <Col sm={10}>
                    <Static>email@example.com</Static>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='inputPassword' sm={2} control>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input type='password' id='inputPassword' placeholder='Password'/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Disabled inputs</h3>
              <Form>
                <FormGroup>
                  <Input type='text' id='disabledInput' placeholder='Disabled input here...' disabled/>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Disabled fieldsets</h3>
              <Form>
                <fieldset disabled>
                  <FormGroup>
                    <Label htmlFor='disabledTextInput'>Disabled input</Label>
                    <Input type='text' id='disabledTextInput' placeholder='Disabled input'/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='disabledSelect'>Disabled select menu</Label>
                    <Select id='disabledSelect'>
                      <option>Disabled select</option>
                    </Select>
                    <Checkbox browser>Cant check this</Checkbox>
                    <Button type='submit' bsStyle='primary'>Submit</Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Readonly inputs</h3>
              <Form>
                <FormGroup>
                  <Input type='text' id='readonlyInput' placeholder='Readonly input here...' readOnly/>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Validation states</h3>
              <Form>
                <FormGroup success>
                  <Label htmlFor='inputSuccess1' control>Input with success</Label>
                  <Input type='text' id='inputSuccess1'/>
                </FormGroup>
                <FormGroup warning>
                  <Label htmlFor='inputWarning1' control>Input with warning</Label>
                  <Input type='text' id='inputWarning1'/>
                </FormGroup>
                <FormGroup error>
                  <Label htmlFor='inputError1' control>Input with error</Label>
                  <Input type='text' id='inputError1'/>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>With optional icons</h3>
              <Form>
                <FormGroup success feedback>
                  <Label htmlFor='inputSuccess2' control>Input with success</Label>
                  <Input type='text' id='inputSuccess2'/>
                  <Icon bundle='fontello' glyph='ok' feedback/>
                </FormGroup>
                <FormGroup warning feedback>
                  <Label htmlFor='inputWarning2' control>Input with warning</Label>
                  <Input type='text' id='inputWarning2'/>
                  <Icon bundle='fontello' glyph='warning' feedback/>
                </FormGroup>
                <FormGroup error feedback>
                  <Label htmlFor='inputError2' control>Input with error</Label>
                  <Input type='text' id='inputError2'/>
                  <Icon bundle='fontello' glyph='alert' feedback/>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Optional icons in horizontal and inline forms</h3>
              <Form horizontal>
                <FormGroup success feedback>
                  <Label htmlFor='inputSuccess3' control sm={3}>Input with success</Label>
                  <Col sm={9}>
                    <Input type='text' id='inputSuccess3'/>
                    <Icon bundle='fontello' glyph='ok' feedback/>
                  </Col>
                </FormGroup>
              </Form>
              <Form inline>
                <FormGroup success feedback>
                  <Label htmlFor='inputSuccess4' control>Input with success</Label>{' '}
                  <Input type='text' id='inputSuccess4'/>
                  <Icon bundle='fontello' glyph='ok' feedback/>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Optional icons with hidden <code>.sr-only</code> labels</h3>
              <Form>
                <FormGroup success feedback>
                  <Label htmlFor='inputSuccess5' className='sr-only' control>Input with success</Label>{' '}
                  <Input type='text' id='inputSuccess5'/>
                  <Icon bundle='fontello' glyph='ok' feedback/>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid gutterTop gutterBottom>
          <Row>
            <Col xs={12}>
              <h3>Control sizing: height sizing</h3>
              <Form>
                <FormGroup>
                  <Input lg type='text' placeholder='.input-lg' />
                </FormGroup>
                <FormGroup>
                  <Input type='text' placeholder='Default input' />
                </FormGroup>
                <FormGroup>
                  <Input sm type='text' placeholder='.input-sm' />
                </FormGroup>
                <FormGroup>
                  <Select lg>
                    <option>.input-lg</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Select>
                    <option>Default select</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Select sm>
                    <option>.input-sm</option>
                  </Select>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Horizontal form group sizes</h3>
              <Form horizontal>
                <FormGroup lg>
                  <Label sm={2} htmlFor='formGroupInputLarge' control>Large label</Label>
                  <Col sm={10}>
                    <Input type='text' id='formGroupInputLarge' placeholder='Large input'/>
                  </Col>
                </FormGroup>
                <FormGroup sm>
                  <Label sm={2} htmlFor='formGroupInputSmall' control>Small label</Label>
                  <Col sm={10}>
                    <Input type='text' id='formGroupInputSmall' placeholder='Small input'/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Column sizing</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <Input type='text' placeholder='.col-xs-2'/>
            </Col>
            <Col xs={3}>
              <Input type='text' placeholder='.col-xs-3'/>
            </Col>
            <Col xs={4}>
              <Input type='text' placeholder='.col-xs-4'/>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Help text</h3>
              <Form>
                <FormGroup>
                  <Input type='text' />
                  <HelpBlock>A block of help text that breaks onto a new line and may extend beyond one line.</HelpBlock>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Buttons: Options</h3>
              <div>
                <Button bsStyle='default'>Default</Button>{' '}
                <Button bsStyle='primary'>Primary</Button>{' '}
                <Button bsStyle='success'>Success</Button>{' '}
                <Button bsStyle='info'>Info</Button>{' '}
                <Button bsStyle='warning'>Warning</Button>{' '}
                <Button bsStyle='danger'>Danger</Button>{' '}
                <Button bsStyle='link'>Link</Button>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Buttons: Sizes</h3>
              <p>
                <Button lg bsStyle='primary'>Large button</Button>{' '}
                <Button lg bsStyle='default'>Large button</Button>
              </p>
              <p>
                <Button bsStyle='primary'>Default button</Button>{' '}
                <Button bsStyle='default'>Default button</Button>
              </p>
              <p>
                <Button sm bsStyle='primary'>Small button</Button>{' '}
                <Button sm bsStyle='default'>Small button</Button>
              </p>
              <p>
                <Button xs bsStyle='primary'>Extra small button</Button>{' '}
                <Button xs bsStyle='default'>Extra small button</Button>
              </p>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Buttons: Block level</h3>
              <div className='well'>
                <Button lg block bsStyle='primary'>Block level button</Button>
                <Button lg block bsStyle='default'>Block level button</Button>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Buttons: Active state</h3>
              <div className='well'>
                <Button lg active bsStyle='primary'>Primary button</Button>{' '}
                <Button lg active bsStyle='default'>Button</Button>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Buttons: Disabled state</h3>
              <div className='well'>
                <Button lg disabled bsStyle='primary'>Primary button</Button>{' '}
                <Button lg disabled bsStyle='default'>Button</Button>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3 id='content'>Image shapes</h3>
              <div>
                <Img src='' alt='' rounded width='140' height='140'/>{' '}
                <Img src='' alt='' circle width='140' height='140'/> {' '}
                <Img src='' alt='' thumbnail width='140' height='140'/>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Close icon</h3>
              <p><Button close className='pull-left' /></p>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Caret</h3>
              <p><Caret /></p>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Quick floats</h3>
              <p><div className='pull-left'>Pull left</div></p>
              <p><div className='pull-right'>Pull right</div></p>
            </Col>
          </Row>
        </Grid>
        <hr/>
      </Container>
    );
  }
});

module.exports = CSS;
