import { ADD, DELETE, DONE,FILTER,FILTREDTODOS} from "./ActionTypes";
import { EDIT } from "./ActionTypes";

const initialState = {
  todos: [
     { text: "TASK 1", ID: 1, isDone: false },
    { text: "TASK 2", ID: 2, isDone: false }, 
  ],
  task:[],
  filter:"All",
  filtredTodos: [],
  test:"test"
};

  export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.ID !== action.payload),
      };
    case DONE:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.ID === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      case EDIT :
            return {
                ...state,
                todos : state.todos.map(el=> el.ID===action.payload.ID? {...el, text:action.payload.textInput}:el )
            }
            case FILTER: 
            return {
              ...state,
              filter:action.payload.status
                    }
            
            case FILTREDTODOS:
              return{
                ...state,
                filtredTodos: state.filter==="Done"? state.todos.filter(el=>el.isDone===true):
                              state.filter==="NotYET"? state.todos.filter(el=>el.isDone===false):
                              state.filter==="All"?state.todos:null
              } 
    default:
      return state;
  }
};
