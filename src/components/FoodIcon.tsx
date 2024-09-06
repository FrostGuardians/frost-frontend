export type PossibleFoodIcons =
  | "Apple"
  | "Avocado"
  | "Banana"
  | "Beverage"
  | "Bread"
  | "Brocoli"
  | "Croissant"
  | "Cheese"
  | "Carrot"
  | "Egg"
  | "Fish"
  | "Meat"
  | "Pizza"
  | "Strawberry"
  | "VegiDish"
  | "MeatDish";

interface IconProps {
  name: PossibleFoodIcons;
}

export default function FoodIcon({ name = "Fish" }: IconProps) {
  switch (name) {
    case "Apple":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9 30.4C15.9 30.4 27.8 30.4 27.8 17.9C27.8 8.69997 21.3 8.29997 17.9 8.69997H13.9C10.5 8.29997 4 8.69997 4 17.9C4 30.4 15.9 30.4 15.9 30.4Z"
            fill="url(#paint0_linear_20_599)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8998 8.79997C15.8998 8.79997 14.5998 3.99997 11.7998 3.19997"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.6009 2.02548C21.8756 1.99735 22.1027 2.22445 22.0746 2.49916C21.9604 3.61533 21.4654 4.66427 20.6649 5.46478C19.8644 6.2653 18.8154 6.76022 17.6993 6.87449C17.4245 6.90261 17.1974 6.67551 17.2256 6.40081C17.3398 5.28464 17.8348 4.23569 18.6353 3.43518C19.4358 2.63467 20.4848 2.13974 21.6009 2.02548Z"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_599"
              x1="15.9"
              y1="8.60082"
              x2="15.9"
              y2="30.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7CF997" />
              <stop offset="1" stop-color="#42CE60" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Banana":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.4567 24.479C27.7257 26.0466 25.6781 27.224 23.4524 27.9314C21.2268 28.6387 18.8752 28.8596 16.5567 28.579C9.05674 27.779 1.25674 21.879 2.05674 14.379C2.35674 11.079 2.45671 12.279 2.95671 4.67901C2.95671 4.27901 4.05674 4.07902 4.05674 4.07902C4.05674 4.07902 5.85673 3.67901 5.85673 4.67901C5.85567 6.48379 6.15999 8.27575 6.75676 9.97901C7.86296 13.2404 9.9619 16.0739 12.7594 18.0824C15.557 20.0909 18.9129 21.1737 22.3567 21.179C24.0168 21.2062 25.6707 20.97 27.2568 20.479C27.7778 20.2711 28.3569 20.2609 28.885 20.4502C29.4131 20.6395 29.8538 21.0153 30.1242 21.5069C30.3946 21.9985 30.4759 22.5719 30.353 23.1193C30.2301 23.6667 29.9113 24.1502 29.4567 24.479Z"
            fill="url(#paint0_linear_20_220)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.55664 8.979C8.45607 11.0653 10.8645 12.6229 13.5464 13.4993C16.2283 14.3758 19.0917 14.541 21.8566 13.979C23.5045 13.6686 25.0915 13.0946 26.5566 12.279C27.0167 12.0472 27.5412 11.9765 28.0461 12.0783C28.5511 12.1801 29.0073 12.4485 29.3416 12.8404C29.6758 13.2323 29.8689 13.7251 29.8898 14.2398C29.9106 14.7545 29.7581 15.2613 29.4566 15.679L27.9566 17.379"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_220"
              x1="30.4089"
              y1="28.6971"
              x2="5.95194"
              y2="0.564409"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD15C" />
              <stop offset="1" stop-color="#F3AF00" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Avocado":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.2 7.59998C21.1735 10.3397 21.9752 13.0236 23.5 15.3C24.5502 16.9047 25.1065 18.7822 25.1 20.7C24.8578 23.0643 23.7471 25.2546 21.983 26.8472C20.2188 28.4398 17.9267 29.3215 15.55 29.3215C13.1733 29.3215 10.8812 28.4398 9.11703 26.8472C7.35291 25.2546 6.24225 23.0643 6 20.7C6.02895 18.7729 6.61976 16.8961 7.69998 15.3C9.22477 13.0236 10.0265 10.3397 10 7.59998C10 6.11476 10.59 4.6904 11.6402 3.6402C12.6904 2.58999 14.1148 2 15.6 2C17.0852 2 18.5096 2.58999 19.5598 3.6402C20.61 4.6904 21.2 6.11476 21.2 7.59998Z"
            fill="url(#paint0_linear_20_312)"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M15.6002 25.1C17.7541 25.1 19.5002 23.3539 19.5002 21.2C19.5002 19.0461 17.7541 17.3 15.6002 17.3C13.4463 17.3 11.7002 19.0461 11.7002 21.2C11.7002 23.3539 13.4463 25.1 15.6002 25.1Z"
            fill="#FFFBFB"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_312"
              x1="15.55"
              y1="2"
              x2="16"
              y2="32.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.30668" stop-color="#7CF997" />
              <stop offset="1" stop-color="#42CE60" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Beverage":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4001 2V10H18.5001C19.879 10.1486 21.1537 10.8035 22.0774 11.8381C23.0011 12.8726 23.5081 14.2131 23.5001 15.6V30.4H8.0001V15.5C7.99198 14.1395 8.48838 12.8244 9.39338 11.8086C10.2984 10.7927 11.5477 10.1484 12.9001 10V2H18.4001Z"
            fill="url(#paint0_linear_20_541)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8999 5.7H18.3999"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.5 18.4H8V24H23.5V18.4Z"
            fill="white"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 23.7H23.5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_541"
              x1="23.5002"
              y1="30.4"
              x2="-0.385256"
              y2="17.3638"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD15C" />
              <stop offset="1" stop-color="#F3AF00" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Bread":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3004 8.80004C29.2856 9.82795 29.0235 10.8372 28.5361 11.7423C28.0487 12.6475 27.3504 13.4219 26.5004 14V28.6H5.80038V14C4.93156 13.4413 4.21887 12.671 3.72912 11.7615C3.23938 10.852 2.98864 9.83297 3.0004 8.80004C2.99901 7.75516 3.25346 6.72584 3.74155 5.80197C4.22963 4.87809 4.93648 4.08777 5.80038 3.50003C6.37894 3.16969 7.03416 2.99726 7.70038 3.00003H24.5004C25.1666 2.99726 25.8218 3.16969 26.4004 3.50003H26.5004C27.3466 4.1054 28.0401 4.89951 28.5262 5.81945C29.0122 6.73938 29.2772 7.75987 29.3004 8.80004Z"
            fill="url(#paint0_linear_20_716)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0005 9.20004L10.8005 7.90003"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0006 14.3L16.1006 13"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.0005 9.30003L21.4005 7.80003"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.5005 21.8L19.8005 21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.4004 21V19.4"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_716"
              x1="29.3004"
              y1="28.6"
              x2="3.70967"
              y2="2.30923"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD15C" />
              <stop offset="1" stop-color="#F3AF00" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Brocoli":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.7004 12.3567C29.7004 13.8419 29.1104 15.2663 28.0602 16.3165C27.01 17.3667 25.5855 17.9567 24.1003 17.9567C22.7361 17.9651 21.4174 17.4661 20.4004 16.5567C19.7681 17.7406 18.8174 18.7242 17.6558 19.3965C16.4941 20.0688 15.1677 20.403 13.8262 20.3614C12.4846 20.3198 11.1815 19.904 10.0637 19.1611C8.94591 18.4181 8.05807 17.3775 7.50036 16.1567C6.95031 16.5603 6.28244 16.7712 5.60034 16.7567C5.12758 16.7567 4.65945 16.6635 4.22268 16.4826C3.78591 16.3017 3.38906 16.0365 3.05477 15.7022C2.72048 15.368 2.4553 14.9711 2.27438 14.5343C2.09346 14.0975 2.00036 13.6294 2.00036 13.1567C1.9902 12.4486 2.19503 11.7542 2.58782 11.165C2.98061 10.5758 3.54286 10.1196 4.20034 9.85666C4.03018 9.30702 3.96241 8.7308 4.00036 8.15667C4.00918 6.89453 4.40298 5.66514 5.12918 4.63281C5.85537 3.60048 6.87936 2.81437 8.06426 2.37954C9.24917 1.94472 10.5385 1.88188 11.7601 2.19944C12.9817 2.517 14.0772 3.19983 14.9004 4.15667C16.0628 3.31151 17.4631 2.8564 18.9004 2.85666C20.1588 2.85596 21.3877 3.23826 22.4237 3.95274C23.4597 4.66722 24.2538 5.68007 24.7004 6.85666C26.0707 6.98175 27.3444 7.61598 28.2701 8.63419C29.1957 9.6524 29.7061 10.9806 29.7004 12.3567Z"
            fill="url(#paint0_linear_20_285)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.1004 17.9567C24.1004 17.9567 19.2004 18.8567 19.2004 29.9567H14.1004C14.1004 29.9567 14.4004 22.2567 9.40039 18.5567"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_285"
              x1="15.8502"
              y1="2"
              x2="15.9904"
              y2="22.5049"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.30668" stop-color="#7CF997" />
              <stop offset="1" stop-color="#42CE60" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Carrot":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.92338 27.314C3.31144 26.6192 2.98223 25.7202 3.00074 24.7946C3.01925 23.8689 3.38414 22.9838 4.02337 22.314L17.3234 6.91401C17.771 6.33258 18.3324 5.84847 18.9734 5.49124C19.6143 5.13401 20.3213 4.91117 21.0513 4.8363C21.7812 4.76144 22.5188 4.83612 23.2189 5.0558C23.919 5.27548 24.567 5.63555 25.1234 6.11401C25.6018 6.67034 25.9619 7.31834 26.1816 8.01846C26.4013 8.71858 26.476 9.45615 26.4011 10.1861C26.3262 10.916 26.1034 11.6231 25.7461 12.264C25.3889 12.905 24.9048 13.4664 24.3234 13.914L8.92338 27.214C8.2536 27.8532 7.36851 28.2181 6.44283 28.2366C5.51716 28.2552 4.61818 27.9259 3.92338 27.314Z"
            fill="url(#paint0_linear_20_237)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.52344 20.514L7.32344 22.414"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4233 9.71402L18.2234 11.514"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.8232 18.714L16.6232 20.514"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.1235 6.11401C25.3779 5.16385 25.9576 4.33309 26.7617 3.76657C27.5658 3.20005 28.5432 2.93373 29.5235 3.01402"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_237"
              x1="3.08147"
              y1="8.45196"
              x2="26.462"
              y2="28.2161"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA654" />
              <stop offset="1" stop-color="#F26702" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Cheese":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 14H30V16L29 17L26.5 18L25.5 20.5L27 23.5L30 24.5V27H2V14Z"
            fill="url(#paint0_linear_20_436)"
            stroke="black"
          />
          <path
            d="M8.89999 13.9637H2V26.9637H30.2V24.4637"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.2001 16.9637V13.9637H8.6001"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.2 13.9637L15.7 7.06369C13.7136 6.05405 11.4424 5.75154 9.26089 6.20601C7.07944 6.66048 5.11801 7.8448 3.70001 9.56369C2.64137 10.7895 2.04056 12.3445 2 13.9637"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0999 23.9637C11.8672 23.9637 13.2999 22.531 13.2999 20.7637C13.2999 18.9964 11.8672 17.5637 10.0999 17.5637C8.3326 17.5637 6.8999 18.9964 6.8999 20.7637C6.8999 22.531 8.3326 23.9637 10.0999 23.9637Z"
            fill="white"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.9999 22.8637C21.1597 22.8637 22.0999 21.9235 22.0999 20.7637C22.0999 19.6039 21.1597 18.6637 19.9999 18.6637C18.8401 18.6637 17.8999 19.6039 17.8999 20.7637C17.8999 21.9235 18.8401 22.8637 19.9999 22.8637Z"
            fill="white"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M30.2001 24.4637C29.6563 24.5528 29.0997 24.5226 28.5688 24.3751C28.0379 24.2277 27.5454 23.9665 27.1255 23.6098C26.7055 23.2531 26.3682 22.8093 26.1368 22.3092C25.9055 21.8091 25.7856 21.2647 25.7856 20.7137C25.7856 20.1627 25.9055 19.6183 26.1368 19.1182C26.3682 18.6181 26.7055 18.1743 27.1255 17.8176C27.5454 17.4609 28.0379 17.1997 28.5688 17.0523C29.0997 16.9048 29.6563 16.8746 30.2001 16.9637"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_436"
              x1="30"
              y1="27"
              x2="20.0693"
              y2="5.6107"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD15C" />
              <stop offset="1" stop-color="#F3AF00" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Croissant":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10969 18.125C2.70969 21.025 3.70969 23.925 5.60969 26.825L14.9097 18.125"
            fill="url(#paint0_linear_20_72)"
          />
          <path
            d="M3.10969 18.125C2.70969 21.025 3.70969 23.925 5.60969 26.825L14.9097 18.125"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.6097 18.125C29.0097 21.025 28.0097 23.925 26.1097 26.825L16.9097 18.125"
            fill="url(#paint1_linear_20_72)"
          />
          <path
            d="M28.6097 18.125C29.0097 21.025 28.0097 23.925 26.1097 26.825L16.9097 18.125"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9092 18.125H28.0092C28.2849 18.1265 28.5569 18.0609 28.8017 17.9339C29.0465 17.8069 29.2566 17.6222 29.4141 17.3958C29.5716 17.1694 29.6717 16.9082 29.7056 16.6345C29.7396 16.3608 29.7065 16.083 29.6092 15.825C28.8321 13.3159 27.1592 11.1803 24.9092 9.82498"
            fill="url(#paint2_linear_20_72)"
          />
          <path
            d="M15.9092 18.125H28.0092C28.2849 18.1265 28.5569 18.0609 28.8017 17.9339C29.0465 17.8069 29.2566 17.6222 29.4141 17.3958C29.5716 17.1694 29.6717 16.9082 29.7056 16.6345C29.7396 16.3608 29.7065 16.083 29.6092 15.825C28.8321 13.3159 27.1592 11.1803 24.9092 9.82498"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9094 18.125H3.70941C3.43365 18.1265 3.16165 18.0609 2.91689 17.9339C2.67212 17.8069 2.46194 17.6222 2.30446 17.3958C2.14698 17.1694 2.04694 16.9082 2.01296 16.6345C1.97898 16.3608 2.01207 16.083 2.10941 15.825C2.88652 13.3159 4.55939 11.1803 6.8094 9.82498"
            fill="url(#paint3_linear_20_72)"
          />
          <path
            d="M15.9094 18.125H3.70941C3.43365 18.1265 3.16165 18.0609 2.91689 17.9339C2.67212 17.8069 2.46194 17.6222 2.30446 17.3958C2.14698 17.1694 2.04694 16.9082 2.01296 16.6345C1.97898 16.3608 2.01207 16.083 2.10941 15.825C2.88652 13.3159 4.55939 11.1803 6.8094 9.82498"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9095 18.125L25.1094 9.625C25.2452 9.48887 25.3491 9.32432 25.4136 9.14322C25.4781 8.96212 25.5016 8.76899 25.4825 8.5777C25.4633 8.38641 25.402 8.20173 25.3029 8.03699C25.2039 7.87225 25.0695 7.73155 24.9095 7.625C18.9095 4.125 12.9094 4.125 6.80945 7.625C6.64943 7.73155 6.51505 7.87225 6.41597 8.03699C6.31688 8.20173 6.25556 8.38641 6.23643 8.5777C6.2173 8.76899 6.24084 8.96212 6.30534 9.14322C6.36984 9.32432 6.4737 9.48887 6.60945 9.625L15.9095 18.125Z"
            fill="url(#paint4_linear_20_72)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_72"
              x1="2.5"
              y1="18.5"
              x2="8.27593"
              y2="28.8068"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F26702" />
              <stop offset="1" stop-color="#FFA654" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_20_72"
              x1="16.9507"
              y1="19.4781"
              x2="25.675"
              y2="29.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F26702" />
              <stop offset="0.971781" stop-color="#FFA654" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_20_72"
              x1="15.9572"
              y1="11.1158"
              x2="20.9504"
              y2="23.6162"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0494067" stop-color="#F26702" />
              <stop offset="1" stop-color="#FFA654" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_20_72"
              x1="4"
              y1="8.5"
              x2="3.85791"
              y2="21.9244"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F26702" />
              <stop offset="1" stop-color="#FFA654" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_20_72"
              x1="6.29695"
              y1="7.04127"
              x2="19.2776"
              y2="23.1423"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA654" />
              <stop offset="1" stop-color="#F26702" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Egg":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6 19.3265C21.6 21.9257 20.5675 24.4183 18.7297 26.2562C16.8918 28.094 14.3991 29.1265 11.8 29.1265C9.20087 29.1265 6.70822 28.094 4.87036 26.2562C3.0325 24.4183 2 21.9257 2 19.3265C2 13.9265 6.39999 4.62653 11.8 4.62653C17.2 4.62653 21.6 13.9265 21.6 19.3265Z"
            fill="url(#paint0_linear_20_622)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.8002 25.0265C14.3407 25.0265 16.4002 22.967 16.4002 20.4265C16.4002 17.886 14.3407 15.8265 11.8002 15.8265C9.25966 15.8265 7.2002 17.886 7.2002 20.4265C7.2002 22.967 9.25966 25.0265 11.8002 25.0265Z"
            fill="white"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.2002 3.02647C25.3002 2.52647 29.5002 9.22652 30.0002 13.3265C30.15 14.907 29.8077 16.4952 29.02 17.8736C28.2324 19.252 27.0379 20.3532 25.6002 21.0265"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_622"
              x1="21.6"
              y1="29.1265"
              x2="-2.30245"
              y2="10.0046"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD15C" />
              <stop offset="1" stop-color="#F3AF00" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Fish":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 9L11 10L10 13L9 15.5L9.5 20L10 22.5L13.5 23.5L17.5 24L21 22.5L24.5 20.5L25.5 19V18H24.5L21 16.5L18.5 14.5L16.5 12L15.5 10V7.5L15 6.5H11L8 7.5L7.5 8.5L9.5 9Z"
            fill="url(#paint0_linear_20_767)"
            stroke="black"
          />
          <path
            d="M28.1002 12.1004C28.1382 12.8395 28.0709 13.5803 27.9002 14.3004C27.5918 16.0023 26.9099 17.6146 25.9037 19.0214C24.8974 20.4281 23.5917 21.5942 22.0807 22.4358C20.5697 23.2774 18.8908 23.7735 17.165 23.8884C15.4393 24.0034 13.7095 23.7342 12.1002 23.1004C11.6054 22.9282 11.1349 22.6929 10.7002 22.4004L10.0002 22.0004C10.0002 21.9004 9.90019 21.8004 9.90019 21.7004C9.49848 20.6121 9.3002 18.3004 9.3002 18.3004C9.21826 18.0078 9.18448 17.1038 9.2002 16.8004C9.19214 14.3266 9.96173 11.9129 11.4002 9.9004C10.1649 9.255 8.7939 8.91226 7.40019 8.9004H6.7002C7.4467 8.11189 8.34591 7.48361 9.34305 7.05381C10.3402 6.62401 11.4144 6.40169 12.5002 6.4004C13.277 6.39483 14.0508 6.49576 14.8002 6.70039C16.6697 5.57081 18.816 4.98232 21.0002 5.0004C22.9868 4.98805 24.9454 5.4691 26.7002 6.4004C27.62 8.15958 28.1003 10.1153 28.1002 12.1004Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.89999 22.0004L9.5 24.9004L9.2 27.9004L6.60001 25.3004L4 22.7004L7 22.4004L9.89999 22.0004Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.1999 18.0004C23.3264 17.974 20.5796 16.814 18.557 14.7727C16.5344 12.7314 15.3998 9.97402 15.3999 7.1004"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.6 10.4004C22.2075 10.4004 22.7 9.9079 22.7 9.30038C22.7 8.69287 22.2075 8.20038 21.6 8.20038C20.9925 8.20038 20.5 8.69287 20.5 9.30038C20.5 9.9079 20.9925 10.4004 21.6 10.4004Z"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_767"
              x1="10.266"
              y1="29.2708"
              x2="23.5148"
              y2="9.88555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3BADF5" />
              <stop offset="1" stop-color="#0083DA" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Meat":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8 21.9963L9.90002 24.8963C10.3322 25.3987 10.5792 26.0339 10.6 26.6963C10.5741 27.3684 10.2888 28.0043 9.80402 28.4705C9.3192 28.9366 8.67258 29.1968 8 29.1963C7.33696 29.1963 6.70108 28.9329 6.23224 28.4641C5.7634 27.9952 5.5 27.3593 5.5 26.6963C4.83696 26.6963 4.20108 26.4329 3.73224 25.9641C3.2634 25.4952 3 24.8593 3 24.1963C2.9995 23.5237 3.25969 22.8771 3.72586 22.3923C4.19203 21.9075 4.82792 21.6222 5.5 21.5963C6.16236 21.6171 6.79762 21.8641 7.30002 22.2963L10.2 19.3963"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.2001 5.99628L27.7001 7.49628C28.6589 8.46919 29.1964 9.78033 29.1964 11.1463C29.1964 12.5123 28.6589 13.8233 27.7001 14.7963L27.1001 15.3963C24.3091 18.1203 20.8661 20.0828 17.1001 21.0963L12.9001 22.0963L11.5001 20.6963L10.1001 19.2963L11.2001 15.0963C12.1339 11.327 14.1091 7.89631 16.9001 5.19629L17.5001 4.49628C18.473 3.53747 19.7841 3 21.1501 3C22.5161 3 23.8272 3.53747 24.8001 4.49628L26.2001 5.99628Z"
            fill="url(#paint0_linear_20_216)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_216"
              x1="10.1665"
              y1="5.96996"
              x2="29.2231"
              y2="22.0789"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA654" />
              <stop offset="1" stop-color="#F26702" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Pizza":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5 10L23.5 13.5L15 14V22L14 22.5L12 21.5L9 20L7.5 18.5L6.5 15.5L6 12.5L8 9L9 7L13 5.5H16L19 6.5L22.5 10Z"
            fill="url(#paint0_linear_20_362)"
            stroke="black"
          />
          <path
            d="M18.5 26V18L26.5 17.5V18.5L25.5 21.5L22 24.5L18.5 26Z"
            fill="url(#paint1_linear_20_362)"
            stroke="black"
          />
          <path
            d="M14.9001 25.8C12.5509 25.7803 10.26 25.0656 8.31629 23.7461C6.37255 22.4265 4.86286 20.5611 3.97749 18.385C3.09213 16.2089 2.87068 13.8195 3.34108 11.5177C3.81147 9.21597 4.95265 7.10496 6.62081 5.4507C8.28897 3.79645 10.4095 2.67297 12.7151 2.22185C15.0207 1.77073 17.4082 2.01215 19.5768 2.9157C21.7455 3.81925 23.5981 5.34449 24.9013 7.29921C26.2045 9.25393 26.9 11.5507 26.9001 13.9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.8999 22.4C13.2188 22.4 11.5754 21.9015 10.1776 20.9675C8.77974 20.0335 7.69027 18.706 7.04693 17.1528C6.40358 15.5996 6.23526 13.8906 6.56323 12.2417C6.89121 10.5929 7.70076 9.07833 8.8895 7.88959C10.0782 6.70084 11.5928 5.8913 13.2416 5.56332C14.8905 5.23535 16.5995 5.40368 18.1527 6.04703C19.7059 6.69037 21.0334 7.77982 21.9674 9.17764C22.9014 10.5755 23.3999 12.2189 23.3999 13.9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.8999 2V25.8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 13.9H26.9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.5 17.6H30C29.3 23.9 25.3 27.9 18.6 29.1L18.5 17.6Z"
            stroke="black"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M21.8999 21.9C22.4522 21.9 22.8999 21.4523 22.8999 20.9C22.8999 20.3477 22.4522 19.9 21.8999 19.9C21.3476 19.9 20.8999 20.3477 20.8999 20.9C20.8999 21.4523 21.3476 21.9 21.8999 21.9Z"
            fill="black"
          />
          <path
            d="M11.5 18.3C12.0523 18.3 12.5 17.8523 12.5 17.3C12.5 16.7477 12.0523 16.3 11.5 16.3C10.9477 16.3 10.5 16.7477 10.5 17.3C10.5 17.8523 10.9477 18.3 11.5 18.3Z"
            fill="black"
          />
          <path
            d="M11.5 11.6C12.0523 11.6 12.5 11.1523 12.5 10.6C12.5 10.0477 12.0523 9.60001 11.5 9.60001C10.9477 9.60001 10.5 10.0477 10.5 10.6C10.5 11.1523 10.9477 11.6 11.5 11.6Z"
            fill="black"
          />
          <path
            d="M18.5 11.6C19.0523 11.6 19.5 11.1523 19.5 10.6C19.5 10.0477 19.0523 9.60001 18.5 9.60001C17.9477 9.60001 17.5 10.0477 17.5 10.6C17.5 11.1523 17.9477 11.6 18.5 11.6Z"
            fill="black"
          />
          <path
            d="M30.0001 17.6C29.3001 23.9 25.3001 27.9 18.6001 29.1"
            stroke="black"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M26.6999 18.2C25.8999 22.7 22.7999 25.4 17.8999 25.9"
            stroke="black"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_362"
              x1="6.06086"
              y1="8.14393"
              x2="23.1006"
              y2="22.9716"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA654" />
              <stop offset="1" stop-color="#F26702" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_20_362"
              x1="18.5278"
              y1="18.822"
              x2="26.9101"
              y2="25.4909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA654" />
              <stop offset="1" stop-color="#F26702" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Strawberry":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9015 28.4C14.1923 28.7557 14.5584 29.0422 14.9735 29.239C15.3885 29.4358 15.8422 29.5378 16.3015 29.5378C16.7609 29.5378 17.2145 29.4358 17.6295 29.239C18.0446 29.0422 18.4108 28.7557 18.7015 28.4L24.5015 21.8C25.849 20.2447 26.5941 18.2578 26.6015 16.2C26.6148 15.3989 26.4701 14.6031 26.1757 13.8579C25.8813 13.1128 25.443 12.4329 24.8858 11.8571C24.3287 11.2814 23.6635 10.821 22.9284 10.5024C22.1933 10.1837 21.4026 10.013 20.6015 10H12.0015C11.2004 10.013 10.4097 10.1837 9.67462 10.5024C8.93951 10.821 8.27439 11.2814 7.71722 11.8571C7.16005 12.4329 6.72174 13.1128 6.42736 13.8579C6.13298 14.6031 5.98828 15.3989 6.00152 16.2C5.96151 18.2662 6.71278 20.2696 8.10153 21.8L13.9015 28.4Z"
            fill="url(#paint0_linear_20_120)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.8014 10L24.7014 5.70001L19.4014 7.59998L16.3014 3L13.1014 7.59998L7.90137 5.70001L9.80136 10"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.2017 16.4V17.8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1016 15.2V16.7"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.3018 15.2V16.7"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.8013 20.4V21.9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5015 20.4V21.9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_120"
              x1="5.98584"
              y1="29.5607"
              x2="28.0774"
              y2="11.8084"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF7DAC" />
              <stop offset="1" stop-color="#FF0440" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "VegiDish":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 16H29.4V18.6C29.4 21.1726 28.3781 23.6399 26.559 25.459C24.7399 27.2781 22.2726 28.3 19.7 28.3H11.7C9.12741 28.3 6.66017 27.2781 4.84106 25.459C3.02196 23.6399 2 21.1726 2 18.6V16Z"
            fill="url(#paint0_linear_20_469)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.8999 4.30002H3.29987C5.12986 4.30002 6.88489 5.02698 8.17889 6.32098C9.4729 7.61498 10.1999 9.37002 10.1999 11.2H9.79987C7.96987 11.2 6.21484 10.473 4.92084 9.17905C3.62684 7.88505 2.8999 6.13001 2.8999 4.30002Z"
            fill="url(#paint1_linear_20_469)"
            stroke="black"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M13 6.20001C13.1627 5.30808 13.6311 4.50069 14.3246 3.91669C15.0181 3.33268 15.8934 3.00853 16.8 3C17.8263 3.02535 18.8037 3.44441 19.5297 4.17038C20.2556 4.89635 20.6747 5.87366 20.7 6.90002C20.6824 7.30667 20.6153 7.70964 20.5 8.10001L21.7 7.90002C22.7264 7.92538 23.7037 8.3444 24.4296 9.07037C25.1556 9.79634 25.5746 10.7737 25.6 11.8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.2998 12.1C19.2389 12.1 18.2215 11.6786 17.4714 10.9284C16.7212 10.1783 16.2998 9.16087 16.2998 8.10001"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_469"
              x1="15.7"
              y1="16"
              x2="15.7636"
              y2="29.7337"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.30668" stop-color="#7CF997" />
              <stop offset="1" stop-color="#42CE60" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_20_469"
              x1="6.5499"
              y1="4.30002"
              x2="6.625"
              y2="12.0037"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.30668" stop-color="#7CF997" />
              <stop offset="1" stop-color="#42CE60" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "MeatDish":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.6001 17.9C4.6001 21.1091 5.87491 24.1868 8.1441 26.456C10.4133 28.7252 13.491 30 16.7001 30C19.9092 30 22.9869 28.7252 25.2561 26.456C27.5253 24.1868 28.8001 21.1091 28.8001 17.9H4.6001Z"
            fill="url(#paint0_linear_20_610)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.1001 13.8C7.2773 12.5069 7.91683 11.3218 8.90038 10.4638C9.88392 9.60585 11.1449 9.13315 12.4501 9.13315C13.7553 9.13315 15.0163 9.60585 15.9998 10.4638C16.9834 11.3218 17.6229 12.5069 17.8001 13.8"
            fill="url(#paint1_linear_20_610)"
          />
          <path
            d="M7.1001 13.8C7.2773 12.5069 7.91683 11.3218 8.90038 10.4638C9.88392 9.60585 11.1449 9.13315 12.4501 9.13315C13.7553 9.13315 15.0163 9.60585 15.9998 10.4638C16.9834 11.3218 17.6229 12.5069 17.8001 13.8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2998 8.5C15.0258 7.67876 15.9188 7.02199 16.919 6.57361C17.9193 6.12523 19.0037 5.89557 20.0998 5.9C21.1326 5.89991 22.1551 6.10493 23.108 6.50316C24.0609 6.90139 24.9253 7.48488 25.6509 8.2198C26.3765 8.95473 26.949 9.82644 27.335 10.7843C27.7211 11.7423 27.9131 12.7673 27.8998 13.8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8999 10.9C17.6801 10.2364 18.6759 9.88076 19.6999 9.89999C20.8497 9.89969 21.954 10.3495 22.7763 11.1532C23.5987 11.9568 24.0738 13.0505 24.0999 14.2"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8002 8.8L4.7002 3"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 11.8L4 8.5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_610"
              x1="4.58347"
              y1="30.0142"
              x2="17.4353"
              y2="10.4265"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF7DAC" />
              <stop offset="1" stop-color="#FF0440" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_20_610"
              x1="7.09275"
              y1="13.8055"
              x2="11.7518"
              y2="5.66503"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF7DAC" />
              <stop offset="1" stop-color="#FF0440" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}
