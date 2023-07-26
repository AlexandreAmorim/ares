import ButtonLogout from "@/components/ButtonLogout"

export default async function Dashboard(){

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1 className="text-2xl mb-8">Dashboard</h1>
			<ButtonLogout />
		</div>
	)
}