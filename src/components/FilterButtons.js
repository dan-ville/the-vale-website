import React from 'react'

const FilterButtons = ({ buttons, filter }) => {
    return (
      <div>
            {buttons.map(button => {
               return <button
                 type="button"
                 className="filter-button"
                 onClick={() => filter(button)}
               >
                   {button}
               </button>;
          })}
      </div>
    );
}

export default FilterButtons