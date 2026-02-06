import { FaStar } from "react-icons/fa";

const ReviewCard = ({
  userName = "John Smith",
  reviewDate = "28/07/2024",
  reviewTitle = "Excellent Book",
  rating = 5.0,
  reviewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.",
  userImage = null,
  isVerifiedPurchase = true,
}) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg">
      {/* User Avatar */}
      <div className="flex-shrink-0">
        {userImage ? (
          <img
            src={userImage}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            {userName.charAt(0)}
          </div>
        )}
      </div>

      {/* Review Content */}
      <div className="flex-1">
        {/* User Info */}
        <div className="mb-2">
          <h4 className="font-semibold text-base text-base-strong-text">
            {userName}
          </h4>
          {isVerifiedPurchase && (
            <p className="text-sm text-green-600 font-medium">
              Verified Purchase
            </p>
          )}
        </div>

        {/* Review Date */}
        <p className="text-sm text-gray-500 mb-2">Reviewed On {reviewDate}</p>

        {/* Review Title and Rating */}
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-semibold text-base text-base-strong-text">
            {reviewTitle}
          </h3>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm">{rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-sm ${
                    index < Math.floor(rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm text-base-text leading-relaxed">{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
