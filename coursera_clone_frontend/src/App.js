import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Course from './components/Course';
import Collaborate from './components/Collaborate';
import Acheive from './components/Acheive';
import Learner from './components/Learner';
import QualityLearning from './components/QualityLearning';
import Accessible from './components/Accessible';
import Shareable from './components/Shareable';
import AppliedLearning from './components/AppliedLearning';

function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
        <Course />
        <Collaborate />
        <Acheive />
        <Learner />
        <QualityLearning />
        <Accessible />
        <AppliedLearning />
        <Shareable />
      </React.Fragment>
    </div>
  );
}

export default App;