document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('userData');

    if (!loggedInUser) {
        window.location.href = 'login.html';
        return;
    }

    // Get product data from localStorage (set this when clicking "Jetzt bestellen")
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    if (productData) {
        console.log(productData);
        document.getElementById('companybanner').src = productData.logo_url;

        document.getElementById('productName').textContent = productData.name;
        document.getElementById('companyName').textContent = productData.company_name;
        document.getElementById('productPrice').textContent = productData.price + '€';
        document.getElementById('pickupLocation').textContent = `Location: ${productData.street}, ${productData.postal_code} ${productData.city}`;
        document.getElementById('productDescription').textContent = productData.description;
        // Format dates for pickup time
        document.getElementById('pickupTime').textContent = `Available: ${new Date(productData.available_from).toLocaleString()} - ${new Date(productData.available_until).toLocaleString()}`;
        
        // Set the maximum quantity based on available quantity
        const quantitySelect = document.getElementById('quantity');
        
        // Dynamically create options for the quantity select
        for (let i = 1; i <= productData.quantity; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            quantitySelect.appendChild(option);
        }
    }
    // Handle order confirmation
    const data = JSON.parse(loggedInUser);
    document.querySelector('.confirm-button').addEventListener('click', async () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        // Speichere den Kauf
        try {
            const response = await fetch('http://localhost:3000/api/products/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: data.id, // Hier musst du die Benutzer-ID abrufen
                    productId: productData.id, // Produkt-ID
                    quantity: quantity // Verwende die ausgewählte Menge
                })
            });

            if (!response.ok) {
                throw new Error('Failed to purchase product');
            }

            alert(`Order confirmed! Quantity: ${quantity}. You will receive a confirmation email shortly.`);
            const to = data.email;
            const subject = 'Sociebite Order';
            const text = `<h1>Your Order Details</h1>
            <h2>${quantity}<h2>`;
            const mailResponse = await fetch('http://localhost:3000/api/mailer/send-order-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to , subject, text })
            });

            const productName = productData.name;
            const priceInCents = productData.price * 100;
            const stripeResponse = await fetch('http://localhost:3000/api/stripe/create-custompayment-link', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productName, priceInCents, quantity })
            });

            if (!stripeResponse.ok) {
             //   const errorData = await stripeResponse.json();
                throw new Error(errorData.error || 'Stripe subscription creation failed');
            }

            const stripeData = await stripeResponse.json();
            console.log('Stripe subscription created:', stripeData.url);
            window.location.href = stripeData.url;


            localStorage.removeItem('selectedProduct');



           // window.location.href = 'index.html';
        } catch (error) {
            console.error('Error purchasing product:', error);
            alert('Failed to purchase product. Please try again.');
        }
    });
}); 