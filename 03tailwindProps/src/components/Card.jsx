import React from "react";

function Card(props) {
    // console.log(props)
  return (
    <div className="mb-2 relative h-[400px] w-[300px] rounded-md overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="sanmit absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.name || "Your name"}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {props.description}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
