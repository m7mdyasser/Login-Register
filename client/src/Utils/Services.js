export const baseUrl = "http://localhost:3000/api"

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body,
  })


  const data = await response.json()

  if (!response.ok) {

    let message;
    
// يوجد خطا هنا الحل بعد الانتهاء 
    if (data?.message) {
      console.log(2);
      message = data.message;
    } else {
      message = data
    }

    return { error: true, message }
  }

  return data
}