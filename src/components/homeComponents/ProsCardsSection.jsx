import { prosList } from "../../localStore";

const ProsCardsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-15.25">
      {prosList.map((el, index) => (
        <div key={index + 1} className="flex flex-col items-start">
          <img src={el.img} alt="icon" />
          <h1 className="text-base-strong-text font-bold text-[18px] pt-4 pb-2">
            {el.heading}
          </h1>
          <p className="text-base-text text-[16px] font-normal">{el.desc} </p>
        </div>
      ))}
    </section>
  );
};

export default ProsCardsSection;
