"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday);
//# sourceMappingURL=index.js.map