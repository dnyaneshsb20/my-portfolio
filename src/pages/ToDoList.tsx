import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import todo1 from '../assets/certificates/todo1.png';
import todo2 from '../assets/certificates/todo2.png';
import todo3 from '../assets/certificates/todo3.png';
import todo4 from '../assets/certificates/todo4.png';

const ToDoList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "Add Task Menu", src: todo1 },
    { title: "Display Tasks", src: todo2 },
    { title: "Delete Task Menu", src: todo3 },
    { title: "Final Display (After Deletion)", src: todo4 },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">To-Do List</h1>
        <h2 className="text-lg mt-1">C++ Console-Based Application</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            This To-Do List application is a C++ console-based mini project developed using linked list data structure.
            It helps users manage their tasks by allowing them to add, delete, and display tasks, which are automatically
            sorted based on their deadlines.
          </p>
          <p className="text-justify mb-3">
            Each task includes an ID, description, and a deadline in the format YYYY-MM-DD. Tasks are stored in a linked
            list structure to support dynamic memory management and efficient task handling.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Add tasks with ID, description, and deadline</li>
            <li>Delete tasks by ID</li>
            <li>Display all tasks in ascending order of deadline</li>
            <li>Tasks managed using linked list structure</li>
            <li>Efficient sorting based on custom date comparison logic</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> C++</li>
            <li><strong>Compiler:</strong> Any C++ Supported Environment (e.g., g++, Code::Blocks, Turbo C++)</li>
            <li><strong>Library:</strong> &lt;iostream&gt;</li>
            <li><strong>Data Structure:</strong> Singly Linked List</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Output Screens</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {images.map(({ title, src }, index) => (
              <div key={index}>
                <p className="text-center font-semibold mb-2">{title}</p>
                <img
                  src={src}
                  alt={title}
                  className="rounded-lg shadow-md w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center text-sm py-4 text-white bg-[#0F172A] dark:bg-background dark:text-white">
        &copy; 2024 Dnyanesh Badave | To-Do List Project
      </footer>

      <Link
        to="/#mini-projects"
        className="fixed top-6 left-6 bg-primary text-white dark:bg-muted dark:text-white px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-primary/90 transition-all z-50"
      >
        🔙 Back to Portfolio
      </Link>
    </div>
  );
};

export default ToDoList;
