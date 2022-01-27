import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
// REDUX STATE
import { connect } from 'react-redux'

const Trades = [ "Appliance Repair","Automotive","Carpentry","Chef","CNC Machining","Commercial Diving","Commercial Maintenance","Construction & Building","Construction Management","Cosmetologist","Electrician","Gunsmithing","Heavy Equipment","Home Inspection","HVAC","Lineworker","Locksmithing","Marine & Watercraft","Plumbing","Small Engine Repair","Software Engineer","Underwater Welding","Web Developer","Welding"]

function Home(props) {

    return (
        <div className='home-container'>
          <div className='trade-list'>
            <h1>Skilled Trades</h1>
            {Trades.map((trade) => (
            <Link
            className='trade-link'
            to={{
                pathname: "/occupations/"+trade
            }}
            key={trade}
            >{trade}</Link>
            ))}
          </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { 
        state: state.location.state, 
        zip: state.location.zip
    }
}
export default connect(mapStateToProps)(Home)