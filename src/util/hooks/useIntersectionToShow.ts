import { useEffect, useState, useRef, Ref } from 'react'

export const useIntersectionToShow = <ElementType extends HTMLElement>() : [boolean, Ref<ElementType>] => {
  const element = useRef<ElementType>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return [show, element]
}