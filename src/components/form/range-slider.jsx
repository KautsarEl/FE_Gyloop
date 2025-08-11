import { useEffect, useRef, useState } from "react";
import "./RangeSlider.css";
import { Form } from "react-bootstrap";

export default function RangeSlider({ label, score }) {
  const [value, setValue] = useState(score);
  const [status, setStatus] = useState("");
  const [statusStyle, setStatusStyle] = useState("");
  const rangeThumbRef = useRef(null);
  const rangeLineRef = useRef(null);

  const rangeHandler = (e) => {
    setValue(e.target.value);
    const rangeThumb = rangeThumbRef.current,
      rangeLine = rangeLineRef.current;

    if (e.target.value <= 0) rangeThumb.style.left = `-8px`;
    else rangeThumb.style.left = `calc(${e.target.value}% - ${8}px`;
    rangeLine.style.width = e.target.value + "%";

    if (e.target.value <= 20) {
      setStatus("Very Low");
      setStatusStyle("red");
    } else if (e.target.value <= 40) {
      setStatus("Low");
      setStatusStyle("red-secondary");
    } else if (e.target.value <= 60) {
      setStatus("Average");
      setStatusStyle("orange");
    } else if (e.target.value <= 80) {
      setStatus("High");
      setStatusStyle("green-secondary");
    } else {
      setStatus("Very High");
      setStatusStyle("green");
    }
  };

  useEffect(() => {
    if (score <= 20) {
      setStatus("Very Low");
      setStatusStyle("red");
    } else if (score <= 40) {
      setStatus("Low");
      setStatusStyle("red-secondary");
    } else if (score <= 60) {
      setStatus("Average");
      setStatusStyle("orange");
    } else if (score <= 80) {
      setStatus("High");
      setStatusStyle("green-secondary");
    } else {
      setStatus("Very High");
      setStatusStyle("green");
    }

    const rangeThumb = rangeThumbRef.current,
      rangeLine = rangeLineRef.current;

    if (score <= 0) rangeThumb.style.left = `-8px`;
    else rangeThumb.style.left = `calc(${score}% - ${8}px`;
    rangeLine.style.width = score + "%";
  }, []);

  return (
    <Form.Group>
      <Form.Label className="f-1 form-label-custom" htmlFor="Tenant ID">
        {label}
      </Form.Label>
      <div class="slide-container d-flex align-items-center gap-3">
        <div class="range-container" style={{ flex: "1 1 auto" }}>
          <div class="range__thumb" id="range-thumb" ref={rangeThumbRef}></div>
          <div class="range__slider">
            <div
              class="range__slider-line"
              id="range-line"
              ref={rangeLineRef}
            ></div>
          </div>

          <input
            type="range"
            class="range__input"
            id="range-input"
            min={0}
            max={100}
            value={value}
            step={1}
            // ref={rangeInputRef}
            onChange={rangeHandler}
          />
        </div>
        <div className={`slider_value ${statusStyle}`}>{status}</div>
      </div>
    </Form.Group>
  );
}
