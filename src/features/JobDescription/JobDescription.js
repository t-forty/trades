import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

/**
 * TRY: replacing html tags in JSON response, with MUI tags
 */

const  axios = require('axios')
const B_TOKEN = "lxx3xBb9QkjgwWcMG7+q48Ll7B9qWAAIAcP+4IoNWv1sJr2vqNktORT+kUfXhSqKphk0aW3sxHqIUwFTWGiBcQ=="
const API_ID = "paUZLn1nDViasZB"
//const API_URL = 'https://api.careeronestop.org/v1/jobsearch/'+API_ID+'/'+API_JOB_ID+'?isHtml=true&enableMetaData=true'


// const JsonData = {
//     "JobTitle": "Junior Software Web Developer",
//     "URL": "https://de.jobsyn.org/102C7503CD5F4E088BB7FD42BE57E980",
//     "Company": "BAE Systems",
//     "Location": "Sterling, Virginia",
//     "DatePosted": "2021-11-24 11:07 AM",
//     "Description": "Job Description\\n\\nWhats it like realizing your potential at an innovative company that takes on some of the world s most important challenges? Rewarding. As a member of our Defense Intelligence Technology team, you will join a diverse group of driven professionals who design the products and systems that support enhanced military capabilities, protect national security, and keep critical information and infrastructure secure. With us, you will be able to make an impact while you hone your skills and grow in your career.\n\nWe are looking for a Junior Software Developer",
//     "OnetCodes": [
//       "99-9999.99"
//     ],
//     "MetaData": {
//       "Publisher": "CareerOneStop publishes this API (www.careeronestop.org/Developers/WebAPI/web-api.aspx)",
//       "Sponsor": "U.S. Department of Labor, Employment and Training Administration",
//       "LastAccessDate": 1642635153,
//       "CitationSuggested": "This data is delivered by an API from CareerOneStop, sponsored by U.S. Department of Labor, Employment and Training Administration.  www.careeronestop.org Job postings come from NLx (www.usnlx.com), by the National Labor Exchange, which is co-sponsored by the Direct Employers Association (www.directemployers.org) and the National Association of State Workforce Agencies (www.naswa.org).",
//       "DataSource": [
//         {
//           "DataName": "NLx job postings",
//           "DataSourceName": "NLx, National Labor Exchange",
//           "DataSourceUrl": "http://nlx.org/",
//           "DataLastUpdate": "Rolling (via API)",
//           "DataVintageOrVersion": "Rolling (via API)",
//           "DataDescription": "Job postings come from NLx (www.usnlx.com), by the National Labor Exchange, which is co-sponsored by the Direct Employers Association (www.directemployers.org) and the National Association of State Workforce Agencies (www.naswa.org). The data include jobs posted on state job banks as well as by private employers. ",
//           "DataSourceCitation": "Job postings come from NLx (www.usnlx.com), by the National Labor Exchange, which is co-sponsored by the Direct Employers Association (www.directemployers.org) and the National Association of State Workforce Agencies (www.naswa.org)."
//         }
//       ]
//     }
//   }

export default function JobDescription() {
    const params = useParams()
    console.log(params.id)
    const API_URL = 'https://api.careeronestop.org/v1/jobsearch/'+API_ID+'/'+params.id+'?isHtml=true&enableMetaData=true'
    const [data, setData] = useState({
        data:{
            Description: "<span>loading</span>"
        }
    })

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
                setData( response );
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
        };
        fetchData()
    }, []);
    
    return (  
    <>
        <h1>{params.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.data.Description}} />
    </> 
    )
}