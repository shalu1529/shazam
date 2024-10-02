// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase'; // Import the Firebase auth instance
// import shazamLogo from '../assets/logo.svg'; // Shazam logo

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Use Firebase auth to log in with email and password
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Redirect to the home page after successful login
//         navigate('/');
//       })
//       .catch((error) => {
//         setError(error.message); // Handle login errors
//       });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black">
//       {/* Logo */}
//       <img src={shazamLogo} alt="Shazam Logo" className="w-16 h-16 mb-6" />

//       {/* Login Form */}
//       <h1 className="text-white text-3xl font-bold mb-6">Login to your account</h1>

//       {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message */}

//       <form className="w-full max-w-sm" onSubmit={handleLogin}>
//         <div className="mb-4">
//           <label className="block text-white mb-2" htmlFor="email">
//             Email address
//           </label>
//           <input
//             className="w-full bg-gray-800 text-white p-3 rounded"
//             type="email"
//             id="email"
//             placeholder="name@domain.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Controlled input
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-white mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="w-full bg-gray-800 text-white p-3 rounded"
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Controlled input
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded font-bold"
//         >
//           Login
//         </button>

//         <p className="mt-4 text-center text-white">
//           Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Important for cookies
      });

      const data = await response.json();
      if (data.success) {
        // Redirect after successful login
        localStorage.setItem('authToken', data.token);
        navigate('/');
      } else {
        setError(data.message); // Show error from backend
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-white text-3xl font-bold mb-6">Login to your account</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email address</label>
          <input
            className="w-full bg-gray-800 text-white p-3 rounded"
            type="email"
            id="email"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input
            className="w-full bg-gray-800 text-white p-3 rounded"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded font-bold"
        >
          Login
        </button>
        <p className="mt-4 text-center text-white">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
