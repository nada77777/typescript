{
    // public
    // private
    // protected
    var CoffeeMaker_1 = /** @class */ (function () {
        // 생성자 함수
        function CoffeeMaker(coffeeBeans) {
            // private 사용 시 외부에서 접근이 불가
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        // staic 사용으로 CoffeeMaker 자체에서 선언 가능 ex) Math.random()
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
            console.log("this.coffeeBeans", this.coffeeBeans);
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        // static 사용으로 인스턴스 생성 시 해당 인스턴스에 포함ㄴㄴ / 메모리 낭비 방지 가능
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMaker;
    }());
    // **********결국에는 static, private를 사용해서 외부노출 자제시키는게 캡슐화**********
    // const maker = CoffeeMaker.makeMachine(32);
    // // console.log("maker", maker);
    // maker.fillCoffeeBeans(32);
    // const coffee = maker.makeCoffee(3);
    // console.log("coffee", coffee);
    // const aa = new CoffeeMaker(32);
    // console.log("aa", aa);
    // console.log("maker", maker);
}
