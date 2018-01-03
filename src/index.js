import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBxyTEKoH2fEoQKb0vefZoMr4JkOBZ8qyQ";

class App extends Component {
    constructor(props){
        super(props)
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: "surfboards"}, (videos) =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}
    
const app = document.querySelector(".container");
ReactDOM.render(<App />, app)
// export default App;