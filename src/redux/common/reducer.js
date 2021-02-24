
const initState   =     {
    isProgress:false,
    error:null,
    success:null,
    header: [{label: 'Recruitment'}, {label: 'Offshore'},{label: 'Hire Developer'},{label: 'About us'},{label: 'Careers'}]
}
export  function commonReducer(state=initState,action){
    switch(action.type){
        default:
            return state;
    }
}