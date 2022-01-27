  import * as React from 'react';
  import Card from '@mui/material/Card';
  import CardActions from '@mui/material/CardActions';
  import CardContent from '@mui/material/CardContent';
  import Button from '@mui/material/Button';
  import Typography from '@mui/material/Typography';
  import { useNavigate, useParams } from 'react-router-dom'
  import { connect } from 'react-redux'

  import Loading from '../loading/Loading'

  const axios = require('axios')
  const B_TOKEN = "lxx3xBb9QkjgwWcMG7+q48Ll7B9qWAAIAcP+4IoNWv1sJr2vqNktORT+kUfXhSqKphk0aW3sxHqIUwFTWGiBcQ=="
  const API_ID = "paUZLn1nDViasZB"


  
  
function OccupationsList(props) {
    let navigate = useNavigate()
    const params = useParams()
    const API_URL = 'https://api.careeronestop.org/v1/occupation/'+API_ID+'/'+params.keyword+'/Y/0/100'
    const [Data, setData] = React.useState()
    console.log(params.keyword)
    React.useEffect(() => {
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
    <>
      {!Data &&
        <Loading />
      }
      {Data &&
      <div id="trades-list">
        {Data.data.OccupationList.map((OccObj) => (
                <Card elevation={0} 
                    key={OccObj.OnetCode}
                    sx={{ minWidth: 275, 
                    maxWidth: '40%', 
                    ml: 10, mt: 1, 
                    borderBottom: 1, borderColor: 'grey.200', 
                    borderRadius: 0}}  >
                    <CardContent sx={{ pl: 0}}>
                    <Typography variant="h5" component="div" sx={{ mb: 1}}>
                        {OccObj.OnetTitle}
                    </Typography>
                    {OccObj.OccupationDescription &&
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        { OccObj.OccupationDescription}
                    </Typography>}
                    </CardContent>
                    {OccObj.OccupationDescription &&
                    <CardActions sx={{ pl:0 }}>
                    <Button variant="text" size="small" sx={{ pl: 0}} onClick={ () => {
                        navigate("/occupation/"+OccObj.OnetCode) 
                    }}>Learn More</Button>
                    </CardActions>}
                </Card>
            ))}
      </div>
      }
    </>    
    );
  }
  const mapStateToProps = (state) => {
    return { 
      state: state.location.state, 
      zip: state.location.zip
  }
  }
  export default connect(mapStateToProps)(OccupationsList)