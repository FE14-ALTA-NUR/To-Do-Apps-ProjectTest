import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchTasks } from '../redux/GetTodoRedux';
import {  BiTrash } from 'react-icons/bi';
import { detailId } from '../redux/GetIdTask';
import Swal from 'sweetalert2';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const error = useSelector((state: RootState) => state.tasks.error);

  console.log(tasks)

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

  const HandleCompleted = async (Id: number) => {
    try {
      console.log(Id)
      const response = await fetch(`https://api.todoist.com/rest/v2/tasks/${Id}/close`, {
        method: "POST",
        headers: {
          Authorization: "Bearer 431cb76f650541058f235490f5fb4731ec1d32b9",
        },
      });

      if (response.ok) {
        console.log("Task Completed");
        Swal.fire(
          'Completed!',
          'Your file has been Completed.',
          'success'
        ).then(() => {
          window.location.reload(); // Memuat ulang halaman saat tombol "OK" diklik
        });
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  const HandleDelete = async (Id: number) => {
    try {
      const response = await fetch(`https://api.todoist.com/rest/v2/tasks/${Id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer 431cb76f650541058f235490f5fb4731ec1d32b9",
        },
      });

      if (response.ok) {
        console.log("Task deleted successfully");
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then(() => {
          window.location.reload(); // Memuat ulang halaman saat tombol "OK" diklik
        });
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  const handledetailId = (Id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(detailId(Id));
        HandleDelete(Id)

      }
    })


  };


  return (
    <div>
      {sortedTasks.map((task) => (
        <div key={task.id} className="p-3 flex flex-wrap justify-center items-center max-w-xl min-w-full border-2 rounded-md border-white mt-10">
          <div className="w-10 mr-3">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-info" checked={task.completed} onChange={() => HandleCompleted(task.id)} />
              </label>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5">
            <div className="bg-yellow">
              <p>{task.content}</p>
            </div>
          </div>
          
          <div className="w-10 m-2">
            <div className="bg-yellow">
              <button className="btn btn-circle btn-outline btn-error" onClick={() => handledetailId(task.id)}>
                <BiTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
