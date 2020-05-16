import './styles/app.scss';
import Pikaday from 'pikaday';

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  defaultDate: new Date('8/5/2019'),
  minDate: new Date('8/5/2019'),
  maxDate: new Date('9/13/2019'),
  keyboardInput: true,
});
