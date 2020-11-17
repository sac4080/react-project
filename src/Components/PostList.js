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
            loaded:false
        }
    }

    componentDidMount(){
        unsplash.photos.listPhotos(1, 100, "latest")
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
              <div className="column">
                <div className="row">
                  <div className="myImg">
                   <li>
                     <img src={element.urls.regular}
                     alt={element.alt_description}
                     title={element.alt_description}/>
                     
                    </li>
              </div></div></div>
             );
         });

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
