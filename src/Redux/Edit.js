import { EDIT } from "./ActionTypes"
const EditHandler = (ID, textInput) => {
    return {
        type : EDIT,
        payload : {ID, textInput}
        
    }
}
export default EditHandler