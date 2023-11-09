import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */
export const getTasks = async (successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
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

/**
 * Add new task
 * @param {object} task - Object representing task
 * @param {function} successCallback - Function that saves incoming data
 */
export const addTask = async (task, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY,
      },
      body: JSON.stringify(task)
    });

    const data = await response.json();

    if (data.error || typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }

    successCallback(data.data);
  } catch (err) {
    console.log("error: ", err);
  }
}

export const updateTask = async (task, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY,
      },
      body: JSON.stringify(task)
    });
    const data = await response.json();
     if (data.error || typeof successCallback !== "function") {
       throw new Error("Błąd!");
     }
    successCallback(data.data);
  }
  catch (err) {
    console.log("error: ", err)
  }
}

export const deleteTask = async (task, successCallback) => {
try {
    const response = await fetch(`${API_URL}/tasks/${task.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
     if (data.error || typeof successCallback !== "function") {
       throw new Error("Błąd!");
     }
    successCallback(data.data);
    }

  catch (err) {
    console.log("error: ", err)
  }
}

