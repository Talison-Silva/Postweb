import styled from 'styled-components'

/*

<section className="w-full h-10 font-black">
    <nav className="w-full h-full flex justify-around items-center">
        <ul className="py-6 px-10 min-w-min h-full flex items-center gap-16 select-none rounded-full shadow shadow-[#5a6363]">
            <li>
                <button
                    className="uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1"
                onClick={()=>{navigate('/')}}>raiz</button>
            </li>
            <li>
                <button
                    className="uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1"
                onClick={()=>{navigate('/postagens/')}}>Postagens</button>
            </li>
            <li>
                <button
                    className="uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1"
                onClick={()=>{navigate('/usuarios/')}}>Usuarios</button>
            </li>
        </ul>
    </nav>
</section>

*/

// ---| Header |-------------------------------------------
// ---| Footer |-------------------------------------------

export const InformationsFooter=styled.article``

export const ContainerFooter=styled.footer`
    min-height:56px;
    padding:40px;

    background-color:#68217A;
    color:white;

    font-family:'Ubuntu Mono',monospace;

    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const GroupFooter=styled.ul`
    display:flex;
    flex-direction:column;
    gap:8px;
`

export const ItemFooter=styled.li`
    display:flex;
    align-items:center;
    gap:12px;
`

// ---| Navigate |-----------------------------------------

// w-full h-10 font-black
export const ContainerNVGT=styled.section`
    width:100%;
    height:40px;

    font-style:bold;
`
//w-full h-full flex justify-around items-center
export const NavigationNVGT=styled.nav`
    width:100%;
    height:100%;

    display:flex;
    justify-content:space-around;
    align-items:center;
`
//py-6 px-10 min-w-min h-full flex items-center gap-16 select-none rounded-full shadow shadow-[#5a6363]
export const GroupNVGT=styled.ul`
    padding: 24px 40px 24px 40px;
    min-width:min-content;height:100%;
    display:flex;
    align-items:center;
    gap:64px;
    user-select:none;
    border-radius:10px;
    box-shadow:0 0 5px #5a6363;
`

export const ItemNVGT=styled.li`
`
//uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1
export const ButtonNVGT=styled.button`
    text-transform:uppercase;
    outline:none;
    color:white;
    font-family:'Ubuntu Mono',monospace;
    letter-spacing:.3125rem;
`

// ---| Container-items |----------------------------------