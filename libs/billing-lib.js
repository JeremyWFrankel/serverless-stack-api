export function calculateCost(storage) {
    //const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
    let rate = 0;

    if(storage <= 10)
      rate = 4;
    else if(storage <= 100)
      rate = 2;
    else
      rate = 1;
    return rate * storage * 100;
  }