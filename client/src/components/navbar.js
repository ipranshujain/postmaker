import React from 'react'
// import {Link} from 'react-router-dom'
import { GrClose } from "react-icons/gr";
import {connect} from 'react-redux';
class Navbar extends React.Component{
    list=[{name:"Home",hlink:"/"},{name:"Read Blogs",hlink:"https://thepranshujain.herokuapp.com/blogs"},{name:"Know Me",hlink:"https://thepranshujain.herokuapp.com"},{name:"Contact Me",hlink:"https://thepranshujain.herokuapp.com/contact"}];
    componentDidMount(){
    }
    render(){
        const displayclass=(this.props.menu?"navbardisplay":" ")+" navbar";
        return(
            <div className={displayclass}>
                <ul>
                    <li onClick={()=>this.props.dispatch({type:"DISPLAY_MENU"})}><GrClose size={30}/></li>
                    {this.list.map((item,i)=>(
                        <li key={i}><a href={item.hlink}>{item.name}</a></li>
                    ))}
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>
{    
    return {
        menu:state.menu
    }
}
export default connect(mapStateToProps)(Navbar);
