{
  //let
  let name = "aaaaa"; // 재할당 가능
  name = "bbbbb";

  //const
  const juice = "apple"; // 재할당 불가
  juice = "orange";

  // js 타입에는 원시타입, 오브젝트 타입 존재
  // 원시타입 number, string, boolean, bigint, symbol, null, undefined
  // 오브젝트 함수 배열

  // number
  const num: number = "d"; // 이러면 숫자만 가능 문자열처럼 다른 타입 할당 불가

  // string
  const str: string = 11; // 스트링 타입만 할당 가능 숫자 ㄴㄴ

  // boolean
  const bool: boolean = "true"; // 불리언 타입만, 스트링처럼 다른 타입 할당 ㄴㄴ

  //언디파인드 값이 있는지 없는지 아무것도 결정되지않은상태
  let price: number | undefined; // 이런 느낌으로 사용, 단독으로 undefined만 타입 지정하면 뭐 넣을거임
  //널은 명확하게 여기는 값이 비어있다 결정
  let location: string | null; // 이렇게 사용, null만 타입 지정하면 쓸모 ㄴㄴ

  // unknown, 어떤 종류의 데이터 타입 담길지 모름
  let notSure: unknown;
  notSure = 1; // 모르니까 전부 가능
  notSure = "aa"; // 모르니까 전부 가능
  notSure = true; // 모르니까 전부 가능

  // any, 전부 가능
  let anything: any;
  anything = 11;
  anything = "anyany";

  // void, 아무런 값도 리턴 ㄴㄴ
  function nothing(): void {
    console.log("void라서 아무것도 리턴ㄴㄴ");
    return;
  }

  // object, 원시타입 제외한 모든 오브젝트 타입 가능, 너무 광범위해 가능하면 어떤 타입인지 구체적으로 명시해야함
  let obj: object;
  obj = [1, 2, 3];
  obj = { name: "곽승헌" };
  obj = "곽승헌"; // 이건 string ㄴㄴ
}
