// import React, { Component } from 'react';
// import userActions from "actions/usersActions.js";
// import Loading from 'components/modules/Loading';
// import User from 'components/modules/Use';

// //import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleLeft, faDownload, faBriefcase, faQuestion, faDoorClosed, faSchool, faGraduationCap, faThumbsUp, faHistory, faFilter, faProjectDiagram, faTimesCircle, faUsers, faUsersSlash, faCalendarDay, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';

// class UsersPage extends Component {
//   constructor(props) {
//       super(props);

//       this.setModal = this.setModal.bind(this);
//       this.state = {
//   	    loaded: false,
//         users: [],
//         refresh: false,
//         modal_open: false,
//         modal: "user"
//       }
//     }

//     componentDidMount() {
//       this.props.fetchUsers();
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//       if (this.props.users.length != 0 && this.state.users.length == 0 && this.state.loaded == false) {
//         this.setState({users: this.props.users, loaded: true})
//       }
//     }
//     closeModal() {
//       this.setState({modal_open: false, modal_image: ""})
//     }

//     setModal(modal, image) {
//       let modal_open = this.state.modal_open;
//       const current_modal = this.state.modal;
//       if(modal != "image" && (modal_open && modal === current_modal)) {
//           this.closeModal();
//       } else {
//           this.setState({modal_open: true, modal: modal, modal_image: image})
//       }
//     }
//     displayUser(user) {
//       const user_dom = (<User setModal={this.setModal} key={user.id} {...user} />);
//       return user_dom;
//     }
   
//     render() {
//       if ((this.state.users.length == 0 && this.props.users.length == 0) || this.state.users.length == 0) {
//         return (<Loading />);
//       }

//       return (
//         <div className="App-page Users-page">
//           <div className="App-content">
//             {
// 	            this.state.users.length > 0 && 
// 	            <div className="users-section">
// 	              {
// 	                this.state.users.map(user => {
// 	                    const displayed_user = this.displayUser(user);
// 	                    return displayed_user;
// 	                })
// 	              }
// 	            </div>
//             }
//             {
//             this.state.users.length == 0 && <div className="warning">No results</div>
//             }
//           </div>
//           {
// 	         this.state.modal_open && 
// 	          <div className="modal">
// 	            <div className="modal-top-bar"><a onClick={() => this.closeModal()}><FontAwesomeIcon className="icon" icon={faTimesCircle}/></a></div>
// 	            {
// 	            this.state.modal == "user" && <div className="user-modal">
// 		             {
// 		              this.displayUser(this.state.user)
// 		             }
// 		             </div>
// 	             }
// 	           </div>
//           }
//         </div>
//       )
//     }
// }

// export default connect(
//   state => state,
//   {...userActions}
// )(UsersPage);