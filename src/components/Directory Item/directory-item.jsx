import { DirectoryItemContainer, BackgroundImageContainer, DirectoryBody } from "./directory-item.styles";
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({item}) => {
    
    const { name, imgUrl } = item;

    const navigate = useNavigate();

    const handleNavigate = () => navigate(`/shop/${name.toLowerCase()}`);

    return(
        <DirectoryItemContainer onClick = {handleNavigate} >
            <BackgroundImageContainer imgUrl = {imgUrl} />
            <DirectoryBody>
                <p>{name}</p>
                <p>Shop Now</p>
            </DirectoryBody>
         </DirectoryItemContainer>
    )
}

export default DirectoryItem;