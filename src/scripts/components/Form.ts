import api from '../../api/api';
import { Notyf } from 'notyf';

class Form {
  private notyf = new Notyf({ position: { x: 'right', y: 'top' } });

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

  onSubmit(e: Event) {
    e.preventDefault();
    const form = document.getElementById('form');
    const data = this.createFormObject(form);

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
