document.querySelector('.submit').addEventListener('click', function(event) {
    event.preventDefault(); // stop the form from submitting
  
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
  
    if (!name || !room) {
      alert("Please fill in your name and room.");
      return;
    }
  
    let summaryList = document.getElementById('modal-summary-list');
    summaryList.innerHTML = '';
  
    let total = 0;
  
    // Flavor
    const flavorRadio = document.querySelector('input[name="flavor"]:checked');
    const flavor = JSON.parse(flavorRadio.value);
    total += flavor.price;
    summaryList.innerHTML += `<li>Main: ${flavor.name} (RM${flavor.price.toFixed(2)})</li>`;
  
    // Mixed flavor
    const mixRadio = document.querySelector('input[name="mixedflavor"]:checked');
    const mix = JSON.parse(mixRadio.value);
    if (mix.name !== 'None') {
      total += mix.price;
      summaryList.innerHTML += `<li>Mixed with: ${mix.name} (RM${mix.price.toFixed(2)})</li>`;
    }
  
    // Toppings
    const toppings = document.querySelectorAll('input[name="feature"]:checked');
    toppings.forEach(t => {
      const item = JSON.parse(t.value);
      total += item.price;
      summaryList.innerHTML += `<li>Extra: ${item.name} (RM${item.price.toFixed(2)})</li>`;
    });
  
    document.getElementById('modal-total-price').innerText = total.toFixed(2);
  
    document.getElementById('modal-summary').style.display = 'flex';
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('modal-summary').style.display = 'none';
  });
  
  document.getElementById('confirm-submit').addEventListener('click', () => {
    document.querySelector('form').submit();
  });
  
