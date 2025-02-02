import { useState } from "react";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'


const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
  ]
export default function AcademicProfile() {
  const [activeTab, setActiveTab] = useState("Aspirant");
  const [selected, setSelected] = useState(people[3])
  const [selectedUniversity, setSelectedUniversity] = useState(people[3]);
    const [selectedCourse, setSelectedCourse] = useState(people[5]); 
    const [selectedYear, setSelectedYear] = useState(people[7]);
    const [selectedField, setSelectedField] = useState(null); // 🔹 Fix: Define this state
  const [selectedGraduation, setSelectedGraduation] = useState(null); 
  const [selectedAlumniUniversity, setSelectedAlumniUniversity] = useState(people[3]);
const [selectedAlumniYear, setSelectedAlumniYear] = useState(people[2]);
const [selectedAlumniField, setSelectedAlumniField] = useState(people[1]);
const [selectedGraduationYear, setSelectedGraduationYear] = useState(people[0]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 bg-gray-100 p-4 ">
      <div className="bg-white  rounded-2xl p-6 w-full max-w-xl">
        <h1 className="text-2xl font-normal text-left">Complete your Academic Profile</h1>
        <p className="text-gray-600 text-left mt-2">
          Help us personalize your experience with academic-specific content
        </p>

            <div className="mb-2 mt-4 text-gray-600"> 
                <p>I am a</p>
            </div>
                <div className="flex justify-center space-x-6">
                {["Aspirant", "Student", "Alumni"].map((tab) => (
                    <button
                    key={tab}
                    className={`px-12 py-4 rounded-lg font-medium border transition-all ${
                        activeTab === tab
                        ? "bg-blue-300 text-[#0076CA] border-blue-500"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
                </div>


        <div className="mt-6 space-y-4">
        {activeTab === "Aspirant" && (
    <>
      {/* Target University Listbox */}
      <Listbox value={selectedUniversity} onChange={setSelectedUniversity}>
        <Label className="block text-sm font-medium text-gray-900">Target University</Label>
        <div className="relative mt-2">
          <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
            <span className="truncate pr-6">{selectedUniversity.name}</span>
            <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {people.map((person) => (
              <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      {/* Preferred Course Listbox */}
      <Listbox value={selectedCourse} onChange={setSelectedCourse}>
        <Label className="block text-sm font-medium text-gray-900">Intended Course</Label>
        <div className="relative mt-2">
          <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
            <span className="truncate pr-6">{selectedCourse.name}</span>
            <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {people.map((person) => (
              <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      {/* Graduation Year Listbox */}
      <Listbox value={selectedYear} onChange={setSelectedYear}>
        <Label className="block text-sm font-medium text-gray-900">Current Qualification</Label>
        <div className="relative mt-2">
          <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
            <span className="truncate pr-6">{selectedYear.name}</span>
            <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {people.map((person) => (
              <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </>
  )}

{activeTab === "Student" && (
  <>
    {/* Current University */}
    <Listbox value={selectedUniversity} onChange={setSelectedUniversity}>
      <Label className="block text-sm font-medium text-gray-900">University</Label>
      <div className="relative mt-2">
        <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
          <span className="truncate pr-6">{selectedUniversity?.name}</span>
          <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>

    {/* Year of Study */}
    <Listbox value={selectedYear} onChange={setSelectedYear}>
         {/* <label className="mb-1 text-gray-700">Graduation Year</label> */}
      <Label className="block text-sm font-medium text-gray-900">Department/Course</Label>
      <div className="relative mt-2">
        <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
          <span className="truncate pr-6">{selectedYear?.name}</span>
          <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>

    {/* Two More Dropdowns Side by Side */}
    <div className="flex gap-4 mt-4">
            {/* Field of Study */}
            <div className="flex flex-col w-1/2">
              {/* <label className="mb-1 text-gray-700">Graduation Year</label> */}
              <Listbox value={selectedField} onChange={setSelectedField}>
              <Label className="block text-sm font-medium text-gray-900">Level</Label>
      <div className="relative mt-2">
        <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
          <span className="truncate pr-6">{selectedField?.name || "Select Field"}</span>
          <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
            </div>

            {/* Expected Graduation Year */}
            <div className="flex flex-col w-1/2">
              <label className="mb-1 text-sm font-medium text-gray-900 ">Matric Number (optional)</label>
              <Listbox vvalue={selectedGraduation} onChange={setSelectedGraduation}>
                
      <div className="relative mt-2">
        <ListboxButton className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
          <span className="truncate pr-6">{selectedGraduation?.name || "Select Year"}</span>
          <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
            </div>
          </div>
  </>
)}



{activeTab === "Alumni" && (
  <>
    {/* Graduated University */}
    <Listbox value={selectedAlumniUniversity} onChange={setSelectedAlumniUniversity}>
      <Listbox.Label className="block text-sm font-medium text-gray-900">University Graduate From</Listbox.Label>
      <div className="relative mt-2">
        <Listbox.Button className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
          <span className="truncate pr-6">{selectedAlumniUniversity?.name}</span>
          <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>

    {/* Year of Graduation */}
    <Listbox value={selectedAlumniYear} onChange={setSelectedAlumniYear}>
      <Listbox.Label className="block text-sm font-medium text-gray-900">Course Studied</Listbox.Label>
      <div className="relative mt-2">
        <Listbox.Button className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
          <span className="truncate pr-6">{selectedAlumniYear?.name}</span>
          <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>

    {/* Field of Study & Expected Graduation Year */}
    <div className="flex gap-4 mt-4">
      {/* Field of Study */}
      <div className="flex flex-col w-1/2">
        <Listbox value={selectedAlumniField} onChange={setSelectedAlumniField}>
          <Listbox.Label className="block text-sm font-medium text-gray-900">Graduation Year</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
              <span className="truncate pr-6">{selectedAlumniField?.name || "Select Field"}</span>
              <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person) => (
                <Listbox.Option key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
                  {person.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Expected Graduation Year */}
      <div className="flex flex-col w-1/2">
        <Listbox value={selectedGraduationYear} onChange={setSelectedGraduationYear}>
          <Listbox.Label className="block text-sm font-medium text-gray-900">Current Status</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="w-full p-3 border rounded-lg grid cursor-default bg-white py-5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
              <span className="truncate pr-6">{selectedGraduationYear?.name || "Select Year"}</span>
              <ChevronUpDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500" />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person) => (
                <Listbox.Option key={person.id} value={person} className="cursor-pointer py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-indigo-600 hover:text-white">
                  {person.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    </div>
  </>
)}
        </div>

        <button className="mt-6 w-full bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white font-semibold py-3 rounded-lg text-lg shadow-md hover:opacity-90 transition">
          Complete Profile
        </button>
      </div>
    </div>
  );
}
