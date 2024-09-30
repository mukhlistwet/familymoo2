// import React from "react";
// import UserInfo from "./userinfo";
// import ReferralCode from "./coderef";
// import UserImage from "./userimage";

// function UserCard() {
//   return (
//     <article className="overflow-hidden pl-8 bg-amber-100 rounded-xl max-w-[477px] shadow-[0px_18px_32px_rgba(0,0,0,0.25)]">
//       <div className="flex gap-5 max-md:flex-col">
//         <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col self-stretch my-auto w-full text-sky-900">
//             <UserInfo name="Akmal Xavier" phone="+62 0812 3456 7890" />
//             <ReferralCode code="SRIXXX" />
//           </div>
//         </div>
//         <UserImage />
//       </div>
//     </article>
//   );
// }

// export default UserCard;
import React from "react";

function UserCard() {
  return (
    <div className="overflow-hidden absolute left-28 z-0 pl-8 max-w-full bg-amber-100 rounded-xl h-[168px] shadow-[0px_18px_32px_rgba(0,0,0,0.25)] top-[151px] w-[477px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-sky-900 max-md:mt-10">
            <div className="flex flex-col self-start">
              <h2 className="text-2xl font-bold tracking-tight">Akmal Xavier</h2>
              <p className="text-xs">+62 0812 3456 7890</p>
            </div>
            <div className="flex gap-1 items-start mt-4 text-base font-bold">
              <p>
                <span className="">Kode Referral:</span> <span className="font-semibold">SRIXXX</span>
              </p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f3402602d99be076036cb003ed92ff9633cad86ecff16910806994a87f7870?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
                alt=""
                className="object-contain shrink-0 w-6 rounded aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a33ea2c16da245b9b51075bfcaa30118e817f2464a1e0f2703ff8047873784ec?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt="QR Code"
            className="object-contain grow shrink-0 max-w-full aspect-[1.19] w-[200px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
