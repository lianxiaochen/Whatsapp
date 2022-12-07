import React from 'react';
import Login from "./Login.js";
import useLocalStorage from '../hooks/useLocalStorage.js';
import Dashboard from './Dashboard.js';
import { ContactsProvider } from '../contexts/ContactsProvider.js';
import { ConversationsProvider } from '../contexts/ConversationsProvider.js';
import { SocketProvider } from '../contexts/SocketProvider.js';



function App() {
  const [id, setId] = useLocalStorage('id');
  
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
  
  
  id ? dashboard : <Login onIdSumbit={setId} />

  )
}

export default App;