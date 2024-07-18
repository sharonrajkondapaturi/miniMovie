import {useState,useEffect} from 'react'
import {MagnifyingGlass} from 'react-loader-spinner'
import axios from 'axios'
import { IoSearchSharp } from "react-icons/io5";
import MovieCard from '../MovieCard'
import { Navcontainer,MovieInput, MovieInputContainer, PrimaryContainer, SearchButton, Failure, Movieunlist, NoresultsImage, LoadingContainer,StatusContainer } from './styleComponents.js';

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
        <LoadingContainer>
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
        </LoadingContainer>
        )
    
    //it is a success page when the user click the search icon and the data is successfully fetched
    const onSuccess =()=>{
        return(
        <Movieunlist>
            {movieDetails.length !==0? movieDetails.map(eachMovie=>
         <MovieCard movies={eachMovie}/>
        ):<div>
            <NoresultsImage src="https://static.tildacdn.net/tild3432-3335-4337-b130-363866343062/No_results_1.svg"
            alt="no-results-found"
            />
            <p style={{textAlign:"center"}}>Type the movie in the search bar</p>
        </div>}
       
        </Movieunlist>
        )
    }
    //it is a failure page where data is not fetched succesfully
    const onFailure =()=>(
        <Failure>
            <img src="https://img.freepik.com/premium-vector/error-404-page-computer-failure-oops-concept-website-template-with-flat-line-male-character-illustration-warning-failure-404-page-internet-website-message_53562-11805.jpg"
            alt="failure-image"
            />
        </Failure>
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
        <div>
            <Navcontainer>
                <MovieInputContainer>
                <MovieInput  type="search" value={search} onChange={onSearch} placeholder='Movies'/>
                <SearchButton type="button" onClick={()=>onRender()}><IoSearchSharp/></SearchButton>
                </MovieInputContainer>
            </Navcontainer>
            <PrimaryContainer>
            <StatusContainer>
            {onRenderStatus()}
            </StatusContainer>
           </PrimaryContainer>
        </div>
    )
}

export default Home