import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAbvgEHVf8MeWzZjbMrRCW8pTwigUJwjMM';

//Create new component. This JS must produce some html
class App extends Component { //es6 syntax of declaring = function() {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
    }

    videoSearch(term) {
//pass in object 'key' with API_KEY and the term 'surfboards', then we pass a second argument with the function holding the response data 'console.log(data)'. i.e. we pass in configuration options and get a callback.
YTSearch({ key: API_KEY, term: term}, (videos) => {
    this.setState({
         videos: videos,
    selectedVideo: videos[0] 
}); 
});
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos}/>
            </div>
        ); //this js gets turned into html 
    }
}

// Take this component's generated html and put it in the DOM (show on the page)
ReactDOM.render(<App />, document.querySelector('.container')); //instantiate App using <App />