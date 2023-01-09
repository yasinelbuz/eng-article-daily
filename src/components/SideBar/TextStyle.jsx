import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const people = [
	{ id: 1, name: "Roboto", unavailable: false },
	{ id: 2, name: "Open Sans", unavailable: false },
	{ id: 3, name: "Lato", unavailable: false },
	{ id: 4, name: "Moon Dance", unavailable: true },
	{ id: 5, name: "Inter", unavailable: false },
];

export default function TextStyle() {
	const [selected, setSelected] = useState(people[0]);
	return (
		<div className="mt-2 w-[80%]">
			<h2 className="font-bold">Text Style</h2>
			<Listbox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full border-2 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
						<span className="block truncate">{selected.name}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{people.map((person, personIdx) => (
								<Listbox.Option
									key={personIdx}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active
												? "bg-amber-100 text-amber-900"
												: "text-gray-900"
										}`
									}
									value={person}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? "font-medium"
														: "font-normal"
												}`}
											>
												{person.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
