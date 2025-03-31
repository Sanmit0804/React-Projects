const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 }
const input2 = { a: 2, e: 12, f: 6, d: 10 }

const one = [1, 2, -2, 11, 7, 1];
const two = [1, 4, 7, 2, 4, 7];

function compareObject(input1, input2) {
    const output = {};
    for (let i in input1) {
        if (input1[i] == input2[i]) {
            output[i] = input1[i];
        }
    }
    console.log(output);
}

const secondLargest = (one) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < one.length; i++) {
        if (one[i] > largest) {
            largest = one[i];
        }
        if (one[i] > secondLargest && one[i] != largest) {
            secondLargest = one[i];
        }
    }
    console.log("Second Largest value is: ", secondLargest);
}


console.log("Hello world");
compareObject(input1, input2)
secondLargest(one);  // 7
secondLargest(two);  // 4