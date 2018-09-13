
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const Form = (props:any) => (
    <div className="allofit">
        <AppBar position="static" style={{backgroundColor: '#2c6c8c'}}>
            <Toolbar>
            <Typography variant="title" color="inherit" className="heade">
                LyricFindr
            </Typography>
            </Toolbar>
        </AppBar>
        <form onSubmit={props.lyricsFunc}>
            <input className="text" name="artist" placeholder="Artist Name"/>
            <input id="song" name="song" className="text" placeholder="Song Name"/>
            <button className="search">Search</button> 
        </form>
    </div>
);

export default Form;