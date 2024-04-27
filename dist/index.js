"use strict";
const KgToLbs = (weight) => {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
const result = KgToLbs("250kgs");
console.log(result);
//# sourceMappingURL=index.js.map