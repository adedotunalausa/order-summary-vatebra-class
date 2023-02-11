function makePayment() {
    alert("Payment Successful");
}

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