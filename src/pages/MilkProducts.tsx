import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import adminlogin from '../assets/certificates/adminlogin.webp';
import homepage from '../assets/certificates/homepage.webp';
import manageproduct from '../assets/certificates/manageproduct.webp';
import managecategory from '../assets/certificates/managecategory.webp';
import generatebill from '../assets/certificates/generatebill.webp';
import invoice from '../assets/certificates/invoice.webp';
import bill from '../assets/certificates/bill.webp';
import reports from '../assets/certificates/reports.webp';
import changeusername from '../assets/certificates/changeusername.webp';
import changepassword from '../assets/certificates/changepassword.webp';

const MilkProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "Admin Login Page", src: adminlogin },
    { title: "Home Page", src: homepage },
    { title: "Manage Product", src: manageproduct },
    { title: "Manage Category", src: managecategory },
    { title: "Generate Bill", src: generatebill },
    { title: "Invoice", src: invoice },
    { title: "Bill", src: bill },
    { title: "Reports", src: reports },
    { title: "Change Username", src: changeusername },
    { title: "Change Password", src: changepassword },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md">
        <div className="relative flex items-center justify-center px-4">
          <Link
            to="/#projects"
            className="absolute left-4 flex items-center gap-2 text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors"
          >
            <span className="text-xl">&#8592;</span>
            <span className="hidden sm:inline font-semibold">Back</span>
          </Link>
          <div className="text-center px-12">
            <h1 className="text-3xl sm:text-4xl font-bold">Milk Products Management System</h1>
        <h2 className="text-lg mt-1">Desktop Application</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            The Milk Product Management System is a desktop software developed for dairy shops to make their daily work faster and easier.
          </p>
          <p className="text-justify mb-3">
            Before this system, the dairy shop used notebooks and registers to keep track of customer details, milk quantity, inventory, and bills. This process was slow, full of mistakes, and hard to manage.
          </p>
          <p className="text-justify mb-2">Now, with this software:</p>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Records are stored digitally on the computer</li>
            <li>Bills are generated automatically</li>
            <li>Data is easy to update anytime</li>
            <li>Finding customer/product info is fast</li>
            <li>Saves time, effort, and paper</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>User-friendly design</li>
            <li>Digital record-keeping</li>
            <li>Accurate inventory and billing management</li>
            <li>Reduces manual effort</li>
            <li>Cost-effective and efficient</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> C#</li>
            <li><strong>Database:</strong> SQL Server Management Studio 2014</li>
            <li><strong>Tool:</strong> Visual Studio Community 2015</li>
            <li><strong>Platform:</strong> Windows Desktop Application</li>
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
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Milk Products Management System
      </footer>
    </div>
  );
};

export default MilkProducts;
