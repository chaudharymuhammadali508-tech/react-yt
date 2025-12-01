import React, { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    // console.log("title:",title)
    //   console.log( "detail:", detail);
    // console.log(task)
    const copyTask = [...task];
    copyTask.push({ title, detail });
    //  console.log(copyTask)
    setTask(copyTask);

    e.preventDefault();
    setTitle("");
    setDetail("");
  };
  const delNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex  flex-col gap-4 lg:w-1/2 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* first heading wala input */}
        <input
          className="px-5 py-2   rounded border-2 outline-none font-medium"
          value={title}
          type="text"
          placeholder="Enter Notes Heading"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* detail wala input */}
        <textarea
          className="px-5 h-32 outline-none   py-2 rounded border-2 font-medium"
          value={detail}
          name=""
          id=""
          placeholder="Enter detail here"
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        ></textarea>
        <button className="bg-white   text-black px-5 py-2 rounded active:scale-95">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className=" flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" flex flex-col justify-between items-start h-52 w-40 bg-cover px-4 pt-9 pb-4 bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')] text-black rounded-xl p-4"
              >
                <h1 className="  leading-tight text-xl font-bold">
                  {elem.title}
                </h1>
                <p
                  id="detail"
                  className="mt-2 font-medium text-gray-500 overflow-auto"
                >
                  {elem.detail}
                </p>
                <button
                  onClick={delNote}
                  className="bg-red-500 active:scale-95 rounded w-full py-1 text-xs cursor-pointer font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
