// ~. Styled Components ~~~~~~~~~~
import {
    InformationsSRS,
    ContainerSRS,
    RightSRS,
    PhotoSRS,
    LeftSRS,
    DateSRS
} from '@/UI/partials/styled.tsx';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export default ({users,date})=>
(
	<ContainerSRS>
        <LeftSRS children={
        	<PhotoSRS src={`http://localhost:3005/${users.photo}`}/>
        }/>
        <RightSRS>
            <InformationsSRS>
                <h1 className="font-extrabold text-2xl">{users.username}</h1>
                <p className="mt-2 text-xl">{users.me}</p>
            </InformationsSRS>
            <DateSRS>
            	{date}
            </DateSRS>
        </RightSRS>
    </ContainerSRS>
)