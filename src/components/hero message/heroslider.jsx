import React from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
// import imgg from "src\assets\hero\portrait-beautiful-shopaholic-with-shopping-bags_329181-978-removebg-preview.png" 

const ImageList = [
    {
        id :1 ,
        img :'https://static.vecteezy.com/system/resources/previews/008/475/566/original/beautiful-young-asian-woman-with-shopping-bags-file-png.png',
        title : "Upto 50% off on all Womens's Wear ",
        discription :  "Upgrade your wardrobe with our exclusive sale! Enjoy up to 50% off on all Women’s Wear. Shop trendy dresses, chic tops, and more – limited time only. Don’t miss out!",
        route:"/WomensWear"  
   },
   {
    id :2 ,
    img :'https://th.bing.com/th/id/R.c3cb57f520c2cffb425d1a3cc4adc06a?rik=p7GugeHFym0bCg&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f1%2fPeople-Shopping-Holding-Bag-Royalty-Free-PNG.png&ehk=V3luBoSh72YU0R8ugMsPp9fIJoeibduOoLmyaNlVV4s%3d&risl=&pid=ImgRaw&r=0',
    title : "Upto 30% off on all Mens's Wear ",
    discription :  "Revamp your style with our exclusive sale! Enjoy up to 30% off on all Men’s Wear. Shop dapper shirts, cool jackets, and more – limited time only. Don’t miss out!",
    route:"/mensWear" 
},
{
    id :3,
    img :'https://static.vecteezy.com/system/resources/previews/017/217/102/original/70-percent-off-sale-discount-offer-price-tag-special-offer-sale-3d-render-png.png',
    title : "Upto 70% off on all Electronics sale ",
    discription : "Upgrade your tech game with our massive sale! Enjoy up to 70% off on Electronics. Shop the latest gadgets, accessories, and more – limited time only. Grab the deals before they're gone!",
     route:"/Electronics"
},
]



const hero = () => {

  var settings ={
     dots:false , 
     arrows :false ,
     infinite : true ,
     speed : 800 , 
     slidesToScroll :1 ,
     autoplay : true ,
     autoplayspeed:4000,
     cssEase : "ease-in-out",
     pauseOnHover:false,
     pauseOnFocus:true
  }


  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ' >
        {/* background pattern */}
         <div className=' h-[700px] w-[700px] bg-blue-400 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
         
         </div>
         {/* hero section */}
         <div className='container pb-8  sm:pb-0  ' >
           <Slider {...settings} >
          {
             ImageList.map((item)=>{
                   return <div key={Math.random()*Math.random()}>
                    

                   <div className='grid grid-cols-1 sm:grid-cols-2' key={item}>
                       {/* text content section */}
                       <div className='flex flex-col justify-center gap-4  sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ' key={item}>
                           <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'> {item.title} </h1>
                           <p className='text-sm'>{item.discription}  </p>
                       <div>
                       <button className='bg-gradient-to-r bg-blue-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now </button>
   
                       </div>
                       </div>
                       {/* image content section */}
                       <div className='order-1 sm:order-2' >
                            <div  >
                                <img src={item.img} alt=''
                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain  ' />
                            </div>
                       </div>
                   </div>
          
               </div>
               
            })
          }


            
            </Slider> 
         </div>
         </div>
  )
}

export default hero