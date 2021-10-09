import React from 'react'
import Describe from './describe';
import parse from "html-react-parser";
import {saveAs} from 'file-saver';
import domtoimage from 'dom-to-image';
import Designs from '../utils/designs';
export default class Postadd extends React.Component{
    myRef = React.createRef();
    state={
        design:"simple-4",
        title:"Pranshu Jain",
        description:"I am a Computer Science Student, I love coding, I love to create things that provide some value to society. I am in my continuous journey of learning. <pi>:)</pi><br/>Try to <g>write</g> something on the form and see the magic! <br/><br/>You can create from multiple <y>design</y> avaiable. <br/>Development in <vi>progress.</vi>",
        left:"",
        right:""
    }
    changeValue(e){
        if(e.target.name=="design"){
            this.setState({
                design:e.target.value
            });
        }else if(e.target.name=="title"){
            this.setState({
                title:e.target.value
            });
        }
        else if(e.target.name=="description"){
            this.setState({
                description:e.target.value
            });
        }else if(e.target.name=="left"){
            this.setState({
                left:e.target.value
            });
        }
        else if(e.target.name=="right"){
            this.setState({
                right:e.target.value
            });
        }
        
            console.log();
   
    }
    downloadImage(){
        const node = this.myRef.current;
           domtoimage.toBlob(node).then(function(blob){
               saveAs(blob,`post-download.png`);
           }).catch(err=>{console.log("ERROR: "+err)});
    }
    designs
    render(){
        let title = this.state.title;
        let description = this.state.description;
        let left = this.state.left;
        let right = this.state.right;
        let design = this.state.design;
        return(
            <div class="idesigner">
            <div>
            <div class="posthead">WRITE HERE</div>
            <form class="addpost" action="/post/addpost" method="POST">
            {/* <input onChange={(e)=>this.changeValue(e)} type="text" name="design" placeholder="Enter Design" required/> */}
            <select onChange={(e)=>this.changeValue(e)} type="text" name="design" placeholder="Enter Design" required>
                {
                    Designs.map((design,i)=>(
                    (i!=3)&&
                    <option key={i}>{design}</option>
                    ||<option key={i} selected>{design}</option>
                    ))
                }
                
            </select>
            <textarea onChange={(e)=>this.changeValue(e)}type="text" name="title" placeholder="Enter Title"></textarea>
            <textarea onChange={(e)=>this.changeValue(e)} type="text" name="description" placeholder="Enter Description"></textarea>
            <textarea onChange={(e)=>this.changeValue(e)}type="text" hint="Kuch nhi" name="left" placeholder="Enter Left"></textarea>
            <textarea onChange={(e)=>this.changeValue(e)}type="text" name="right" placeholder="Enter Right"></textarea>
            <button>Add Post to Catalog</button>
            
            </form>
            <button style={{color:'black', width:'50%', margin:'10px',marginLeft:'65px', padding:"10px", background:"pink", fontFamily:'monospace'}}onClick={()=>this.downloadImage()}>DOWNLOAD POST</button>
            <a className="viewall" href="/allpost">View All Posts made using this application</a>
            </div>
            {/* Start of Image Display */}
            <div className="designkaro">
            <div  ref={this.myRef} className={this.state.design+" pid"} style={{backgroundColor:(this.state.design.includes("simple-"))?this.state.right:"",color:(this.state.design.includes("simple-"))?this.state.left:""}} >
                {title&&(<div className="title">{parse(title)}</div>)}
                <Describe design={design} description={description}/>
                <div className="table">
                {left&&(<div className="left">{parse(left)}</div>)}
                {right&&(<div className="right">{parse(right)}</div>)}
                </div>
                </div>
            </div>
            
            </div>
        )
    }
}
{/* <div className="id">
                    <div>
                    <img alt="" src={this.state.url}/>
                    </div>
                    <div>
                        <div className="name">Pranshu Jain</div>
                        <div className="iname">@{this.state.user}</div>
                    </div>
                </div> */}
// ref={this[`d-${i}`]}
// onClick={()=>{this.downloadimage(i,design)}}