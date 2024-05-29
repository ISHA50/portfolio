'use client'
import Link from "next/link";
import { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
        const resUserExists = await fetch('api/userExists', {
          method: "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({email}),
        });

        const {user} = await resUserExists.json();

        if(user){
          setError("User already exist");
          return;
        }

      const res = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        setName('');
        setEmail('');
        setPassword('');
        setError(null);
      } else {
        console.log("User registration failed");
        setError("User registration failed");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
      setError("Error during registration");
    }
  };

  return (
    <div className="bg-black-100 h-screen flex justify-center items-center">
      <div className="shadow-lg p-8 rounded-lg border-t-4 border-white-400 w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            value={name}
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            value={email}
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
          <button className="bg-black text-white font-bold cursor-pointer px-6 py-2 rounded-md">
            Register
          </button>

          {error && (
            <div className="bg-red-800 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className='underline'>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}












































// 'use client'
// import Link from "next/link";
// import { useState } from 'react';
// import {useRouter} from 'next/navigation';

// export default function RegisterForm() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);

//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!name || !email || !password) {
//       setError("All fields are necessary.");
//       return;
//     }

//     try {

//         const resUserExists = await fetch('api/userExists', {
//           method: "POST",
//           headers:{
//             "Content-Type" : "application/json",
//           },
//           body: JSON.stringify({email}),
//         });

//         const {user} = await resUserExists.json();

//         if(user){
//           setError("User already exist");
//           return;
//         }


//       const res = await fetch('/api/register', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password
//         })
//       });
//       if (res.ok) {
//         const form = e.target as HTMLFormElement;
//         form.reset();
//         setName('');
//         setEmail('');
//         setPassword('');
//         setError(null);
//       } else {
//         console.log("User registration failed");
//         setError("User registration failed");
//       }
//     } catch (error) {
//       console.error("Error during registration: ", error);
//       setError("Error during registration");
//     }
//   };

//   return (
//     <div className="border-black bg-white-500 shadow-lg">
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-5 rounded-lg border-t-4 border-white-400">
//         <h1 className="text-xl font-bold my-4">Register</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <input
//             onChange={e => setName(e.target.value)}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//           />
//           <input
//             onChange={e => setEmail(e.target.value)}
//             type="text"
//             placeholder="Email"
//             value={email}
//           />
//           <input
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             value={password}
//           />
//           <button className="bg-orange-600 text-white font-bold cursor-pointer px-6 py-2">
//             Register
//           </button>

//           {error && (
//             <div className="bg-red-800 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
//           )}

//           <Link className="text-sm mt-3 text-right" href={"/login"}>
//             Already have an account? <span className='underline'>Login</span>
//           </Link>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
//}



















































// 'use client'
// import Link from "next/link";
// import {useState} from 'react';



// export default function RegisterForm(){
//        const [name,setName]= useState("");
//        const [email,setEmail] = useState("");
//        const [password,setPassword] = useState("");
//        const [error,setError] = useState("userexists");

//        const handleSubmit = async(e) => {
//         e.preventDefault();
//         if(!name || !email || !password){
//             setError("All fields are necessary.");
//             return;
//         }

//         try{
//             await fetch('api/register',{
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name, email, password
//                 })
//             });
//             if(res.ok){
//                 const form = e.target;
//                 form.reset();
//             }else{
//                 console.log("User registration failed");
//             }
//         } catch(error) {
//             console.log("Error during registration: ", error);
//         }
  
//        };




//     return <div className="grid place-items-center h-screen">
//     <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
//     <h1 className="text-xl font-bold my-4">Register</h1>
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input onChange={e=> setName(e.target.value)} type="text" placeholder="Full Name" />
//         <input onChange={e=> setError(e.target.value)} type="text" placeholder="Email" />
//         <input onChange={e=> setPassword(e.target.value)}type="password" placeholder="Password" />
//         <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>

//         { error && (
//             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
//         )}

//         <Link className="text-sm mt-3 text-right" href={"/login"}>Already have an account? <span className='underline'>Login</span></Link>
//     </form>
//     </div>
// </div>
// }