// import React, { useState, useEffect } from "react";
// import "../assets/css/Home.css";

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // 컴포넌트가 마운트될 때 애니메이션 트리거
//   useEffect(() => {
//     setTimeout(() => {
//       setIsVisible(true);
//     }, 300); // 0.3초 지연 후 애니메이션 시작
//   }, []);

//   return (
//     <div className="page-container-home">
//       <h2 className="page-header-home">ACE PHARM</h2>
//       <hr className="page-headerLine-home" />
//       <div className="inner-container-home">
//         <div className={`intro-text ${isVisible ? "animate" : ""}`}>
//           <h3 className="intro-title">회사 소개</h3>
//           <p>
//             ACE PHARM은 2022년부터 청주지역을 중심으로 의약품 납품을 시작한 전문 공급업체입니다. 
//             우리는 "빠른 배송"과 "충분한 재고 확보"라는 슬로건 아래, 고객의 요구에 신속히 대응하며 
//             안정적인 공급망을 유지하고 있습니다. 지역 병원, 약국, 그리고 의료 기관들과의 긴밀한 협력을 통해 
//             최고 품질의 의약품을 적시에 제공함으로써 신뢰를 쌓아왔습니다.
//           </p>
//           <p>
//             또한, 지속 가능한 의료 환경을 만들기 위해 혁신적인 물류 시스템과 엄격한 품질 관리 프로세스를 도입하여 
//             고객의 건강과 안전을 최우선으로 생각합니다. 이러한 노력은 ACE PHARM이 단순한 공급업체를 넘어 
//             의료 산업의 중요한 파트너로 자리 잡는 데 기여하고 있습니다.
//           </p>
//           <p>
//             앞으로도 ACE PHARM은 청주를 넘어 전국적인 의료 산업 발전에 기여하며, 
//             신뢰받는 파트너로 성장해 나갈 것입니다. 고객 중심의 서비스와 끊임없는 혁신을 통해 
//             더 나은 미래를 만들어 가는 데 최선을 다하겠습니다.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import "../assets/css/HomeTest.css";
import backgroundVideo from "../assets/logo/videoplayback.mp4";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트될 때 애니메이션 트리거
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // 0.3초 지연 후 애니메이션 시작
  }, []);

  return (
    <div className="page-container-home">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content-overlay">
        <h2 className="page-header-home">ACE PHARM</h2>
        <hr className="page-headerLine-home" />
        <div className="inner-container-home">
          <div className={`intro-text ${isVisible ? "animate" : ""}`}>
            {/* 기존 내용 유지 */}
            <h3 className="intro-title">회사 소개</h3>
            <p>
              ACE PHARM은 2022년부터 청주지역을 중심으로 의약품 납품을 시작한 전문 공급업체입니다. 
              우리는 "빠른 배송"과 "충분한 재고 확보"라는 슬로건 아래, 고객의 요구에 신속히 대응하며 
              안정적인 공급망을 유지하고 있습니다. 지역 병원, 약국, 그리고 의료 기관들과의 긴밀한 협력을 통해 
              최고 품질의 의약품을 적시에 제공함으로써 신뢰를 쌓아왔습니다.
            </p>
            <p>
              또한, 지속 가능한 의료 환경을 만들기 위해 혁신적인 물류 시스템과 엄격한 품질 관리 프로세스를 도입하여 
              고객의 건강과 안전을 최우선으로 생각합니다. 이러한 노력은 ACE PHARM이 단순한 공급업체를 넘어 
              의료 산업의 중요한 파트너로 자리 잡는 데 기여하고 있습니다.
            </p>
            <p>
              앞으로도 ACE PHARM은 청주를 넘어 전국적인 의료 산업 발전에 기여하며, 
              신뢰받는 파트너로 성장해 나갈 것입니다. 고객 중심의 서비스와 끊임없는 혁신을 통해 
              더 나은 미래를 만들어 가는 데 최선을 다하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
