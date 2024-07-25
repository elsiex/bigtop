export default function decorate(block) {
  /* change to ul, li */
  const deliveryConfirmation = document.createElement('div');
  deliveryConfirmation.classList.add('delivery-confirmation');
  deliveryConfirmation.innerHTML = `
    <div class="delivery-recipient">John Smith</div>
    <div class="delivery-address">555 Seaside Dr, Seaside, WA, 77777-5555, United States</div>
    <a href="#" title="Change" class="button">Change</a>
  `;
  block.textContent = '';
  block.append(deliveryConfirmation);
}
