import React from 'react'
import Image from 'next/image'
const watches = () => {

const watchData =[
  {id:1, name:"olevs next level",price:15000, description:"Luxry watch",image:'/w11.jpg'},
  {id:2, name:"rolex",price:500000, description:"Luxry and important gold",image:'/w4.jpg'},
  {id:3, name:"olevs",price:19999, description:"best choice for love",image:'/w-6.jpg'},
  {id:4, name:"evrest",price:45000, description:"brand new ",image:'/w7.jpg'},
  {id:5, name:"us brand",price:99999, description:"best option in your life",image:'/w9.jpg'},
  {id:6, name:"omega",price:3999, description:"decent look",image:'w10.jpg'},



]

  return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
          <div key={watch.id} className='watch-card'>
          <Image src={watch.image} alt={watch.name}/>
         <h3>{watch.name}</h3>
         <p>{watch.description}</p>
         <div className='price'>${watch.price}</div>
         <button>Add to Card</button>
          </div>


        ))}
      </div>
    </div>
  )
}

export default watches