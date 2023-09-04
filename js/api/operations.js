import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = async (id, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
      headers: {
        Authorization: API_KEY,
      },
    });

    const data = await response.json();

    if (data.error || typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }

    successCallback(data.data);
  } catch (err) {
    console.log("error: ", err);
  }
};

export const addOperation = async (task, operation, successCallback) => {
  try {
      const response = await fetch(`${API_URL}/tasks/${task.id}/operations`, {
          method: "POST",
          headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json"},

          body: JSON.stringify(operation),
      })

      const data = await response.json();
      if (data.error || typeof successCallback !== "function") {
          throw new Error("Błąd!");
      }
      successCallback(data.data);
  }
    catch (err) {
        console.log("error: ", err);
    }
}

export const updateOperation = async (task, successCallback) => {
//   todo
}

export const deleteOperation = async (task, successCallback) => {
//   todo
}