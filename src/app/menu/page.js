import React from 'react';
import SectionHeaders from "@/components/SectionHeaders"
import Category1 from '@/components/menuCategories/Category1'
import Category2 from '@/components/menuCategories/Category2';
import Category3 from '@/components/menuCategories/Category3';
import Category4 from '@/components/menuCategories/Category4';

const MenuPage = () => {
  return (
    <>
    <div className='text-center mt-20'>
      
      <SectionHeaders mainheader={'Fresh Fruit Juice'}></SectionHeaders>
      <div className='mb-20'>
      <Category1/>
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

    </div>
    </>
  );
};

export default MenuPage;
