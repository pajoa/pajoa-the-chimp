var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2014-08-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2014-08-01'
        },
        {
          title: 'Long Event',
          start: '2014-08-07',
          end: '2014-08-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2014-08-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2014-08-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2014-08-11',
          end: '2014-08-13'
        },
        {
          title: 'Meeting',
          start: '2014-08-12T10:30:00',
          end: '2014-08-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2014-08-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2014-08-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2014-08-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2014-08-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2014-08-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2014-08-28'
        }
      ]
    });


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      };

      // store the Event Object in the DOM element so we can get to it later
      $(this).data('eventObject', eventObject);

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });

    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#external-calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar !!!
      drop: function(date) { // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);

        // assign it the date that was reported
        copiedEventObject.start = date;

        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#external-calendar').fullCalendar('renderEvent', copiedEventObject, true);

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }

      }
    });
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{marginBottom: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Calendar: Agenda</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 25}}>
                    <div id='calendar'></div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-orange75 fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange75 fg-white' style={{marginBottom: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Calendar: External Events</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 25}}>
                    <div id='wrap'>
                      <div id='external-events'>
                        <h4>Draggable Events</h4>
                        <div className='external-event'>My Event 1</div>
                        <div className='external-event'>My Event 2</div>
                        <div className='external-event'>My Event 3</div>
                        <div className='external-event'>My Event 4</div>
                        <div className='external-event'>My Event 5</div>
                        <Checkbox id='drop-remove'>
                          remove after drop
                        </Checkbox>
                      </div>
                      <div id='external-calendar'></div>
                      <div style={{clear:'both'}}></div>
                    </div>
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
var Calendar = React.createClass({
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

module.exports = Calendar;
