import React from "react";
import { Bug, Newspaper, Phone } from "lucide-react";
const Contact = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-softBg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
               {/* Contact form start */}
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form action="https://formspree.io/f/xqkvnapa" method="POST">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="username"
                      autoComplete="off"
                      id="username"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-bgLight  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100   motion-reduce:transition-none text-txtColor placeholder:text-softTxt dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      placeholder="Enter Username"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-softTxt dark:peer-focus:text-primary"
                      htmlFor="username"
                    >
                      Your Username
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-bgLight  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  motion-reduce:transition-none text-txtColor placeholder:text-softTxt dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="email"
                      placeholder="Email address"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-softTxt dark:peer-focus:text-primary"
                      htmlFor="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      autoComplete="off"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-bgLight py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  motion-reduce:transition-none text-txtColor placeholder:text-softTxt [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="message"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-txtColor dark:peer-focus:text-primary"
                    >
                      Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-6 inline-block w-full rounded bg-orange px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-txtColor shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                  >
                    Send
                  </button>
                </form>
              </div>
                {/* Contact form end */}


                 {/* Services list form start */}
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-bgLight  p-4 text-primary">
                          <Phone className="text-txtColor" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-txtColor">
                          Technical support
                        </p>
                        <p className=" text-softTxt">support@dCommerce.com</p>
                        <p className=" text-softTxt">+9494849494</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-bgLight p-4 text-primary">
                          <Newspaper className="text-txtColor" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-txtColor">
                          Software Solutios
                        </p>
                        <p className="text-neutral-500 text-softTxt">
                          software@dCommerce.com
                        </p>
                        <p className="text-neutral-500 text-softTxt">
                          +9494849494
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-bgLight p-4 text-primary">
                          <Newspaper className="text-txtColor" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-txtColor">Press</p>
                        <p className="text-softTxt">contact@dCommerce.com</p>
                        <p className="text-softTxt">+9494849494</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-bgLight p-4 text-primary">
                          <Bug className="text-txtColor" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-txtColor">
                          24x7 Bug support
                        </p>
                        <p className="text-softTxt ">bugs@dCommerce.com</p>
                        <p className="text-softTxt ">+9494849494</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                {/* Services list form end */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
