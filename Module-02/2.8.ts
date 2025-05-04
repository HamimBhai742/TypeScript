const getData = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Hamim";
    if (data) {
      resolve(data);
    } else {
      reject("Error find vai data");
    }
  });
};

const processData = async (): Promise<string> => {
  const data: string = await getData();
  console.log(data);
  return data;
};
type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const getToDo = async (): Promise<ToDo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  const data: ToDo = await res.json();
  console.log(data);
  return data;
};

getToDo();
