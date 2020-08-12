id = [];
let massive = [];
let horizontal = 9;
let vertical = 9;
let mines = 10;
let classOfNumbers = "";

const randomMines = () => {
  for (i = 0; i < mines; i++) {
    x = Math.random() * horizontal;
    y = Math.random() * vertical;
    massive.push(`${Math.floor(x)}` + `${Math.floor(y)}`);
  }
  console.log(massive);
};
randomMines();
console.log(massive);

const showResult = (x, y) => {
  $(".playZone").append(
    `<div class= " size back-result-0 closed" id=${x}${y}>
    </div>`
  );
};

const getMassive = () => {
  for (i = 0; i < horizontal; i++) {
    id[i] = [];
    for (j = 0; j < vertical; j++) {
      id[i][j] = 0;
      showResult(i, j);
      clickFunction(i, j);
    }
  }
  countNumbers(id);
};

const showBomb = () => {
  massive.forEach((id) => {
    $(`#${id}`).addClass(`back-result-mine`);
  });
};

const checkMassive = (id) => {
  for (i = 0; i < horizontal; i++) {
    for (j = 0; j < vertical; j++) {
      if (id[i][j] === 1) {
        $(`#${i}${j}`).addClass(`back-result-1`);
        $(`#${i}${j}`).removeClass("back-result-0");
      } else if (id[i][j] === 2) {
        $(`#${i}${j}`).addClass(`back-result-2`);
        $(`#${i}${j}`).removeClass("back-result-0");
      } else if (id[i][j] === 3) {
        $(`#${i}${j}`).addClass(`back-result-3`);
        $(`#${i}${j}`).removeClass("back-result-0");
      } else if (id[i][j] === 4) {
        $(`#${i}${j}`).addClass(`back-result-4`);
        $(`#${i}${j}`).removeClass("back-result-0");
      } else if (id[i][j] === 5) {
        $(`#${i}${j}`).addClass(`back-result-5`);
        $(`#${i}${j}`).removeClass("back-result-0");
      } else if (id[i][j] === 6) {
        $(`#${i}${j}`).addClass(`back-result-6`);
        $(`#${i}${j}`).removeClass("back-result-0");
      } else if (id[i][j] === 7) {
        $(`#${i}${j}`).addClass(`back-result-7`);
        $(`#${i}${j}`).removeClass("back-result-0");
      }
    }
  }
};

const countNumbers = (id) => {
  massive.forEach((bombId) => {
    let x = parseInt(`${bombId}`.substring(0, 1));
    let y = parseInt(`${bombId}`.substring(1, 3));
    if (x === 0 && y === 0) {
      id[x][y + 1]++;
      id[x + 1][y]++;
      id[x + 1][y + 1]++;
    } else if (x === 0 && y === vertical - 1) {
      id[x][y - 1]++;
      id[x + 1][y - 1]++;
      id[x + 1][y]++;
    } else if (x === horizontal - 1 && y === 0) {
      id[x - 1][y]++;
      id[x - 1][y + 1]++;
      id[x][y + 1]++;
    } else if (x === horizontal - 1 && y === vertical - 1) {
      id[x - 1][y - 1]++;
      id[x - 1][y]++;
      id[x][y - 1]++;
    } else if (y === 0) {
      id[x - 1][y + 1]++;
      id[x - 1][y]++;
      id[x][y + 1]++;
      id[x + 1][y]++;
      id[x + 1][y + 1]++;
    } else if (x === 0) {
      id[x][y - 1]++;
      id[x][y + 1]++;
      id[x + 1][y - 1]++;
      id[x + 1][y]++;
      id[x + 1][y + 1]++;
    } else if (y === vertical - 1) {
      id[x - 1][y - 1]++;
      id[x - 1][y]++;
      id[x][y - 1]++;
      id[x + 1][y]++;
      id[x + 1][y - 1]++;
    } else if (x === horizontal - 1) {
      id[x - 1][y + 1]++;
      id[x - 1][y - 1]++;
      id[x][y + 1]++;
      id[x - 1][y]++;
      id[x][y - 1]++;
    } else {
      id[x - 1][y - 1]++;
      id[x - 1][y]++;
      id[x - 1][y + 1]++;
      id[x][y - 1]++;
      id[x][y + 1]++;
      id[x + 1][y - 1]++;
      id[x + 1][y]++;
      id[x + 1][y + 1]++;
    }
  });
  checkMassive(id);
  return id;
};
// const showZeroResult = (x, y) => {
//   showZero(x - 1, y - 1);
//   showZero(x + 1, y + 1);
//   showZero(x + 1, y - 1);
//   showZero(x - 1, y + 1);
//   showZero(x, y - 1);
//   showZero(x, y + 1);
//   showZero(x + 1, y);
//   showZero(x - 1, y);
// };
const checkZero = (classOfNumbers, x, y) => {
  if (classOfNumbers === "back-result-0") {
    $(`#${x}${y}`).removeClass("closed");
  
    getClassOfNumbers(x, y);
    
    console.log(0);
  }
};

const getClassOfNumbers = (x, y) => {
  let str = $(`#${x}${y}`).attr("class");
  classOfNumbers = str.split(" ").slice(1).join(" ");
  checkZero(classOfNumbers, x, y);
};
const clickFunction = (x, y) => {
  $(`#${x}${y}`).click(function () {
    $(`#${x}${y}`).removeClass("closed");
    getClassOfNumbers(x, y);

    // if (newStr === "back-result-0") {
    //   showZeroResult(x, y);
    // }
  });
};

getMassive();
showBomb();
