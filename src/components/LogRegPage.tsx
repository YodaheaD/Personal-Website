"use client"

import { useState } from "react"
  import { Card } from "./ui/card"
import { LoginForm } from "./sub/forms"

const LogRegPage = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800"

  return (
    <>
      <div className="h-4/5 w-4/5 bg-white relative overflow-hidden rounded-lg">
        <Card className="shadow-md">
          <div
            id="signin"
            className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
              isAnimated ? "translate-x-full opacity-0" : ""
            }`}
          > 
              <LoginForm />  
          </div>

          <div
            id="signup"
            className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
              isAnimated
                ? "translate-x-full opacity-100 z-50 animate-show"
                : "opacity-0 z-10"
            }`}
          >
            <div className="h-full w-full flex justify-center items-center">
              <LoginForm />
            </div>
          </div>

          <div
            id="overlay-container"
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${
              isAnimated ? "-translate-x-full" : ""
            }`}
          >
            <div
              id="overlay"
              className={` relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-1/2" : "translate-x-0"
              }`}
              style={{
                
                backgroundImage: `url("https://picsum.photos/640/360")`,
              }}
            >
              {" "}
              {
                //$overlayBg
              }
              <div
                id="overlay-left"
                className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%] transition transition-transform duration-700 ease-in-out ${
                  isAnimated ? "translate-x-0" : "-translate-x-[20%]"
                }`}
              >
                <div className="p-8 text-center">
                  <h1 className=" text-[min(4vw)] font-bold text-white mb-4">
                    Already have an account ?
                  </h1>

                  <h5 className="text-[min(2vw)]  text-white">
                    Sign in with your email & password
                  </h5>
                  <div className="mt-16">
                    <button
                      className="py-3 px-6 bg-slate-900 rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
                      onClick={(e) => {
                        setIsAnimated(!isAnimated)
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="overlay-right"
                className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${
                  isAnimated ? "translate-x-[20%]" : "translate-x-0"
                }`}
              >
                {/*<RightOverlayContent
      isAnimated={isAnimated}
      setIsAnimated={setIsAnimated}
    />*/}
                <div className="p-8 text-center">
                  <h1 className="text-[min(4vw)] font-bold text-white mb-4">
                    Don't have an account ?
                  </h1>

                  <h5 className="text-[min(2vw)]  text-white">
                    Register to the CONA IR here.
                  </h5>
                  <div className="mt-16">
                    <button
                      className="py-3 px-6 bg-slate-900 rounded-full text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
                      onClick={(e) => {
                        setIsAnimated(!isAnimated)
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default LogRegPage