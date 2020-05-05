import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import ValidationService from "../../services/validation-service";
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

export function Input({ error, className, ...props }) {
  const classNames = !!error
    ? ["Input", "Input--error", className]
    : ["Input", className];
  return <input className={classNames.join(" ")} {...props} />;
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
        <p>
          <Required /> {props.message}
        </p>
      </div>
    );
  }
  return <div className="NoError"> </div>;
}

export function PasswordValidationError({ password, touched }) {
  return (
    <div className="password-requirements">
      <p
        className={ValidationService.validateMissingPassword(password, touched)}
      >
        <Required /> Password required
      </p>
      <p className={ValidationService.validatePasswordSpace(password, touched)}>
        <Required /> Cannot contain a space
      </p>
      <p
        className={ValidationService.validatePasswordLowerCase(
          password,
          touched
        )}
      >
        <Required /> Requires a lower case character
      </p>
      <p
        className={ValidationService.validatePasswordUpperCase(
          password,
          touched
        )}
      >
        <Required /> Requires an upper case character
      </p>
      <p
        className={ValidationService.validatePasswordNumber(password, touched)}
      >
        <Required /> Requires a number
      </p>
      <p
        className={ValidationService.validatePasswordSpecialChar(
          password,
          touched
        )}
      >
        <Required /> Requires a special character
      </p>
      <p
        className={ValidationService.validatePasswordLength(password, touched)}
      >
        <Required /> Requires 8-72 characters
      </p>
    </div>
  );
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
        <div className="ExploreSquare__container">
          <div className="ExploreSquare__grid">{props.children}</div>
        </div>
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
  max_score,
  next = false,
  mastery,
}) {
  let topLabelContents;
  if (next) {
    topLabelContents = "Next";
  } else if (!!max_score) {
    topLabelContents = `${max_score}%`;
  } else if (!!mastery) {
    topLabelContents = `${mastery}%`;
  }
  const topLabel = (
    <div className="TopicSquare__top_label">{topLabelContents}</div>
  );
  return (
    <Link to={to} className={["TopicSquare", className].join(" ")}>
      <div className="TopicSquare__picture_container">
        {unlocked && topLabel}
        <div
          className={classnames("TopicSquare__picture", {
            "TopicSquare__picture--locked": !unlocked,
          })}
          style={{ backgroundImage: "url(" + picture + ")" }}
        ></div>
        <div
          className={classnames("TopicSquare__container", {
            "TopicSquare__container--locked": !unlocked,
          })}
        >
          {label}
        </div>
      </div>
    </Link>
  );
}
