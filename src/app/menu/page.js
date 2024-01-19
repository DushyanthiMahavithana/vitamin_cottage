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
      <SectionHeaders mainheader={'Category 1'}></SectionHeaders>
      <div>
      <Category1/>
      </div>
      <SectionHeaders mainheader={'Category 2'}></SectionHeaders>
      <div>
      <Category2/>
      </div>
      <SectionHeaders mainheader={'Category 3'}></SectionHeaders>
      <div>
      <Category3/>
      </div>
      <SectionHeaders mainheader={'Category 4'}></SectionHeaders>
      <div>
      <Category4/>
      </div>
    </div>
    </>
  );
};

export default MenuPage;
