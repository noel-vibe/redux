let initialState={
    count :0,
    id:"",
    password:""
    
}


function reducer(state=initialState,action){
    console.log("action",action)
    //if(action.type === "INCREMENT"){
    //    return{ ...state, count:state.count +1};
    //}
    switch(action.type){
        case "INCREMENT":
                return{ ...state, count:state.count + action.payload.num};
        case "LOGIN":
            return {...state,id:action.payload.id,password:action.payload.password}
        case "DECREMENT":
            return {...state,count:state.count -action.payload.num}    
            
            default:
                return{ ...state};
}}

export default reducer