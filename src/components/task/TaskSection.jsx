import React, { useState } from "react";
import SearchTask from "./SearchTask";
import ActionTask from "./ActionTask";
import ListTask from "./ListTask";
import AddTaskModal from "./AddTaskModal";

const TaskSection = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "This is React vite project",
    description:
      "Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for Seamless Goal Achievement and Stress-Free Task Management.",
    tags: ["React", "Vite", "Tailwindcss"],
    priority: "Hight",
    isFavorite:true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const handleAddTask = (newTask)=>{
    console.log("add task here",newTask);
    setTasks([
      ...tasks,newTask
    ])
    setShowAddTaskModal(false)

  }
  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddTaskModal && <AddTaskModal onSave={handleAddTask}/>}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask
            // onSearch={handleSearch}
            />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask
            onAddClick={()=>setShowAddTaskModal(true)}
            // onAddClick={() => setShowAddModal(true)}
            // onDeleteAllClick={handleDeleteAllClick}
            />
            <ListTask tasks={tasks}/>
            {/* {
                        tasks.length > 0 ?
                        (<ListTask
                            tasks={tasks}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFav={handleFavorite}
                        />) : (<NoTasksFound />)
                    } */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskSection;
