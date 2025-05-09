"use client";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="bg-[#FAF6F1]">
      <footer className="max-w-7xl mx-auto px-10 lg:px-5">
        <div className="flex justify-center py-16">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 space-y-2">
            <div className="flex justify-center">
              <div className="">
                <div className="mb-4 mt-2 space-y-1">
                  <p className="text-sm text-primary">
                    At 6sense Technologies, our team of exceptionally talented
                    engineers, handpicked and nurtured through rigorous HR and
                    training processes, consistently outperforms the market.
                    Leveraging the latest technologies like Node.js, Express.js,
                    Next.js, Nest.js, and React, we deliver custom software
                    solutions that drive your business forward.
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Link
                    href="https://www.facebook.com/6senseHQ"
                    target="_blank"
                  >
                    <div>
                      <Facebook />
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/6sensehq"
                    target="_blank"
                  >
                    <div>
                      <Linkedin />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex md:justify-center">
              <div className=" my-2 md:pl-20 text-sm text-primary flex flex-col items-start space-y-4">
                <Link href="#">Front-End Developers</Link>
                <Link href="#">Full-Stack Developers</Link>
                <Link href="#">Angular Developers</Link>
                <Link href="#">Node.js Developers</Link>
                <Link href="#">JavaScript Developers</Link>
                <Link href="#">React Developers</Link>
                <Link href="#">.NET Developers</Link>
                <Link href="#">Java Developers</Link>
                <Link href="#">PHP Developers</Link>
                <Link href="#">Python Developers</Link>
                <Link href="#">C/C++ Developers</Link>
                <Link href="#">C# Developers</Link>
              </div>
            </div>
            <div className=" flex md:justify-center">
              <div className=" my-2 text-sm text-primary flex flex-col items-start space-y-4">
                <Link href="#">Ruby Developers</Link>
                <Link href="#">Unity3D Developers</Link>
                <Link href="#">iOS Developers</Link>
                <Link href="#">Android Developers</Link>
                <Link href="#">nopCommerce Developers</Link>
                <Link href="#">Drupal Developers</Link>
                <Link href="#">SQL Developers</Link>
                <Link href="#">QA Engineers</Link>
                <Link href="#">UI/UX Designers</Link>
                <Link href="#">Product Owner</Link>
                <Link href="#">Scrum Master</Link>
                <Link href="#">DevOps Engineer</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">
                <h3 className="font-bold text-primary text-lg">Get In Touch</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-primary">
                    <a href="mailto:hello@6sensehq.com">hello@6sensehq.com</a>
                  </p>
                  <p className="text-sm text-primary">
                    2055 Limestone Rd Ste 200C, Wilmington, Delaware 19808, US
                  </p>
                  <p className="text-sm text-primary">
                    House 15, Block G Rd 3/A, Banasree Dhaka, Bangladesh, 1219,
                    BD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pb-4 text-primary text-sm text-center">
          Copyright {currentYear} © 6sense Technologies All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
