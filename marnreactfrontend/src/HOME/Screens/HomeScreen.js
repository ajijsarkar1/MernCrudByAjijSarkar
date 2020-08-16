import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {HomeDatalist,Homelist} from '../Action/HomeAction'


function HomeScreen(props) {
    const HomeList = useSelector((state) => state.HomeList);
    const { products} = HomeList;
    const success = true ;
   // const dispatch = useDispatch();

    // useEffect(() => {
    //     //dispatch(HomeDatalist());
    //     return () => {
    //       //
    //     };
    //   });

    //   const orderDelete = useSelector(state => state.orderDelete);
    //   const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(HomeDatalist());
        return () => {
          //
        };
      }, [success]);


    return (


    <div>
        <h3>Logged Exercises</h3>
        {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.products() }
          </tbody>

        </table> */}

               <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
              <tbody>
                 {products.map((product) => (
                 <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.username}</td>
                    <td>{product.description}</td>
                    <td>{product.duration}</td>
                   <td>{product.date}</td>
                    {/* <td>
                      <button className="button" onClick={() => openModal(product)}>
                        Edit
                      </button>{' '}
                      <button
                        className="button"
                        onClick={() => deleteHandler(product)}
                     >
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>




        </table>

      </div>


        // <div className="content content-margined">
        //   <div className="product-header">
        //     <h3>Products</h3>
        //     <button className="button primary" onClick={() => openModal({})}>
        //       Create Product
        //     </button>
        //   </div>
        //   {modalVisible && (
        //     <div className="form">
        //       <form onSubmit={submitHandler}>
        //         <ul className="form-container">
        //           <li>
        //             <h2>Create Product</h2>
        //           </li>
        //           <li>
        //             {loadingSave && <div>Loading...</div>}
        //             {errorSave && <div>{errorSave}</div>}
        //           </li>
    
        //           <li>
        //             <label htmlFor="name">Name</label>
        //             <input
        //               type="text"
        //               name="name"
        //               value={name}
        //               id="name"
        //               onChange={(e) => setName(e.target.value)}
        //             ></input>
        //           </li>
        //           <li>
        //             <label htmlFor="price">Price</label>
        //             <input
        //               type="text"
        //               name="price"
        //               value={price}
        //               id="price"
        //               onChange={(e) => setPrice(e.target.value)}
        //             ></input>
        //           </li>
        //           <li>
        //             <label htmlFor="image">Image</label>
        //             <input
        //               type="text"
        //               name="image"
        //               value={image}
        //               id="image"
        //               onChange={(e) => setImage(e.target.value)}
        //             ></input>
        //             <input type="file" onChange={uploadFileHandler}></input>
        //             {uploading && <div>Uploading...</div>}
        //           </li>
        //           <li>
        //             <label htmlFor="brand">Brand</label>
        //             <input
        //               type="text"
        //               name="brand"
        //               value={brand}
        //               id="brand"
        //               onChange={(e) => setBrand(e.target.value)}
        //             ></input>
        //           </li>
        //           <li>
        //             <label htmlFor="countInStock">CountInStock</label>
        //             <input
        //               type="text"
        //               name="countInStock"
        //               value={countInStock}
        //               id="countInStock"
        //               onChange={(e) => setCountInStock(e.target.value)}
        //             ></input>
        //           </li>
        //           <li>
        //             <label htmlFor="name">Category</label>
        //             <input
        //               type="text"
        //               name="category"
        //               value={category}
        //               id="category"
        //               onChange={(e) => setCategory(e.target.value)}
        //             ></input>
        //           </li>
        //           <li>
        //             <label htmlFor="description">Description</label>
        //             <textarea
        //               name="description"
        //               value={description}
        //               id="description"
        //               onChange={(e) => setDescription(e.target.value)}
        //             ></textarea>
        //           </li>
        //           <li>
        //             <button type="submit" className="button primary">
        //               {id ? 'Update' : 'Create'}
        //             </button>
        //           </li>
        //           <li>
        //             <button
        //               type="button"
        //               onClick={() => setModalVisible(false)}
        //               className="button secondary"
        //             >
        //               Back
        //             </button>
        //           </li>
        //         </ul>
        //       </form>
        //     </div>
        //   )}
    
        //   <div className="product-list">
        //     <table className="table">
        //       <thead>
        //         <tr>
        //           <th>ID</th>
        //           <th>Name</th>
        //           <th>Price</th>
        //           <th>Category</th>
        //           <th>Brand</th>
        //           <th>Action</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {products.map((product) => (
        //           <tr key={product._id}>
        //             <td>{product._id}</td>
        //             <td>{product.name}</td>
        //             <td>{product.price}</td>
        //             <td>{product.category}</td>
        //             <td>{product.brand}</td>
        //             <td>
        //               <button className="button" onClick={() => openModal(product)}>
        //                 Edit
        //               </button>{' '}
        //               <button
        //                 className="button"
        //                 onClick={() => deleteHandler(product)}
        //               >
        //                 Delete
        //               </button>
        //             </td>
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //   </div>
        // </div>
        
      );
}
export default HomeScreen;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0,10)}</td>
//     <td>
//       <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//     </td>
//   </tr>
// )

// export default class ExercisesList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteExercise = this.deleteExercise.bind(this)

//     this.state = {exercises: []};
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/exercises/')
//       .then(response => {
//         this.setState({ exercises: response.data })
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/exercises/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     })
//   }

//   exerciseList() {
//     return this.state.exercises.map(currentexercise => {
//       return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Logged Exercises</h3>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>Username</th>
//               <th>Description</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.exerciseList() }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
//}