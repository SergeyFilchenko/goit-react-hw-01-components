import user from 'data/user.json';
import data from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import Profile from 'components/Profile/Profiles';
import Statistics from 'components/Statistic/Statistics';
import FriendList from 'components/FriendList/FriendList';
import Transactions from 'components/TransactionHistory/Transactions';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  )
}
