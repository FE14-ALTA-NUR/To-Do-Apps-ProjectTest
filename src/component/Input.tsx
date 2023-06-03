import React, { useState } from "react";
import { BiAlarmAdd } from "react-icons/bi";
import Swal from 'sweetalert2'

const NewTaskForm: React.FC = () => {
  const [taskContent, setTaskContent] = useState("");

  // Mengirim permintaan POST untuk membuat tugas baru
  const createNewTask = async () => {
    try {
      const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
        method: "POST",
        headers: {
          Authorization: "Bearer 431cb76f650541058f235490f5fb4731ec1d32b9",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: taskContent,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create new task");
      }

      const data = await response.json();
      console.log("New task created:", data);
      setTaskContent(""); 
      
    } catch (error) {
      console.error("Error creating new task:", error);

    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNewTask();
    Swal.fire({
      title: 'Successfully added task',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
    }).then(() => {
      window.location.reload(); // Memuat ulang halaman saat tombol "OK" diklik
    });
  };

  return (
    <div>

      <form onSubmit={handleSubmit} className='w-full h-12 bg-gray-800 flex justify-center items-center'>
        <input

          type="teks"
          name="input"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          placeholder="Tugas Apa Hari Ini..."
          className="input input-bordered input-info w-full" />
        <button type="submit" className="btn btn-outline btn-success"><BiAlarmAdd /></button>
       
      </form>
    </div>
  );
};

export default NewTaskForm;
