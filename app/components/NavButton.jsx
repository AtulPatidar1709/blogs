"use client"
import { useRouter } from "next/navigation";

export default function NavButton({id}) {
    const router = useRouter();
    function handleClick() {
      router.push(`/posts/${id}`)
    }

  return (
    <button onClick={handleClick}>Read More...</button>
  )
}
