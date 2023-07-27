import React, { useEffect, useState } from 'react';
import useStyles from './styleForm';
import {TextField, Button, Typography, Paper} from '@mui/material'; 
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Form= ( { currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post=useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles(); 
    const dispatch = useDispatch();

    useEffect(() => {
      if(post) setPostData(post);
    }, [post])
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if(currentId){
          dispatch(updatePost(currentId, postData));
        }
        else
        {
        dispatch(createPost(postData)); 
        }
        clear();
    }
    const clear=() => {
      setCurrentId(null);
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        <Paper className={classes.paper} elevation={8}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant = "h6">{currentId ? 'Editing' : 'Creating' } a memory</Typography>
                <TextField name="creator" variant="filled" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
                <TextField name="title" variant="filled" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField name="message" variant="filled" multiline rows={4} label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
                <TextField name="tags" variant="filled" label="Tags (comma seperated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/></div>
               <div className={classes.bttn}> 
                  <Button variant="contained" color="primary" size="medium" type="submit" endIcon={<SendIcon />}>Submit</Button>
                  <Button variant="outlined" color="secondary" size="small" onClick={clear} startIcon={<DeleteIcon />}>Clear</Button>
                </div>
              </form>

        </Paper>
    );
}

export default Form;