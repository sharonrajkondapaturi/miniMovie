import {useState,useEffect} from 'react'
import {MagnifyingGlass} from 'react-loader-spinner'
import axios from 'axios'
import { IoSearchSharp } from "react-icons/io5";
import MovieCard from '../MovieCard'
import './index.css'

//the below object apiStatus is to set the status of the page
const apiStatus = {
    initial:"INITIAL",
    inProgress:"IN_PROGRESS",
    success:"SUCCESS",
    failure:"FAILURE"
}
//It is a function Component which i have used hook's concept and axios
const Home = ()=>{
    const [currentApiStatus,setApiStatus] = useState(apiStatus.initial)
    const [search,setSearch] = useState('')
    const [movieDetails,setDetails] = useState([])
 //onRender is used to fetch the data

    const onRender = async()=>{
        setApiStatus(apiStatus.inProgress)
        const moviesUrl = `https://openlibrary.org/search.json?q="${search}"`
        const response = await axios.get(moviesUrl)
        if(response.status === 200){
            const movieData = response.data.docs.map(eachData=>({
                alreadyReadCount:eachData.already_read_count,
                currentReadCount:eachData.currently_reading_count,
                title:eachData.title,
                authorName: eachData.author_name,
                authorAlternativeNames:eachData.author_alternative_name,
                language:eachData.language,
                person:eachData.person,
                place:eachData.place,
                editionCount:eachData.edition_count,
                ratingsCount:eachData.ratings_count,
                ratingsAverage:eachData.ratings_average,
                firstPublishYear:eachData.first_publish_year,
                publishYear:eachData.publish_year,
                publishPlace:eachData.publish_place,
                publisher:eachData.publisher
            }))
            setDetails(movieData)
            setApiStatus(apiStatus.success)
        }
        else{
            setApiStatus(apiStatus.failure)
        }
    }
  
    // when the user enters the value it stores in search variable
    const onSearch = event=>{
        setSearch(event.target.value)
    }

   //it is a loading screen 
    const onProgress = ()=>(
        <div className='loading-container'>
        <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
            />
        </div>
        )
    
    //it is a success page when the user click the search icon and the data is successfully fetched
    const onSuccess =()=>{
        return(
        <ul className='movie-unlist'>
            {movieDetails.length !==0? movieDetails.map(eachMovie=>
         <MovieCard movies={eachMovie}/>
        ):<div>
            <img src="https://static.tildacdn.net/tild3432-3335-4337-b130-363866343062/No_results_1.svg"
            alt="no-results-found"
            className='no-results'
            />
            <p style={{textAlign:"center"}}>Type the movie in the search bar</p>
        </div>}
       
        </ul>
        )
    }
    //it is a failure page where data is not fetched succesfully
    const onFailure =()=>(
        <div className='failure'>
            <img src="https://img.freepik.com/premium-vector/error-404-page-computer-failure-oops-concept-website-template-with-flat-line-male-character-illustration-warning-failure-404-page-internet-website-message_53562-11805.jpg"
            alt="failure-image"
            className="no-results"
            />
        </div>
    )

    //it is used to call when the apiStatus is changed
    const onRenderStatus = ()=>{
        switch(currentApiStatus){
            case apiStatus.inProgress:
                return onProgress()
            case apiStatus.success:
                return onSuccess()
            default:
                return onFailure()
        }
    }

    useEffect(()=>{
        onRender()
        // eslint-disable-next-line
    },[])

    return(
        <div className='background'>
            <nav className='nav-container'>
                <div className='movie-input-container'>
                <input className="movie-input" type="search" value={search} onChange={onSearch} placeholder='Movies'/>
                <button type="button" onClick={()=>onRender()} className='search-button'><IoSearchSharp/></button>
                </div>
            </nav>
            <div className='primary-containers'>
            <div className='status-container'>
            {onRenderStatus()}
            </div>
        </div>
        </div>
    )
}

export default Home