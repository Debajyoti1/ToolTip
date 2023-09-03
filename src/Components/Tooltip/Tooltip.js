import styles from './Tooltip.module.css'; // Import CSS file for styling

const Tooltip = ({ position, text, children }) => {
  // Create a dynamic positioning class based on the "position" prop
  const positionClass = styles[position];

  return (
    <div className={styles.tooltip}>
      {children} {/* The button to which the tooltip is attached */}
      <span className={`${styles.tooltiptext} ${positionClass}`}>
        {text} {/* The text content of the tooltip */}
      </span>
    </div>
  );
};

export default Tooltip;