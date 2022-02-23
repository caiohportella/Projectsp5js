class Sorting {
  simulateSorting(func){
    for(let i = 0; i < values.length; i++){
      noStroke();
      if (states[i] == 0) {
        fill('#E0777D');
      } else if (states[i] == 1) {
        fill('#D6FFB7');
      } else {
        fill(255);
      }
      rect(i * w, height - values[i], w, values[i]);
    }
  }

  async partition(arr, start, end) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }

    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
        states[i] = -1;
      }
    }

    return pivotIndex;
  }
  
  //QuickSort algorithm
  async quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }

    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([quickSort(arr, start, index - 1), quickSort(arr, index + 1, end)]);
  }

    //BubbleSort algorithm
  async BubbleSort(arr, start, end) {
    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        if (a > b) {
          await swap(values, j, j + 1);
        }
      }
    } else {
      console.log('finished');
      await noLoop();
      }
    i++;
  }

  async swap(arr, a, b) {
    await sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}
