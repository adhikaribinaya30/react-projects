import './TaskCard.css';
import {supabase} from '../supabase-client';
import { fetchData } from '../services/taskService';

export function TaskCard({ title = "", setTask, description = "", id }) {

  async function deleteTask(id) {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      console.log("Error deleting task");
      return;
    }

    const data = await fetchData();
    setTask(data);
  }

  return (
    <div className='task-card' key={id}>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => {deleteTask(id)}}>Delete</button>
    </div>
  )
}