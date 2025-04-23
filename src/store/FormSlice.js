import {createSlice} from '@reduxjs/toolkit'
const formData=createSlice({
    name:"formData",
    initialState:{
       form: {
        first_name:"",
        last_name:""
        ,company_name:""
        ,phone_number:""
        ,user_email:""
        ,subject_title:""
        ,message:""
    }
        ,debouncing:localStorage.getItem('debouncing') == "true",
        LastTime:localStorage.getItem('last_time')?parseInt(localStorage.getItem('last_time')):null,
        TimeRemaining:Math.ceil((60000 - parseInt(localStorage.getItem('last_time'))) / 1000) || null
        
    },
    reducers:{
         setData:(state,action)=>{
            state.form={...state.form,...action.payload}
         },
         setDebounce:(state,action)=>{
            state.debouncing=action.payload
         }
         ,
         setTime:(state,action)=>{
            state.LastTime=action.payload
         },
         setTimeRemaining:(state,action)=>{
            state.TimeRemaining=action.payload
         }
    }

})
console.log(formData.getInitialState())
export default formData.reducer;
export const {setData,setDebounce,setTime,setTimeRemaining}=formData.actions