
const initState   =     {
    isProgress:false,
    error:null,
    success:null,
    header: [{label: 'Recruitment', link: '/'}, {label: 'Offshore', link: '/off-shore'},{label: 'Hire Developer',  link: '/off-shore'},{label: 'About us',  link: '/off-shore'},{label: 'Careers',  link: '/off-shore'}]
}
export  function commonReducer(state=initState,action){
    switch(action.type){
        default:
            return state;
    }
}