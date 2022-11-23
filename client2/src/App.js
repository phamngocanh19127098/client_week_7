import './App.css';
import { useState } from 'react'
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName });
    socket.emit("createActor", { firstName, lastName });
    setFirstName('');
    setLastName('');
    alert('Created actor sucessfully!!!')
  }
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ADD NEW ACTOR
            </h1>
            <form onSubmit={submitHandler} class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                <input type="text" name="lastName" onChange={(e) => { setLastName(e.target.value) }} value={lastName} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Giang" required="" />
              </div>
              <div>
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                <input type="text" name="lastName" onChange={(e) => { setFirstName(e.target.value) }} value={firstName} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hoang" required="" />
              </div>
              <button type="submit" class="w-full text-white bg-green hover:bg-[#1bc46e] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add new actor</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
