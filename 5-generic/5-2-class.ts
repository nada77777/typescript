// 클래스에서 Genric 사용

// 인터페이스에서도 generic을 정의 가능
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 클래스에서 인터페이스에 있는 함수를 동일하게 동일하게 구현해야 하는 것처럼, generic도 구현
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

// 그러면 여기서는 number 타입으로
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5

// 여기서는 객체와 문자열 타입으로
const best = new SimpleEither({ name: "kim" }, "hello");
