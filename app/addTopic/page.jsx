'use client'




import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert("Your voice matters."); // Show pop-up message
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-100">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        Your Feedback, Our Progress!
      </h1> 


     <br />
     
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-black-100 p-6 rounded-lg shadow-lg w-96">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-gray-300 px-4 py-2 rounded-md"
          type="text"
          placeholder="Feedback Title"
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-gray-300 px-4 py-2 rounded-md resize-none"
          placeholder="Describe it"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md bg-black"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}





































// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AddTopic() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description) {
//       alert("Title and description are required.");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:3000/api/topics", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ title, description }),
//       });

//       if (res.ok) {
//         router.push("/");
//       } else {
//         throw new Error("Failed to create a topic");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-black">

// <h1 className="text-3xl font-bold text-purple-600 cursor-pointer hover:text-purple-800 text-white mb-10 mr-6">
// Your Feedback, Our Progress!
// </h1>


//       <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-pink-500">
//         <input
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//           className="border border-slate-500 px-8 py-2"
//           type="text"
//           placeholder="Feedback Title"
//         />

// <textarea
//   onChange={(e) => setDescription(e.target.value)}
//   value={description}
//   className="border border-slate-500 px-8 py-2 resize-y"
//   placeholder="Describe it"
// ></textarea>


// <button
//   type="submit"
//   className="bg-purple-500 font-bold text-black py-3 px-6 w-fit"
// >
//   Submit Feedback
// </button>

//       </form>
//     </div>
//   );
// }







































// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function AddTopic() {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");

// //   const router = useRouter();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!title || !description) {
// //       alert("Title and description are required.");
// //       return;
// //     }

// //     try {
// //       const res = await fetch("http://localhost:3000/api/topics", {
// //         method: "POST",
// //         headers: {
// //           "Content-type": "application/json",
// //         },
// //         body: JSON.stringify({ title, description }),
// //       });

// //       if (res.ok) {
// //         router.push("/");
// //       } else {
// //         throw new Error("Failed to create a topic");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
// //       <input
// //         onChange={(e) => setTitle(e.target.value)}
// //         value={title}
// //         className="border border-slate-500 px-8 py-2"
// //         type="text"
// //         placeholder="Feedback Title"
// //       />

// //       <input
// //         onChange={(e) => setDescription(e.target.value)}
// //         value={description}
// //         className="border border-slate-500 px-8 py-2"
// //         type="text"
// //         placeholder="Describe it"
// //       />

// //       <button
// //         type="submit"
// //         className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
// //       >
// //         Submit Feedback
// //       </button>
// //     </form>
// //   );
// // }