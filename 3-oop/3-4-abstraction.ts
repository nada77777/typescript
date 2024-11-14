{
  // 인터페이스 사용, 추상화

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // CoffeeMaker 인터페이스 만들어 / makeCoffee 함수만 사용하고싶음
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // CommercialCoffeeMaker 인터페이스 만들어 / makeCoffee외에도 fillCoffeeBeans, clean 함수 사용가능하게 하고픔
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // implements 키워드로 각각 인터페이스 구현한다고 선언하고
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const commercialCoffeeMaker = CoffeeMachine.makeMachine(22);
  console.log("commercialCoffeeMaker", commercialCoffeeMaker);
  console.log(commercialCoffeeMaker.makeCoffee(2));
  commercialCoffeeMaker.clean();
  console.log("______________________");
  // basicMaker는 CoffeeMaker 인터페이스에서 makeCoffee만 등록?해서 clean 함수는 사용이 불가
  const basicMaker: CoffeeMaker = CoffeeMachine.makeMachine(32);
  console.log("basicMaker", basicMaker);
  console.log(basicMaker.makeCoffee(2));
  // basicMaker.clean() 이거 불가능
}
