{
    // implements 키워드로 각각 인터페이스 구현한다고 선언하고
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.makeMachine = function (coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        };
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning the machine...🧼");
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for ".concat(shots));
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up... 🔥");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling ".concat(shots, " shots... \u2615\uFE0F"));
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    var maker = CoffeeMachine_1.makeMachine(32);
    var commercialCoffeeMaker = CoffeeMachine_1.makeMachine(22);
    console.log("commercialCoffeeMaker", commercialCoffeeMaker);
    console.log(commercialCoffeeMaker.makeCoffee(2));
    commercialCoffeeMaker.clean();
    console.log("______________________");
    // basicMaker는 CoffeeMaker 인터페이스에서 makeCoffee만 등록?해서 clean 함수는 사용이 불가
    var basicMaker = CoffeeMachine_1.makeMachine(32);
    console.log("basicMaker", basicMaker);
    console.log(basicMaker.makeCoffee(2));
    // basicMaker.clean() 이거 불가능
}
