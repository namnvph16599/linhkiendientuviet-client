'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const listImg:string[] = [
  'https://cdn.pixabay.com/photo/2021/08/02/05/17/sunflower-6515860_1280.jpg','https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png','https://anvientv.com.vn/uploads/upload/1673574526_hinh-nen-hoa-tulip-anvien.jpg','https://i1-dulich.vnecdn.net/2021/07/16/7-1-1626444923.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=1wDOcOPXJz8dNyWGp0e_hA'
];

const Home = () => {
  const [img,setImg] = useState('https://cdn.pixabay.com/photo/2021/08/02/05/17/sunflower-6515860_1280.jpg');
  const [imageLoaded, setImageLoaded] = useState(false);
  const changeImage = (imageInfo:string)=>{
    setImageLoaded(true);
    setTimeout(() => {
      setImg(imageInfo);
      setImageLoaded(false);
    }, 500);

  };
  return <div>
    <div>
      <Image src={img} alt="" width={500} className={`product-image ${imageLoaded ? 'image-loaded' : ''}`}
        height={500}/>
    </div>
    <div className='my-1 flex gap-1'>
      {
        listImg.map((item:string,index:number)=>( <div key={index} className={`cursor-pointer ${item == img ? 'border-2 border-solid border-green-800' : 'border-2 border-solid'} `} onClick={()=>changeImage(item)}>
          <Image src={item} alt="" width={100}
            height={100} />
        </div>)
        )
      }
    </div>

  </div>;
};

export default Home;
