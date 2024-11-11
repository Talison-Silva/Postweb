import styled from 'styled-components'

// Form-SingUp

// -- select 
export const Birthdate=styled.div`
    position:relative;
    width:100%;min-height:72px;
    padding: 8px;
    border:2px dashed #232323;
    border-radius:5px;
    user-select:none;
    //color:#44474A;
    
    display:flex;
    //flex-direction:column;
    //justify-content:space-between;
    //border:1px solid #44474A;
    gap:10px;
    color:white;

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';        
    }

    select * {
        background-color:black;
        color:white;        
    }

    select *:hover{
        background-color:red;
    }

    div{
        position:relative;
        width:100%;
        height:100%;
        border:1px solid #414238;
        border-radius:5px;
        background-color:#272822;  
    }    

    small{
        position:absolute;
        top:2px;
        left:10px;      
        font-family:'Roboto Mono',monospace;
        font-weight:600;
        font-size:10px;
        color:white;
    }
`

// biography
export const SignUpbiography=styled.div`
    width: 100%;
    //height: 256px;
    padding:3px;
    margin-top:3px;
    
    //border:1px solid #44474A;
    border:2px dashed #232323;
    border-radius:10px;
    background-color:transparent;
    padding:8px;
    color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:4px;
`

export const Content=styled.div`
    width: 100%;
    //height: 256px;
    padding:3px;
    margin-top:3px;
    
    //border:1px solid #44474A;
    border:2px dashed #232323;
    border-radius:10px;
    background-color:transparent;
    padding:8px;
    color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:4px;

    .viewer{
        position:relative;
        width:532px;
        height:281px;
        background-color:#070808;
        //border:2px solid #232323;
        border-radius:10px;
        padding:8px;
        overflow-x:hidden;
        overflow-y:auto;

        font-family:'Roboto Mono',monospace;
        color:white;
    }

    .editor{        
        width:532px;
        height:281px;     
        resize:none;
        outline: 2px solid transparent;
        outline-offset: 2px;

        font-family:'Roboto Mono',monospace;

        //padding:10px;

        //border:1px solid purple;     
        border-radius:10px;
        background-color:#272822;

        display:flex;
        flex-direction:column;
    }

    .line{    
        position:relative;
        width:532px;
        min-height:30px;
        

        font-family:'Roboto Mono',monospace;        

        //border:1px solid red;
        //border-radius:10px;
        background-color:#272822;      

        display:flex;
    }

    .line-input
    {
        padding: 0 0 0 10px;
        width:100px;
        min-height:min-content;        
        background-color:red;//transparent;
        resize:none;        
        outline: 2px solid transparent;
        outline-offset: 2px;
    }

    .line-number{
        width: 30px;
        height: 100%;
        background-color: #141411;
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;
    }


    .viewer h1{
        font-size:32px;        
    }

    .viewer h2{
        font-size:28px;
    }

    .viewer h3{
        font-size:24px;
    }

    .viewer h4{
        font-size:20px;
    }

    .viewer h5{
        font-size:16px;
    }

    .viewer h6{
        font-size:12px;
    }

    .viewer p{
        font-size:10px;
    }

    .viewer strong{
        font-weight:950;
        text-transform: uppercase;
    }

    .viewer img
    {
        margin-top:10px;
        width:100%;             
    }
`


export const SignUpBiographyTextarea=styled.textarea`
    //width:100%;
    //height:100%;
    width:532px;
    height:281px;
    //background-color:transparent;
    resize:none;
    outline: 2px solid transparent;
    outline-offset: 2px;

    font-family:'Roboto Mono',monospace;

    padding:10px;

    //border:1px solid #414238;
    border-radius:10px;
    background-color:#272822;  
`


// options
export const Gender=styled.div`
    width: 100%;
    min-height: 72px;
    padding:10px 10px 10px 10px;
    
    //border:1px solid #44474A;
    font-family:'Roboto Mono',monospace;
    border:2px dashed #232323;
    border-radius:5px;
    color:#44474A;

    display:flex;
    gap:10px;

    button
    {
        width:100%;
        height:100%;        
        border:1px solid #414238;
        border-radius:5px;
        background-color:#272822;  
        color:white;
        padding:0 20px 0 20px;

        display:flex;
        justify-content:space-between;
        align-items:center;
    }

`


export const ProfilePicture=styled.div`
    position:relative;
    width:142px;
    height:142px;
    border-radius:50%;        
    overflow:hidden;
    background-color:#272822;
    border:2px dashed #414238;

    div
    {
        width:142px;
        height:142px;     
        background-position:center;
        background-size:cover;
    }

    input
    {
        opacity:0;
        position:absolute;
        top:0;left:0;
        width:142px;
        height:142px;
    }
`

export const Emphasis=styled.div`    
    width:min-content;
    height:min-content;
    padding:6px;    
    border:2px dashed #232323;
    border-radius: 10px;

    display:flex;
    flex-direction:column;
    gap:2px;
    

    div.load-emphasis
    {
        position:relative;
        width:550px;
        height:250px;
        overflow:hidden;
        border-radius: 10px;
        background-color:#272822;
        border:2px dashed #414238;
    }
    .render-emphasis
    {
        width:550px;
        height:250px;
        background-position:center;
        background-size:cover;
    }
    .upload-emphasis
    {
        opacity:0;
        position:absolute;
        top:0;left:0;
        width:550px;
        height:250px;        
    }
`