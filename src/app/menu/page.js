'use client'
import React, { useState } from 'react';
import SectionHeaders from "@/components/SectionHeaders"
import Category1 from '@/components/menuCategories/Category1'
import Category2 from '@/components/menuCategories/Category2';
import Category3 from '@/components/menuCategories/Category3';
import Category4 from '@/components/menuCategories/Category4';
import Singleproduct from '@/components/quickView/Singleproduct'
import Image from 'next/image'


const MenuPage = () => {
  const [showSingle, setSingle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  
  const handleQuickViewClick = (menu) => {
    setSingle(true);
    setSelectedMenu(menu);
  };
  return (
    <>
    <div className='text-center mt-20'>
      
      <SectionHeaders mainheader={'Fresh Fruit Juice'}></SectionHeaders>
      <div className='mb-20'>
      <Category1 onQuickViewClick={handleQuickViewClick}/>
      </div>

      <SectionHeaders mainheader={'Smoothies'}></SectionHeaders>
      <div className='mb-20'>
      <Category2/>
      </div>

      <SectionHeaders mainheader={'Milkshakes'}></SectionHeaders>
      <div className='mb-20'>
      <Category3/>
      </div>

      <SectionHeaders mainheader={'Mojito'}></SectionHeaders>
      <div className='mb-20'>
      <Category4/>
      </div>
       
       <Singleproduct isVisible = {showSingle} onClose={() => setSingle(false)}>
       {selectedMenu && (
          <>
          <SectionHeaders
          mainheader={selectedMenu.name}>

          </SectionHeaders>
            <Image src={selectedMenu.image} width={300} height={200} />
            <p>LKR {selectedMenu.price}</p>
          </>
        )}
        </Singleproduct>
    </div>
    </>
  );
};

export default MenuPage;
