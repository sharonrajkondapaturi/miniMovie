import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar,FaLanguage } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { SiAffinitypublisher } from "react-icons/si";
import './styledComponents.js'
import { Dogimage, MainDetails, MovieList, SubHeadings, Title } from './styledComponents.js';

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
    <MovieList >
        <Title>{title}</Title>
        <Dogimage src={imageUrl} alt="randomImages"/>
        <SubHeadings >Author Name: <MainDetails>{authorName}</MainDetails></SubHeadings>
        <SubHeadings >Already Read Count: {alreadyReadCount===undefined?<MainDetails >Data unavailable</MainDetails>:<MainDetails >{alreadyReadCount}</MainDetails>}</SubHeadings>
        <SubHeadings >Current Read Count: {currentReadCount===undefined?<MainDetails >Data unavailable</MainDetails>:<MainDetails >{currentReadCount}</MainDetails>}</SubHeadings>
        <SubHeadings >Edition Count: {editionCount===undefined?<MainDetails >Data unavailable</MainDetails>:<MainDetails >{editionCount}</MainDetails>}</SubHeadings>
        <SubHeadings >First Publish Year{firstPublishYear===undefined?<MainDetails >Data unavailable</MainDetails>:<MainDetails >{firstPublishYear}</MainDetails>}</SubHeadings>
        <SubHeadings >Publish Year <SiAffinitypublisher/> : <MainDetails >{publishyear1}</MainDetails></SubHeadings>
        <SubHeadings >Publish Places <FaLocationPin/> : {<MainDetails >{publishplace1}</MainDetails>}</SubHeadings>
        <SubHeadings >Publishers <SiAffinitypublisher/> : {<MainDetails >{publisher1}</MainDetails>}</SubHeadings>
        <SubHeadings >Languages <FaLanguage/> : {<MainDetails >{languages1.toUpperCase()}</MainDetails>}</SubHeadings>
        <SubHeadings >Persons: {<MainDetails >{person1}</MainDetails>}</SubHeadings>
        <SubHeadings >AuthorAlternativeNames: <MainDetails >{author1}</MainDetails></SubHeadings>
        <SubHeadings >RatingsCount <FaStar/> : {ratingsCount === undefined?<MainDetails >Data unavailable</MainDetails>:<MainDetails>{ratingsCount}</MainDetails>}</SubHeadings>
        <SubHeadings >RatingAverage <FaStar/> :{ratingsAverage === undefined?<MainDetails >Data unavailable</MainDetails>:<MainDetails>{ratingsAverage}</MainDetails>}</SubHeadings>
        <SubHeadings >Places <FaLocationPin/> : {<MainDetails >{places1}</MainDetails>}</SubHeadings>
    </MovieList>
)
}
export default MovieCard