import React from 'react'
import domtoimage from 'dom-to-image';
import parse from "html-react-parser";
import {saveAs} from 'file-saver';
import { connect } from 'react-redux'
import Describe from './describe'

class Post extends React.Component{
        state={
            user:"coding.genius_",
            url:""
        }
        downloadimage=(i,design)=>{
            // const node=this[`d-${i}`].current;
            const node= document.querySelectorAll(".pid");
            // node[i].classList.add(`${design}-show`);
            domtoimage.toBlob(node[i]).then(function(blob){
                saveAs(blob,`post-${i}.png`);
                // node[i].classList.remove(`${design}-show`);
            }).catch(err=>{console.log("ERROR: "+err)});
        }
        componentDidMount(){
            fetch("https://www.instagram.com/"+this.state.user+"/?__a=1").then(result=>{
                return result.json();
            }).then(data=>{
                this.setState({
                    url:data.graphql.user.profile_pic_url,
                });
                console.log(data.graphql.user.profile_pic_url_hd);
            }).catch(err=>{
                console.log("pranshu: "+err);
            })
        }
    render(){
        this.allpost=this.props.posts;
        return(
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} className="home">
            <div className="aboutthis">
                About this web app: This is a web app created by me to easily create posts for platform like instagram and upload them after downloading it. I have created many designs so that every posts doesn't look redundent. I have created a server from where I add, delete, manage posts and their designs.
                This app development is in progress and its features are currently not publicly available. You can only see the posts that I have made using this app.
            </div>
              {this.allpost.map((item,i)=>(
                  <div key={i}>
                  <div className={item.design+" pid"} style={{backgroundColor:(item.design.includes("simple-"))?item.right:"",color:(item.design.includes("simple-"))?item.left:""}}ref={this[`d-${i}`]}>
                  <div className="id">
                        <div>
                        <img alt="" src={this.state.url}/>
                        </div>
                        <div>
                            <div className="name">Pranshu Jain</div>
              <div className="iname">@{this.state.user}</div>
                        </div>
                    </div>
                    {item.title&&(<div className="title">{parse(item.title)}</div>)}
                    <Describe design={item.design} description={item.description}/>
                    <div className="table">
                    {item.left&&(<div className="left">{parse(item.left)}</div>)}
                    {item.right&&(<div className="right">{parse(item.right)}</div>)}
                    </div>
                  </div>
                  <button onClick={()=>{this.downloadimage(i,item.design)}}>DOWNLOAD</button>
                  </div>
              ))}  
            </div>
        )
    }
}
// {/* <div className="id">By Pranshu</div> */}

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject",
const statetoprop=(state,prop)=>{
    return {
        posts:state.posts
    };
}

export default connect(statetoprop)(Post);
