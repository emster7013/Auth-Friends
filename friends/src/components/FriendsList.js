import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';
import AddFriend from './AddFriend';

const FriendzSty = styled.div `
width: 60%;
background: #D3D3D3;
border: 5px solid orchid;
margin: 0 auto;
`
const FriendCard = styled.div`
display: flex;
justify-content: center;
color: purple;
bottom-border: 5px;
background: #b19cd9;
width: 40%;
margin: 10px auto;
`

const FriendsList = () =>{
    const [info, setInfo] =useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get('/friends')
        .then(res =>{
            console.log('this is where your API is', res.data);
            setInfo(res.data);
        })
        .catch(err =>{
            console.log('uh oh, you found an error', err);
        });
    }, []);
    console.log(info)

    return(
        <FriendzSty>
        <section>
        <h1>My friends</h1>
            {info.map(friend =>
                <div key ={friend.id}>
                    <FriendCard>
                    <h3>Name: {friend.name}</h3>
                    <h4>Age: {friend.age}</h4>
                    <h5>Email: {friend.email}</h5>
                    </FriendCard>
                    {/* <button onClick={() => handleDelete(person.id)}>Remove Friend</button> */}
                </div>
            )}
            <AddFriend/>
        </section>
        </FriendzSty>   
    )

}
export default FriendsList;