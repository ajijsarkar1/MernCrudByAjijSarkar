// import React, { Component } from 'react';
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from '../Action/HomeAction';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [username, setusername] = useState('');
  const [description, setdescription] = useState('');
  const [duration, setduration] = useState(0);
  const [date, setdate] = useState(new Date());

  const HomeSave = useSelector((state) => state.HomeSave);
  const { loading, products, error } = HomeSave;

  const productSave = useSelector((state) => state.HomeSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

//   const productDelete = useSelector((state) => state.productDelete);
//   const {
//     loading: loadingDelete,
//     success: successDelete,
//     error: errorDelete,
//   } = productDelete;
   const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setusername(product.username);
    setdescription(product.description);
    setduration(product.duration);
    setdate(product.date);
  };
  const submitHandler = (e) => {
      alert("submit")
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        username,
        description,
        duration,
        date,
      })
    );
  };
//   const deleteHandler = (product) => {
//     dispatch(deleteProdcut(product._id));
//   };
//   const uploadFileHandler = (e) => {
//     const file = e.target.files[0];
//     const bodyFormData = new FormData();
//     bodyFormData.append('image', file);
//     setUploading(true);
//     axios
//       .post('/api/uploads', bodyFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((response) => {
//         setImage(response.data);
//         setUploading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setUploading(false);
//       });
//   };





















// export default class EditExercise extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.onChangeDuration = this.onChangeDuration.bind(this);
//     this.onChangeDate = this.onChangeDate.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       description: '',
//       duration: 0,
//       date: new Date(),
//       users: []
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
//       .then(response => {
//         this.setState({
//           username: response.data.username,
//           description: response.data.description,
//           duration: response.data.duration,
//           date: new Date(response.data.date)
//         })   
//       })
//       .catch(function (error) {
//         console.log(error);
//       })

//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     })
//   }

//   onChangeDuration(e) {
//     this.setState({
//       duration: e.target.value
//     })
//   }

//   onChangeDate(date) {
//     this.setState({
//       date: date
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const exercise = {
//       username: this.state.username,
//       description: this.state.description,
//       duration: this.state.duration,
//       date: this.state.date
//     }

//     console.log(exercise);

//     axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   };

//   render() {
    return (
    <div>
      <h3>Add Exercise Log</h3>
      {/* <button className="button primary" onClick={() => openModal({})}>
          Create Product
      </button> */}
      <form onSubmit={submitHandler}>
        <div className="form-group"> 
          <label>Username: </label>
          {/* <select ref="userInput"
              required
              className="form-control"
             // value={this.state.username}
             // onChange={this.onChangeUsername}
             value={username}
             onChange={(e) => setusername(e.target.value)}
              >
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select> */}
          <input  
              type="text"
              name="username"
              value={username}
              id="username"
              onChange={(e) => setusername(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  
            //   type="text"
            //   required
            //   className="form-control"
            //   value={this.state.description}
            //   onChange={this.onChangeDescription}


              type="text"
              name="description"
              value={description}
              id="description"
              onChange={(e) => setdescription(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
            //   type="text" 
            //   className="form-control"
            //   value={this.state.duration}
            //   onChange={this.onChangeDuration}
            type="text"
            name="duration"
            value={duration}
            id="duration"
            onChange={(e) => setduration(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
            //   selected={this.state.date}
            //   onChange={this.onChangeDate}
            selected={date}
            onChange={(e) => setdate(date)}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    );
  }


export default ProductsScreen;