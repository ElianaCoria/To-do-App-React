export type Task = {
    title: string;
    date: string;
    description: string;
    user: string;
    category: string;
    status: 'pending' | 'doing'| 'done'
}

export type User = {
    name: string;
    email: string;
    pass: string
}

export type Category = {
    name: string;
    slug?: string
}