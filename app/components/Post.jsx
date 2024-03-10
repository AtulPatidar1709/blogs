import NavButton from "./NavButton";

export default function Post({ title, body, id }) {
  return (
    <div>
      {/* <a target="_blank" rel="noreferrer"> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 bg-gradient-to-r from-[#545454] to-[#807f7f] border-b-[#000000]">
          <img
           className="w-full transition-transform duration-300 transform hover:scale-125"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Image Alt Text"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#e5e5e5] hover:text-[#fff]">
              {title}
            </div>
            <p className="text-base text-[#e2e1e1] w-4/5 font-inter tracking-wide leading-5">
              {body}{" "}
            </p>
            <NavButton id={id} />
          </div>
        </div>
      {/* </a> */}
    </div>
  );
}
