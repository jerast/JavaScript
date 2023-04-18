let arr_a = [1, 3, 6, 9];
let arr_b = [1, 6, 2, 10];

const verify_1 = (array, point) => {
     for (a = 0; a < array.length; a++) {
          for (b = a + 1; b < array.length; b++) {
               if (a < b && array[a] + array[b] == point) 
                    return console.log(true);
          }
     }
     return console.log(false);
}

const verify_2 = (array, point) => {
     let flag = false;
     array.forEach((item_a, index_a) => {
          array.forEach((item_b, index_b) => {
               if (index_a < index_b)
                    if (item_a + item_b == point)
                         flag = true;
          });
     });
     console.log(flag);
}