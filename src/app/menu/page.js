'use client'
import React, { useState } from 'react';
import SectionHeaders from "@/components/SectionHeaders"
import Category1 from '@/components/menuCategories/Category1'
import Category2 from '@/components/menuCategories/Category2';
import Category3 from '@/components/menuCategories/Category3';
import Category4 from '@/components/menuCategories/Category4';
import Singleproduct from '@/components/quickView/Singleproduct'
import Image from 'next/image'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ButtonDemo } from "@/components/Button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ButtonMenu } from '../../components/Menubuttons';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

import {add} from '../../redux/cartSlice'





const MenuPage = () => {
  const [showSingle, setSingle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSize, setSelectedSize] = useState("option-one");
  const [selectedNumber, setSelectedNumber] = useState("1");

  
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  
  
  const handleQuickViewClick = (menu) => {
    setSingle(true);
    setSelectedMenu(menu);
  };  

  const sizeLabelMap = {
    "option-one": "200 ml",
    "option-two": "600 ml",
    
  };
  const numberLabelMap ={
    "1":"1 cup",
    "2":"2 cups",
    "3":"3 cups",
    "4":"4 cups",
    "5":"5 cups",
    "6":"6 cups",
 
  }

  const handled = (product) =>{
    const labelName = sizeLabelMap[selectedSize];
    const labelName2 = numberLabelMap [selectedNumber];
    const selectedPrice = selectedSize === 'option-one' ? product.price : product.price2; //the price of the selected radio btn 
    const totalForOne = selectedPrice * parseInt(selectedNumber, 10); 
  
    console.log(selectedPrice);
    console.log(totalForOne);

    dispatch(add({product, selectedSize:labelName,selectedNumber:labelName2, totalForOne  }));
    //dispatch(add(product));

   /* setTotalAmount((prevTotal) => {                       
      const newTotal = prevTotal + totalForOne;
      console.log('Total Amount:', newTotal);
      return newTotal;
    });*/ 
  }

  


  return (
    <>
    <div className='text-center mt-20'>
      
      <SectionHeaders mainheader={'Fresh Fruit Juice'}></SectionHeaders>
      <div className='mb-20'>
      <Category1 onQuickViewClick={handleQuickViewClick}/>
      </div>

      <SectionHeaders mainheader={'Smoothies'}></SectionHeaders>
      <div className='mb-20'>
      <Category2 onQuickViewClick={handleQuickViewClick}/>
      </div>

      <SectionHeaders mainheader={'Milkshakes'}></SectionHeaders>
      <div className='mb-20'>
      <Category3 onQuickViewClick={handleQuickViewClick}/>
      </div>

      <SectionHeaders mainheader={'Mojito'}></SectionHeaders>
      <div className='mb-20'>
      <Category4 onQuickViewClick={handleQuickViewClick}/>
      </div>
      
      <Singleproduct isVisible = {showSingle} onClose={() => setSingle(false)}>
        {selectedMenu && (
        <>
        <SectionHeaders
        mainheader={selectedMenu.name}>
        </SectionHeaders>
        
        <div className="flex flex-row">
          <Image src={selectedMenu.image} width={300} height={200} />
          <div className="flex-1 text-left font-mono ml-10">
            <h2 className='text-lg mb-10'>LKR {selectedMenu.price.toFixed(2)}</h2>
            <div className='mb-10'>
            <RadioGroup value={selectedSize} onValueChange={(value) => setSelectedSize(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">200 ml</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">600 ml LKR {selectedMenu.price2.toFixed(2)}</Label>
              </div>
            </RadioGroup>
            </div>
            
            <Select value={selectedNumber} onValueChange={(value)=> setSelectedNumber(value)}>
              <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Number of Cups" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>  
              </SelectContent>
            </Select>
            <div className='mt-5'>
            <ButtonMenu 
            button_name={'ADD TO CART'}
            onClick={()=>handled(selectedMenu)}>
            </ButtonMenu>
            </div>
            <div className='mt-5 mb-10'>
            <ButtonDemo 
            button_name={'VIEW CART'}
            button_link={'/#'}>
            </ButtonDemo>
            </div>
          </div>
        </div>
        </>
        )}
      </Singleproduct>
    </div>
    </>
  );
};

export default MenuPage;
