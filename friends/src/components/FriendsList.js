import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

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
        <section>
            {info.map(friend =>
                <div key ={friend.id}>
                    <h3>Name: {friend.name}</h3>
                    <h4>Age: {friend.age}</h4>
                    <h5>Email" {friend.email}</h5>
                </div>
            )}
        </section>
        
    )

}
export default FriendsList;