import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

function UserData(props) {
    const { Moralis } = useMoralis();
    const [udata, setUdata] = useState([]);
    const User = Moralis.Object.extend("User");
    const query = new Moralis.Query(User);

    useEffect(async () => {
        query.equalTo("objectId", props.id); 
        let data = await query.find();
        data = JSON.parse(JSON.stringify(data)); 
        setUdata(data);
    }, []);
 

    return (
        <div>
             {
                 udata && udata.map((e)=>{
                     console.log(e,"ee");
                     return (
                         <div></div>
                     );
                 })
             }
        </div>
    );
}

export default UserData;
