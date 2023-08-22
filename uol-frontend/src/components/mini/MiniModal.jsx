import { useState } from 'react';
import PropTypes from 'prop-types';

const MiniModal = ({ icon, content }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="relative inline-block mt-4">
      <div onMouseEnter={toggleModal} onMouseLeave={toggleModal}>
        {icon}
      </div>
      {isModalVisible && (
        <div className="absolute z-10 w-48 border-2 border-red-200 bg-white p-2 rounded shadow">
          {content}
        </div>
      )}
    </div>
  );
};


MiniModal.propTypes = {
    icon: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired,
};

export default MiniModal;