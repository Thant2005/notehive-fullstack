import { MoveRight } from "lucide-react";
import { Link } from "react-router";

function SignUp() {
  return (
    <div className="min-h-screen max-w-md mx-auto  pt-20 px-2 ">
      <div className="bg-white px-8 py-10 rounded-lg border border-line/40 ">
        <div className="flex items-center gap-1 justify-center mb-3">
          <img src="./notehive_logo.svg" alt="" />
          <h1 className="font-extrabold text-lg">Note Hive</h1>
        </div>
        <div className="flex justify-around items-center">
          <div className="w-7 h-7 flex items-center justify-center text-white bg-primary rounded-full">
            1
          </div>
          <div className="flex-1 h-px bg-muted mx-3"></div>
          <div className="w-7 h-7 flex items-center justify-center text-white bg-primary rounded-full">
            2
          </div>
        </div>
        <div className="space-y-1 mt-2">
          <h1 className="text-lg font-extrabold">Create your accout</h1>
          <p className="text-xs text-muted">
            Join NoteHive and share your note with your classmates.
          </p>
        </div>
        <div className="space-y-4 mt-2">
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold" htmlFor="username">
              Full name
            </label>
            <input
              type="text"
              className=" border-line border-2  focus:outline-none focus:ring-1 focus:ring-primary  placeholder:text-muted rounded-md px-2 py-1 "
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold" htmlFor="username">
              Email
            </label>
            <input
              type="text"
              className=" border-line border-2  focus:outline-none focus:ring-1 focus:ring-primary  placeholder:text-muted rounded-md px-2 py-1.5"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold" htmlFor="username">
              Password
            </label>
            <input
              type="text"
              className=" border-line border-2  focus:outline-none focus:ring-1 focus:ring-primary  placeholder:text-muted rounded-md px-2 py-1 "
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex gap-1 items-center  ">
            <button className="text-white text-sm font-bold flex-1 rounded-lg bg-muted py-2">
              Back
            </button>
            <button className="bg-primary gap-1 flex-2 hover:bg-primary-dark w-full py-2 rounded-lg flex items-center justify-center text-white font-bold">
              <span className="text-sm">Continue</span>
              <MoveRight size={20} className="font-extrabold" />
            </button>
          </div>
          <p className="text-muted text-sm text-center mt-3">
            Already have an account?{" "}
            <Link to={"sign-in"} className="font-bold text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
