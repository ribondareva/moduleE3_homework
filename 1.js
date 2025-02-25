let arr_1 = [1, 2, 3, 4, 5, 0, null, "a", NaN, undefined];
function arrElem(arr) {
  let kol_ch = 0; // Количество чётных
  let kol_nch = 0; // Количество нечётных
  let null_elem = 0; // Количество нулей
  let other_elem = 0; // Количество нечисловых значений

  arr.forEach(function(item) {
    if (typeof item === "number" && !isNaN(item)) {
      if (item === 0) {
        null_elem++;
      } else if (item % 2 === 0) {
        kol_ch++;
      } else {
        kol_nch++;
      }
    } else {
      other_elem++;
    }
  });
  console.log(`Чётных: ${kol_ch}`);
  console.log(`Нечётных: ${kol_nch}`);
  console.log(`Нулей: ${null_elem}`);
  console.log(`Другие элементы: ${other_elem}`);
}
arrElem(arr_1)
