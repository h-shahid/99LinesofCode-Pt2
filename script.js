//array called friends w/ 5 friends' names. Each friend sings the 99 lines of code song down to 1. Has to be grammatically correct.

let friends = ["Dana", "Gina", "Sonia", "Kesha", "Kamiesha"];
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);

  for (let j = 99; j > 0; j--) {
    if (j > 1)
      console.log(
        j +
          " lines of code in the file in the file, " +
          j +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          (j - 1) +
          "  lines of code in the files."
      );
    else
      console.log(
        j +
          " line of code in the file in the file,  " +
          j +
          " line of code; " +
          friends[i] +
          " strikes one out, clears it all out, no more lines of code in the file."
      );
  }
}