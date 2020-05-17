import { Form } from './Form';
import { formatPriceToBritishPound } from '../utils';

class EventForm extends Form {
  private price1 = 50;
  private price2 = 40;
  private price3 = 35;

  calculateAttendeesPrice = (e: Event) => {
    const value = Number((<HTMLInputElement>e.target).value);

    const currentPrice =
      value <= 3
        ? this.getPrice(value, this.price1)
        : value > 3 && value <= 6
        ? this.getPrice(value, this.price2)
        : this.getPrice(value, this.price3);

    if (currentPrice > 0) {
      this.printCurrentPrice(currentPrice);
      this.printAttendeesCount(value);
      this.showAttendeesCountContainer();
      this.showSubmitButton();
    }
  };

  getPrice = (count: number, price: number) => count * price;

  printCurrentPrice = (currentPrice: number) => {
    const priceContainer = document.getElementById('price-container');

    if (priceContainer) {
      priceContainer.innerHTML = formatPriceToBritishPound(currentPrice);
    }
  };

  printAttendeesCount = (count: number) => {
    const countContainer = document.getElementById('count');

    if (countContainer) {
      countContainer.innerHTML = count.toString();
    }
  };

  showAttendeesCountContainer = () => {
    const container = document.getElementById('count-container');

    if (container) {
      container.classList.remove('hidden');
    }
  };
}

export { EventForm };
