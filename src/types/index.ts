export type Task = {
    id: string;
    title: string;
    date: string;
    description: string;
    user: User;
    category: Category;
    status: 'pending' | 'doing'| 'done'
}

export type User = {
    id: string;
    name: string;
    email: string;
    pass: string
}

export type Category = {
    id: string;
    name: string;
    slug?: string
}