// ~. Styled Components ~~~~~~~~~~
import {
    FooterInforsCategories,
    FooterInforsCategory,
    FooterInfors,
    FooterGithub,
    GroupFTR,
    ItemFTR
} from '@/UI/partials/styled.tsx';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~. Heroicons - icon
import {EnvelopeIcon} from '@heroicons/react/24/outline';
// ~~~~~~~~~~~~~~~~~~~



export default ()=>
([
    <FooterInfors>
        <FooterInforsCategory>
            <h1 className='text-[24px] text-[#8ab7ff]'>PostWeb</h1>
            <p className='text-[18px]'>mfsdffdfdsfdfdfsfksdfçldfkdsdasdkll mfsdffdfdsfdfdfsfksdfçldfkdsdasdkll mfsdffdfdsfdfdfsfksdfçldfkdsdasdkll</p>
        </FooterInforsCategory>        

        <FooterInforsCategories>
            <FooterInforsCategory>
                <h1 className='text-[24px] text-[#8ab7ff]'>Social Media</h1>
                <p className='text-[18px]'>Linkedin</p>
                <p className='text-[18px]'>Instagram</p>
                <p className='text-[18px]'>Github</p>
            </FooterInforsCategory>

            <FooterInforsCategory>
                <h1 className='text-[24px] text-[#8ab7ff]'>Contact</h1>
                <p className='text-[1&px]'>talisonsilva<br/>profissional<br/>@gmail.com</p>
                <p className='text-[18px]'>088992251439</p>            
            </FooterInforsCategory>

            <FooterInforsCategory>
                <h1 className='text-[24px] text-[#8ab7ff]'>Roadmap</h1>
                <p className='text-[18px]'>Home</p>
                <p className='text-[18px]'>Posts</p>
                <p className='text-[18px]'>Users</p>
            </FooterInforsCategory>
        </FooterInforsCategories>
    </FooterInfors>,
    <FooterGithub>
        <p>Created by Talison-Silva ~ 2024</p>
    </FooterGithub>
])