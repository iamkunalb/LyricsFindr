import * as React from 'react';
import './App.css';
// import SnackbarContent from '@material-ui/core/SnackbarContent';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Display from "./components/Display";
import Form from "./components/Form";

// import { Right } from '../node_modules/@types/react-bootstrap/lib/Media';

interface IState{
  artist: any,
  lyrics: any,
  song: any
  
}

class App extends React.Component<{}, IState>{
  
  constructor(props:any){
    super(props);

    this.state = {
      artist: "",
      lyrics: "",
      song: ""
    }

  }


  public lyricsFunc = async (x: any) => { 
    x.preventDefault();
    const artist = x.target.elements.artist.value;
    const song = x.target.elements.song.value; 
    const result = await fetch(`https://orion.apiseeds.com/api/music/lyric/:${artist}/:${song}?apikey=sgc3rROE0Z0ju7qAXJL6cpI5UN9Xw4h3CT97PnKO7ej9UDpsAubk8BGcjVe3yMQJ`);
    const info = await result.json();
    if (info.error) {
      this.setState({
        artist: "Error",
        lyrics:  "Song Lyrics Not Found",
        song: "404"
      });
    }else{
      if (info.result.artist.name && info.result.track.name && info.result.track.text){
        this.setState({
          artist: info.result.artist.name,
          lyrics: info.result.track.text,
          song: info.result.track.name
        });
      }
    }
  }
  

  public render() {
    return (
      <div>
        <Form lyricsFunc={this.lyricsFunc}/>
        <Display
          artist = {this.state.artist}
          lyrics = {this.state.lyrics}
          song = {this.state.song}
        />
      </div>
    );
  }
}

export default App;