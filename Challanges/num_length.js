
// Method 1: bucle
const num_length = (num) => {
   let number = num;
   let counter = 0;

   while (number >= 1) {
      counter ++;
      number /= 10;
   }

   console.log(`number: ${ num }`);
   console.log(`length: ${ counter }`);
}
num_length(10);

