import css from './Index.module.css';

import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';

import user from '../src/components/data/user.json';
import data from '../src/components/data/data.json';
import friends from '../src/components/data/friends.json';
import transactions from '../src/components/data/transactions.json';



export const App = () => {
  return (
    <div className={css.divContainer}>      
       <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />      
      <Statistics 
        title="Upload stats" 
        stats={data} />
      <FriendList 
        friends={friends}/>
      <TransactionHistory 
        items={transactions} />    
    </div>
  );
};
