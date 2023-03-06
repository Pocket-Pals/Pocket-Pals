import Image from "next/image";
import React from "react";

export default function handler({ txt, description }) {
  const typeList = ["Type", "Status", "Size", "Breed", "Attributes"];
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col">
          <div className="flex">
            <Image
              src={"http://placekitten.com/1000"}
              width={2000}
              height={2000}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-xl">Name</h1>
          </div>
          <ul className="flex flex-col">
            {typeList.map((item, index) => {
              return (
                <li key={index}>
                  {item}: {txt || "cat"}
                </li>
              );
            })}
          </ul>
          <div>
            <p>
              {description ||
                "Bite the neighbor's bratty kid purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow iâ€™m so hungry iâ€™m so hungry but ew not for that . Munch, munch, chomp, chomp see owner, run in terror, i like fish so purrr purr littel cat, little cat purr purr. Then cats take over the world poop on grasses, for missing until dinner time, yet give attitude, or bite the neighbor's bratty kid find empty spot in cupboard and sleep all day, or that box? i can fit in that box. Paw at beetle and eat it before it gets away side-eyes your other hand while being petted and demand to have some of whatever the human is cooking, then sniff the offering and walk away weigh eight pounds but take up a full-size bed, and if human is on laptop sit on the keyboard for poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
