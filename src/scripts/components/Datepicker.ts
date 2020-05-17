import Pikaday from 'pikaday';
import moment from 'moment';

class Datepicker {
  private unavailableDates = ['2019-08-07', '2019-08-20', '2019-09-01'];

  init() {
    new Pikaday({
      field: document.getElementById('datepicker'),
      bound: true,
      format: 'D MMM YYYY',
      defaultDate: new Date('8/5/2019'),
      minDate: new Date('8/5/2019'),
      maxDate: new Date('9/13/2019'),
      keyboardInput: true,
      onSelect: (date) => this.handleOnDateSelect(date),
    });
  }

  handleOnDateSelect = (date: Date) => {
    const isDisabled = this.unavailableDates.includes(
      moment(date).format('YYYY-MM-DD')
    );
    const datePickerEl = document.getElementById('datepicker');
    const errorTextEl = document.querySelector('.error-message');

    if (isDisabled) {
      datePickerEl?.classList.add('error');
      errorTextEl?.classList.remove('hidden');
    } else {
      datePickerEl?.classList.remove('error');
      errorTextEl?.classList.add('hidden');
    }
  };
}

export { Datepicker };
