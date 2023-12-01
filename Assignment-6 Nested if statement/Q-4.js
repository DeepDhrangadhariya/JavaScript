    var destination = document.getElementById("destination").value;
    var weight = document.getElementById("weight").value || 0;

    var shippingCost;
    switch (destination) {
        case "local":
            shippingCost = 5 + (1 * weight);
            break;
        case "national":
            shippingCost = 10 + (2 * weight);
            break;
        case "international":
            shippingCost = 20 + (5 * weight);
            break;
        default:
            shippingCost = 0;
    }

    document.getElementById("ans").innerHTML = "Shipping cost: $" + shippingCost;
