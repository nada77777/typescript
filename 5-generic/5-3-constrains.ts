// ******generic에 조건 부여******

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지않음
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const kim = new FullTimeEmployee();
const lee = new PartTimeEmployee();
kim.workFullTime();
lee.workPartTime();

// generic을 사용하면?
// generic에 조건을 부여해서 제한적인 범위내에서 generic 사용
const kimAfterPay = pay(kim);
kimAfterPay.pay();

// 세부 클래스 정보를 잃어버림
kimAfterPay.workFullTime();
const leeAfterPay = payBad(lee);

// *******************************************************************

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
