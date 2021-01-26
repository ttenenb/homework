const arr = process.argv;
let answer = 0;
for (let index = 2; index < arr.length; index++) {
    answer += (+arr[index]);
}
console.log(answer);
