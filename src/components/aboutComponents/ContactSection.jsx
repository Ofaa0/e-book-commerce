import { iconsList } from "../../localStore";

const ContactSection = () => {
  return (
    <div className="bg-secondery-bg py-30 w-full flex justify-center items-center">
      <div className="container">
        <div className="flex justify-between items-center">
          <div id="form-shape">form here</div>
          <div id="icons" className="flex flex-col justify-center gap-6 items-start w-78">
            {iconsList.map((el, index) => (
              <div key={index + 1} className="flex items-center gap-3 h-12">
                <img src={el.img} alt={el.title}  className="bg-white p-3 rounded-lg"/>
                <p className="text-white text-[16px]">{el.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
