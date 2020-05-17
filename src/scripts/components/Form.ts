class Form {
  showSubmitButton = () => {
    const button = document.getElementById('submit-button');

    if (button) {
      button.classList.remove('hidden');
    }
  };

  onSubmit() {
    console.log('Form is submitted');
  }
}

export { Form };
