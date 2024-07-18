import style from 'styled-components'

export const MovieList = style.li`
@media only screen and (min-width:1280px){
    list-style: none;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to top, #8cc7d1,#e2b1e3);
    border-radius:10px;
    padding: 20px;
    margin-bottom:20px;
    overflow-y: scroll;
    min-width: 600px;
    max-width:600px;
    }
    @media only screen and (max-width:1279px){
        list-style: none;
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(to top, #8cc7d1,#e2b1e3);
        border-radius:10px;
        padding: 20px;
        margin-bottom:20px;
        overflow-y: scroll;
        min-width: 900px;
        max-width:900px;
}
@media only screen and (max-width:1023px){
    list-style: none;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to top, #8cc7d1,#e2b1e3);
    border-radius:10px;
    padding: 20px;
    margin-bottom:20px;
    min-width: 700px;
    max-width:700px;
}

@media only screen and (max-width:767px){
    list-style: none;
    display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top, #8cc7d1,#e2b1e3);
            border-radius:10px;
            padding: 20px;
            margin-bottom:20px;
            overflow-y: scroll;
            min-width: 600px;
            max-width:600px;
            height:1100px
        }
@media only screen and (max-width:575px){
            list-style: none;
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top, #8cc7d1,#e2b1e3);
            border-radius:10px;
            padding: 20px;
            margin-bottom:20px;
            overflow-y: scroll;
            min-width: 300px;
            max-width:300px;
            height:800px
        }
        @media only screen and (max-width:375px){
            list-style: none;
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top, #8cc7d1,#e2b1e3);
            border-radius:10px;
            padding: 20px;
            margin-bottom:20px;
            overflow-y: scroll;
            min-width: 280px;
            max-width:280px;
            height:600px;
        }
`
export const Dogimage = style.img`
@media only screen and (min-width:1280px){
    width:400px;
    height:300px;
    align-self:center;
}
@media only screen and (max-width:1279px){
    width:300px;
    height:300px;
    align-self:center;
}
@media only screen and (max-width:767px){
    width:300px;
    height:200px;
    align-self:center;
}
@media only screen and (max-width:567px){
    width:200px;
    height:200px;
    align-self:center;
}
`
export const SubHeadings = style.p`
font-family:cursive;
    font-size:24px;
    font-weight: 550;
`
export const MainDetails = style.span`
font-family: Roboto;
    font-size:24px;
    color:#ffffff;
`
export const Title = style.h1`
font-family:cursive;
color:#000000;
font-weight: bold;
text-align: center;
`