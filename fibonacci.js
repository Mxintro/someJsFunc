function fibonacci(n) {
  if (0 >= n) return 0
  if (n===1) return 1
  return fibonacci(n-2) + fibonacci(n-1)
}