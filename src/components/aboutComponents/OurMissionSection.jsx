import { IoIosArrowRoundForward } from 'react-icons/io'
import { missionList } from '../../localStore'
import { Link } from 'react-router-dom'

const OurMissionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 py-30">
          <h1 className="font-bold text-[34px] text-base-strong-text">
            Our Mission
          </h1>
          <div className="grid grid-cols-3 gap-6">
            {missionList.map((el, index) => (
              <div
                key={index + 1}
                className="bg-white border border-base-text p-6 rounded-lg text-base-strong-text flex flex-col justify-center items-start gap-6"
              >
                <h1 className="text-[22px] font-bold">{el.heading}</h1>
                <p className="text-[16px] text-base-text">{el.desc}</p>
                <Link className="flex items-center gap-1 text-purple-them text-[16px]">
                  View More <IoIosArrowRoundForward className="text-2xl" />
                </Link>
              </div>
            ))}
          </div>
        </div>
  )
}

export default OurMissionSection