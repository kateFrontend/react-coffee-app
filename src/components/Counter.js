import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import '../css/Counter.css';

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="counter">

        <div className="counter-row">
          <div className="counter-column">
            <strong data-number="310">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={310}>
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
              Some text <br />
              Goes here
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="1250">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={1250}>
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
              Some text <br />
              Goes here
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="125">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={125}>
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
              Some text <br />
              Goes here
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="24">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={24}>
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
              Some text <br />
              Goes here
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
