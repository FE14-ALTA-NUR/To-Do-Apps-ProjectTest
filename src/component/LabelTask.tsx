import React, { FC } from 'react'
import { BiCalendarEdit, BiTrash } from "react-icons/bi";

interface LabelTask{
    teks?: string;
}
const LabelTask: FC<LabelTask> = ({ teks }) => {
    return (
        <div>
        <div className="p-3 flex flex-wrap justify-center items-center max-w-xl min-w-fit border-2 rounded-md border-white mt-10">
          <div className="w-10 mr-3">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-info" />
              </label>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5">
            <div className="bg-yellow">
              <p>{teks}</p>
            </div>
          </div>
          <div className="w-10 m-2">
            <div className="bg-yellow">
              <button className="btn btn-circle btn-outline btn-warning">
                <BiCalendarEdit />
              </button>
            </div>
          </div>
          <div className="w-10 m-2">
            <div className="bg-yellow">
              <button className="btn btn-circle btn-outline btn-error">
                <BiTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default LabelTask