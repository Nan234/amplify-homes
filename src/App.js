import './App.css';
import { NewHomes, NavBar, MarketingFooter } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <NewHomes isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default withAuthenticator(App); // 認証に必要
// export default App;