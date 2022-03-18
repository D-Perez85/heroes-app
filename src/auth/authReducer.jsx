import { types } from "../types/types";

export const authReducer = (state=[], action) =>{
    switch (action.type) {
        case types.login:
            return{
                name: action.payload.name, //Opcion A
                // ...action.payload, //Opcion B
                logged: true

            } 
            case types.logout:
                return{
                    logged: false
                }          
            default: 
            return state; 

    }
}