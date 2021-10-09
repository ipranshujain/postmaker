import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {connect} from 'react-redux'
class Headbar extends React.Component{
    componentDidMount(){

    }
    render(){
        
        return(
            <div className="headbar">
                <div onClick={()=>this.props.dispatch({type:"DISPLAY_MENU"})}><AiOutlineMenu size={40}/></div>
                <div className="myname">PranshuPOST</div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>
{    
 return {}
}

export default connect(mapStateToProps)(Headbar);