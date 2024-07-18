import style from 'styled-components'

export const Navcontainer = style.nav`
    @media only screen and (min-width:1280px){
    background-image:linear-gradient(to left,#d3f5e7,#7dd2e3);
    width:100%;
    height:10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    }
    @media only screen and (max-width:1279px){
        background-image:linear-gradient(to left,#d3f5e7,#7dd2e3);
        min-width:100%;
        height:10vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;   
    }
    @media only screen and (max-width:767px){
        background-image:linear-gradient(to left,#d3f5e7,#7dd2e3);
        min-width:100%;
        height:10vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;   
    }
    @media only screen and (max-width:575px){
        background-image:linear-gradient(to left,#d3f5e7,#7dd2e3);
        min-width:100%;
        height:10vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;   
    }
    @media only screen and (max-width:375px){
        background-image:linear-gradient(to left,#d3f5e7,#7dd2e3);
        min-width:100%;
        height:10vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;   
`

export const MovieInputContainer = style.div`
@media only screen and (min-width:1280px){
    width:400px;
    display: flex;
}
@media only screen and (max-width:1279px){
    width:350px;
    display:flex;
}
@media only screen and (max-width:767px){
    width:300px;
    display:flex;
}
`
export const MovieInput = style.input`
@media only screen and (min-width:1280px){
    width:410px;
    padding: 8px;
    border:none;
    border-radius: 2px;
}
@media only screen and (max-width:1279px){
    width:310px;
    padding: 10px;
    border:none;
    border-radius: 2px;
}
`
export const SearchButton = style.button`
@media only screen and (min-width:1280px){
    width:80px;
    padding:5px;
    font-family:Roboto;
    border:none;
    cursor:pointer;
}
@media only screen and (max-width:1279px){
    width:50px;
    padding:5px;
    font-family:Roboto;
    border:none;
    cursor:pointer;
}
`
export const PrimaryContainer = style.div`
@media only screen and (min-width:1280px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`
export const StatusContainer = style.div`
@media only screen and (min-width:1280px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width:1279px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
export const Movieunlist = style.ul`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 0px;
`
export const LoadingContainer = style.div`
@media only screen and (min-width:1280px){
    padding-top:50px;
    padding-left: 40px;
}
`
export const NoresultsImage = style.img`
@media only screen and (min-width:1280px){
    width:900px;
    height:500px;   
    }
    @media only screen and (max-width:1279px){
        width: 270px;
        height:300px;
    }
`
export const Failure = style.div`
padding-top: 30px;
`
