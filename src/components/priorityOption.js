const PriorityItem = ({ priorityLevel }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="gridRadios"
        id={priorityLevel.toLowerCase()}
        value={priorityLevel.toLowerCase()}
      />
      <label className="form-check-label" htmlFor={priorityLevel.toLowerCase()}>
        {priorityLevel}
      </label>
    </div>
  );
};

export default PriorityItem;
