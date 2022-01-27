import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './features/nav/nav'
import Occupations from './features/occupations/Occupations'
import Job from './features/job/job'
import JobDescription from './features/JobDescription/JobDescription'
import Occupation from './features/Occupation/Occupation'
import Test from './features/TestComp/TestComp'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="occupations/:keyword/" element={<Occupations />} />
          <Route path="jobs/:trade/" element={<Job />} />
          <Route path="job/:title/:id" element={<JobDescription />} />
          <Route path="occupation/:code" element={<Occupation />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
