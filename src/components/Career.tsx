import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer (iOS)</h4>
                <h5>Quokka Labs · Noida</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Shipping end-to-end iOS features in production apps using
              SwiftUI/UIKit, MVVM ViewModels, and robust REST API integrations.
              Hardened critical workflows such as payments, plan selection, and
              navigation through resilient error states and edge-case handling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Selected App Store Releases</h4>
                <h5>Production Apps</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              SmartCash (Fintech), SmartGen (AI Energy Tracker), and LangTalk
              (Language Learning). Collaborated with QA and product teams to debug
              complex issues and ensure release-grade reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science</h4>
                <h5>Jaypee Institute of Information Technology</h5>
              </div>
              <h3>2021–25</h3>
            </div>
            <p>
              Completed Computer Science engineering in Noida and built a strong
              foundation in software engineering, app architecture, and delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Strengths</h4>
                <h5>Engineering Focus</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              MVVM architecture, protocol-oriented design, dependency injection,
              XCTest unit testing, regression prevention, SwiftUI state
              optimization, rendering efficiency, and memory-safe delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
