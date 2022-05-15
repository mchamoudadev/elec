/* This example requires Tailwind CSS v2.0+ */
const people = [
	{
		name: "Calvin Hawkins",
		email: "calvin.hawkins@example.com",
		image:
			"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Kristen Ramos",
		email: "kristen.ramos@example.com",
		image:
			"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Ted Fox",
		email: "ted.fox@example.com",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

export default function Example() {
	return (
		<ul role="list" className="divide-y divide-gray-200 mt-6">
			{people.map((person) => (
				<li
					key={person.email}
					className="py-2 flex justify-between cursor-pointer hover:bg-[#eef2ff] text-[#827edd]">
					{/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
					<div className="ml-3  flex justify-center items-center">
						<p className="text-sm font-medium text-gray-900">{person.name}</p>
						{/* <p className="text-sm text-gray-500">{person.email}</p> */}
					</div>

					<div className="rounded-full bg-[#4189dd] text-white text-lg w-[45px] h-[45px] flex justify-center items-center">
						<span>250</span>
					</div>
				</li>
			))}
		</ul>
	);
}
