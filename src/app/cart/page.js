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
import SectionHeaders from '@/components/SectionHeaders'

  

const CartPage = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state)=>state.cart)

    const handleremove = (id) =>{
        dispatch(remove(id))
    }
    const newTotal = cartitems.reduce((acc, item) => acc + item.totalForOne, 0); //total of all items



    return(
        <div className='mt-20 mb-52'>
            
                

                
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
                
            
                 


                <TableBody>
                {cartitems.map((item)=>(
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">
                            <Image src={item.image} width={200} height={100}></Image>
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.selectedSize}</TableCell>
                        <TableCell>{item.selectedNumber}</TableCell>
                        <TableCell className='text-right'>LKR {item.totalForOne.toFixed(2)}</TableCell>
                        <div className='mt-8 ml-5'>
                        <ButtonMenu
                        button_name={'REMOVE'}
                        onClick={()=>handleremove(item.id)}>
                            
                        </ButtonMenu>
                        </div>
                        

                      
                    </TableRow>
                    ))
                    
            }
                </TableBody>
                
               
            </Table>


            <div className='my-20 text-center'>

            
            <SectionHeaders
            mainheader={"Thanks a Sip Million for Choosing Us...!"}
            subheader={`Your Total is: LKR ${newTotal.toFixed(2)}`}>

            </SectionHeaders>
            </div>

           
            

           
            
        </div>
    )

}
export default CartPage;