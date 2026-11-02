import { supabase } from "../supabase-client";


// Fetching TaskManager data
export async function fetchData(){
  const { error, data } = await supabase
    .from("tasks")
    .select("*")
    .order("id");

  if (error){
    console.log(`Error: ${error}`);
    return
  }

  return data;
}