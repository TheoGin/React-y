export function fetchStudent() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:8080/api/student/findByPage`, true);
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

/*
export function fetchStudentByPageAndLimit(page, limit) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:8080/api/student/findByPage?page=${page}&limit=${limit}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText).data;
      console.log(data.data);
      return data.data;
    }
  };
  xhr.send();
}*/
