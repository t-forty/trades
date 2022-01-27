import React, { useState, useEffect} from 'react';
// REDUX
import { connect } from 'react-redux'
// MATERIAL UI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom'
// COMPONENTS
import Loading from '../loading/Loading'

const axios = require('axios')
const B_TOKEN = "lxx3xBb9QkjgwWcMG7+q48Ll7B9qWAAIAcP+4IoNWv1sJr2vqNktORT+kUfXhSqKphk0aW3sxHqIUwFTWGiBcQ=="
const API_ID = "paUZLn1nDViasZB"

const navigate = (url) =>{
  window.open(url)
};

function Job(props) {
  const params = useParams()
    const API_URL = 'https://api.careeronestop.org/v1/jobsearch/'+API_ID+'/'+params.trade+'%20apprentice/'+props.zip+'/40/0/0/0/40/60?source=NLx&showFilters=false'                                                                      
    const [Data, setData] = useState({ })
    useEffect(() => {
        const fetchData = async () => {    
            const config = {
                method: 'get',
                url: API_URL,
                headers: { 
                  'Authorization': 'Bearer ' + B_TOKEN 
                }
            };
            await axios(config)
            .then(function (response) {
                setData(response);
                console.log(response)
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
        };
        fetchData()
    }, []);
  return (
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          mx: 'auto',
          width: '80%',
          height: 'auto',
          pt: 1,
          pb: 1,
          display: 'flex',
          alignItems: 'center'
        },
      }}
    >
        {!Data.status &&   
          <Loading />          
        }
        {Data.data && <>
        {Data.data.Jobs.map((job) => (
          <Paper 
            key={job.JvId} elevation={1} 
            sx={{ 
              pl: 10, 
              borderRadius: 0,
              display: 'flex',
              flexWrap: 'wrap'  
            }}
            >
            <Box sx={{ width: '60%'}}>
              <Button size="large" sx={{ mr: 5, pl: 0 }} onClick={ () => {
                    navigate(job.URL) 
                }}>{job.JobTitle}</Button>
              <Typography sx={{ fontSize: 15, color: 'text.secondary' }}>{job.Company} - {job.Location}</Typography>
            </Box>
            <Typography  sx={{ fontSize: 15, color: 'text.secondary', width: '20%'}}>{job.AccquisitionDate}</Typography>
            <Button variant="outlined" size="small" onClick={ () => {
                  navigate(job.URL) }} sx={{ ml: 3}}>learn more</Button>
          </Paper>
        ))}
        </> }
    </Box>
  );
}
const mapStateToProps = (state) => {
  return { 
      state: state.location.state, 
      zip: state.location.zip
  }
}

export default connect(mapStateToProps)(Job)