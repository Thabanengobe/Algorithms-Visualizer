const numbers = generateArray();
displayBars(sectionSort(numbers));

function displayBars(nums){
  const main_tag = document.querySelector('main');
  const elements_list = document.createElement('div');
  elements_list.classList = 'bars'

  for (let i= 0; i < nums.length; i++){

      const element_div = document.createElement("div");
      element_div.classList = 'each-bar'
      element_div.style.height = (nums[i]* 100)+"%";
      elements_list.append(element_div);
  }
  main_tag.append(elements_list);

}


function generateArray(){
  let nums = [];
   for(let i = 0; i <= 30; i++){
      let number = Math.random();
      nums[i] = number;
   }
   return nums;
}


function sectionSort(nums){

  for(let i = 0; i < (nums.length-1); i++){

    let min_value = i;
    for(let j = (i+1); j < nums.length; j++){
      if(nums[j] < nums[min_value]){
        min_value = j;
      }
    }

    if (min_value !== i){
      let temp = nums[min_value];
      nums[min_value] = nums[i];
      nums[i] = temp;
    }
  }

  return nums;
}