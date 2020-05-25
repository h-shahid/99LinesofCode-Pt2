let button = document.getElementById("btn")[0];

btn.addEventListener("click", sing);

//array called friends w/ 5 friends' names. Each friend sings the 99 lines of code song down to 1. Has to be grammatically correct.

let friends = ["Dana", "Gina", "Sonia", "Kesha", "Kamiesha"];

function sing() {
  for (let i = 0; i < friends.length; i++) {
    let div = document.createElement("div");
    div.className = "friend";

    let h3 = document.createElement("h3");
    h3.innerText = friends[i];
    div.appendChild(h3);

    for (let j = 99; j > 0; j--) {
      let paragraph = document.createElement("p");

      let text = document.createTextNode("");
      if (j > 1) {
        text.appendData(
          j +
            " lines of code in the file in the file, " +
            j +
            " lines of code; " +
            [friends[i]] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file."
        );

        j +
          " lines of code in the file in the file, " +
          j +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          (j - 1) +
          "  lines of code in the files.";
      } else {
        text.appendData(
          j +
            " line of code in the file in the file,  " +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, no more lines of code in the file."
        );
      }
      paragraph.appendChild(text);
      div.appendChild(paragraph);
      div.appendChild(text);
      document.body.appendChild(div);
    }
  }
}
