export function getAllStudents() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/api/student/findByPage`, true);
    // 真实网络请求可以不需要加请求地址baseURL前缀，在package.json加proxy
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

export function getAllStudentsByPageAndLimit(page = 1, limit = 10) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/api/student/findByPage?page=${page}&limit=${limit}`, true);
    // 真实网络请求可以不需要加请求地址baseURL前缀，在package.json加proxy
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


export function getStudentsPageByKeywordAndSex({ page = 1, limit = 10, keyword = "", sex = "" } = {}) {
  console.log(keyword, sex);
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/api/student/findByPage?page=${page}&limit=${limit}`, true);
    // 真实网络请求可以不需要加请求地址baseURL前缀，在package.json加proxy
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
