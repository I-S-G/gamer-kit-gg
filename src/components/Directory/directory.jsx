import DirectoryItems from "../../category-data.json";
import DirectoryItem from '../Directory Item/directory-item';
import { DirectoryItemsContainer} from "./directory.styles";

const Directory = () => {
    return(
        <DirectoryItemsContainer>
            {
                
                DirectoryItems.map((item) => {
                    return(
                        <DirectoryItem item = {item} key = {item.id} />
                    )
                })
        
            }
        </DirectoryItemsContainer>
    )
}

export default Directory;