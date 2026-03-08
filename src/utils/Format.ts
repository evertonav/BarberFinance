export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0') // Adiciona zero à esquerda se necessário
  const month = String(date.getMonth() + 1).padStart(2, '0') // Meses começam em 0
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}
