import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="spring backend" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="10" text="ML models" />
      </div>
      <p className="text-center">
      With experience in building dynamic and efficient web applications.
      </p>
      <ExperienceInfo number="ML" text="Specialization" />

    </div>
  );
};

export default ExperienceTopLeft;
