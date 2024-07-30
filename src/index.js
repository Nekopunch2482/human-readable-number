/////////////// VARIANT 3
const one_map = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};

const ten_map = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};

const ten_one_map = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};

function to_hundred(num) {
    const hundred = num / 100 - ((num / 100) % 1);
    const ten = num - hundred * 100;

    if (hundred !== 0 && ten === 0) {
        return `${to_one(hundred)} hundred`;
    }

    if (hundred !== 0) {
        return `${to_one(hundred)} hundred ${to_ten(ten)}`;
    }

    return `${to_ten(ten)}`;
}

function to_ten(num) {
    const ten = num / 10 - ((num / 10) % 1);
    const one = num - ten * 10;

    if (ten === 1) {
        const ten_ = ten * 10 + one;
        return `${ten_one_map[ten_]}`;
    }

    if (ten === 0) {
        return `${to_one(one)}`;
    }

    if (one === 0) {
        return `${ten_map[ten]}`;
    }

    return `${ten_map[ten]} ${to_one(one)}`;
}

function to_one(one) {
    return `${one_map[one]}`;
}

module.exports = function toReadable(num) {
    return to_hundred(num);
};

/////////////// VARIANT 2
// module.exports = function toReadable(num) {
//     let one_map = {
//         0: "zero",
//         1: "one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "nine",
//     };

//     let ten_map = {
//         1: "ten",
//         2: "twenty",
//         3: "thirty",
//         4: "forty",
//         5: "fifty",
//         6: "sixty",
//         7: "seventy",
//         8: "eighty",
//         9: "ninety",
//     };

//     let ten_one_map = {
//         10: "ten",
//         11: "eleven",
//         12: "twelve",
//         13: "thirteen",
//         14: "fourteen",
//         15: "fifteen",
//         16: "sixteen",
//         17: "seventeen",
//         18: "eighteen",
//         19: "nineteen",
//     };

//     const hundred = num / 100 - ((num / 100) % 1);
//     num = num - hundred * 100;
//     num = num < 0 ? 0 : num;

//     const ten = num / 10 - ((num / 10) % 1);
//     num = num - ten * 10;
//     num = num < 0 ? 0 : num;

//     const one = num;

//     if (hundred) {
//         if (ten === 0 && one === 0) {
//             return `${one_map[hundred]} hundred`;
//         }

//         if (ten === 0) {
//             return `${one_map[hundred]} hundred ${one_map[one]}`;
//         }

//         if (one === 0) {
//             return `${one_map[hundred]} hundred ${ten_map[ten]}`;
//         }

//         if (ten === 1) {
//             const ten_ = ten * 10 + one;
//             return `${one_map[hundred]} hundred ${ten_one_map[ten_]}`;
//         }

//         return `${one_map[hundred]} hundred ${ten_map[ten]} ${one_map[one]}`;
//     }

//     if (ten) {
//         if (ten === 1) {
//             const ten_ = ten * 10 + one;
//             return `${ten_one_map[ten_]}`;
//         }

//         if (one === 0) {
//             return `${ten_map[ten]}`;
//         }

//         return `${ten_map[ten]} ${one_map[one]}`;
//     }

//     return `${one_map[one]}`;
// };

/////////////// VARIANT 1
// module.exports = function toReadable(number) {
//     if (number === 0) return "zero";

//     let one_map = {
//         0: "",
//         1: "one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "nine",
//     };

//     let ten_map = {
//         2: "twenty",
//         3: "thirty",
//         4: "forty",
//         5: "fifty",
//         6: "sixty",
//         7: "seventy",
//         8: "eighty",
//         9: "ninety",
//     };

//     let ten_one_map = {
//         10: "ten",
//         11: "eleven",
//         12: "twelve",
//         13: "thirteen",
//         14: "fourteen",
//         15: "fifteen",
//         16: "sixteen",
//         17: "seventeen",
//         18: "eighteen",
//         19: "nineteen",
//     };

//     let [ten_one, hundred] = (number / 100)
//         .toFixed(2)
//         .split(".")
//         .map(
//             (e, i) => (!i && e.split("")) || Math.round(Number(`0.${e}`) * 100)
//         )
//         .flat()
//         .map((e) => Number(e))
//         .reverse();

//     let hundred_s = to_hundred(hundred);
//     let ten_one_s = to_ten(ten_one);

//     function to_ten(n) {
//         if (n <= 9) return one_map[n];
//         if (n < 20) return ten_one_map[n];

//         let ten = Math.trunc(n / 10);
//         let one = n - Math.trunc(n / 10) * 10;

//         if (one === 0) return `${ten_map[ten]}`;
//         return `${ten_map[ten]} ${one_map[one]}`;
//     }

//     function to_hundred(n) {
//         if (n === 0) return "";
//         return `${one_map[n]} hundred`;
//     }

//     return `${hundred_s} ${ten_one_s}`.trim();
// };
