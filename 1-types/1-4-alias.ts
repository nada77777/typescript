// ***aliases*** 새로운 타입을 정의 가능
{
  type Text = string;
  const name: Text = "ksh";
  const location: Text = "seoul";
  type Num = number;

  // 오브젝트 형태도 정의 가능
  type Person = {
    name: string;
    age: number;
  };

  const kim: Person = {
    name: "minsu",
    age: 11,
  };

  // String Literal Types
  // 타입의 값 자체를 내가 강제, 이렇게하면 값으로 kwak만 사용 가능
  type Name = "kwak";
  let myName: Name;
  myName = "kwak";
  myName = "lee"; // 이렇게 사용 불가
}
