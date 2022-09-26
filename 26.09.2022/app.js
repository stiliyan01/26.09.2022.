let temp = [];
Object.entries(data).forEach(([key, entities]) => {
  if (key === "data") {
    for (const key in entities) {
      // console.log(entities[key]);
      for (let i = entities[key].length - 1; i >= 0; i--) {
        // console.log("1");
        // console.log(entities[key][i]);
        temp = entities[key];
        temp.filter((word) => (word = "builder"));
      }
    }
  }
});

// let arr = ["qnuari", "fevruri", "mart", "april", "mai"];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr.splice(-1, 1, "mart");
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   arr.splice(1, 0, "mart");
//   console.log(arr[i]);
// }
