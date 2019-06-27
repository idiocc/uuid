import { randomBytes } from 'crypto'

export default function nodeRNG() {
  return randomBytes(16)
}