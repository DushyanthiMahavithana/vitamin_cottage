'use client'
import react from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {remove} from '../../redux/cartSlice'  
import {useDispatch, useSelector} from 'react-redux'
  

const CartPage = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state)=>state.cart)

    const handleremove = (id) =>{
        dispatch(remove(id))
    }



    return(
        <div className='mt-20'>
            {
                cartitems.map((item)=>(

                
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium"><img src={item.image}></img></TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <button onClick={()=>handleremove(item.id)}>remove</button>
                    </TableRow>
                </TableBody>
            </Table>
            ))
            }
        </div>
    )

}
export default CartPage;