import React, { Component } from 'react'

import Unsplash, { toJson } from 'unsplash-js';

import Masonry from 'react-masonry-component';

const unsplash = new Unsplash({ accessKey: "t56lYPrZgJLZjLrhC7WF3ZpXnQ4Bh1ppbU_IZmQWXZw",
                                secret: "X50JfmCT5Ykqp5ElJ1kaPNVVZ7sYOqXrbdoV188WObg" });

const masonryOptions = {
    transitionDuration: 0
 };
const imagesLoadedOptions = { background: '.my-bg-image-el' }
class  PostList extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[{"urls":"lol"}],
            loaded:false,
            showModal:0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(id) {
        this.setState({
            showModal:id
        });
    }

    handleClose() {
        this.setState({
            showModal:-1
        })
    }

    componentDidMount(){
        unsplash.photos.listPhotos(1, 1000, "latest")
        .then(toJson)
        .then(json => {
         console.log(json);
         this.setState({
                posts:json,
                loaded:true
        })

    });
    
    }
    
    render(){

        const childElements = this.state.posts.map(function(element){

            return (
              <div className="column" >
                <div className="row">
                    
                        <div className="myImg">
                         <li>
                            <img src={element.urls.regular}
                            alt={element.alt_description}
                            title={element.alt_description}
                            onClick={() => this.handleClick(element.id)}
                            />
                            {
                                this.state.showModal===element.id && (
                                    <dialog
                                        className="dialog"
                                        open
                                        style={{zIndex:10 , position:'absolute', top:0,left:0, backgroundColor:'black'}}
                                        onClick={this.handleClose}
                                    >
                                        <img src={element.urls.regular}
                                        alt={element.alt_description}
                                        title={element.alt_description}
                                        style={{width:500, height:500}}
                                        />
                                        
                                    </dialog>
                                )
                            }
                        </li>
                        </div>
                  
              </div></div>
             );
         }.bind(this));

         if(!this.state.loaded)
            return(
                <div>
                    loading ....
                </div>
            )

        return(
            <div>
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>

            </div>
        )
    }
}


export default PostList
