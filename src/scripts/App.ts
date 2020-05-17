import { Datepicker } from './components/Datepicker';
import { EventForm } from './components/EventForm';

const datepicker = new Datepicker();
const eventForm = new EventForm();

datepicker.init();

/** Event handlers */
document
  .getElementById('attendees-number')
  ?.addEventListener('change', (event) =>
    eventForm.calculateAttendeesPrice(event)
  );
