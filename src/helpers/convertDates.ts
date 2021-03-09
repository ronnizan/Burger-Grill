
export const formatDateToShowUser = (message:string) => {
  const arrOfMessage = message.split(" ")
  const date = new Date(arrOfMessage[0]).toLocaleDateString().replace(".", "/").replace('.', "/");
  console.log(arrOfMessage[1]) 
  let time = new Date(arrOfMessage[1]).getHours() + ":00";
  if (time === '0:00') {
    time = '12:00'
  }
  const guests = arrOfMessage[2];
  return `Looking for a table at ${date} ${time}, for ${guests} guests. `
}

export const formatDateForBookTableData = (message:string) => {
  const arrOfMessage = message.split(" ")
  let date = new Date(arrOfMessage[0]).toLocaleString().split(".").join(" ").split(',')[0]
  let time = new Date(arrOfMessage[1]).getHours();
  if (time === 0) {
    time = 12
  }
  const guests = arrOfMessage[2];
  return { date, time,guests}
}



// console.log(new Date(arr[1]).getHours() + ":00")


// show user:
// let date = new Date(arr[0]).toLocaleDateString().replace(".","/").replace('.',"/")
// let time= new Date(arr[1]).getHours() + ":00"

// data:

// let date = new Date(arr[0]).toLocaleString().split(".").join(" ")
// let time = new Date(arr[1]).getHours()
// 10 3 2021 12