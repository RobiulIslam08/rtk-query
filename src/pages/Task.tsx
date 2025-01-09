import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";



const Task = () => {
  

  return (
    <div className="max-w-7xl mx-auto mt-20 px-5">
        <h1>Tasks</h1>
      <div className="flex justify-end items-center gap-10">
        <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all" >All</TabsTrigger>
        <TabsTrigger value="low" >Low</TabsTrigger>
        <TabsTrigger value="medium" >Medium</TabsTrigger>
        <TabsTrigger value="high" >High</TabsTrigger>
      </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
       
          <TaskCard></TaskCard>
      
      </div>
    </div>
  );
};

export default Task;
