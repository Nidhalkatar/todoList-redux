import { DELETE,DONE,ADD,FILTER,FILTREDTODOS } from "./ActionTypes";

export const deleteHandler=(ID)=>{
    return{
        type:DELETE,
        payload:ID
    }
}


export const doneHandler=(ID)=>{
    return{
        type:DONE,
        payload:ID
    }
}
export const addHandler=(newTodo)=>{
    return{
        type:ADD,
        payload:newTodo
    }
}
export const filter =(status)=>{
    return {
        type:FILTER,
        payload:{status}

    }
}

export const filterHandler =()=>{
          return {
              type:FILTREDTODOS
           
          }
      }
      export const complet =(ID)=>{
        return {
            type:'COMPLET',
            payload:ID
          
        }
    }
