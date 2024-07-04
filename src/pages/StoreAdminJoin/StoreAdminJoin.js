import React, {useEffect} from 'react';
import axios from 'axios';

import {
    Container,
    
 } from './style';
const StoreAdminJoin = () => {
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/open-api/store/temp`, {
                    
                });
                console.log(response.data);
            } catch (error) {
                console.log('에러');
            }
        };
        getData();
    }, []);
    return (
        <>
            <Container>
               
            </Container>
        </>
    );
};

export default StoreAdminJoin;