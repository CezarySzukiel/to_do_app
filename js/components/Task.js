import React, { useEffect, useState } from 'react';
import Operations from './Operations';

import { getOperations } from '../api/operations';

// TODO

// props
// method handlers
// state (operations)
// useEffect (fetch => operations)

export default function Task({ task, onRemoveTask }) {

  const [operations, setOperations] = useState(null);

  useEffect(() => {
    getOperations(task.id, (data) => {
      console.log("data: ", data);
      setOperations(data);
    })
  }, []);

    const handleFinishTask = () => {
    // TODO
    }

  return (
    <section className="card mt-5 shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5>{task.title}</h5>
          <h6 className="card-subtitle text-muted">{task.description}</h6>
        </div>


        <div>
          {/* <!--
          Przyciski "Add operation" i "Finish" mają być widoczne
          tylko jeżeli status zadania jest "open"
          --> */}
          {
            task.status === 'open' && (
              <>
                <button className="btn btn-info btn-sm mr-2">
                  Add operation
                  <i className="fas fa-plus-circle ml-1"></i>
                </button>

                <button className="btn btn-dark btn-sm" onClick={handleFinishTask}>
                  Finish
                  <i className="fas fa-archive ml-1"></i>
                </button>
              </>
            )
          }

          {/* <!--
          Przycisk usuwania ma być widoczny tylko
          jeżeli nie ma żadnych operacji w zadaniu
           --> */}
          {
            (operations && operations.length < 1) && (
              <button className="btn btn-outline-danger btn-sm ml-2">
                <i className="fas fa-trash false"></i>
              </button>
            )
          }
        </div>
      </div>


      {/* <!-- Komponent Operations --> */}
      <Operations operations={operations} />
    </section>
  )
}
