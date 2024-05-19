export const login = async (username: string, password: string): Promise<number> => {
  // 本来はここでDBとの通信を行うが、この実装では無視する
  console.log(`login: ${username} ${password}`)
  return await 1;
}
