import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import registration from '../assets/certificates/ragistration.png';
import login from '../assets/certificates/login-page.png';
import registrationSuccess from '../assets/certificates/registration-sucessfull.png';
import loginSuccess from '../assets/certificates/Login-Sucessfull.png';
import otpVerification from '../assets/certificates/OTP-Verification.png';
import invalidLogin from '../assets/certificates/Invalid-Login.png';

const UserAuthSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "Registration Screen", src: registration },
    { title: "Login Screen", src: login },
    { title: "Registration Successful", src: registrationSuccess },
    { title: "Login Successful", src: loginSuccess },
    { title: "OTP Verification", src: otpVerification },
    { title: "Custom Popup for Invalid Login", src: invalidLogin },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">User Authentication System</h1>
        <h2 className="text-lg mt-1">Web Application</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            The User Authentication System is a dynamic web-based application designed for user registration with support for multiple email addresses and mobile numbers. It ensures data security, avoids duplicate entries, and stores data using a normalized structure in an Oracle database. The system provides encrypted password storage, styled popup messages, and smooth interaction through a clean user interface.
          </p>
          <p className="text-justify mb-3">
            Earlier systems relied on simple text-based validation without secure handling of data or UI, which posed risks and inefficiencies.
          </p>
          <p className="text-justify mb-2">This system improves on that by:</p>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Storing credentials in a secure and structured way</li>
            <li>Verifying login credentials using Java logic</li>
            <li>Allowing user-friendly registration and login forms</li>
            <li>Improving security and data integrity</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Allows users to register with:
              <ul className="pl-4 list-disc">
                <li>Name</li>
                <li>Email addresses</li>
                <li>Mobile numbers</li>
                <li>Passwords (encrypted before saving)</li>
              </ul>
            </li>
            <li>Validates all input fields (non-empty, correct format)</li>
            <li>Detects and prevents duplicate email or mobile entries</li>
            <li>Displays custom popup messages (success, error, info)</li>
            <li>Login includes:
              <ul className="pl-4 list-disc">
                <li>Email</li>
                <li>Password</li>
                <li>CAPTCHA</li>
                <li>OTP verification via email</li>
              </ul>
            </li>
            <li>Forgot password feature:
              <ul className="pl-4 list-disc">
                <li>Sends OTP to registered email</li>
                <li>Lets users reset password after OTP verification</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
            <li><strong>Backend:</strong> JSP (Java Server Pages)</li>
            <li><strong>Database:</strong> OracleXE 10G</li>
            <li><strong>Editor:</strong> Sublime Text</li>
            <li><strong>Runtime:</strong> Command Prompt (Java Execution)</li>
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
        &copy; 2025 Dnyanesh Badave | User Authentication System
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

export default UserAuthSystem;
