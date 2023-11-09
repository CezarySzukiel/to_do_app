import React, {useState} from 'react';
import Operation from './Operation';

export default function Operations({ operations, formVisible, handleAddOperation }) {


  return (
    <>
        {formVisible &&
          <div className="card-body">
            <form onSubmit={handleAddOperation}>
              <div className="input-group">
                <input type="text"
                  className="form-control"
                  placeholder="Operation description" />

                <div className="input-group-append">
                  <button className="btn btn-info">
                    Add
                    <i className="fas fa-plus-circle ml-1"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        }

        <ul className="list-group list-group-flush">
            {
              operations && operations.map(operation => <Operation key={operation.id} operation={operation} />)
            }
        </ul>
    </>
  )
}
