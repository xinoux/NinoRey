import { useEffect } from "react"

export default function Title({title}){
    useEffect(() => {
        document.title = title; // No curly braces needed
      }, [title]);
}