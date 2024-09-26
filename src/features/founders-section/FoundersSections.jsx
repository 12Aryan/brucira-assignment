import React from "react";
import Profile1 from "../../icons/Profile1";
import Profile2 from "../../icons/Profile2";

const FoundersSections = () => {
  const profiles = [
    {
      id: 1,
      name: "Milly Cyrus",
      position: "Global Lead",
      description: [
        "All-round advertising go-to lady. Has a",
        "thing for stories: she calls this the side",
        "effect of a life lived with plot twists.",
      ],
      component: Profile1,
    },
    {
      id: 2,
      name: "Vinita Singh",
      position: "Asst. Global Lead",
      description: [
        "All-round advertising go-to lady. Has a",
        "thing for stories: she calls this the side",
        "effect of a life lived with plot twists.",
      ],
      component: Profile2,
    },
  ];
  return (
    <div className="flex gap-8">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex flex-col gap-6 border-l-[1px] border-[#21272A26] py-6 px-4"
        >
          <profile.component />
          <div>
            {profile.description.map((line, index) => (
              <p
                key={index}
                className="text-[13px] font-normal text-[#1E1F1FB2]"
              >
                {line}
              </p>
            ))}
          </div>
          <div className="text-sm font-medium">
            {profile.name}, {profile.position}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoundersSections;
