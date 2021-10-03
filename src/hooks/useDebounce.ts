import React from "react"

const useDebounce = (fn: Function, delay: number) => {
  const timeoutRef = React.useRef<number | null>(null)

  function debouncedFn(...args: any[]) {
    window.clearTimeout(timeoutRef.current || undefined)
    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debouncedFn
}

export default useDebounce
