function total(itemNumber, itemPrice, currentTotalPrice) {
    return (currentTotalPrice ? currentTotalPrice : 0) + itemNumber * itemPrice;
}

// (currentTotalPrice ? currentTotalPrice : 0) is equivalent to =>
// if (currentTotalPrice) {
//     return currentTotalPrice
// } else {
//     return 0;
// }
