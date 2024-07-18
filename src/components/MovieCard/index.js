import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar,FaLanguage } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { SiAffinitypublisher } from "react-icons/si";
import './index.css'

//below function component is a list of a movie
const MovieCard = props=>{
    const [imageUrl,setImage] = useState('')
    const {movies} = props
    const{alreadyReadCount,
        authorAlternativeNames,
        authorName,
        currentReadCount,
        editionCount,
        firstPublishYear,
        publishYear,
        publishPlace,
        publisher,
        language,
        person,
        place,
        title,
        ratingsCount,
        ratingsAverage,
    } = movies
    
    //the below variable are set because some details are not described in the api if the data is undefined it is set as dataUnavailabe if not render the detail
    const author1 = authorAlternativeNames === undefined?"Data unavailable":authorAlternativeNames.join(', ')
    const publishyear1 = publishYear === undefined?"Data unavailable":publishYear.join(', ')
    const publishplace1 = publishPlace === undefined?"Data unavailable":publishPlace.join(', ')
    const publisher1 = publisher === undefined?"Data unavailable":publisher.join(", ")
    const languages1 = language === undefined?"Data unavailable":language.join(', ')
    const person1 = person === undefined?"Data unavailable":person.join(', ')
    const places1 = place === undefined?"Data unavailable":place.join(', ')
    
    // it is used to generate the image for every movie Detail
    const onImage = async()=>{
        const url = "https://dog.ceo/api/breeds/image/random"
        const response = await axios.get(url)
        if(response.data.status === "success"){
            setImage(response.data.message)
        }
        else{
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaYTaC-q-QWUu2g7QgVvRKkJkqXjXtjBU2w&s")
        }
    }

    useEffect(()=>{
        onImage()
        // eslint-disable-next-line
    },[])
return(
    <li className='movie-list'>
        <h1 className='title'>{title}</h1>
        <img src={imageUrl} alt="randomImages" className='image'/>
        <p className='sub-headings'>Author Name: <span className='main-details'>{authorName}</span></p>
        <p className='sub-headings'>Already Read Count: {alreadyReadCount===undefined?<span className='main-details'>Data unavailable</span>:<span className='main-details'>{alreadyReadCount}</span>}</p>
        <p className='sub-headings'>Current Read Count: {currentReadCount===undefined?<span className='main-details'>Data unavailable</span>:<span className='main-details'>{currentReadCount}</span>}</p>
        <p className='sub-headings'>Edition Count: {editionCount===undefined?<span className='main-details'>Data unavailable</span>:<span className='main-details'>{editionCount}</span>}</p>
        <p className='sub-headings'>First Publish Year{firstPublishYear===undefined?<span className='main-details'>Data unavailable</span>:<span className='main-details'>{firstPublishYear}</span>}</p>
        <p className='sub-headings'>Publish Year <SiAffinitypublisher/> : <span className='main-details'>{publishyear1}</span></p>
        <p className='sub-headings'>Publish Places <FaLocationPin/> : {<span className='main-details'>{publishplace1}</span>}</p>
        <p className='sub-headings'>Publishers <SiAffinitypublisher/> : {<span className='main-details'>{publisher1}</span>}</p>
        <p className='sub-headings'>Languages <FaLanguage/> : {<span className='main-details'>{languages1.toUpperCase()}</span>}</p>
        <p className='sub-headings'>Persons: {<span className='main-details'>{person1}</span>}</p>
        <p className='sub-headings'>AuthorAlternativeNames: <span className='main-details'>{author1}</span></p>
        <p className='sub-headings'>RatingsCount <FaStar/> : {ratingsCount === undefined?<span className='main-details'>Data unavailable</span>:<span>{ratingsCount}</span>}</p>
        <p className='sub-headings'>RatingAverage <FaStar/> :{ratingsAverage === undefined?<span className='main-details'>Data unavailable</span>:<span>{ratingsAverage}</span>}</p>
        <p className='sub-headings'>Places <FaLocationPin/> : {<span className='main-details'>{places1}</span>}</p>
    </li>
)
}
export default MovieCard