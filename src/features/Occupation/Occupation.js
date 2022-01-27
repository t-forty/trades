import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Occupation.css'

// MATERIAL
import Button from '@mui/material/Button';
// REDUX
import { connect } from 'react-redux'
// COMPONENTS
import Loading from '../loading/Loading'

const axios = require('axios')
const B_TOKEN = "lxx3xBb9QkjgwWcMG7+q48Ll7B9qWAAIAcP+4IoNWv1sJr2vqNktORT+kUfXhSqKphk0aW3sxHqIUwFTWGiBcQ=="
const API_ID = "paUZLn1nDViasZB"

function Occupationx(props) {
    let navigate = useNavigate()
    const params = useParams()
    const API_URL = 'https://api.careeronestop.org/v1/jdw/'+API_ID+'/'+params.code+'/'+props.state+'/0'
    const [API, setAPI] = useState(null)
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
                setAPI(response)
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
        };
        fetchData()
    }, []);

   let Job = API !== null ? API.data : null
    return (
     <>
        {!API && <Loading />}
        {API && 
        <article className='jdw-article'>
            <section className='jdw-section'>
                <div className='jdw-button-container'>
                    <Button 
                        variant="outlined" 
                        size="small"     
                        onClick={ () => { navigate("/jobs/"+Job.Purpose.OnetTitle) }}
                        >search for {Job.Purpose.OnetTitle} Jobs
                    </Button>
                </div> 
                <div className='jdw-post'>
                    <div key={Job.Purpose.OnetTitle}>
                        <h1>{Job.Purpose.OnetTitle}</h1> 
                        {Job.Purpose.OnetCode && 
                            <div>
                                
                                <p>{Job.Purpose.OnetDesc}</p>
                                <div dangerouslySetInnerHTML={{ __html: Job.Task }} />
                                <h2>Skills:</h2>
                                {Job.SkillsList.map((skill) => (
                                    <div key={skill.ElementId}dangerouslySetInnerHTML={{__html: skill.Content}} />
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <div className='jdw-button-container'>
                    <Button 
                        variant="outlined" 
                        size="small"     
                        onClick={ () => { navigate("/jobs/"+Job.Purpose.OnetTitle) }}
                        >search for {Job.Purpose.OnetTitle} Jobs
                    </Button>
                </div> 
            </section>
        </article> } 
     </>
    )  
}

const mapStateToProps = (state) => {
    return { 
        state: state.location.state, 
        zip: state.location.zip
    }
}

export default connect(mapStateToProps)(Occupationx)
