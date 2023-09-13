import React from "react";

const ls = [
  "Lock Share Token is a cutting-edge technology designed to revolutionize the way we share access to physical spaces securely. Whether it's granting access to your home, office, or any other space, Lock Share Token provides a seamless and reliable solution.",
  "With traditional methods of sharing access such as physical keys or sharing passwords, there are always concerns about security and the potential for unauthorized access. Lock Share Token solves these issues by leveraging advanced encryption and authentication protocols, ensuring that only authorized individuals can gain access.",
  "Here's how it works: Lock Share Token utilizes a unique digital token that can be easily shared with others via various mediums such as text message, email, or a dedicated mobile app. This token acts as a temporary or permanent access key, granting the recipient access to the specified space for a defined period.",
  "The versatility of Lock Share Token is one of its standout features. It can be easily integrated with existing locking systems, making it compatible with a wide range of locks and access control systems. Additionally, it offers customizable access permissions, allowing you to define who can enter, when they can enter, and for how long.",
  "The benefits of Lock Share Token extend beyond convenience and security. It eliminates the need for physical key management, reducing the risk of lost or stolen keys. Moreover, it provides a comprehensive audit trail, allowing you to track and monitor access history in real-time.",
  "Experience the future of access sharing with Lock Share Token, and say goodbye to the hassles and vulnerabilities of traditional methods. Lock Share Token ensures peace of mind and simplifies the process of granting access. With its robust security features and user-friendly interface, it is the ultimate solution for secure sharing of access to physical spaces.",
];

export default function index() {
  return (
    <div className=" dark:bg-gray-900 pt-5">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
            <h1>What is THE LOCK SHARE</h1>
          </div>
        </div>
      </section>

      {ls.map((v, idx) => {
        return (
          <div
            key={idx}
            className="bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-6"
          >
            <div className="max-w-7xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  {v}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
