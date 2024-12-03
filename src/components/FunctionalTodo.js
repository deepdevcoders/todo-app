import React, { useState } from "react";
import { FaPen, FaSearch, FaTrash } from "react-icons/fa";

function FunctionalTodo() {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      setList([...list, inputTask]);
      setInputTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setList([...list.filter((_, i) => i !== index)]);
  };

  const handleEditTask = (index) => {
    setEditTask(index);
    setInputTask(list[index]);
  };

  const handleUpdateTask = () => {
    if (inputTask.trim() !== "") {
      const updateTask = list.map((item, index) =>
        index === editTask ? inputTask : item
      );
      setList(updateTask);
      setEditTask(null);
      setInputTask("");
    }
  };

  const filteredTasks = searchQuery
    ? list.filter((task) =>
        task.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : list;

  return (
    <>
      <div className="bg-gray-50 text-gray-100 text-sm min-h-screen flex flex-col items-center justify-center">
        {/* Title Heading  */}
        <div className="text-center">
          <h1 className="text-7xl text-gray-500">CRED APP</h1>
        </div>

        {/* Task Input Field --Start */}
        <div className="bg-transparent container p-8 max-w-lg">
          <div className="flex items-center justify-center space-x-3 shadow-2xl">
            <input
              type="text"
              className="bg-gray-50 text-gray-900 w-full border border-gray-600 px-4 py-2 rounded-md focus:outline-none"
              placeholder="Add new task"
              maxLength={35}
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
            />
            <button
              onClick={editTask !== null ? handleUpdateTask : handleAddTask}
              className="bg-gray-800 hover:bg-gray-950 focus:bg-gray-950 active:bg-gray-950 text-nowrap px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              {editTask !== null ? "Update Task" : "Add Task"}
            </button>
          </div>
        </div>
        {/* Task Input Field --End */}

        <div className="bg-[#d8d8d8] container p-8 rounded-xl max-w-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ">
          {/* Search Task Input Field --Start */}
          <div className="flex items-center justify-center">
            <div className="relative w-full">
              <input
                className="bg-gray-50 text-gray-900 w-full border border-gray-600 px-4 py-2 rounded-md focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          {/* Search Task Input Field --End */}

          {/* All Tasks List --Start */}
          {filteredTasks.map((item, index) => (
            <div
              className="bg-gray-950 flex items-center justify-between px-3 py-2 mt-2 rounded-lg"
              key={index}
            >
              <p className="text-wrap  w-80 font-mono text-start">{item}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditTask(index)}
                  className="bg-[#ffb200] px-3 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <FaPen />
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-600 px-3 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          {/* All Tasks List --End */}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 mb-1 flex items-center justify-center">
        <div className="font-mono text-xs font-bold bg-[#ffb200] rounded-lg w-96 p-2 text-white">
          <span className="text-gray-950">Designed </span>
          <span className="underline text-red-600">By DeepDevCoders</span>
        </div>
      </div>
    </>
  );
}

export default FunctionalTodo;
