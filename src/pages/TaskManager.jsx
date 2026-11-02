import './TaskManager.css';
import { Header } from '../components/Header';
import { TaskCard } from '../components/TaskCard';
import { useEffect, useState } from 'react'
import { supabase } from '../supabase-client';
import { fetchData } from '../services/taskService';

export function TaskManager(){

  const [newTask, setNewTask] = useState({task: "", description:""});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const { error, data } = await supabase
        .from("tasks")
        .select("*")
        .order("id");

      if (error){
        console.log(`Error: ${error}`);
        return
      }

      setTasks(data);
    }

    fetchData();
  }, []);

  console.log(tasks);
  
  async function handleSubmit(e){
    e.preventDefault();
    const {error} = await supabase.from("tasks").insert(newTask).single();
    if (error){
      console.log(`Error: ${error}`);
      return;
    }
    setNewTask({task:"", description:""})

    const data = await fetchData();
    console.log(data);
    setTasks(data);
  } 

  return(
    <>
      <Header />
      <div className='task-manager-main'>
        <h2 className='task-manager-heading'>Task Manager CRUD</h2>
        <form className='add-box' onSubmit={handleSubmit}>
          <input 
            onChange={(e) => {
              setNewTask((prev) => ({...prev, task:e.target.value}));
            }} 
            value={newTask.task}
            type="text" 
            className='task-input' 
            placeholder='Task Name'/>
          <textarea 
            className='desc-input' 
            placeholder='Task Description'
            onChange={(e) => {
              setNewTask((prev) => ({...prev, description:e.target.value}));
            }}
            value={newTask.description}>
          </textarea>
          <button className='add-button' type='submit'>Add Task</button>
        </form>
          
        <div className='tasks'>
          {
            tasks.map((task) => (<TaskCard setTask={setTasks} title={task.task} key={task.id} id={task.id} description={task.description}/>))
          }
        </div>
      </div>
    </>
  )
}