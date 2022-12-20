import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "../css/Counter.css";

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="counter">
        <div className="counter-row">
          <div className="counter-column">
            <strong data-number="35">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={35}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              % of coffee consumers
              <br />
              drink black coffee
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="400">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={400}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              millions coffee cups
              <br />
              consumed every day
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="120">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={120}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              millions bags of coffee <br />
              produced every year
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="66">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={66}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              % of women drink <br />
              coffee every day
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
