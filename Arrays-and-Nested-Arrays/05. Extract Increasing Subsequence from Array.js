function solve(arr) {
    let result = [];
    let biggest = arr[0];

    for (let index = 0; index < arr.length; index++) {
        let currNum = arr[index];
        if (currNum >= biggest) {
            result.push(currNum);
            biggest = currNum;
        }

    }
    return result;
}

console.log(solve([1, 3, 8, 4]));