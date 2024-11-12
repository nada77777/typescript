// union types
{
  // union type을 사용해서 복수의 값 설정
  type Direction = "left" | "right" | "up" | "down";
  function run(direction: Direction) {
    console.log(direction);
  }

  run("up");
}
