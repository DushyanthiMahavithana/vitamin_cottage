import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ButtonMenu({button_name, onClick}){
    return(
        <Button onClick={onClick}>
        {button_name}
      </Button>
    )

}