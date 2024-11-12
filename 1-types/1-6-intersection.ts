// union이 발생 케이스 중 하나만 선택 가능하다면
// intersection은 모든 걸 합한 느낌, union이 OR 느낌이면 intersection은 AND 느낌
// intersection 사용하면 다양한 타입들 묶어서 선언 가능
{
  type Student = {
    name: string;
    age: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // Student & Worker 형식으로 합하면 name age work 싹 다 접근 가능
    console.log(person.name, person.age, person.work);
  }

  internWork({ name: "ksh", age: 11, empolyeeId: 1, work: () => {} });
}
