export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type TodoResponse = Todo & {
  userId: number
}

export async function getTodos(): Promise<TodoResponse[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1&_page=1')
  if(!response.ok) {
    console.error('API Error:', response.statusText)
    throw new Error('Todoの取得に失敗しました')
  }
  return response.json()
}
