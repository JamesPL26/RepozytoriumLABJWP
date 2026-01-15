import { useMemo, useState } from "react"
function isPrime(n: number) {
  if (n < 2) return false
  const limit = Math.sqrt(n)
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false
  }
  return true
}

export default function PrimeCalculator() {
 const [number, setNumber] = useState(1000)
 const primeCount = useMemo(() => {
 let count = 0
 for (let i = 2; i < number; i++) {
 if (isPrime(i)) count++
 }
 return count
 }, [number])
 return (
 <div>
 <input
 type="number"
 value={number}
 onChange={(e) => setNumber(parseInt(e.target.value))}
 />
 <p>Liczb pierwszych: {primeCount}</p>
 </div>
 )}