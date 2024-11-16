{
  //  ***Generic***

  // 이렇게 함수를 만들면 인자로 number만 가능해
  // 그러면 string, bool 타입을 넣고싶으면 3개 4개 5개 만들어야하나?
  function checkNullNoGeneric(arg: number | null): number {
    if (arg == null) {
      throw new Error("인자가 null");
    }
    return arg;
  }

  // 이렇게 <T> 처럼 Generic을 사용하면 확장성이 증가, 굳이 함수를 더 안 만들어도 ㄱㅊ
  function checkNullWithGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("인자가 null");
    }
    return arg;
  }

  const number: number = checkNullWithGeneric(123);
  const boal: boolean = checkNullWithGeneric(true);
}
