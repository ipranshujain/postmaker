
const reducer=(state={menu:false,posts:[]},action)=>{
    switch(action.type){
        case "DISPLAY_MENU":
            return {
                ...state,
                menu:!state.menu,
            }
        case "ADD_POSTS":
            return {
                ...state,
                posts:action.posts
            }
        default:
            return state;
        }
}
export {reducer};