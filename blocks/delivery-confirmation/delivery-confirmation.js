export default function decorate(block) {
  /* change to ul, li */
  const deliveryConfirmation = document.createElement('div');
  deliveryConfirmation.classList.add('delivery-confirmation');
  deliveryConfirmation.innerHTML = `
    <div class="delivery-recipient">
    <div>John Smith</div>
    <span class="delivery-address">555 Seaside Dr, Seaside, WA, 77777-5555, United States</span>
    </div>
    <a href="#" title="Change" class="delivery-confirmation-button">Change</a>
  `;
  block.textContent = '';
  block.append(deliveryConfirmation);
}
