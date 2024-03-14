import React, { useState } from "react";
import SearchTask from "./SearchTask";
import ActionTask from "./ActionTask";
import ListTask from "./ListTask";
import AddTaskModal from "./AddTaskModal";
import TaskNotFound from "./TaskNotFound";

const TaskSection = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "This is React vite project",
    description:
      "Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for Seamless Goal Achievement and Stress-Free Task Management.",
    tags: ["React", "Vite", "Tailwindcss"],
    priority: "Hight",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if ((task.id = newTask.id)) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddTaskModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowAddTaskModal(true);
  };
  const handleCloseModal = () => {
    setShowAddTaskModal(false);
    setTaskToEdit(null);
  };
  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };
  const handleDeleteAllClick = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
  };
  const handleSearch = (searchTerm) => {
   const searchTasks = tasks.filter((task)=>task.title.toLowerCase().includes(searchTerm.toLowerCase()));
   setTasks([...searchTasks])
  };
  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddTaskModal && (
          <AddTaskModal
            taskToEdit={taskToEdit}
            onSave={handleAddEditTask}
            onCloseClick={handleCloseModal}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch} />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask
              onAddClick={() => setShowAddTaskModal(true)}
              onDeleteAllClick={handleDeleteAllClick}
            />
            {tasks.length >0 ? 
            <ListTask
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavorite}
            /> : <TaskNotFound/>
          }
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
