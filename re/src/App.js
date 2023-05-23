
// import React, { useState } from 'react';

// function App() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser(prevUser => ({
//       ...prevUser,
//       [name]: value
//     }));
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ''
//     }));
//   };

//   const handleValidation = () => {
//     let errors = {};

//     if (!user.name) {
//       errors.name = "Please enter your name";
//     } else if (user.name.length < 3) {
//       errors.name = "Name should be at least 3 characters long";
//     } else if (!isNaN(user.name)) {
//       errors.name = "Name should contain at least one character";
//     }

//     if (!user.password) {
//       errors.password = "Please enter your password";
//     } else if (user.password.length < 3) {
//       errors.password = "Password should be at least 3 characters long";
//     } else if (isNaN(user.password)) {
//       errors.password = "Password should contain at least one character";
//     }

//     setErrors(errors);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleValidation();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name"   style={{ borderColor: errors.name && "red" }}/>
//         {errors.name && <p>{errors.name}</p>}
//         <br />

//         <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" />
//         <br />

//         <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"    style={{ borderColor: errors.password && "red" }}/>
//         {errors.password && <p>{errors.password}</p>}
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


// import React, { createContext, useState } from 'react';
// import One from "./page/One";

// const userData = createContext();

// function App() {
//   const [one, setOne] = useState({ name: "jugal", roll: 63 });

//   const updateOne = (updatedData) => {
//     setOne(updatedData);
//   };

//   return (
//     <div>
//       <userData.Provider value={{ one, updateOne }}>
//         <One />
//       </userData.Provider>
//     </div>
//   );
// }

// export default App;
// export { userData };

// import React, { useReducer } from 'react';

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       throw new Error('Invalid action type');
//   }
// };

// function Counter() {
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const increment = () => {
//     dispatch({ type: 'INCREMENT' });
//   };

//   const decrement = () => {
//     dispatch({ type: 'DECREMENT' });
//   };

//   const reset = () => {
//     dispatch({ type: 'RESET' });
//   };

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

import React from 'react'

function App() {

  return (
    <div>


    </div>
  )
}

export default App