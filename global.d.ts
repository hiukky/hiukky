export {}

declare global {
  interface Window {
    Orb: {
      Start(id: string, e: string, options: object)
    }
  }
}
