var productType = document.getElementById("productType").value;
var quantity = document.getElementById("quantity").value || 0;

var discount = 0;
switch (productType) {
    case "electronics":
        discount = (quantity >= 2) ? 0.1 : 0;
        break;
    case "clothing":
        discount = (quantity >= 2) ? 0.5 : 0;
        break;
    case "other":
        discount = 5;
        break;
    default:
        discount = 0;
}

document.getElementById("ans").innerHTML = "Discount: $" + (discount * quantity);