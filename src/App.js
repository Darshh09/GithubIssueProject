import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {

  const [state,updatestate] = useState();

  const [issueLength, setIssueLength] = useState(0);

  const [issueArray, setIssueArray] = useState([]);

  const getIssuesList = async () => {
  
    try {
      
        const url ="https://api.github.com/repos/facebook/create-react-app/issues"
        
        var response = await fetch(url, {
            method: 'GET',
            json: true
        })
        var issues = await response.json()
     

       await setIssueLength(issues.length);

      var array = await issues.map((i) => {
            return(
              [{'title' : i.title , 'createdOn' : i.created_at, 'updatedAt' : i.updated_at, 'state' : i.state , 'comments' : i.comments , 'number' : i.number , 'label' : i.labels}]
            );
       })

       await setIssueArray(array);
       console.log("issues",array);
      }
      catch(e){
          console.log("errrors", e);
      }
    
}

useEffect(() => {getIssuesList()},[]);

  return (
    <div className="App">
       <Header />
       <Content  issuesL = {issueLength} issArray = {issueArray} />
    </div>
  );
}

export default App;
