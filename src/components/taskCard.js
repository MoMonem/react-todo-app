import PropTypes from "prop-types";

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{task.title}</h5>
          <a href="#" className="card-link" onClick={() => onDelete(task.id)}>
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-subtitle mb-2 text-muted">
            Due Date: {task.date}
          </h6>
          {task.priority === "high" ? (
            <span className="badge text-bg-danger">High</span>
          ) : task.priority === "medium" ? (
            <span className="badge text-bg-warning">Medium</span>
          ) : (
            <span className="badge text-bg-secondary">Low</span>
          )}
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

TaskCard.defaultProps = {
  title: "Task Title",
  date: "Task Date",
};

export default TaskCard;
