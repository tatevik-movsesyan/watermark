import {useRef, useEffect} from 'react'

export function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler, savedHandler])

  useEffect(
    () => {
      const eventListener = event => savedHandler.current(event);
      const elementIsRef = element.hasOwnProperty("current");
      const currentElement= elementIsRef ? element.current : element;

      if (!currentElement) return

      currentElement.addEventListener(eventName, eventListener)

      return () => {
        currentElement.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element, savedHandler] 
  )
}