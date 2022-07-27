import { Task } from "../../types";

type Payload = Omit<Task, 'id' | 'user'  |'category'> & {userId: string, categoryId: string}

const addTask = (payload: Payload) => {

    // fetch

}

export const TasksApi = { addTask }


// const user: Payload = {
//     title: 'Este es el ttulo',
//     date: 'asd',
//     description: 'asd',
//     userId: '123',
//     categoryId: '123',
//     status: 'done'
// }

// console.log(user);
