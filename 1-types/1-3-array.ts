// 배열과 튜플, 언제 튜플을 써야할까
{
  // ***Array***
  const colors: string[] = ["red", "black"];

  // readonly 인자로 주어진 데이터 변경 불가, readonly 사용 시 string[] <= 요 문법 사용, Array<string> 이건 허용 ㄴㄴ
  // 오브젝트 불변성 보장 가능
  function checkColors(colors: readonly string[]) {}

  // ***Tuple***, 서로 다른 타입의 배열을 가질 수 있는 배열
  // 권장 ㄴㄴ 왜? 데이터 접근 시 인덱스로 접근 = 가독성이 떨어짐
  // => interface, type alias, class로 대체
  let stringAndNumber: [string, number];
  stringAndNumber = ["abc", 123];
  stringAndNumber[0]; // abc
  stringAndNumber[1]; // 123
}
