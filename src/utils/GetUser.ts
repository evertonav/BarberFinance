export function GetUserLogado(): string {
  return JSON.parse(localStorage.getItem('@reactBarberFinance') ?? '{}').email
}
