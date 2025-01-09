import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Trash2 } from "lucide-react";

export default function TaskCard() {



  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div ></div>
          <h1>title</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button  variant="link" className="p-0 text-red-400">
            <Trash2 />
          </Button>
          <Checkbox/>
        </div>
      </div>
      <p className="mt-5">description</p>
      <p>Assigned to - no one </p>
    </div>
  );
}