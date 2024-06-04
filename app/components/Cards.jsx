import React from 'react'
import Link from 'next/link'
import './Cards.css'

function Cards() {
  return (
    <div className='d-flex flex-md-row flex-lg-row w-100 gap-5 flex-column  '>
        <div className='card card-sm card-lg' >
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVQ4CbTzCCbc940X9udvl96GWQq6L7DusdQFJLRCkFyNfuUGQH' className='card-img'/>
            <div className='card-body'>
                <h5 className='card-title' style={{color:'#0000FF'}}>Vikas khanna</h5>
                <p className='card-text'>In his autobiography "Buried Seeds," Chef Vikas Khanna shares his journey from humble beginnings in Amritsar to international culinary stardom. Through tales of resilience and innovation, Khanna reveals his deep-rooted passion for Indian cuisine and his commitment to using <Link href="/About" className='text'><span style={{color:'#0000FF'}}>See more</span></Link></p>
            </div>
        </div>
        <div className='card card-sm card-lg' >
            <img src='https://media.cnn.com/api/v1/images/stellar/prod/210211141204-05-classic-italian-dishes.jpg?q=w_1110,c_fill' className='card-img'/>
            <div className='card-body'>
                <h5 className='card-title' style={{color:'#0000FF'}}>Italian Cuisine</h5>
                <p className='card-text'>Italian cuisine is celebrated for its diverse flavors and regional specialties, ranging from rich pastas like spaghetti and lasagna to flavorful risottos and aromatic pizzas. With a focus on fresh ingredients, bold spices, and traditional cooking techniques <Link href='/Italian' className='text'><span style={{color:'#0000FF'}}>See more</span></Link></p>
            </div>
        </div>
        <div className='card card-sm card-lg' >
            <img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/Khandvi.jpg?tr=w-400' className='card-img'/>
            <div className='card-body'>
                <h5 className='card-title' style={{color:'#0000FF'}}>Authentic Gujarati Dish</h5>
                <p className='card-text'>Khandvi is a savory Gujarati snack made from gram flour (besan), yogurt, and spices. The batter is cooked until thick, spread thinly on a surface, and rolled into bite-sized pieces once set. It is seasoned with mustard seeds, curry leaves, and grated coconut, offering a delicate texture<Link href='/GujaratiDish' className='text'><span style={{color:'#0000FF'}}>See more</span></Link></p>
            </div>
        </div>
        <div className='card card-sm card-lg' >
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Dahi_puri%2C_Doi_phuchka.jpg' className='card-img'/>
            <div className='card-body'>
                <h5 className='card-title' style={{color:'#0000FF'}}>Indian Street Food</h5>
                <p className='card-text'>India's street food scene is incomplete without the vibrant and flavorful array of chaats. From the tangy-spicy explosion of pani puri to the creamy richness of dahi puri, these bite-sized snacks are beloved for their tantalizing mix of textures and flavors. Chaats,<Link href='/Chaat' className='text'><span style={{color:'#0000FF'}}>See more</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Cards