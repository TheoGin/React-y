export function getAllStudents() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/api/student/findByPage`, true);
    // xhr.open("GET", `/api/student/findByPage`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText).data;
            resolve(data.data);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error(`HTTP Error: ${xhr.status}`));
        }
      }
    };
    xhr.onerror = () => {
      reject(new Error('Network Error'));
    };
    xhr.send();
  });
}

export function getAllStudentsByPageAndLimit(page, limit) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/api/student/findByPage?page=${page}&limit=${limit}`, true);
    // xhr.open("GET", `/api/student/findByPage?page=${page}&limit=${limit}`, true);
    console.log(`http://localhost:3000/api/student/findByPage?page=${page}&limit=${limit}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText).data;
            resolve(data);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error(`HTTP Error: ${xhr.status}`));
        }
      }
    };
    xhr.onerror = () => {
      reject(new Error('Network Error'));
    };
    xhr.send();
  });
}
