import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Utils.css";

export function QuaffSquare({ className, ...props }) {
  return (
    <div className={["QuaffSquare", className].join(" ")} {...props}>
      <div className="QuaffSquare__container">{props.children}</div>
    </div>
  );
}

export function UnderSquare({ className, ...props }) {
  return (
    <div className={["UnderSquare", className].join(" ")} {...props}></div>
  );
}

export function LabelGroup({ className, ...props }) {
  return <div className={["LabelGroup", className].join(" ")} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function Label({ className, ...props }) {
  return <label className={["Label", className].join(" ")} {...props} />;
}

export function ValidationError(props) {
  if (props.message && props.touched) {
    return (
      <div className="ValidationError">
        <p>{props.message}</p>
      </div>
    );
  }
  return <div className="NoError"> </div>;
}

export function Required({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}

export function ExploreSquare({ className, ...props }) {
  return (
    <div className={["ExploreSquare", className].join(" ")} {...props}>
      <div className="ExploreSquare__border">
        <div className="ExploreSquare__container">{props.children}</div>
      </div>
    </div>
  );
}

export function TopicSquare({
  to,
  label,
  picture,
  className,
  unlocked = false,
}) {
  return (
    <Link to={to} className={["TopicSquare", className].join(" ")}>
      <div className="TopicSquare__picture_container">
        <div
          className="TopicSquare__picture"
          style={{ backgroundImage: "url(" + picture + ")" }}
        >
          {!unlocked ? (
            <FontAwesomeIcon
              icon={faLock}
              mask={faCircle}
              size="7x"
              transform="shrink-5"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="TopicSquare__container">{label}</div>
      </div>
    </Link>
  );
}
