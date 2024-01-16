import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ButtonDemo({button_name, button_link}) {
  return (
    <Link href={button_link}>
        <Button>{button_name}</Button>
    </Link>
  )
}
