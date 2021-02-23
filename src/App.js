import './App.css';
import Profile from './components/Profile/Profile';
import {name, tag, location, avatar, stats} from './components/Profile/user-json.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/Transaction/TransactionHistory';
import transactions from './components/Transaction/ transactions.json';


function App() {
  return (
    
    <div>
       <Profile 
       name={name}
       tag={tag}
       location={location}
       avatar={avatar}
       stats={stats}/>

       <Statistics stats={statisticalData}/>

       <FriendList friends={friends}/>
       
       <TransactionHistory items={transactions}/>
    </div>
  );
}



export default App;
