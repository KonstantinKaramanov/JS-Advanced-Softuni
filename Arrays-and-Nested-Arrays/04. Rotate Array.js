function solve(arr, rotations) {
    for (let index = 0; index < rotations; index++) {
        //remove the last element from the arr -> pop
        //add that element to the start of the arr -> unshift
        arr.unshift(arr.pop());

    }
    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4'], 2);