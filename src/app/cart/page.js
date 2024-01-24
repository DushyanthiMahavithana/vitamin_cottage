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
import { ButtonMenu } from '../../components/Menubuttons';
import Image from 'next/image'

  

const CartPage = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state)=>state.cart)

    const handleremove = (id) =>{
        dispatch(remove(id))
    }



    return(
        <div className='mt-20'>
            
                

                
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>ml</TableHead>
                        <TableHead>cups</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                
            {
                 cartitems.map((item)=>(


                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">
                            <Image src={item.image} width={200} height={100}></Image>
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.selectedSize}</TableCell>
                        <TableCell>{item.selectedNumber}</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <ButtonMenu
                        button_name={'REMOVE'}
                        onClick={()=>handleremove(item.id)}>
                            
                        </ButtonMenu>

                      
                    </TableRow>
                </TableBody>
                ))
            }
            </Table>
            
        </div>
    )

}
export default CartPage;