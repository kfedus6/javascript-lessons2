//ДЗ
function acc() {
   for (let key of account) {
      console.log(key);
   }
};

let bank = function () {
   let m = { sum: 0, deposit: 0 }
   return {
      credit: function () {
         money = parseInt(prompt("Взять кредит на суму:"));
         m.sum += money;
         account.push(m);
      },
      add: function () {
         money = parseInt(prompt("Пополнить карточку:"));
         m.sum += money;
      },
      subtract: function () {
         money = parseInt(prompt("Снять с карточки:"));
         m.sum -= money;
      },
      dep: function () {
         initial = parseInt(prompt("денги:"));
         interest = parseInt(prompt("проценти:")) / 100;
         years = parseInt(prompt("Год:"));
         d = Math.round(initial * (1 + interest * years));
         m.deposit += d;
         account.push(m);
      },
      result: function () {
         console.log(m.sum)
      }
   }
}();

let account = [""];
let exit;
let menu;
do {
   menu = parseInt(prompt("1-Создать аккаунт; 2-Посмотреть аккаунт;\n 3-Взять кредит; 4-Положить депозит;\n 5-Сумма на карточен; 6-Пополнить карточку;\n 7-Снять с карточки; 8-Удалить аккаунт;\n 9-Выйти"));
   switch (menu) {
      case 1: {
         name = prompt("Имя");
         age = parseInt(prompt("Возраст"));
         account[account.length] = { Name: name, Age: age };
         break;
      }
      case 2: {
         acc();
         break;
      }
      case 3: {
         bank.credit();
         break;
      }
      case 4: {
         bank.dep();
         break;
      }
      case 5: {
         bank.result();
         break;
      }
      case 6: {
         bank.add();
         break;
      }
      case 7: {
         bank.subtract();
         break;
      }
      case 8: {
         account.splice(0, 10);
         console.log(account);
         break;
      }
      case 9: {
         exit = true;
         console.log("ви вийшли")
         break;
      }
      default: {
         console.log("error")
         break;
      }
   }
} while (!exit);


