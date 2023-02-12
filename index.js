const cancelOrder = () => {
    alert("Order canceled successfully");
}

function changePlan() {
    const newPlan = prompt("Enter new plan here");
    let price;
    document.getElementById("plan-name").innerHTML = newPlan;
    switch (newPlan.toLocaleLowerCase()) {
        case "monthly plan":
            price = "$6/month";
            break;
        case "weekly plan":
            price = "$2/week";
            break;
        default:
            price = "$59.99/year";
    }
    document.getElementById("plan-price").innerHTML = price;
}

const paymentForm = document.querySelector("#payment-form");

paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstname = paymentForm.elements["firstname"].value.trim();
    const lastname = paymentForm.elements["lastname"].value.trim();
    const cardNumber = paymentForm.elements["card-number"].value.trim();
    const cardExpiry = paymentForm.elements["card-expiry"].value.trim();

    alert(`Firstname: ${firstname}, Lastname: ${lastname}, cardNumber: ${cardNumber}, cardExpiry: ${cardExpiry}`)
})