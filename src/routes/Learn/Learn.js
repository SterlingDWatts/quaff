import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExploreSquare, TopicSquare } from "../../components/Utils/Utils";
import Wineglass from "./wine-glass.jpg";
import QuizListContext from "../../contexts/QuizListContext";
import ModulesApiService from "../../services/modules-api-service";
import TokenService from "../../services/token-service";
import "./Learn.css";

const Learn = () => {
  const context = useContext(QuizListContext);

  useEffect(() => {
    const { clearError, setQuizList, setTopicList, setError } = context;
    clearError();
    ModulesApiService.getModules()
      .then((res) => {
        setQuizList(res);
        ModulesApiService.getTopics().then(setTopicList).catch(setError);
      })
      .catch(setError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderModules = () => {
    const modules = [];
    context.quizList.forEach((mod) => {
      const unlocked = parseFloat(mod.max_score) >= 0.75 || mod.next === true;
      const address = unlocked ? mod.id : "";
      modules.push(
        <TopicSquare
          key={mod.id}
          to={`/learn/${address}`}
          label={mod.name}
          picture={mod.picture}
          unlocked={unlocked}
          next={mod.next}
          max_score={unlocked && Math.floor(parseFloat(mod.max_score) * 100)}
        />
      );
    });

    if (modules.length < 6) {
      const remainder = 6 - modules.length;
      for (let i = 0; i < remainder; i++) {
        modules.push(
          <TopicSquare
            key={modules.length * 10}
            to={"/learn"}
            picture={Wineglass}
            label={"Coming soon"}
            unlocked={false}
          />
        );
      }
    }
    return modules;
  };

  const renderLoadingModules = () => {
    const modules = [];
    for (let i = 0; i < 6; i++) {
      modules.push(
        <div className="Learn--loading" key={i}>
          <div className="Learn--loading-picture-container">
            <div className="Learn--loading-picture"></div>
          </div>
          <div className="Learn--loading-title-container">
            <div className="Learn--loading-title"></div>
          </div>
          <div className="Learn--loading-gradient"></div>
        </div>
      );
    }
    return modules;
  };

  const { error, quizList } = context;
  let modules;
  if (!error && quizList.length < 1) {
    modules = renderLoadingModules();
  } else {
    modules = renderModules();
  }
  return (
    <div className="Learn">
      <ExploreSquare>
        <div className="Learn--info-text">
          {TokenService.hasAuthToken() ? (
            "Pass modules with at least 75% to unlock additional content."
          ) : (
            <>
              <Link to="/login">Login</Link> to unlock additional content.{" "}
              <Link to="/create-account">Create an account</Link> if you don't have one.
            </>
          )}
        </div>
        {modules && modules}
      </ExploreSquare>
    </div>
  );
};

export default Learn;
