import logo from './assets/images/logo.png';
import './assets/styles/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./scripts/store";

import AboutPage from './components/pages/about_page';
import CollectionPage from './components/pages/collection_page';
import FrontPage from './components/pages/front_page';
import HomePage from './components/pages/home_page';
import LoginPage from './components/pages/login_page';
import UsersPage from './components/pages/admin/users_page';
import UserProfilePage from './components/pages/user_profile_page';
import Header from './components/modules/navigation/header';
import Nav from './components/modules/navigation/nav';
import LinkPage from './components/pages/link_page';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
				<Header />
				<div className="App-main">
					<div className="App-main-window">
						<Routes>
	             <Route path="/" element={<FrontPage />} />
	             <Route path="/home" element={<HomePage />} />
	             <Route path="/about" element={<AboutPage />} />
	             <Route path="/connect" element={ <LinkPage />} />
	             <Route path="/collection" element={ <CollectionPage />} />
	             <Route path="/user_profile" element={ <UserProfilePage />} />
	          </Routes>
					</div>
				</div>
				<div className="App-preview-page">
				</div>
			</div>
    </Provider>
  );
}

export default App;
