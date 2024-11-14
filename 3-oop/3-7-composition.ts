{
  // 컴포지션

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // MilkFrother 인터페이스 만들어
  // 지금 이게 CheapMilkSteamer, FancyMilkSteamer 클래스 두개 있잖아 거기서 선언한 같은 이름의 함수를
  // 다르게 사용하려고 만든거임
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  // SugarSource 인터페이스 만들어
  interface SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Fancy!!!! Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class AutomaticSugarMixer implements SugarSource {
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      console.log(`Adding sugar...`);
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // CoffeeMachine 상속받는 SweetCaffeLatteMachine 클래스 생성해서 입맛에 따라 생성자 함수에 바꿔서 끼워
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarSource, private milk: MilkFrother) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const milkCoffee = this.milk.makeMilk(coffee);
      return this.sugar.addSugar(milkCoffee);
    }
  }

  // 여기서 보면 SweetCaffeLatteMachine 클래스에 FancyMilkSteamer 이거 넣던가 CheapMilkSteamer 이거 넣던가
  // 결과물이 달라짐
  const machine = new SweetCaffeLatteMachine(32, new AutomaticSugarMixer(), new FancyMilkSteamer());
  machine.makeCoffee(2);
}
