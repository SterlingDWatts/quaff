import React from "react";
import { Link } from "react-router-dom";
import "./Utils.css";

export function QuaffSquare({ className, ...props }) {
  return (
    <div className={["QuaffSquare", className].join(" ")} {...props}>
      <div className="QuaffSquare__container">{props.children}</div>
    </div>
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

export function TopicSquare({ to, label, picture }) {
  return (
    <Link
      to={to}
      className="TopicSquare"
      style={{ backgroundImage: "url(" + picture + ")" }}
    >
      <div className="TopicSquare_container">{label}</div>
    </Link>
  );
}
