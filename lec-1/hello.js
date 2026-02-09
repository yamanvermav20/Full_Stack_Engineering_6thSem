// let obj = {
//   name: "yaman",
//   age: 20,
//   happybirthday: function () {
//     console.log(
//       "Happy Birthday " + this.name + " you are " + this.age + " year old",
//     );
//   },
// };

let OBJ = {
    name: "suchet",
    age: 23,
  myfn: function f() {
    let obj = {
      name: "yaman",
      age: 20,
      happybirthday: () => {
        console.log(
          "Happy Birthday " + this.name + " you are " + this.age + " year old",
        );
      },
    };
    obj.happybirthday();
  },
};

OBJ.myfn();

