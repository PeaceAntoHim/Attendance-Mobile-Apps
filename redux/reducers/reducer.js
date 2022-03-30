
const INITIAL_STATES = {
    username: '',
    
    loader: false,
    email : '',
    uid : '',
    auth: false,
    allStudents: [],
    present : []
  ,uri:'',
    error:''
}

export default function (state = INITIAL_STATES, action) {

    switch (action.type) {
        case 'Error':
            return({
                ...state,
                error:action.payload
            })
        case "CHANGE_LOADER":
            return ({
                ...state,
                loader: !state.loader
            })
        case "LOGGEDIN_USER":
            return ({
                ...state,
                email: action.payload.email,
                username: action.payload.name,
                uid: action.payload.uid,
                auth : true,
            })
        case "URI":
            return ({
                ...state,
                uri:action.payload
            })

            case "LIST_USERS":
                // alert(action.payload)
            return ({
                ...state,
                allStudents : action.payload,
            })
            case "PRESENT":
                // alert(action.payload)
            return ({
                ...state,
                present : action.payload,
            })
            case "LIST_USERS":
                // alert(action.payload)
            return ({
                ...state,
                allStudents : action.payload,
            })
        default:
            return state;
    }

}