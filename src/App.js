
import './App.css';

import React from 'react';
import { useEffect, useState } from 'react';

import {EmailList} from './components/emailList/emailList.component';
import { SearchBar } from './components/searchbar/searchbar.component';
import { InboxTrash} from './components/InboxTrash/InboxTrash.components';
import {deleted} from './components/InboxTrash/deleted';

function App() {
  const [EMAILS, setMails] = useState ([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [SelectEmail, setSelectedEmail] = useState([])


  useEffect(() => {
    const fetchUsers = async () =>  {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json")
      const users = response.json;
      setMails(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = EMAILS
    } else {
      filtered = EMAILS.filter(mail => mail.from.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setFilteredEmails(filtered);
  }, [EMAILS, searchInput]);
  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  useEffect(() =>{
    let deleting = [];
    if (filtered ===''){
      mail.read(false)
    }
    else{
      mail.read(true)
    }

  })
  const deleteEmail = e=>{
    onclick(deleteEmail)
  }
  useEffect(() =>{
    on
  })

  return (
    <div className="App">
      <h1>Email Views</h1>
      <SearchBar
          placeholder='Search Mail'
          handleInput={handleInput}
      />
      <EmailList mails={filteredEmails}/>
    </div>
  );
}

export default App;
