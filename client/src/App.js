import logo from './assets/images/logo.png';
import './assets/styles/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./scripts/store";

import FrontPage from './components/pages/front_page';
import HomePage from './components/pages/home_page';
import LoginPage from './components/pages/login_page';
import SignupPage from './components/pages/signup_page';
import UsersPage from './components/pages/admin/users_page';
import UserProfilePage from './components/pages/user_profile_page';
import Header from './components/modules/navigation/header';
import Nav from './components/modules/navigation/nav';

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
	             <Route path="/user_profile" element={ <UserProfilePage />} />
	             <Route path="/login" element={ <LoginPage />} />
	             <Route path="/signup" element={ <SignupPage />} />
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
