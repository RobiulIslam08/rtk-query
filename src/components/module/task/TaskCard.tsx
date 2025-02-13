import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types";

import { Trash2 } from "lucide-react";
interface IProps {
  task:ITask
}
export default function TaskCard({task}:IProps) {



  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button  variant="link" className="p-0 text-red-400">
            <Trash2 />
          </Button>
          <Checkbox/>
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
      <p>Assigned to - no one </p>
    </div>
  );
}