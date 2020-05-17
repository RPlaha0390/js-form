import api from '../../api/api';
import { Notyf } from 'notyf';
import moment from 'moment';
import { Datepicker } from './Datepicker';

class Form {
  public notyf = new Notyf({ position: { x: 'right', y: 'top' } });
  public datepicker = new Datepicker();

  showSubmitButton = () => {
    const button = document.getElementById('submit-button');

    if (button) {
      button.classList.remove('hidden');
    }
  };

  createFormObject = (formEl: HTMLElement | null) =>
    formEl
      ? Object.values(formEl).reduce((obj, field) => {
          obj[field.id] = field.checked || field.value;
          return obj;
        }, {})
      : null;

  validateDateField = (date: Date) =>
    this.datepicker.unavailableDates.includes(
      moment(date).format('YYYY-MM-DD')
    );

  onSubmit(e: Event) {
    e.preventDefault();
    const form = document.getElementById('form');
    const data = this.createFormObject(form);
    const isDateValid = !this.validateDateField(data.datepicker);

    if (!isDateValid) {
      return this.notyf.error({
        message: 'Please select a another date',
        icon: false,
      });
    }

    api.forms
      .postForm({ data })
      .then((res) => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        this.notyf.success({
          message: res.data.message,
          icon: false,
          duration: 3000,
        });

        setTimeout(() => {
          location.reload();
        }, 4000);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export { Form };
