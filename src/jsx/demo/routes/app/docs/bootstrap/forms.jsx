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
          <DocUnit name='Bootstrap: Forms'>
            <h4 className='fg-black50'>Basic example</h4>
            <Well className='bg-white'>
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
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Form>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label htmlFor='exampleInputEmail1'>Email address</Label>\n"}
                  {"    <Input type='email' id='exampleInputEmail1' placeholder='Enter email' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label htmlFor='exampleInputPassword1'>Password</Label>\n"}
                  {"    <Input type='password' id='exampleInputPassword1' placeholder='Password' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label htmlFor='exampleInputFile'>File input</Label>\n"}
                  {"    <Input type='file' id='exampleInputFile' />\n"}
                  {"    <HelpBlock>Example block-level help text here.</HelpBlock>\n"}
                  {"  </FormGroup>\n"}
                  {"  <Checkbox>Check me out</Checkbox>\n"}
                  {"  <Button type='submit'>Submit</Button>\n"}
                  {"</Form>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Inline form</h4>
            <p>
              {"Add "}<code>inline</code>{" to your <Form> for left-aligned and inline-block controls"}
            </p>
            <Well className='bg-white'>
              <Form inline>
                <FormGroup>
                  <Label className='sr-only' htmlFor='exampleInputEmail2'>Email address</Label>
                  <Input type='email' id='exampleInputEmail2' placeholder='Enter email' />
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type='text' placeholder='Enter username' />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label className='sr-only' htmlFor='exampleInputPassword2'>Password</Label>
                  <Input type='password' id='exampleInputPassword2' placeholder='Password' />
                </FormGroup>
                <Checkbox>Remember me</Checkbox>
                <Button type='submit'>Sign in</Button>
              </Form>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Form inline>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label className='sr-only' htmlFor='exampleInputEmail2'>Email address</Label>\n"}
                  {"    <Input type='email' id='exampleInputEmail2' placeholder='Enter email' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <InputGroup>\n"}
                  {"      <InputGroupAddon>@</InputGroupAddon>\n"}
                  {"      <Input type='text' placeholder='Enter username' />\n"}
                  {"    </InputGroup>\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label className='sr-only' htmlFor='exampleInputPassword2'>Password</Label>\n"}
                  {"    <Input type='password' id='exampleInputPassword2' placeholder='Password' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <Checkbox>Remember me</Checkbox>\n"}
                  {"  <Button type='submit'>Sign in</Button>\n"}
                  {"</Form>"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Horizontal form</h4>
            <p>
              {"Add "}<code>horizontal</code>{" to your <Form> to align labels and groups of form controls in a horizontal layout"}
            </p>
            <Well className='bg-white'>
              <Form horizontal>
                <FormGroup>
                  <Label sm={2} htmlFor='inputEmail3' control>Email</Label>
                  <Col sm={10}>
                    <Input type='email' id='inputEmail3' placeholder='Email' />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label sm={2} htmlFor='inputPassword3' control>Password</Label>
                  <Col sm={10}>
                    <Input type='password' id='inputPassword3' placeholder='Password' />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type='submit'>Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Form horizontal>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label sm={2} htmlFor='inputEmail3' control>Email</Label>\n"}
                  {"    <Col sm={10}>\n"}
                  {"      <Input type='email' id='inputEmail3' placeholder='Email' />\n"}
                  {"    </Col>\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label sm={2} htmlFor='inputPassword3' control>Password</Label>\n"}
                  {"    <Col sm={10}>\n"}
                  {"      <Input type='password' id='inputPassword3' placeholder='Password' />\n"}
                  {"    </Col>\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Col smOffset={2} sm={10}>\n"}
                  {"      <Checkbox>Remember me</Checkbox>\n"}
                  {"    </Col>\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Col smOffset={2} sm={10}>\n"}
                  {"      <Button type='submit'>Sign in</Button>\n"}
                  {"    </Col>\n"}
                  {"  </FormGroup>\n"}
                  {"</Form>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Static control</h4>
            <p>
              {"When you need to place plain text next to a form label within a horizontal form, use the "}<code>Static</code>{" component."}
            </p>
            <Well className='bg-white'>
              <Form horizontal>
                <FormGroup>
                  <Label sm={2} control>Email</Label>
                  <Col sm={10}>
                    <Static>email@example.com</Static>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label sm={2} htmlFor='inputPassword4' control>Password</Label>
                  <Col sm={10}>
                    <Input type='password' id='inputPassword4' placeholder='Password' />
                  </Col>
                </FormGroup>
              </Form>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Form horizontal>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label sm={2} control>Email</Label>\n"}
                  {"    <Col sm={10}>\n"}
                  {"      <Static>email@example.com</Static>\n"}
                  {"    </Col>\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label sm={2} htmlFor='inputPassword4' control>Password</Label>\n"}
                  {"    <Col sm={10}>\n"}
                  {"      <Input type='password' id='inputPassword4' placeholder='Password' />\n"}
                  {"    </Col>\n"}
                  {"  </FormGroup>\n"}
                  {"</Form>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Rubix Enhancements'>
            <h4 className='fg-black50'>Auto-complete</h4>
            <p>{"By default, browser's native auto-complete is disabled for email and password fields as more often than not the browser populates these fields when it wasn't required. However, you can selectively enable them back again by passing the option: "}<code>allowAutoComplete</code></p>
            <Well className='bg-white'>
              <Form allowAutoComplete>
                <FormGroup>
                  <Label htmlFor='exampleInputText1'>Username</Label>
                  <Input type='text' id='exampleInputText1' placeholder='Enter username' />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='exampleInputEmail3'>Email address</Label>
                  <Input type='email' id='exampleInputEmail3' placeholder='Enter email' />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='exampleInputPassword3'>Password</Label>
                  <Input type='password' id='exampleInputPassword3' placeholder='Password' />
                </FormGroup>
                <Button type='submit'>Submit</Button>
              </Form>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Form allowAutoComplete>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label htmlFor='exampleInputText1'>Username</Label>\n"}
                  {"    <Input type='text' id='exampleInputText1' placeholder='Enter username' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label htmlFor='exampleInputEmail3'>Email address</Label>\n"}
                  {"    <Input type='email' id='exampleInputEmail3' placeholder='Enter email' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <FormGroup>\n"}
                  {"    <Label htmlFor='exampleInputPassword3'>Password</Label>\n"}
                  {"    <Input type='password' id='exampleInputPassword3' placeholder='Password' />\n"}
                  {"  </FormGroup>\n"}
                  {"  <Button type='submit'>Submit</Button>\n"}
                  {"</Form>\n"}
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
var Forms = React.createClass({
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

module.exports = Forms;
