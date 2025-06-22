import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import adminlogin from '../assets/certificates/adminlogin.png';
import homepage from '../assets/certificates/homepage.png';
import manageproduct from '../assets/certificates/manageproduct.png';
import managecategory from '../assets/certificates/managecategory.png';
import generatebill from '../assets/certificates/generatebill.png';
import invoice from '../assets/certificates/invoice.png';
import bill from '../assets/certificates/bill.jpg';
import reports from '../assets/certificates/reports.png';
import changeusername from '../assets/certificates/changeusername.png';
import changepassword from '../assets/certificates/changepassword.png';

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
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">Milk Products Management System</h1>
        <h2 className="text-lg mt-1">Desktop Application</h2>
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
        &copy; 2024 Dnyanesh Badave | Milk Products Management System
      </footer>

      <Link
        to="/#projects"
        className="fixed top-6 left-6 bg-primary text-white dark:bg-muted dark:text-white px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-primary/90 transition-all z-50"
      >
        🔙 Back to Portfolio
      </Link>
    </div>
  );
};

export default MilkProducts;
