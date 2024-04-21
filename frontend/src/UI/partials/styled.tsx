import styled from 'styled-components'


// ---| Header |-------------------------------------------


/*

<header className="w-full h-16" style={{backgroundColor:"rgba(7, 8, 8,.4125)"}}>
    <div className="px-10 w-full h-full backdrop-blur-lg">
      <div className="relative w-full h-full flex justify-around items-center">
        <label className="flex gap-5 items-center select-none">
            <button onClick={()=>{navigate('/')}} className="w-7 h-7 border-white border-solid border-8 rounded-full"/>
            <p className="font-ubuntuMono text-white uppercase font-bold text-2xl">postweb</p>
        </label>

        <div className="min-w-min min-h-min flex gap-3">
            <Navigate/>
            <button onClick={actionCreated} type="button" className="p-2.5 w-40 bg-white rounded-full uppercase font-bold">{created[1]}</button>
        </div>

        <div className="relative min-w-40 h-12 select-none">
          <div className="flex justify-center items-center gap-3">
              <article className="z-50 min-w-min min-h-min">
                  <p className="font-bold text-nowrap text-white uppercase" style={{fontSize:"13px"}}>{response.username}</p>
                  <p className="text-green-500 text-center" style={{fontSize:"11px"}}>online</p>
              </article>
              <img onClick={()=>{setPanelaccount(!panelaccount)}} width="45" src={`http://localhost:3005/${response.photo}`} style={{clipPath:"circle(40%)"}} className="z-50 cursor-pointer"/>
          </div>
           {panelaccount && <ul onMouseLeave={()=>{setPanelaccount(!panelaccount)}} className="absolute z-10 py-3 top-full right-auto w-40 min-h-10 bg-[#0B0D0D] flex flex-col justify-center items-center border-2 border-solid border-[#141717] gap-3 rounded-lg">
               <li>
                  <button type="button" onClick={()=>{logOut()}} className="text-red-500 font-bold font-ubuntuMono uppercase">logout</button>
               </li>
               <li>
                  <button type="button" className="text-white font-bold font-ubuntuMono uppercase">profile</button>
               </li>
           </ul>}
        </div>
      </div>
    </div>
</header>

*/ 

// w-full h-16" style={{backgroundColor:"rgba(7, 8, 8,.4125)"}} + px-10 w-full h-full backdrop-blur-lg +
// relative w-full h-full flex justify-around items-center
export const ContainerHDR=styled.header`    
    position:fixed;
    top:0;left:0;
    width:100%;
    height:64px;
    padding:0 40px 0 40px;
    background-color:rgba(7, 8, 8,.0125);
    backdrop-filter:blur(15px); 

    display:flex;
    justify-content:space-around;
    align-items:center;
`
// flex gap-5 items-center select-none
export const LogoHDR=styled.div`
    user-select:none;
    display:flex;
    align-items:center;
    gap:20px;
`
// w-7 h-7 border-white border-solid border-8 rounded-full
export const LogoCircleHDR=styled.button`
    width:28px;
    height:28px;
    border:10px solid white;
    border-radius:50%;
`
// font-ubuntuMono text-white uppercase font-bold text-2xl
export const LogoTitleHDR=styled.p`
    font-family:'Ubuntu Mono',monospace;
    text-transform:uppercase;
    font-style:bold;
    font-size:24px;
    color:white;    
`
// relative min-w-40 h-12 select-none
export const ActionsHDR=styled.div`
    position:relative;
    min-width:min-content;
    height:min-content;
    user-select:none;
`

// min-w-min min-h-min flex gap-3
export const NavigationHDR=styled.div`
    min-width:min-content;
    min-height:min-content;
    display:flex;gap:3;
`
// p-2.5 w-40 bg-white rounded-full uppercase font-bold
export const DinamicButtonHDR=styled.button`
    padding:9px;
    width:160px;
    background: linear-gradient(45deg,transparent,#262B2B,transparent,#262B2B);
    border:1px solid #262B2B;
    color:#d9d9d9;
    letter-spacing:.125rem;
    border-radius:15px;
    text-transform:uppercase;
    font-family:'Ubuntu Mono',monospace;
    font-style:bold;
`
// flex justify-center items-center gap-3
export const AccountHDR=styled.div`
    min-width:min-content;
    min-height:min-content;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:12px;    
`
//z-50 min-w-min min-h-min
export const AccountInforHDR=styled.article`
    min-width:min-content;
    min-height:min-content;
`
// style={{clipPath:"circle(40%)"}} className="z-50 cursor-pointer"
export const AccountPhotoHDR=styled.img`
    width:45px;height:45px;
    clip-path: circle(40%);
    cursor: pointer;
`
// ---| Footer |-------------------------------------------

export const ContainerFTR=styled.footer`
    min-height:56px;
    padding:40px;

    background-color:#68217A;
    color:white;

    font-family:'Ubuntu Mono',monospace;

    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const InformationsFTR=styled.article``

export const GroupFTR=styled.ul`
    display:flex;
    flex-direction:column;
    gap:8px;
`

export const ItemFTR=styled.li`
    display:flex;
    align-items:center;
    gap:12px;
`

// ---| Navigate |-----------------------------------------

export const NavigationNVGT=styled.nav`
    width:100%;
    height:40px;
    font-style:bold;

    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const GroupNVGT=styled.ul`
    padding: 24px 40px 24px 40px;
    min-width:min-content;height:100%;
    display:flex;
    align-items:center;
    background: linear-gradient(45deg,transparent,#262B2B,transparent,#262B2B,transparent,#262B2B,transparent,#262B2B);
    border:1px solid #262B2B;
    gap:64px;
    user-select:none;
    border-radius:10px;    
`

export const ItemNVGT=styled.li``

export const ButtonNVGT=styled.button`
    text-transform:uppercase;
    outline:none;
    color:white;
    font-family:'Ubuntu Mono',monospace;
    letter-spacing:.3125rem;
`

// ---| Users |--------------------------------------------

export const ContainerSRS=styled.div`
    width:100%;min-height:256px;
    background-color: #0B0D0D;
    border: 4px solid #141717;
    border-radius: 0 24px 24px 0;
    user-select:none;
    display:flex;
`

export const LeftSRS=styled.div`
    position:relative;
    width:256px;height:256px;
    background-color:#070808;
    border-radius: 24px;
`

export const RightSRS=styled.div`
    position:relative;
    padding:0 96px 0 96px;
    width:100%;
    min-height:100%;
    display:flex;
`

export const PhotoSRS=styled.img`
    position:absolute;
    right: -40px;
    width:150px;
    height:150px;
    clip-path: circle(40%);
`

export const InformationsSRS=styled.article`
    margin-top:24px;
    color:white;
    font-family:'Ubuntu mono',monospace;
`

export const DateSRS=styled.p`
    position:absolute;
    right:0;
    width: min-content;height:100%;
    font-family:'Ubuntu mono',monospace;
    font-weight:800;
    text-align: center;
    text-transform:uppercase;
    color:#303838;
    padding:0 4px 0 4px;
    writing-mode:vertical-lr;
    text-orientation: upright;

`


// ---| Postagens |----------------------------------------

export const ContainerPTS=styled.section`
    position:relative;
    width: 800px;
    height:400px;
    overflow:hidden;

    background-color:#0b0d0d;
    border:4px solid #141717;
    border-radius:40px;

    display:grid;
    grid-template-columns:40% 60%;
`

export const LeftPTS=styled.div`
    position:relative;
    width:100%;height:100%;
    background-color:#0b0d0d;
`

export const RightPTS=styled.div`
    width:100%;height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const InformationsPTS=styled.article`
    width:100%;
    height:100%;
    padding:32px;
    background-color:#090a0a;
    color:white;
    user-select:none;
    letter-spacing: 0.025em;
    font-family:'Ubuntu Mono',monospace;

    display:flex;
    flex-direction:column;
    gap:20px;
`

export const AreaButtonPTS=styled.div`
    width:100%;
    height:48px;

    border-radius: 0 0 32px 0;
    overflow:hidden;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ButtonPTS=styled.button`
    width:100%;
    height:100%;

    background-color:#101212;
    color:white;

    font-family:'Ubuntu Mono',monospace;
    text-transform:uppercase;
    letter-spacing: 0.025em;
    user-select:none;  
`

export const ClosePTS=styled.button`
    position:absolute;
    width:24px;height:24px;
    top:24px;left:24px;
    background-color:#DC2626;
    border-radius:50%;
`

export const AccountPTS=styled.div`
    position:absolute;
    left:0;bottom:0;
    min-width:min-content;
    min-height:min-content;
    padding:24px;

    display:flex;
    align-items:center;
    gap:20px;
`

export const AccountPhotoPTS=styled.img`
    width:64px;
    height:64px;
    border-radius:50%;
    user-select:none;
`

export const AccountInforPTS=styled.article`
    color:white;
    user-select:none;
    min-width:min-content;
    font-family:'Ubuntu Mono',monospace;
`

export const AccountInforSpanPST=styled.span`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    gap:8px;
`