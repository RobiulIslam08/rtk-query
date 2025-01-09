import { AddUser } from "@/components/module/user/AddUserModal";
import { Button } from "@/components/ui/button";


import { Trash2 } from "lucide-react";


const Users = () => {

	return (
		<div className="max-w-7xl mx-auto">
			<div className="mb-5 mr-0">
			<AddUser></AddUser>
			</div>
			<div className="grid grid-cols-2 max-w-7xl mx-auto">
			
		
					<div  className="border p-10 w-72 bg-slate-300 flex justify-between items-center">
						<p className="text-2xl font-semibold">robi</p>
						<Button  className="w-2"><Trash2></Trash2> </Button>
			
					</div>
		
			
		</div>
		</div>
		
	);
};

export default Users;
