// 함수에서는 타입을 어떻게 활용할까
{
  // ***타입 지정 ㄴㄴ 함수,***
  // => 만약 인자가 string이야 그러면 예상과 다르게 숫자를 더한 값이 아닌 문자열이 이어질 수도
  function add(num1, num2) {
    return num1 + num2;
  }

  // ***타입 지정 함수***
  function addWithType(num1: number, num2: number): number {
    return num1 + num2;
  }
}

// 함수 타입 이용(spread, default, optional)
{
  // ***optional*** 사용 시 인자를 넣어도 안 넣어도 괜찮
  function myStuff(stuff1: string, stuff2?: string): void {
    console.log(stuff1);
    console.log(stuff2);
  }

  myStuff("hammer", "mouse");
  myStuff("hammer"); // optional ? 사용으로 인자 하나만 사용이 가능

  // stuff2: string | undefined 다른 방법으로 타입을 요렇게 지정하면?
  // => myStuff("hammer", undefined); 무조건 이렇게 해야함

  // ***default*** 말 그대로 기본
  function myName(name: string = "나의 기본 이름 곽승헌") {
    console.log(name);
  }

  // ***rest*** 배열로 받아오니까, 숫자 타입의 배열로 인자를 받겠다? => number[]
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, "a")); // 이건 a가 string이니까 number[] 규칙에 XXX
}
