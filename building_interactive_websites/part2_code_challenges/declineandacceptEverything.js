const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
//veggies.forEach(element => console.log(element));

const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

const acceptEverything = arr => {
  for(i=0;i<arr.length;i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`);
  }
}


declineEverything(veggies);
acceptEverything(veggies);