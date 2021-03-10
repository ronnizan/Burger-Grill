
export const formatDateToShowUser = (message:string) => {
  const arrOfMessage = message.split(" ")
  const date = new Date(arrOfMessage[0]).toLocaleDateString().replace(".", "/").replace('.', "/");
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
