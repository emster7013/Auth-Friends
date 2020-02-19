import React, {useState, useContext} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FriendsContext } from '../context/FriendsContext';


const AddFriend= () =>{

    const {Friends, setFriends} = useContext(FriendsContext)
    const [postForm, setPostForm] = useState({
        name: '',
        age: '',
        email: ''
    });
    const handleChange = (e) => {
        setPostForm({...postForm, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(Friends);
        axiosWithAuth()
        .post('/friends', postForm)
        .then(res =>{
            console.log(res)
            setPostForm({
                name: '',
                age: '',
                email: ''
            })
            setFriends([...Friends, res.data])
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div>
        
        <form onSubmit={handleSubmit}>
            <h3>Add A New Friend</h3>
            <input 
            type='text'
            name='name'
            placeholder='name'
            value={postForm.name}
            onChange={handleChange}
            /><br/>

            <input 
            type='text'
            name='age'
            placeholder='age'
            value={postForm.age}
            onChange={handleChange}
            />
            <br/>

            <input 
            type='email'
            name='email'
            placeholder='email'
            value={postForm.email}
            onChange={handleChange}
            />
            <br/>
            <button type='submit'>Add</button>
        </form>
        </div>
    )
};


export default AddFriend;