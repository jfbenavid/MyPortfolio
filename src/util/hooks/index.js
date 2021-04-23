import { useEffect, useState, useRef } from 'react'

export const useIntersectionToShow = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    import('intersection-observer').then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
