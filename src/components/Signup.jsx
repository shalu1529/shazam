// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase'; // Import the auth instance
// import shazamLogo from '../assets/logo.svg'; // Shazam logo

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     // Use Firebase auth to sign up with email and password
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
        
//         // Update user profile with the username
//         return updateProfile(user, { displayName: username });
//       })
//       .then(() => {
//         // Redirect to the home page after successful signup
//         navigate('/');
//       })
//       .catch((error) => {
//         setError(error.message); // Handle signup errors
//       });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black">
//       {/* Logo */}
//       <img src={shazamLogo} alt="Shazam Logo" className="w-16 h-16 mb-6" />

//       {/* Sign-Up Form */}
//       <h1 className="text-white text-3xl font-bold mb-6">Sign up to start listening</h1>

//       {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message */}

//       <form className="w-full max-w-sm" onSubmit={handleSignUp}>
//         <div className="mb-4">
//           <label className="block text-white mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="w-full bg-gray-800 text-white p-3 rounded"
//             type="text"
//             id="username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)} // Controlled input
//             required
//           />
//         </div>

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
//           Sign Up
//         </button>

//         <p className="mt-4 text-center text-white">
//           Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignUp;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: username,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('authToken', data.token);
        navigate('/'); // Redirect to login after signup
      } else {
        setError(data.message); // Show error from backend
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-white text-3xl font-bold mb-6">Sign up to start listening</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="w-full max-w-sm" onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="username">Username</label>
          <input
            className="w-full bg-gray-800 text-white p-3 rounded"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
          Sign Up
        </button>
        <p className="mt-4 text-center text-white">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

